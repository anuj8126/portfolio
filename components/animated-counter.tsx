'use client';

import * as React from 'react';
import { animate, useInView, useReducedMotion } from 'framer-motion';

type Props = {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  durationMs?: number;
  className?: string;
};

const format = (n: number, decimals: number) =>
  n.toLocaleString('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

export function AnimatedCounter({
  value,
  prefix = '',
  suffix = '',
  decimals = 0,
  durationMs = 1100,
  className,
}: Props) {
  const reduced = useReducedMotion();
  const ref = React.useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -40px 0px' });
  const [display, setDisplay] = React.useState(reduced ? format(value, decimals) : format(0, decimals));

  React.useEffect(() => {
    if (!inView) return;
    if (reduced) {
      setDisplay(format(value, decimals));
      return;
    }
    const controls = animate(0, value, {
      duration: durationMs / 1000,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (n) => setDisplay(format(n, decimals)),
    });
    return () => controls.stop();
  }, [inView, value, decimals, durationMs, reduced]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
