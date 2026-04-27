// Check subscription status from Stripe and sync to subscribers table
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@14.21.0";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const stripeKey = Deno.env.get("STRIPE_SECRET_KEY");
    if (!stripeKey) throw new Error("STRIPE_SECRET_KEY not configured");

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_ANON_KEY") ?? "",
    );
    const authHeader = req.headers.get("Authorization");
    if (!authHeader) throw new Error("No authorization header");
    const { data: userData, error: userError } = await supabase.auth.getUser(
      authHeader.replace("Bearer ", ""),
    );
    if (userError || !userData.user?.email) throw new Error("User not authenticated");
    const user = userData.user;

    const adminClient = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",
    );

    const stripe = new Stripe(stripeKey, { apiVersion: "2024-11-20.acacia" });
    const customers = await stripe.customers.list({ email: user.email!, limit: 1 });

    if (customers.data.length === 0) {
      await adminClient.from("subscribers").upsert(
        {
          user_id: user.id,
          email: user.email!,
          subscribed: false,
          subscription_tier: null,
          subscription_end: null,
          trial_end: null,
        },
        { onConflict: "email" },
      );
      return new Response(JSON.stringify({ subscribed: false }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const customerId = customers.data[0].id;
    const subs = await stripe.subscriptions.list({
      customer: customerId,
      status: "all",
      limit: 5,
    });
    const active = subs.data.find((s) => ["active", "trialing"].includes(s.status));

    let subscribed = false;
    let tier: string | null = null;
    let subEnd: string | null = null;
    let trialEnd: string | null = null;

    if (active) {
      subscribed = true;
      tier = (active.metadata?.tier as string) || null;
      subEnd = new Date(active.current_period_end * 1000).toISOString();
      trialEnd = active.trial_end ? new Date(active.trial_end * 1000).toISOString() : null;
    }

    await adminClient.from("subscribers").upsert(
      {
        user_id: user.id,
        email: user.email!,
        stripe_customer_id: customerId,
        subscribed,
        subscription_tier: tier,
        subscription_end: subEnd,
        trial_end: trialEnd,
      },
      { onConflict: "email" },
    );

    return new Response(
      JSON.stringify({ subscribed, tier, subscription_end: subEnd, trial_end: trialEnd }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 200 },
    );
  } catch (error) {
    const msg = error instanceof Error ? error.message : "Unknown error";
    console.error("check-subscription error:", msg);
    return new Response(JSON.stringify({ error: msg }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
