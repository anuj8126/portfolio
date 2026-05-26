import { Section } from './section';
import { highlights, profile } from '@/data/resume';

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="Frontend engineer with a product mindset."
      description={profile.summary}
    >
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
        {highlights.map((h) => (
          <div
            key={h.label}
            className="group rounded-xl border border-border bg-bg-subtle/40 p-5 transition hover:border-border-strong hover:bg-bg-subtle"
          >
            <div className="font-mono text-2xl font-semibold tracking-tight text-fg md:text-3xl">
              {h.metric}
            </div>
            <div className="mt-1 text-sm font-medium text-fg">{h.label}</div>
            <div className="mt-1 text-xs text-fg-subtle md:text-sm">{h.detail}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}
