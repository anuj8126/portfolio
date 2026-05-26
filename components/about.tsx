import { Briefcase, Clock, Code2, Sparkles } from 'lucide-react';
import { Section } from './section';
import { SpotlightCard } from './spotlight-card';
import { Reveal } from './reveal';
import { AnimatedCounter } from './animated-counter';
import { experience, highlights, philosophy, profile } from '@/data/resume';

const currentRole = experience[0];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="Frontend-heavy full stack product engineer."
      description={profile.summary}
    >
      <div className="grid grid-cols-1 gap-3 md:grid-cols-6">
        <Reveal className="md:col-span-4" delay={0}>
          <SpotlightCard className="flex h-full flex-col gap-4 rounded-2xl border border-border bg-bg-subtle/40 p-6 md:p-7">
            <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.18em] text-accent">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Now · {currentRole.period}
            </div>
            <div>
              <p className="flex items-center gap-2 text-sm text-fg-muted">
                <Briefcase className="h-3.5 w-3.5" />
                {currentRole.role}
              </p>
              <h3 className="mt-1 text-2xl font-semibold tracking-tight text-fg md:text-3xl">
                {currentRole.company}
                <span className="text-fg-subtle"> · {currentRole.context}</span>
              </h3>
              <p className="mt-2 max-w-xl text-sm text-fg-muted md:text-[15px]">
                Shipping a SaaS security platform redesign — reusable component library,
                config-driven connector forms, and aggressive performance work (16 MB → 6 MB bundle).
              </p>
            </div>
            <div className="mt-auto flex flex-wrap gap-1.5">
              {(currentRole.stack ?? []).slice(0, 6).map((s) => (
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

        <Reveal className="md:col-span-2" delay={0.05}>
          <SpotlightCard className="flex h-full flex-col gap-4 rounded-2xl border border-border bg-bg-subtle/40 p-6">
            <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.18em] text-accent">
              <Clock className="h-3.5 w-3.5" />
              Remote
            </div>
            <p className="text-base text-fg md:text-lg">
              Open to <span className="font-medium">India</span>,{' '}
              <span className="font-medium">US</span>, and{' '}
              <span className="font-medium">UK</span> time zones.
            </p>
            <ul className="mt-auto space-y-1 text-xs text-fg-subtle">
              <li className="flex justify-between">
                <span>IST</span>
                <span className="font-mono text-fg-muted">Bengaluru</span>
              </li>
              <li className="flex justify-between">
                <span>GMT</span>
                <span className="font-mono text-fg-muted">+5h 30m overlap</span>
              </li>
              <li className="flex justify-between">
                <span>PT</span>
                <span className="font-mono text-fg-muted">+12h 30m overlap</span>
              </li>
            </ul>
          </SpotlightCard>
        </Reveal>

        {highlights.slice(0, 3).map((h, i) => (
          <Reveal key={h.label} className="md:col-span-2" delay={0.1 + i * 0.04}>
            <SpotlightCard className="flex h-full flex-col gap-2 rounded-2xl border border-border bg-bg-subtle/40 p-6">
              <div className="font-mono text-3xl font-semibold tracking-tight text-fg md:text-4xl">
                <AnimatedCounter
                  value={h.value}
                  suffix={h.suffix}
                  decimals={h.decimals ?? 0}
                />
              </div>
              <div className="text-sm font-medium text-fg">{h.label}</div>
              <div className="text-xs text-fg-subtle md:text-sm">{h.detail}</div>
            </SpotlightCard>
          </Reveal>
        ))}

        <Reveal className="md:col-span-2" delay={0.22}>
          <SpotlightCard className="flex h-full flex-col gap-3 rounded-2xl border border-border bg-bg-subtle/40 p-6">
            <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.18em] text-accent">
              <Code2 className="h-3.5 w-3.5" />
              By the numbers
            </div>
            <div className="grid grid-cols-2 gap-4">
              {highlights.slice(3, 6).map((h) => (
                <div key={h.label}>
                  <div className="font-mono text-xl font-semibold text-fg md:text-2xl">
                    <AnimatedCounter
                      value={h.value}
                      suffix={h.suffix}
                      decimals={h.decimals ?? 0}
                    />
                  </div>
                  <div className="text-xs text-fg-subtle">{h.label}</div>
                </div>
              ))}
            </div>
          </SpotlightCard>
        </Reveal>

        <Reveal className="md:col-span-4" delay={0.26}>
          <SpotlightCard className="flex h-full flex-col gap-4 rounded-2xl border border-border bg-bg-subtle/40 p-6">
            <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.18em] text-accent">
              <Sparkles className="h-3.5 w-3.5" />
              How I work
            </div>
            <ul className="space-y-2 text-sm text-fg-muted md:text-[15px]">
              {philosophy.map((line) => (
                <li key={line} className="flex gap-3">
                  <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  <span className="text-balance">{line}</span>
                </li>
              ))}
            </ul>
          </SpotlightCard>
        </Reveal>
      </div>
    </Section>
  );
}
