import { ArrowUpRight } from 'lucide-react';
import { Section } from './section';
import { SpotlightCard } from './spotlight-card';
import { Reveal } from './reveal';
import { projects } from '@/data/resume';

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Featured Work"
      title="Selected projects with measurable impact."
      description="Production work I'm most proud of — performance wins, real-time systems, and reusable platforms. Each project is shipped in a real team, in a real codebase."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((p, idx) => (
          <Reveal key={p.name} delay={Math.min(idx * 0.05, 0.18)}>
            <SpotlightCard
              as="article"
              className="flex h-full flex-col gap-5 rounded-2xl border border-border bg-bg-subtle/40 p-6 md:p-7"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-[11px] text-fg-subtle">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-wider text-accent">
                      {p.org}
                    </p>
                    <h3 className="mt-1 text-lg font-semibold tracking-tight text-fg md:text-xl">
                      {p.name}
                    </h3>
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-fg-subtle transition group-hover/spotlight:-translate-y-0.5 group-hover/spotlight:translate-x-0.5 group-hover/spotlight:text-fg" />
              </div>

              <p className="text-sm text-fg-muted md:text-[15px]">{p.description}</p>

              <ul className="space-y-1.5">
                {p.outcomes.map((o) => (
                  <li
                    key={o}
                    className="flex items-start gap-2 text-sm text-fg md:text-[15px]"
                  >
                    <span aria-hidden className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    <span>{o}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-md border border-border bg-bg px-2 py-1 font-mono text-[11px] text-fg-muted"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </SpotlightCard>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
