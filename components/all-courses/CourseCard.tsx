'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Clock, BookOpen, Star } from 'lucide-react';
import type { ServiceItem } from '@/data/services';

const CATEGORY_META: Record<string, { bg: string; color: string }> = {
  hot:         { bg: '#F26522', color: '#fff' },
  popular:     { bg: '#1B3369', color: '#fff' },
  recommended: { bg: '#059669', color: '#fff' },
  new:         { bg: '#7C3AED', color: '#fff' },
};

export function CourseCard({ s }: { s: ServiceItem }) {
  const badge = CATEGORY_META[s.badgeType] ?? CATEGORY_META[s.category] ?? { bg: '#1B3369', color: '#fff' };

  return (
    <div
      style={{
        background: '#fff', border: '1px solid #E4E9F6',
        borderRadius: 20, overflow: 'hidden',
        boxShadow: '0 2px 12px rgba(27,51,105,0.07)',
        display: 'flex', flexDirection: 'column',
        transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)',
      }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.transform = 'translateY(-6px)';
        el.style.boxShadow = '0 20px 52px rgba(27,51,105,0.14)';
        el.style.borderColor = 'rgba(27,51,105,0.18)';
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.transform = 'translateY(0)';
        el.style.boxShadow = '0 2px 12px rgba(27,51,105,0.07)';
        el.style.borderColor = '#E4E9F6';
      }}
    >
      {/* Course image */}
      <div style={{ position: 'relative', height: 200, overflow: 'hidden', flexShrink: 0 }}>
        <Image
          src={s.img}
          alt={`${s.name} Training in Bangalore`}
          fill
          style={{ objectFit: 'cover' }}
          sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
        />
        {/* Gradient overlay */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 60%)',
        }} />
        {/* Badge */}
        {s.badge && (
          <span style={{
            position: 'absolute', top: 14, left: 14,
            background: badge.bg, color: badge.color,
            fontSize: '0.65rem', fontWeight: 800, fontFamily: 'Poppins, sans-serif',
            letterSpacing: '0.08em', textTransform: 'uppercase',
            padding: '4px 12px', borderRadius: 999,
          }}>
            {s.badge}
          </span>
        )}
        {/* Salary chip */}
        <span style={{
          position: 'absolute', bottom: 14, right: 14,
          background: 'rgba(0,0,0,0.72)', backdropFilter: 'blur(8px)',
          color: '#4ADE80', fontSize: '0.75rem', fontWeight: 700,
          fontFamily: 'Poppins, sans-serif', padding: '5px 12px', borderRadius: 8,
          border: '1px solid rgba(74,222,128,0.3)',
        }}>
          {s.salary}/yr
        </span>
      </div>

      {/* Body */}
      <div style={{ padding: '22px 22px 20px', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <h2 style={{
          fontFamily: 'Fraunces, serif', fontSize: '1.1rem', fontWeight: 800,
          color: '#0B1A3D', letterSpacing: '-0.4px', marginBottom: 6, lineHeight: 1.2,
        }}>{s.name}</h2>

        <p style={{
          fontFamily: 'Poppins, sans-serif', fontSize: '0.78rem',
          color: '#6B7280', marginBottom: 14, lineHeight: 1.6,
        }}>{s.tagline}</p>

        {/* Meta */}
        <div style={{
          display: 'flex', gap: 16, marginBottom: 14,
          fontFamily: 'Poppins, sans-serif', fontSize: '0.75rem', color: '#374151',
        }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <Clock size={11} color="#F26522" /> {s.duration}
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <BookOpen size={11} color="#F26522" /> {s.modules} Modules
          </span>
        </div>

        {/* Stars */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 16 }}>
          <div style={{ display: 'flex', gap: 1 }}>
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={11} style={{ fill: '#FFC107', color: '#FFC107' }} />
            ))}
          </div>
          <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.78rem', fontWeight: 700, color: '#0B1A3D' }}>{s.rating}</span>
          <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.72rem', color: '#9CA3AF' }}>({s.students})</span>
        </div>

        {/* Module pills */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 20 }}>
          {s.courses.slice(0, 4).map((c) => (
            <span key={c} style={{
              fontFamily: 'Poppins, sans-serif', fontSize: '0.66rem', fontWeight: 600,
              background: s.bg, color: s.color, border: `1px solid ${s.border}`,
              padding: '3px 10px', borderRadius: 999,
            }}>{c}</span>
          ))}
          {s.courses.length > 4 && (
            <span style={{
              fontFamily: 'Poppins, sans-serif', fontSize: '0.66rem', fontWeight: 600,
              background: '#F1F5F9', color: '#6B7280', padding: '3px 10px', borderRadius: 999,
            }}>+{s.courses.length - 4} more</span>
          )}
        </div>

        {/* CTAs */}
        <div style={{ display: 'flex', gap: 10, marginTop: 'auto' }}>
          <Link href={`/services/${s.slug}`} style={{
            flex: 1, textAlign: 'center', padding: '11px 12px',
            border: '1.5px solid #D1D5DB', borderRadius: 8,
            fontFamily: 'Poppins, sans-serif', fontSize: '0.82rem', fontWeight: 600,
            color: '#0B1A3D', textDecoration: 'none',
          }}>
            View Program
          </Link>
          <Link href="/contact" style={{
            flex: 1, textAlign: 'center', padding: '11px 12px',
            background: '#F26522', borderRadius: 8,
            fontFamily: 'Poppins, sans-serif', fontSize: '0.82rem', fontWeight: 700,
            color: '#fff', textDecoration: 'none',
            boxShadow: '0 4px 14px rgba(242,101,34,0.35)',
          }}>
            Enroll Now
          </Link>
        </div>
      </div>
    </div>
  );
}
