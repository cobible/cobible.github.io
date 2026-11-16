import { ExternalLink } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { SIDELOADLY_URL, t, type Lang } from "@/lib/content";

export function SideloadInstructions({ lang }: { lang: Lang }) {
  const c = t[lang].sideload;
  const guides = [
    { id: "windows", title: c.windowsTitle, steps: c.windows },
    { id: "mac", title: c.macTitle, steps: c.mac },
  ];

  return (
    <div className="mt-5 border-t border-border pt-4">
      <a href={SIDELOADLY_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-start gap-2 text-sm font-semibold text-primary underline-offset-4 hover:underline">
        <ExternalLink aria-hidden="true" className="mt-0.5 size-4 shrink-0" />
        {c.link}
      </a>
      <Accordion type="single" collapsible className="mt-2">
        {guides.map((guide) => (
          <AccordionItem key={guide.id} value={guide.id}>
            <AccordionTrigger className="gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">{guide.title}</AccordionTrigger>
            <AccordionContent className="motion-reduce:transition-none">
              <ol className="space-y-3">
                {[...guide.steps, ...c.common].map((step, index) => (
                  <li key={step} className="flex gap-3">
                    <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-secondary text-xs font-bold text-secondary-foreground">{index + 1}</span>
                    <span className="min-w-0 leading-relaxed">{step}</span>
                  </li>
                ))}
              </ol>
              <Button asChild variant="link" className="mt-3 h-auto whitespace-normal px-0 text-left">
                <a href={`${SIDELOADLY_URL}faq`} target="_blank" rel="noopener noreferrer"><ExternalLink aria-hidden="true" />{c.troubleshooting}</a>
              </Button>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <aside aria-labelledby={`ios-updates-${lang}`} className="mt-5 border-l-2 border-border pl-4 text-sm leading-relaxed text-muted-foreground">
        <h4 id={`ios-updates-${lang}`} className="font-semibold text-foreground">{c.updatesTitle}</h4>
        <ul className="mt-3 space-y-3">
          {c.updates.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </aside>
    </div>
  );
}