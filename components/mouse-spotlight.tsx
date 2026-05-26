'use client';

import * as React from 'react';

/**
 * Renders a soft accent glow that follows the cursor inside its parent
 * (the parent must be relatively positioned). Pure CSS once mounted —
 * we only ever write to two CSS variables.
 */
export function MouseSpotlight({ size = 480 }: { size?: number }) {
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const parent = el.parentElement;
    if (!parent) return;

    let frame = 0;
    let pendingX = 0;
    let pendingY = 0;

    const handle = (e: PointerEvent) => {
      const rect = parent.getBoundingClientRect();
      pendingX = e.clientX - rect.left;
      pendingY = e.clientY - rect.top;
      if (frame) return;
      frame = requestAnimationFrame(() => {
        el.style.setProperty('--mx', `${pendingX}px`);
        el.style.setProperty('--my', `${pendingY}px`);
        frame = 0;
      });
    };

    parent.addEventListener('pointermove', handle);
    return () => {
      parent.removeEventListener('pointermove', handle);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-0 opacity-70 transition-opacity duration-300 [mask-image:radial-gradient(circle_at_var(--mx,50%)_var(--my,50%),black_0,transparent_60%)]"
      style={{
        background: `radial-gradient(${size}px circle at var(--mx, 50%) var(--my, 50%), rgb(var(--accent) / 0.25), transparent 60%)`,
      }}
    />
  );
}
