import { Section } from './section';
import { education, skills } from '@/data/resume';

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Toolbox"
      title="Tools I reach for daily."
      description="A pragmatic, performance-first stack — picked for shipping reliable, scalable products."
    >
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group) => (
          <div
            key={group.label}
            className="rounded-xl border border-border bg-bg-subtle/40 p-5"
          >
            <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-accent">
              {group.label}
            </h3>
            <ul className="mt-3 flex flex-wrap gap-1.5">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-md border border-border bg-bg px-2 py-1 text-[12px] text-fg-muted"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-xl border border-border bg-bg-subtle/40 p-6">
        <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-accent">Education</h3>
        <p className="mt-2 text-base text-fg">{education.degree}</p>
        <p className="text-sm text-fg-muted">
          {education.school} · {education.location}
        </p>
      </div>
    </Section>
  );
}
