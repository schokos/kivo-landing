import { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { MarketingHeader } from "./MarketingHeader";
import { MarketingFooter } from "./MarketingFooter";

type LegalLayoutProps = {
  title: string;
  lastUpdated?: string;
  children: ReactNode;
};

export function LegalLayout({ title, lastUpdated, children }: LegalLayoutProps) {
  const { i18n } = useTranslation();
  const isDe = (i18n.resolvedLanguage || i18n.language || "en").startsWith("de");
  const stand = isDe ? "Stand" : "Last updated";
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <MarketingHeader />
      <main className="flex-1 py-16">
        <article className="mx-auto max-w-3xl px-6">
          <header className="mb-10 border-b border-border pb-6">
            <h1 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {title}
            </h1>
            {lastUpdated && (
              <p className="mt-2 text-sm text-muted-foreground">
                {stand}: {lastUpdated}
              </p>
            )}
          </header>
          <div className="prose-legal space-y-6 text-foreground [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:mt-8 [&_h2]:mb-3 [&_h3]:font-display [&_h3]:text-base [&_h3]:font-semibold [&_h3]:mt-6 [&_h3]:mb-2 [&_p]:text-sm [&_p]:leading-relaxed [&_p]:text-muted-foreground [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:text-sm [&_ul]:text-muted-foreground [&_li]:mt-1 [&_strong]:text-foreground">
            {children}
          </div>
        </article>
      </main>
      <MarketingFooter />
    </div>
  );
}
