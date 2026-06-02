import { ImageResponse } from 'next/og';
import { profile } from '@/data/resume';

export const runtime = 'edge';
export const alt = `${profile.name} — ${profile.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

const FONT_SEMIBOLD =
  'https://cdn.jsdelivr.net/npm/@fontsource/inter@5/files/inter-latin-600-normal.woff';
const FONT_MEDIUM =
  'https://cdn.jsdelivr.net/npm/@fontsource/inter@5/files/inter-latin-500-normal.woff';

const loadFont = (url: string) => fetch(url).then((res) => res.arrayBuffer());

export default async function Image() {
  const [semiBold, medium] = await Promise.all([loadFont(FONT_SEMIBOLD), loadFont(FONT_MEDIUM)]);

  const accent = '#818cf8';
  const fg = '#fafafa';
  const fgMuted = '#a1a1aa';
  const bg = '#09090b';
  const cardBg = 'rgba(255,255,255,0.04)';

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: bg,
          display: 'flex',
          flexDirection: 'column',
          padding: '72px 80px',
          position: 'relative',
          fontFamily: 'Inter',
          color: fg,
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: -260,
            left: -120,
            width: 720,
            height: 720,
            borderRadius: '50%',
            background: `radial-gradient(circle, ${accent}26, transparent 65%)`,
            display: 'flex',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: -240,
            right: -160,
            width: 620,
            height: 620,
            borderRadius: '50%',
            background: 'radial-gradient(circle, #d946ef1f, transparent 65%)',
            display: 'flex',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '40%',
            left: '50%',
            width: 1,
            height: 1,
            display: 'flex',
            boxShadow:
              '0 0 220px 120px rgba(129, 140, 248, 0.08), 0 0 420px 200px rgba(217, 70, 239, 0.05)',
          }}
        />

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: 10,
                background: fg,
                color: bg,
                fontSize: 18,
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              AS
            </div>
            <div
              style={{
                fontSize: 22,
                color: fgMuted,
                fontWeight: 500,
                display: 'flex',
              }}
            >
              anujsrivastav.vercel.app
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              padding: '8px 16px',
              borderRadius: 999,
              border: '1px solid rgba(255,255,255,0.12)',
              background: cardBg,
              fontSize: 18,
              color: fgMuted,
            }}
          >
            <div
              style={{
                width: 10,
                height: 10,
                borderRadius: '50%',
                background: '#22c55e',
                display: 'flex',
              }}
            />
            Open to remote · US / UK / EU
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginTop: 'auto',
            gap: 18,
          }}
        >
          <div
            style={{
              fontSize: 22,
              letterSpacing: 4,
              textTransform: 'uppercase',
              color: accent,
              fontWeight: 500,
              display: 'flex',
            }}
          >
            Frontend-Heavy · Full Stack
          </div>

          <div
            style={{
              fontSize: 92,
              lineHeight: 1.02,
              fontWeight: 600,
              letterSpacing: '-0.04em',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <span style={{ color: fg }}>Anuj Kumar</span>
            <span style={{ color: fgMuted }}>Srivastav.</span>
          </div>

          <div
            style={{
              fontSize: 34,
              color: fgMuted,
              fontWeight: 500,
              maxWidth: 940,
              lineHeight: 1.2,
              display: 'flex',
            }}
          >
            Senior Full Stack Product Engineer · 8+ yrs · SaaS · Fintech · Healthcare · PropTech · E-commerce
          </div>

          <div style={{ display: 'flex', gap: 10, marginTop: 12, flexWrap: 'wrap' }}>
            {['React', 'Node', 'TypeScript', 'Next.js', 'WebSockets', 'WebRTC'].map((tag) => (
              <div
                key={tag}
                style={{
                  fontSize: 20,
                  padding: '8px 14px',
                  borderRadius: 8,
                  border: '1px solid rgba(255,255,255,0.12)',
                  background: cardBg,
                  color: fgMuted,
                  fontWeight: 500,
                  display: 'flex',
                }}
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: 'Inter', data: semiBold, weight: 600, style: 'normal' },
        { name: 'Inter', data: medium, weight: 500, style: 'normal' },
      ],
    },
  );
}
