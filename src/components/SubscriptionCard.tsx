import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { supabase } from "@/integrations/supabase/client";
import { useEffect, useState } from "react";
import { Crown, Loader2, Settings } from "lucide-react";
import { toast } from "sonner";
import { Link } from "react-router-dom";
import { format } from "date-fns";

interface SubStatus {
  subscribed: boolean;
  tier?: string | null;
  subscription_end?: string | null;
  trial_end?: string | null;
}

export function SubscriptionCard() {
  const [status, setStatus] = useState<SubStatus | null>(null);
  const [loading, setLoading] = useState(true);
  const [portalLoading, setPortalLoading] = useState(false);

  const refresh = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke("check-subscription");
      if (error) throw error;
      setStatus(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    refresh();
  }, []);

  const openPortal = async () => {
    setPortalLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke("customer-portal");
      if (error) throw error;
      if (data?.url) window.open(data.url, "_blank");
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Konnte Kundenportal nicht öffnen");
    } finally {
      setPortalLoading(false);
    }
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-3">
        <CardTitle className="font-display text-lg flex items-center gap-2">
          <Crown className="h-4 w-4 text-primary" /> Abo-Status
        </CardTitle>
        {status?.subscribed && (
          <Button variant="ghost" size="sm" onClick={openPortal} disabled={portalLoading} className="gap-1">
            {portalLoading ? <Loader2 className="h-3 w-3 animate-spin" /> : <Settings className="h-3 w-3" />}
            Verwalten
          </Button>
        )}
      </CardHeader>
      <CardContent>
        {loading ? (
          <div className="h-12 rounded-lg bg-muted animate-pulse" />
        ) : status?.subscribed ? (
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Badge>{status.tier?.toUpperCase() || "AKTIV"}</Badge>
              {status.trial_end && new Date(status.trial_end) > new Date() && (
                <Badge variant="outline">
                  Trial bis {format(new Date(status.trial_end), "dd.MM.yyyy")}
                </Badge>
              )}
            </div>
            {status.subscription_end && (
              <p className="text-xs text-muted-foreground">
                Verlängert sich am {format(new Date(status.subscription_end), "dd.MM.yyyy")}
              </p>
            )}
          </div>
        ) : (
          <div className="flex items-center justify-between gap-3">
            <p className="text-sm text-muted-foreground">Du nutzt aktuell den kostenlosen Plan.</p>
            <Button size="sm" asChild>
              <Link to="/pricing">Upgrade</Link>
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
