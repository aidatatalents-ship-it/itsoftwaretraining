import Link from 'next/link';
import {
  Building2, Monitor, Calendar, Zap, ArrowRight, Phone, MessageCircle,
} from 'lucide-react';
import type { ServiceItem } from '@/data/services';

interface Props { service: ServiceItem; }

const modes = [
  { Icon: Building2, label: 'Classroom Training',   desc: 'In-person at our 6 centres across Bangalore — Koramangala, Whitefield, HSR Layout & more' },
  { Icon: Monitor,   label: 'Online Live Classes',  desc: 'Instructor-led sessions via Zoom with real-time doubt solving — join from anywhere in India' },
  { Icon: Calendar,  label: 'Weekend Batch',         desc: 'Sat–Sun batches designed for working professionals with busy weekday schedules' },
  { Icon: Zap,       label: 'Fast-Track',            desc: 'Intensive daily batches — complete the full course in just 6–8 focused weeks' },
];

export default function ServiceCTA({ service }: Props) {
  return (
    <section style={{ background: '#fff', padding: '80px 0' }}>
      <div className="container">
        {/* Batch modes */}
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <div className="sec-pill" style={{ justifyContent: 'center' }}>Flexible Batches</div>
          <h2 className="sec-title" style={{ textAlign: 'center' }}>
            Train on <span style={{ color: 'var(--purple)' }}>Your Schedule</span>
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16, marginBottom: 56 }}>
          {modes.map(({ Icon, label, desc }) => (
            <div key={label} style={{ padding: '24px 20px', background: 'var(--gray-50)', border: '1px solid var(--gray-200)', borderRadius: 14, textAlign: 'center', transition: 'all .3s' }}>
              <div style={{ width: 48, height: 48, borderRadius: 12, background: 'rgba(123,47,190,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px' }}>
                <Icon size={22} style={{ color: 'var(--purple)' }} />
              </div>
              <h4 style={{ fontFamily: "'Poppins',sans-serif", fontSize: '.9rem', fontWeight: 700, color: 'var(--t-dark)', marginBottom: 6 }}>{label}</h4>
              <p style={{ fontSize: '.76rem', color: 'var(--t-muted)', lineHeight: 1.6 }}>{desc}</p>
            </div>
          ))}
        </div>

        {/* Bold CTA Banner */}
        <div style={{ background: 'var(--grad-cta)', borderRadius: 20, padding: '48px', display: 'grid', gridTemplateColumns: '1fr auto', gap: 32, alignItems: 'center', boxShadow: '0 20px 60px rgba(123,47,190,0.3)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: '-60px', right: '160px', width: 200, height: 200, borderRadius: '50%', background: 'rgba(255,255,255,.06)', pointerEvents: 'none' }} />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <h2 style={{ fontFamily: "'Poppins',sans-serif", fontSize: 'clamp(1.5rem,2.5vw,2rem)', fontWeight: 900, color: '#fff', marginBottom: 10, lineHeight: 1.2 }}>
              Ready to Start Your {service.name} Journey?
            </h2>
            <p style={{ color: 'rgba(255,255,255,.75)', fontSize: '.92rem', lineHeight: 1.6 }}>
              Free demo class · Course syllabus · 100% placement support · EMI available
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, flexShrink: 0, position: 'relative', zIndex: 1 }}>
            <Link href="/contact" className="btn-white" style={{ padding: '14px 28px', whiteSpace: 'nowrap' }}>
              Book Free Demo <ArrowRight size={15} />
            </Link>
            <a href="tel:+918888888888" style={{ color: 'rgba(255,255,255,.8)', fontSize: '.85rem', fontWeight: 600, textDecoration: 'none', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
              <Phone size={14} /> +91 88888 88888
            </a>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: 36 }}>
          <p style={{ color: 'var(--t-muted)', fontSize: '.875rem', marginBottom: 14 }}>Explore our other high-demand courses</p>
          <Link href="/#courses" className="btn-outline">View All 7 Courses <ArrowRight size={14} /></Link>
        </div>
      </div>
    </section>
  );
}
