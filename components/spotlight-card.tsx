'use client';

import * as React from 'react';

type SpotlightCardProps = React.HTMLAttributes<HTMLDivElement> & {
  as?: 'div' | 'article' | 'a' | 'li';
  glowSize?: number;
};

/**
 * A card that emits a soft accent glow following the cursor inside it.
 * Drop a child with `pointer-events-none absolute inset-0` if you need
 * to overlay extra effects. The card itself stays interactive.
 */
export const SpotlightCard = React.forwardRef<HTMLDivElement, SpotlightCardProps>(
  function SpotlightCard(
    { as = 'div', className = '', glowSize = 320, children, onMouseMove, ...rest },
    ref,
  ) {
    const innerRef = React.useRef<HTMLDivElement | null>(null);

    const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
      const node = innerRef.current;
      if (node) {
        const rect = node.getBoundingClientRect();
        node.style.setProperty('--cx', `${e.clientX - rect.left}px`);
        node.style.setProperty('--cy', `${e.clientY - rect.top}px`);
      }
      onMouseMove?.(e);
    };

    const Tag = as as React.ElementType;

    return (
      <Tag
        ref={(node: HTMLDivElement | null) => {
          innerRef.current = node;
          if (typeof ref === 'function') ref(node);
          else if (ref) (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
        }}
        onMouseMove={handleMove}
        className={`group/spotlight relative isolate overflow-hidden ${className}`}
        {...rest}
      >
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-300 group-hover/spotlight:opacity-100"
          style={{
            background: `radial-gradient(${glowSize}px circle at var(--cx, 50%) var(--cy, 50%), rgb(var(--accent) / 0.18), transparent 60%)`,
          }}
        />
        {children}
      </Tag>
    );
  },
);
