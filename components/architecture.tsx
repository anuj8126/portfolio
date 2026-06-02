import { Compass, Gauge, Layers, Network, type LucideIcon } from 'lucide-react';
import { Section } from './section';
import { SpotlightCard } from './spotlight-card';
import { Reveal } from './reveal';
import { architectureHighlights, type ArchitectureHighlight } from '@/data/resume';

const ICONS: Record<ArchitectureHighlight['icon'], LucideIcon> = {
  layers: Layers,
  compass: Compass,
  network: Network,
  gauge: Gauge,
};

export function Architecture() {
  return (
    <Section
      id="architecture"
      eyebrow="Frontend Architecture"
      title="How I design frontend at scale."
      description="Four pillars I bring to every senior engagement — scalable patterns, codified standards, robust microservice integration, and performance guardrails wired into CI."
    >
      <div className="grid gap-3 md:grid-cols-2">
        {architectureHighlights.map((item, idx) => {
          const Icon = ICONS[item.icon];
          return (
            <Reveal key={item.title} delay={Math.min(idx * 0.05, 0.18)}>
              <SpotlightCard className="flex h-full flex-col gap-4 rounded-2xl border border-border bg-bg-subtle/40 p-6 md:p-7">
                <div className="flex items-start gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-border bg-bg text-accent">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-[11px] text-fg-subtle">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <h3 className="text-lg font-semibold tracking-tight text-fg md:text-xl">
                      {item.title}
                    </h3>
                  </div>
                </div>

                <p className="text-sm text-fg-muted md:text-[15px]">{item.description}</p>

                <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-border bg-bg px-2 py-1 font-mono text-[11px] text-fg-muted transition hover:border-border-strong hover:text-fg"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </SpotlightCard>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
