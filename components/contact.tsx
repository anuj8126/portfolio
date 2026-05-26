import { ArrowUpRight, Github, Linkedin, Mail, Phone } from 'lucide-react';
import { Section } from './section';
import { SpotlightCard } from './spotlight-card';
import { Reveal } from './reveal';
import { profile } from '@/data/resume';

const channels = [
  {
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
  },
  {
    label: 'Phone',
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s/g, '')}`,
    icon: Phone,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/anuj-kumar-srivastav',
    href: profile.links.linkedin,
    icon: Linkedin,
  },
  {
    label: 'GitHub',
    value: 'github.com/anuj8126',
    href: profile.links.github,
    icon: Github,
  },
];

export function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's build something."
      description="Open to senior frontend, full stack, product engineer, and tech lead roles — remote across India, US, and UK time zones. I usually reply within 24 hours."
    >
      <div className="grid gap-3 sm:grid-cols-2">
        {channels.map(({ label, value, href, icon: Icon }, idx) => (
          <Reveal key={label} delay={Math.min(idx * 0.04, 0.16)}>
            <SpotlightCard
              as="a"
              className="flex h-full items-center justify-between gap-4 rounded-2xl border border-border bg-bg-subtle/40 p-5 transition hover:border-border-strong"
              {...{
                href,
                target: href.startsWith('http') ? '_blank' : undefined,
                rel: href.startsWith('http') ? 'noreferrer' : undefined,
              }}
            >
              <div className="flex items-center gap-4">
                <span className="grid h-10 w-10 place-items-center rounded-md border border-border bg-bg text-fg-muted">
                  <Icon className="h-4 w-4" />
                </span>
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-wider text-accent">
                    {label}
                  </p>
                  <p className="text-sm text-fg md:text-[15px]">{value}</p>
                </div>
              </div>
              <ArrowUpRight className="h-4 w-4 text-fg-subtle transition group-hover/spotlight:-translate-y-0.5 group-hover/spotlight:translate-x-0.5 group-hover/spotlight:text-fg" />
            </SpotlightCard>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.18}>
        <div className="mt-10 rounded-2xl border border-border bg-gradient-to-br from-bg-subtle/60 via-bg-subtle/20 to-transparent p-8 md:p-10">
          <p className="text-balance text-lg text-fg md:text-xl">
            Prefer email? Drop a line at{' '}
            <a
              href={`mailto:${profile.email}`}
              className="font-medium text-accent underline-offset-4 hover:underline"
            >
              {profile.email}
            </a>
            . Happy to chat about senior frontend, product engineer, or tech lead opportunities.
          </p>
        </div>
      </Reveal>
    </Section>
  );
}
