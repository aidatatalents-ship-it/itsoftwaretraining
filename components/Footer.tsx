'use client';
import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react';
import { PHONE_DISPLAY, PHONE_E164, WHATSAPP_BASE, EMAIL, ADDRESS, HOURS } from '@/data/contact';

const quickLinks = [
  { label: 'Salesforce Training', href: '/services/salesforce' },
  { label: 'Cloud (AWS & Azure)', href: '/services/cloud' },
  { label: 'SAP Training',        href: '/services/sap' },
  { label: 'Python & AI',         href: '/services/python-data-science' },
  { label: 'DevOps & Kubernetes', href: '/services/devops' },
  { label: 'Cybersecurity / CEH', href: '/services/cybersecurity' },
];

const companyLinks = [
  { label: 'About Us',        href: '/about' },
  { label: 'All Courses',     href: '/#courses' },
  { label: 'Placements',      href: '/placements' },
  { label: 'Contact Us',      href: '/contact' },
];

const socialLinks = [
  { label: '📘', href: '#', title: 'Facebook' },
  { label: '💼', href: '#', title: 'LinkedIn' },
  { label: '📺', href: '#', title: 'YouTube' },
  { label: '📸', href: '#', title: 'Instagram' },
];

export default function Footer() {
  return (
    <footer style={{ background: '#070F28' }}>

      {/* ── Top bar ── */}
      <div style={{
        background: 'linear-gradient(135deg, #0D1B3E 0%, #1B3369 60%, #1565C0 100%)',
        padding: '36px 0'
      }}>
        <div className="container" style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          flexWrap: 'wrap', gap: 24
        }}>
          <div>
            <h3 style={{
              fontFamily: "'Fraunces', serif",
              fontSize: '1.5rem',
              fontWeight: 900,
              color: '#fff',
              marginBottom: 6,
              letterSpacing: '-0.5px',
            }}>
              Ready to start your IT career?
            </h3>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.9rem',
              color: 'rgba(255,255,255,0.55)',
            }}>
              Join 10,000+ professionals who transformed their careers. Book a free demo today.
            </p>
          </div>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', flexShrink: 0 }}>
            <Link href="/contact" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '12px 24px',
              background: '#F26522', color: '#fff',
              fontFamily: "'Inter', sans-serif", fontSize: '0.9rem', fontWeight: 700,
              borderRadius: 8, textDecoration: 'none',
              boxShadow: '0 4px 16px rgba(242,101,34,0.4)',
              whiteSpace: 'nowrap',
            }}>
              Book Free Demo →
            </Link>
            <a href={`tel:${PHONE_E164}`} style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '12px 24px',
              border: '1.5px solid rgba(255,255,255,0.25)', color: 'rgba(255,255,255,0.85)',
              fontFamily: "'Inter', sans-serif", fontSize: '0.9rem', fontWeight: 600,
              borderRadius: 8, textDecoration: 'none', whiteSpace: 'nowrap',
            }}>
              📞 {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </div>

      {/* ── Main footer grid ── */}
      <div className="container" style={{ padding: '60px 24px 48px' }}>
        <div className="footer-grid">

          {/* Col 1 — Logo + description */}
          <div>
            <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', marginBottom: 18 }}>
              <svg width="36" height="36" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="40" height="40" rx="10" fill="#1D4ED8" />
                <polyline points="14,12 7,20 14,28" stroke="white" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                <line x1="24" y1="29" x2="19" y2="11" stroke="white" strokeWidth="2.8" strokeLinecap="round" strokeOpacity="0.82" />
                <polyline points="26,12 33,20 26,28" stroke="white" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
              <div>
                <div style={{ fontFamily: "'Fraunces', serif", fontWeight: 900, fontSize: '1rem', color: '#FFFFFF', letterSpacing: '-0.3px' }}>
                  IT Software <span style={{ color: '#F26522' }}>Training</span>
                </div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.55rem', color: 'rgba(255,255,255,0.35)', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                  Bangalore&apos;s #1 IT Institute
                </div>
              </div>
            </Link>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.83rem', color: 'rgba(255,255,255,0.4)', lineHeight: 1.75, maxWidth: 260, marginBottom: 20 }}>
              Transforming careers since 2010. Expert-led IT training with 100% placement support. 10,000+ students placed at India&apos;s top companies.
            </p>
            {/* Social icons */}
            <div style={{ display: 'flex', gap: 8 }}>
              {socialLinks.map(s => (
                <a key={s.title} href={s.href} title={s.title} style={{
                  width: 34, height: 34, borderRadius: 8,
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.10)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1rem', textDecoration: 'none', transition: 'background 0.2s',
                }}>
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 — Courses */}
          <div>
            <h4 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: '0.75rem', color: 'rgba(255,255,255,0.35)', marginBottom: 18, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              Popular Courses
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {quickLinks.map(item => (
                <li key={item.label} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <ArrowRight size={12} style={{ color: 'rgba(255,255,255,0.25)', flexShrink: 0 }} />
                  <Link href={item.href} style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.85rem', color: 'rgba(255,255,255,0.55)', textDecoration: 'none', transition: 'color 0.2s' }}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Company */}
          <div>
            <h4 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: '0.75rem', color: 'rgba(255,255,255,0.35)', marginBottom: 18, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              Company
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {companyLinks.map(item => (
                <li key={item.label} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <ArrowRight size={12} style={{ color: 'rgba(255,255,255,0.25)', flexShrink: 0 }} />
                  <Link href={item.href} style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.85rem', color: 'rgba(255,255,255,0.55)', textDecoration: 'none' }}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact */}
          <div>
            <h4 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: '0.75rem', color: 'rgba(255,255,255,0.35)', marginBottom: 18, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              Contact Us
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <a href={`tel:${PHONE_E164}`} style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
                <div style={{ width: 32, height: 32, borderRadius: 8, background: 'rgba(99,179,237,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Phone size={14} style={{ color: '#90CDF4' }} />
                </div>
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.87rem', color: 'rgba(255,255,255,0.70)', fontWeight: 600 }}>{PHONE_DISPLAY}</span>
              </a>
              <a href={`${WHATSAPP_BASE}?text=Hi+I+want+to+know+more+about+IT+training`} target="_blank" rel="noopener" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
                <div style={{ width: 32, height: 32, borderRadius: 8, background: 'rgba(72,187,120,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <span style={{ fontSize: '0.9rem' }}>💬</span>
                </div>
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.87rem', color: 'rgba(255,255,255,0.60)' }}>WhatsApp Us</span>
              </a>
              <a href={`mailto:${EMAIL}`} style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
                <div style={{ width: 32, height: 32, borderRadius: 8, background: 'rgba(99,179,237,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Mail size={14} style={{ color: '#90CDF4' }} />
                </div>
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.82rem', color: 'rgba(255,255,255,0.55)' }}>{EMAIL}</span>
              </a>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                <div style={{ width: 32, height: 32, borderRadius: 8, background: 'rgba(99,179,237,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>
                  <MapPin size={14} style={{ color: '#90CDF4' }} />
                </div>
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.82rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.6 }}>{ADDRESS}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{ width: 32, height: 32, borderRadius: 8, background: 'rgba(99,179,237,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Clock size={14} style={{ color: '#90CDF4' }} />
                </div>
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.82rem', color: 'rgba(255,255,255,0.45)' }}>{HOURS}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: '16px 0' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 8 }}>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.78rem', color: 'rgba(255,255,255,0.25)', margin: 0 }}>
            © 2025 IT Software Training Bangalore. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: 20 }}>
            {['Privacy Policy', 'Terms of Use', 'Sitemap'].map(l => (
              <Link key={l} href="#" style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.75rem', color: 'rgba(255,255,255,0.25)', textDecoration: 'none' }}>{l}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
