import { Link } from "@tanstack/react-router";
import icon from "@/assets/icon.png.asset.json";
import { platforms, PRIVACY_URL, shots, t, verseShots, type Lang } from "@/lib/content";

function Phone({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <div className={`overflow-hidden rounded-[2rem] border-[6px] border-foreground bg-foreground shadow-phone ${className}`}>
      <img src={src} alt={alt} loading="lazy" className="block h-auto w-full rounded-[1.5rem]" />
    </div>
  );
}

export function Landing({ lang }: { lang: Lang }) {
  const c = t[lang];
  const sh = shots[lang];
  const verse = verseShots[lang];
  const other = lang === "en" ? "/ru" : "/";
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-20 border-b border-border bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
          <a href="#top" className="flex items-center gap-2 font-display text-xl font-semibold">
            <img src={icon.url} alt="CoBible logo" className="h-9 w-9" /> CoBible
          </a>
          <nav className="flex items-center gap-5 text-sm">
            <a href="#features" className="hidden hover:text-primary sm:inline">{c.nav.features}</a>
            <a href="#install" className="hidden hover:text-primary sm:inline">{c.nav.install}</a>
            <a href="#faq" className="hidden hover:text-primary sm:inline">{c.nav.faq}</a>
            <Link to={other} className="rounded-full border border-border px-3 py-1 font-medium hover:border-primary hover:text-primary">{c.langSwitch}</Link>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-[1.1fr_1fr] md:py-24">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">{c.eyebrow}</p>
            <h1 className="font-display text-4xl font-semibold leading-[1.08] md:text-6xl">{c.h1}</h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">{c.lead}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#install" className="rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-soft hover:opacity-90">{c.ctaInstall}</a>
              <a href="#features" className="rounded-full border border-foreground/20 px-6 py-3 font-semibold hover:border-foreground">{c.ctaFeatures}</a>
            </div>
            <ul className="mt-8 flex flex-wrap gap-2 text-xs text-muted-foreground">
              {platforms.map((p) => <li key={p.id} className="rounded-full bg-secondary px-3 py-1">{p.name}</li>)}
            </ul>
          </div>
          <div className="relative mx-auto flex w-full max-w-md justify-center">
            <Phone src={sh.home} alt="CoBible home screen" className="w-[52%] -rotate-3" />
            <Phone src={sh.qa} alt="CoBible AI chapter analysis" className="-ml-10 mt-12 w-[52%] rotate-3" />
          </div>
        </section>

        <section id="features" className="border-t border-border bg-card py-20">
          <div className="mx-auto max-w-6xl px-5">
            <h2 className="font-display text-3xl font-semibold md:text-4xl">{c.featuresTitle}</h2>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {c.features.map((f) => (
                <article key={f.t} className="flex flex-col rounded-3xl border border-border bg-background p-6">
                  <div className="mb-6 flex h-64 items-start justify-center overflow-hidden rounded-2xl bg-secondary pt-6">
                    {f.img === "book" ? (
                      verse.map((src, i) => (
                        <img key={src} src={src} alt={`${f.t} — CoBible`} loading="lazy" className={`w-28 rounded-xl shadow-phone ${i > 0 ? "-ml-5" : ""}`} />
                      ))
                    ) : (
                      <img src={sh[f.img]} alt={f.t} loading="lazy" className="w-40 rounded-xl shadow-phone" />
                    )}
                  </div>
                  <h3 className="font-display text-xl font-semibold">{f.t}</h3>
                  <p className="mt-2 text-muted-foreground">{f.d}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="install" className="py-20">
          <div className="mx-auto max-w-6xl px-5">
            <h2 className="font-display text-3xl font-semibold md:text-4xl">{c.installTitle}</h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">{c.installLead}</p>
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {platforms.map((p) => (
                <div key={p.id} className="rounded-3xl border border-border bg-card p-6">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-display text-xl font-semibold">{p.name}</h3>
                      <p className="text-sm text-muted-foreground">{p.sub[lang]}</p>
                    </div>
                    <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">{c.soon}</span>
                  </div>
                  <ol className="mt-5 space-y-2 text-sm">
                    {c.steps[p.id].map((s, i) => (
                      <li key={s} className="flex gap-3">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">{i + 1}</span>
                        <span>{s}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="border-t border-border bg-card py-20">
          <div className="mx-auto max-w-3xl px-5">
            <h2 className="font-display text-3xl font-semibold md:text-4xl">{c.faqTitle}</h2>
            <div className="mt-8 divide-y divide-border">
              {c.faq.map((f) => (
                <details key={f.q} className="group py-5">
                  <summary className="cursor-pointer list-none font-semibold marker:hidden">{f.q}</summary>
                  <p className="mt-3 text-muted-foreground">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-8">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 text-sm text-muted-foreground">
          <span>© {new Date().getFullYear()} CoBible</span>
          <a href={PRIVACY_URL} target="_blank" rel="noopener" className="hover:text-primary">{c.footer}</a>
        </div>
      </footer>
    </div>
  );
}
