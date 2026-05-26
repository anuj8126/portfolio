import * as React from 'react';
import { Reveal } from './reveal';

type SectionProps = {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
};

export function Section({ id, eyebrow, title, description, children, className = '' }: SectionProps) {
  return (
    <section
      id={id}
      className={`scroll-mt-20 border-t border-border py-20 md:py-28 ${className}`}
    >
      <div className="container">
        <Reveal>
          <div className="mb-10 flex flex-col gap-3 md:mb-14">
            {eyebrow && (
              <span className="inline-flex w-fit items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-accent">
                <span aria-hidden className="h-px w-6 bg-accent/60" />
                {eyebrow}
              </span>
            )}
            <h2 className="text-3xl font-semibold tracking-tight text-fg md:text-4xl lg:text-[2.75rem]">
              {title}
            </h2>
            {description && (
              <p className="max-w-2xl text-balance text-base text-fg-muted md:text-lg">
                {description}
              </p>
            )}
          </div>
        </Reveal>
        {children}
      </div>
    </section>
  );
}
