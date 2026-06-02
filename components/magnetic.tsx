'use client';

import * as React from 'react';
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion';

type MagneticProps = {
  children: React.ReactNode;
  /** Fraction of cursor distance to translate toward — 0.1 (subtle) to 0.5 (strong). */
  strength?: number;
  /** Activation radius in pixels around the element center. */
  radius?: number;
  className?: string;
};

/**
 * Wraps a child element so it gently translates toward the cursor when
 * the pointer is within `radius`. Smoothed via a spring. Disabled when
 * the user has prefers-reduced-motion set.
 */
export function Magnetic({ children, strength = 0.25, radius = 130, className }: MagneticProps) {
  const reduced = useReducedMotion();
  const ref = React.useRef<HTMLSpanElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 220, damping: 18, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 220, damping: 18, mass: 0.4 });

  React.useEffect(() => {
    if (reduced) return;
    const onMove = (event: PointerEvent) => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = event.clientX - cx;
      const dy = event.clientY - cy;
      const distance = Math.hypot(dx, dy);
      if (distance < radius) {
        x.set(dx * strength);
        y.set(dy * strength);
      } else {
        x.set(0);
        y.set(0);
      }
    };
    window.addEventListener('pointermove', onMove);
    return () => window.removeEventListener('pointermove', onMove);
  }, [strength, radius, x, y, reduced]);

  return (
    <motion.span
      ref={ref}
      className={`inline-flex ${className ?? ''}`}
      style={reduced ? undefined : { x: springX, y: springY }}
    >
      {children}
    </motion.span>
  );
}
