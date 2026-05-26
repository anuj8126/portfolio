import { Section } from './section';
import { SpotlightCard } from './spotlight-card';
import { Reveal } from './reveal';
import { experience } from '@/data/resume';

export function ExperienceSection() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="8+ years across SaaS, fintech, healthcare, PropTech & e-commerce."
      description="A timeline of teams I've shipped with and the impact delivered. Each role lists the stack and the outcomes that matter to a hiring manager."
    >
      <ol className="relative space-y-6 md:space-y-8">
        {experience.map((role, idx) => {
          const isCurrent = idx === 0;
          return (
            <Reveal as="li" key={`${role.company}-${idx}`} delay={Math.min(idx * 0.04, 0.2)}>
              <SpotlightCard className="rounded-2xl border border-border bg-bg-subtle/40 p-6 md:p-7">
                <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-lg font-semibold tracking-tight text-fg md:text-xl">
                      {role.company}
                      <span className="text-fg-subtle"> · {role.context}</span>
                    </h3>
                    {isCurrent && (
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-emerald-400">
                        <span className="relative flex h-1.5 w-1.5">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        </span>
                        Now
                      </span>
                    )}
                  </div>
                  <p className="font-mono text-xs uppercase tracking-wider text-fg-subtle md:text-right">
                    {role.period}
                  </p>
                </div>
                <p className="mt-1 text-sm text-fg-muted">{role.role}</p>

                <ul className="mt-5 space-y-2 text-sm text-fg-muted md:text-[15px]">
                  {role.highlights.map((h, i) => (
                    <li key={i} className="flex gap-3">
                      <span
                        aria-hidden
                        className="mt-2 h-1 w-1 shrink-0 rounded-full bg-fg-subtle"
                      />
                      <span className="text-balance">{h}</span>
                    </li>
                  ))}
                </ul>

                {role.stack && role.stack.length > 0 && (
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {role.stack.map((s) => (
                      <span
                        key={s}
                        className="rounded-md border border-border bg-bg px-2 py-1 font-mono text-[11px] text-fg-muted transition hover:border-border-strong hover:text-fg"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                )}
              </SpotlightCard>
            </Reveal>
          );
        })}
      </ol>
    </Section>
  );
}
