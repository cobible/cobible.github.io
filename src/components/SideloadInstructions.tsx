import { ExternalLink } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { SIDELOADLY_URL, t, type Lang } from "@/lib/content";

const ILOADER_URL = "https://iloadapp.com/";

function StepList({ steps }: { steps: readonly string[] }) {
  return (
    <ol className="space-y-3">
      {steps.map((step, i) => (
        <li key={i} className="flex gap-3">
          <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-secondary text-xs font-bold text-secondary-foreground">
            {i + 1}
          </span>
          <span className="min-w-0 leading-relaxed">{step}</span>
        </li>
      ))}
    </ol>
  );
}

export function SideloadInstructions({ lang }: { lang: Lang }) {
  const c = t[lang].sideload;

  const sideloadlyGuides = [
    { id: "windows", title: c.windowsTitle, steps: [...c.windows, ...c.common] },
    { id: "mac", title: c.macTitle, steps: [...c.mac, ...c.common] },
  ];

  return (
    <div className="mt-5 space-y-5 border-t border-border pt-4">

      {/* ── SideStore (recommended) ── */}
      <div className="rounded-xl border border-border bg-secondary/30 p-4">
        <p className="mb-3 font-semibold">{c.sidestoreTitle}</p>
        <Accordion type="single" collapsible>

          <AccordionItem value="sidestore-install">
            <AccordionTrigger className="gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
              {c.sidestoreInstallTitle}
            </AccordionTrigger>
            <AccordionContent className="motion-reduce:transition-none">
              <StepList steps={c.sidestoreInstall} />
              <Button asChild variant="link" className="mt-3 h-auto whitespace-normal px-0 text-left">
                <a href={ILOADER_URL} target="_blank" rel="noopener noreferrer">
                  <ExternalLink aria-hidden="true" className="mr-1 inline size-4" />
                  iloadapp.com
                </a>
              </Button>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="sidestore-setup">
            <AccordionTrigger className="gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
              {c.sidestoreSetupTitle}
            </AccordionTrigger>
            <AccordionContent className="motion-reduce:transition-none">
              <StepList steps={c.sidestoreSetup} />
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="sidestore-daily">
            <AccordionTrigger className="gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
              {c.sidestoreDailyTitle}
            </AccordionTrigger>
            <AccordionContent className="motion-reduce:transition-none">
              <StepList steps={c.sidestoreDaily} />
            </AccordionContent>
          </AccordionItem>

        </Accordion>
      </div>

      {/* ── Sideloadly divider ── */}
      <div className="flex items-center gap-3">
        <div className="h-px flex-1 bg-border" />
        <span className="shrink-0 text-sm text-muted-foreground">{c.sideloadlyDivider}</span>
        <div className="h-px flex-1 bg-border" />
      </div>

      {/* ── Sideloadly ── */}
      <div>
        <a
          href={SIDELOADLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-start gap-2 text-sm font-semibold text-primary underline-offset-4 hover:underline"
        >
          <ExternalLink aria-hidden="true" className="mt-0.5 size-4 shrink-0" />
          {c.link}
        </a>
        <Accordion type="single" collapsible className="mt-2">
          {sideloadlyGuides.map((guide) => (
            <AccordionItem key={guide.id} value={guide.id}>
              <AccordionTrigger className="gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                {guide.title}
              </AccordionTrigger>
              <AccordionContent className="motion-reduce:transition-none">
                <StepList steps={guide.steps} />
                <Button asChild variant="link" className="mt-3 h-auto whitespace-normal px-0 text-left">
                  <a href={`${SIDELOADLY_URL}faq`} target="_blank" rel="noopener noreferrer">
                    <ExternalLink aria-hidden="true" />
                    {c.troubleshooting}
                  </a>
                </Button>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <aside
          aria-labelledby={`ios-updates-${lang}`}
          className="mt-5 border-l-2 border-border pl-4 text-sm leading-relaxed text-muted-foreground"
        >
          <h4 id={`ios-updates-${lang}`} className="font-semibold text-foreground">
            {c.updatesTitle}
          </h4>
          <ul className="mt-3 space-y-3">
            {c.updates.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </aside>
      </div>
    </div>
  );
}
