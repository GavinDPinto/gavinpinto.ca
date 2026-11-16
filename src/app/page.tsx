import type { CSSProperties } from "react";
import Logo from "./components/Logo";
import ThemeToggle from "./components/ThemeToggle";
import { site, now, work, school, skills, type Entry } from "./site";

// Stagger index for the fade-up on load
const step = (i: number) => ({ "--i": i }) as CSSProperties;

function EntryList({ entries }: { entries: Entry[] }) {
  return (
    <ul className="border-b border-line">
      {entries.map((entry) => (
        <li
          key={`${entry.name}-${entry.role}`}
          className="border-t border-line py-4"
        >
          <div className="flex items-baseline justify-between gap-4">
            <h3 className="font-medium text-fg">{entry.name}</h3>
            {entry.date && (
              <p className="shrink-0 font-mono text-[12.5px] text-muted">
                {entry.date}
              </p>
            )}
          </div>
          <p className="text-muted">{entry.role}</p>
          {entry.summary && <p className="mt-2">{entry.summary}</p>}
        </li>
      ))}
    </ul>
  );
}

function Section({
  title,
  index,
  children,
}: {
  title: string;
  index: number;
  children: React.ReactNode;
}) {
  return (
    <section className="rise" style={step(index)}>
      <h2 className="mb-3.5 font-serif text-xl leading-snug text-fg">
        {title}
      </h2>
      {children}
    </section>
  );
}

export default function Home() {
  return (
    <>
      <ThemeToggle />
      <div className="mx-auto max-w-[1120px] px-5 sm:px-6 lg:grid lg:grid-cols-[5fr_7fr] lg:gap-20">
        <header className="pb-2 pt-20 lg:sticky lg:top-0 lg:flex lg:h-screen lg:flex-col lg:justify-center lg:py-0">
          <div className="text-fg">
            <Logo />
          </div>
          <h1
            className="rise mt-7 font-serif text-4xl leading-[1.1] tracking-[-0.02em] text-fg sm:text-[44px]"
            style={step(0)}
          >
            Hey, I&apos;m Gavin.
          </h1>
          <p
            className="rise mt-5 max-w-md font-serif text-lg leading-normal sm:text-xl sm:leading-normal"
            style={step(1)}
          >
            I study computer science at the University of Waterloo and I&apos;m
            based in Toronto. I&apos;m most interested in infrastructure, and
            right now I work on it at WATcloud.
          </p>
          <p
            className="rise mt-4 max-w-md font-serif text-lg leading-normal sm:text-xl sm:leading-normal"
            style={step(2)}
          >
            I&apos;m always open to working with people.{" "}
            <a className="link whitespace-nowrap" href={`mailto:${site.email}`}>
              Email me
            </a>
            .
          </p>
          <nav
            className="rise mt-8"
            style={step(3)}
            aria-label="Where to find Gavin"
          >
            <p className="text-muted">Find me here:</p>
            <ul className="mt-1.5 flex flex-wrap gap-x-5 gap-y-1">
              <li>
                <a
                  className="link"
                  href={site.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  className="link"
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a className="link" href={`mailto:${site.email}`}>
                  Email
                </a>
              </li>
            </ul>
          </nav>
        </header>

        <main className="space-y-14 py-14 lg:py-28">
          <Section title="Now" index={2}>
            <EntryList entries={now} />
          </Section>

          <Section title="Work" index={3}>
            <EntryList entries={work} />
          </Section>

          <Section title="School" index={4}>
            <EntryList entries={school} />
          </Section>

          <Section title="Skills" index={5}>
            <dl className="border-b border-line">
              {skills.map((group) => (
                <div
                  key={group.label}
                  className="border-t border-line py-4 sm:grid sm:grid-cols-[170px_1fr] sm:gap-4"
                >
                  <dt className="text-muted">{group.label}</dt>
                  <dd className="mt-1 text-fg sm:mt-0">{group.items}</dd>
                </div>
              ))}
            </dl>
          </Section>

          <footer className="rise text-[13px] text-muted" style={step(6)}>
            © 2026 Gavin Pinto
          </footer>
        </main>
      </div>
    </>
  );
}
