import type { Metadata } from 'next';
import Link from 'next/link';
import { Clock, TrendingUp, Users, Award } from 'lucide-react';
import { services } from '@/data/services';
import { PHONE_DISPLAY, PHONE_E164 } from '@/data/contact';
import { CourseCard } from '@/components/all-courses/CourseCard';

export const metadata: Metadata = {
  title: 'All IT Courses in Bangalore | Salesforce, SAP, Python, Cloud, DevOps, Cybersecurity',
  description:
    'Browse all 6 core IT training programmes in Bangalore — Salesforce, Cloud AWS & Azure, SAP, Python & AI, DevOps & Kubernetes, Cybersecurity / CEH. Live projects, certifications, 100% placement support.',
};

export default function AllCoursesPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section style={{
        background: 'linear-gradient(135deg, #0B1A3D 0%, #1B3369 60%, #1565C0 100%)',
        paddingTop: 108, paddingBottom: 72,
        paddingLeft: '5%', paddingRight: '5%',
        textAlign: 'center', position: 'relative', overflow: 'hidden',
      }}>
        {/* Grid overlay */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }} />
        {/* Glow */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'radial-gradient(ellipse 70% 60% at 50% 40%, rgba(21,101,192,0.25) 0%, transparent 70%)',
        }} />

        <div style={{ position: 'relative', zIndex: 1 }}>
          {/* Badge */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'rgba(242,101,34,0.15)', border: '1px solid rgba(242,101,34,0.35)',
            color: '#FF9966', fontFamily: 'Inter, sans-serif', fontSize: '0.7rem',
            fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
            padding: '6px 18px', borderRadius: 999, marginBottom: 22,
          }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#F26522', display: 'inline-block' }} />
            Admissions Open · June 2025 Batch
          </div>

          <h1 style={{
            fontFamily: 'Fraunces, serif',
            fontSize: 'clamp(2rem, 4.5vw, 3.2rem)',
            fontWeight: 900, color: '#fff', letterSpacing: '-2px', lineHeight: 1.05,
            marginBottom: 16,
          }}>
            All IT Training Courses<br />
            <em style={{ fontStyle: 'italic', color: '#F26522' }}>in Bangalore</em>
          </h1>

          <p style={{
            fontFamily: 'Inter, sans-serif', color: 'rgba(255,255,255,0.55)',
            fontSize: '1rem', lineHeight: 1.8, maxWidth: 520, margin: '0 auto 36px',
          }}>
            6 industry-leading programmes · Live projects · Global certifications · 100% placement support
          </p>

          {/* Quick stats */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: 36, flexWrap: 'wrap' }}>
            {[
              { icon: <Users size={15} />,     label: '10,000+ Placed' },
              { icon: <Award size={15} />,     label: '15+ Certifications' },
              { icon: <TrendingUp size={15} />, label: '₹4L → ₹45L Jumps' },
              { icon: <Clock size={15} />,     label: '60 Day Avg. Offer' },
            ].map((s) => (
              <div key={s.label} style={{
                display: 'flex', alignItems: 'center', gap: 7,
                fontFamily: 'Inter, sans-serif', fontSize: '0.82rem',
                fontWeight: 600, color: 'rgba(255,255,255,0.65)',
              }}>
                <span style={{ color: '#F26522' }}>{s.icon}</span>
                {s.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COURSE GRID ── */}
      <section style={{ background: '#F8FAFF', padding: '72px 5%' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
            gap: 24,
          }}>
            {services.map((s) => (
              <CourseCard key={s.slug} s={s} />
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section style={{
        background: 'linear-gradient(135deg, #070F28 0%, #0D1B3E 50%, #1B3369 100%)',
        padding: '80px 5%', textAlign: 'center',
      }}>
        <h2 style={{
          fontFamily: 'Fraunces, serif',
          fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
          fontWeight: 900, color: '#fff', letterSpacing: '-1.5px', marginBottom: 14,
        }}>
          Not sure which course to pick?
        </h2>
        <p style={{
          fontFamily: 'Inter, sans-serif', color: 'rgba(255,255,255,0.5)',
          fontSize: '1rem', maxWidth: 460, margin: '0 auto 36px', lineHeight: 1.8,
        }}>
          Book a free 30-minute counselling call. We&apos;ll help you choose the right track
          based on your background and career goals — no pressure, just honest guidance.
        </p>
        <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/contact" style={{
            background: '#F26522', color: '#fff', padding: '14px 32px',
            borderRadius: 10, fontFamily: 'Inter, sans-serif', fontSize: '0.95rem',
            fontWeight: 700, textDecoration: 'none',
            boxShadow: '0 6px 24px rgba(242,101,34,0.4)',
          }}>
            Book Free Counselling →
          </Link>
          <a href={`tel:${PHONE_E164}`} style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '14px 28px', border: '1.5px solid rgba(255,255,255,0.2)',
            borderRadius: 10, color: 'rgba(255,255,255,0.8)',
            fontFamily: 'Inter, sans-serif', fontSize: '0.95rem',
            fontWeight: 600, textDecoration: 'none',
          }}>
            📞 {PHONE_DISPLAY}
          </a>
        </div>
      </section>
    </>
  );
}
