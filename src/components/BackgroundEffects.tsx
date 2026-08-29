/**
 * BackgroundEffects.tsx
 *
 * Premium grid-based background layer — Vercel / Linear inspired.
 * Renders behind all portfolio content with:
 *   1. Infinite engineering-style grid
 *   2. Highlighted grid center (hero focal point)
 *   3. Radial gradient glow (electric blue / indigo / violet)
 *   4. Glowing intersection dots (digital network)
 *   5. Floating gradient animation (20–30s cycle)
 *   6. Layered depth & glassmorphism ambient effects
 *
 * All elements are pointer-events-none and use CSS-only animations.
 */

import { useMemo } from 'react';

/* ── Generate deterministic "random" intersection dots ───────── */
function generateDots(count: number, seed: number) {
  const dots: { x: number; y: number; opacity: number; size: number; delay: number }[] = [];
  let s = seed;
  const next = () => {
    s = (s * 16807 + 0) % 2147483647;
    return (s - 1) / 2147483646;
  };
  for (let i = 0; i < count; i++) {
    dots.push({
      x: next() * 100,          // % across viewport
      y: next() * 100,          // % down viewport
      opacity: 0.15 + next() * 0.45,  // 0.15 – 0.6
      size: 1.5 + next() * 2,   // 1.5 – 3.5 px
      delay: next() * 12,       // 0 – 12s animation offset
    });
  }
  return dots;
}

export const BackgroundEffects = () => {
  const dots = useMemo(() => generateDots(45, 42), []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>

      {/* ===== 1. BASE GRID — Infinite engineering lines ===== */}
      <div
        className="absolute inset-0 bg-grid-base"
        style={{
          backgroundImage: `
            linear-gradient(to right,  var(--grid-line-color) 1px, transparent 1px),
            linear-gradient(to bottom, var(--grid-line-color) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      {/* ===== Fine sub-grid (half spacing, even more subtle) ===== */}
      <div
        className="absolute inset-0 bg-grid-sub"
        style={{
          backgroundImage: `
            linear-gradient(to right,  var(--grid-sub-color) 1px, transparent 1px),
            linear-gradient(to bottom, var(--grid-sub-color) 1px, transparent 1px)
          `,
          backgroundSize: '25px 25px',
        }}
      />

      {/* ===== 2. HIGHLIGHTED GRID CENTER — Hero focal point ===== */}
      <div className="absolute inset-0 grid-center-highlight" />

      {/* ===== 3. GRADIENT GLOW LAYER — Electric Blue / Indigo / Violet ===== */}
      <div
        className="absolute gradient-glow-primary"
        style={{
          top: '5%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '1100px',
          height: '900px',
        }}
      />

      {/* Secondary indigo glow — offset for depth */}
      <div
        className="absolute gradient-glow-secondary"
        style={{
          top: '2%',
          left: '55%',
          transform: 'translateX(-50%)',
          width: '800px',
          height: '700px',
        }}
      />

      {/* Violet accent glow — bottom offset */}
      <div
        className="absolute gradient-glow-violet"
        style={{
          top: '12%',
          left: '42%',
          transform: 'translateX(-50%)',
          width: '700px',
          height: '600px',
        }}
      />

      {/* ===== 4. GLOWING INTERSECTION DOTS — Digital network ===== */}
      <div className="absolute inset-0">
        {dots.map((dot, i) => (
          <div
            key={i}
            className="grid-dot"
            style={{
              left: `${dot.x}%`,
              top: `${dot.y}%`,
              width: `${dot.size}px`,
              height: `${dot.size}px`,
              opacity: dot.opacity,
              animationDelay: `${dot.delay}s`,
            }}
          />
        ))}
      </div>

      {/* ===== 5. FLOATING GRADIENT ANIMATION — Slow ambient movement ===== */}
      <div className="absolute floating-gradient-1" />
      <div className="absolute floating-gradient-2" />
      <div className="absolute floating-gradient-3" />

      {/* ===== 6. EDGE VIGNETTE — Depth framing ===== */}
      <div className="absolute inset-0 edge-vignette" />

      {/* ===== 7. TOP AMBIENT LIGHT BAR — Vercel-style ===== */}
      <div className="absolute top-light-bar" />

      {/* ===== 8. GLASSMORPHISM AMBIENT PANELS ===== */}
      <div className="absolute glass-ambient glass-ambient-1" />
      <div className="absolute glass-ambient glass-ambient-2" />
    </div>
  );
};
