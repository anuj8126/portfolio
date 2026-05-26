'use client';

import * as React from 'react';
import { useReducedMotion } from 'framer-motion';

type Props = {
  roles: string[];
  typingMs?: number;
  pauseMs?: number;
  className?: string;
};

export function RoleRotator({ roles, typingMs = 55, pauseMs = 1500, className = '' }: Props) {
  const reduced = useReducedMotion();
  const [index, setIndex] = React.useState(0);
  const [shown, setShown] = React.useState(reduced ? roles[0] : '');
  const [phase, setPhase] = React.useState<'typing' | 'pausing' | 'erasing'>('typing');

  React.useEffect(() => {
    if (reduced) {
      setShown(roles[index]);
      const t = setTimeout(() => setIndex((i) => (i + 1) % roles.length), pauseMs + 1000);
      return () => clearTimeout(t);
    }

    const current = roles[index];

    if (phase === 'typing') {
      if (shown.length < current.length) {
        const t = setTimeout(() => setShown(current.slice(0, shown.length + 1)), typingMs);
        return () => clearTimeout(t);
      }
      const t = setTimeout(() => setPhase('pausing'), pauseMs);
      return () => clearTimeout(t);
    }

    if (phase === 'pausing') {
      const t = setTimeout(() => setPhase('erasing'), pauseMs);
      return () => clearTimeout(t);
    }

    if (shown.length > 0) {
      const t = setTimeout(() => setShown(current.slice(0, shown.length - 1)), typingMs / 1.8);
      return () => clearTimeout(t);
    }
    setIndex((i) => (i + 1) % roles.length);
    setPhase('typing');
  }, [shown, phase, index, roles, typingMs, pauseMs, reduced]);

  return (
    <span className={className}>
      <span className="text-fg">{shown}</span>
      {!reduced && (
        <span
          aria-hidden
          className="ml-0.5 inline-block h-[0.9em] w-[2px] translate-y-[0.1em] animate-pulse bg-accent align-middle"
        />
      )}
    </span>
  );
}
