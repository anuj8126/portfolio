import { Section } from './section';
import { experience } from '@/data/resume';

export function ExperienceSection() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="8+ years shipping for SaaS, fintech, healthcare & PropTech."
      description="A timeline of teams I've shipped with and the impact delivered. Click into any role for tech stack and key outcomes."
    >
      <ol className="relative space-y-10 border-l border-border pl-6 md:space-y-12 md:pl-8">
        {experience.map((role, idx) => (
          <li key={`${role.company}-${idx}`} className="relative">
            <span
              className="absolute -left-[33px] top-2 grid h-4 w-4 place-items-center md:-left-[37px]"
              aria-hidden
            >
              <span className="h-2 w-2 rounded-full bg-accent ring-4 ring-bg" />
            </span>

            <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
              <div>
                <h3 className="text-lg font-semibold text-fg md:text-xl">
                  {role.company}{' '}
                  <span className="text-fg-subtle">· {role.context}</span>
                </h3>
                <p className="text-sm text-fg-muted">{role.role}</p>
              </div>
              <p className="font-mono text-xs uppercase tracking-wider text-fg-subtle md:text-right">
                {role.period}
              </p>
            </div>

            <ul className="mt-4 space-y-2 text-sm text-fg-muted md:text-[15px]">
              {role.highlights.map((h, i) => (
                <li key={i} className="flex gap-3">
                  <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-fg-subtle" />
                  <span className="text-balance">{h}</span>
                </li>
              ))}
            </ul>

            {role.stack && role.stack.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-1.5">
                {role.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-md border border-border bg-bg-subtle/60 px-2 py-1 font-mono text-[11px] text-fg-muted"
                  >
                    {s}
                  </span>
                ))}
              </div>
            )}
          </li>
        ))}
      </ol>
    </Section>
  );
}
