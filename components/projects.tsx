import { ArrowUpRight } from 'lucide-react';
import { Section } from './section';
import { projects } from '@/data/resume';

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Featured Work"
      title="Selected projects with measurable impact."
      description="Snapshots of production work I'm most proud of — performance wins, real-time systems, and reusable platforms."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((p) => (
          <article
            key={p.name}
            className="group flex flex-col gap-4 rounded-xl border border-border bg-bg-subtle/40 p-6 transition hover:border-border-strong hover:bg-bg-subtle"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-wider text-accent">
                  {p.org}
                </p>
                <h3 className="mt-1 text-lg font-semibold text-fg md:text-xl">{p.name}</h3>
              </div>
              <ArrowUpRight className="h-4 w-4 shrink-0 text-fg-subtle transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-fg" />
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
          </article>
        ))}
      </div>
    </Section>
  );
}
