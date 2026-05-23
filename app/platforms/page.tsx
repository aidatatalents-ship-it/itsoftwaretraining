'use client';
import Link from 'next/link';
import { services } from '@/data/services';

const ACCENT: Record<string, string> = {
  salesforce:           '#2563EB',
  cloud:                '#D97706',
  sap:                  '#7C3AED',
  'python-data-science':'#059669',
  devops:               '#0284C7',
  cybersecurity:        '#DC2626',
};

export default function PlatformsIndexPage() {
  return (
    <main style={{ paddingTop: 80, background: '#F5F7FB', minHeight: '100vh' }}>

      {/* ── Header ── */}
      <section style={{ background: '#0B1A3D', padding: '72px 5% 64px', textAlign: 'center' }}>
        <p style={{ fontFamily: "'Inter',sans-serif", fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#F26522', marginBottom: 16 }}>
          Career Guides
        </p>
        <h1 style={{ fontFamily: "'Fraunces',serif", fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 900, color: '#fff', letterSpacing: '-1.5px', lineHeight: 1.05, marginBottom: 18 }}>
          Which IT Career Is Right for You?
        </h1>
        <p style={{ fontFamily: "'Inter',sans-serif", color: 'rgba(255,255,255,0.5)', maxWidth: 520, margin: '0 auto', fontSize: '1rem', lineHeight: 1.8 }}>
          Before you enrol, understand the market. Each guide covers salary data, roadmaps, hiring companies in Bangalore, and a fit assessment.
        </p>
      </section>

      {/* ── Cards grid ── */}
      <section style={{ maxWidth: 1100, margin: '0 auto', padding: '56px 24px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: 24,
        }}>
          {services.map(s => {
            const accent = ACCENT[s.slug] || '#1B3369';
            return (
              <Link
                key={s.slug}
                href={`/platforms/${s.slug}`}
                style={{ textDecoration: 'none', display: 'block' }}
              >
                <div style={{
                  background: '#fff',
                  border: `1.5px solid #E8EDF4`,
                  borderRadius: 16,
                  overflow: 'hidden',
                  boxShadow: '0 2px 10px rgba(27,51,105,0.06)',
                  transition: 'all 0.22s',
                }}>
                  {/* Colour accent bar */}
                  <div style={{ height: 5, background: accent }} />

                  <div style={{ padding: '24px 24px 28px' }}>
                    {/* Icon + badge */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
                      <div style={{ width: 48, height: 48, borderRadius: 12, background: `${accent}18`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>
                        {s.icon}
                      </div>
                      <span style={{ fontFamily: "'Inter',sans-serif", fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', padding: '4px 10px', borderRadius: 20, background: `${accent}15`, color: accent }}>
                        {s.demand} Demand
                      </span>
                    </div>

                    {/* Name + tagline */}
                    <h2 style={{ fontFamily: "'Fraunces',serif", fontSize: '1.1rem', fontWeight: 800, color: '#1B3369', letterSpacing: '-0.3px', marginBottom: 6 }}>
                      {s.name}
                    </h2>
                    <p style={{ fontFamily: "'Inter',sans-serif", fontSize: '0.8rem', color: '#6B7280', marginBottom: 18, lineHeight: 1.5 }}>
                      {s.tagline}
                    </p>

                    {/* Stats row */}
                    <div style={{ display: 'flex', gap: 20, paddingTop: 16, borderTop: '1px solid #F0F4FF' }}>
                      <div>
                        <div style={{ fontFamily: "'Fraunces',serif", fontSize: '1.1rem', fontWeight: 900, color: accent, letterSpacing: '-0.5px' }}>{s.salary}/yr</div>
                        <div style={{ fontFamily: "'Inter',sans-serif", fontSize: '0.68rem', color: '#9CA3AF', marginTop: 2 }}>Salary range</div>
                      </div>
                      <div>
                        <div style={{ fontFamily: "'Fraunces',serif", fontSize: '1.1rem', fontWeight: 900, color: '#1B3369', letterSpacing: '-0.5px' }}>{s.students}</div>
                        <div style={{ fontFamily: "'Inter',sans-serif", fontSize: '0.68rem', color: '#9CA3AF', marginTop: 2 }}>Placed</div>
                      </div>
                      <div style={{ marginLeft: 'auto', alignSelf: 'center' }}>
                        <span style={{ fontFamily: "'Inter',sans-serif", fontSize: '0.78rem', fontWeight: 700, color: accent }}>
                          Read Guide →
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

    </main>
  );
}
