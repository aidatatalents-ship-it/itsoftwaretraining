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


      {/* ── Main footer grid ── */}
      <div className="container" style={{ padding: '60px 24px 48px' }}>
        <div className="footer-grid">

          {/* Col 1 — Logo + description */}
          <div>
            <Link href="/" style={{ display: 'inline-flex', textDecoration: 'none', marginBottom: 18 }}>
              <svg
                width="200" height="48"
                viewBox="0 0 420 96"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="IT Software Training Bangalore"
              >
                {/* "I" stem with orange triangle accent */}
                <rect x="0" y="8" width="12" height="62" rx="2" fill="#FFFFFF"/>
                <polygon points="0,8 14,8 0,26" fill="#F26522"/>
                {/* "T" crossbar + stem */}
                <rect x="18" y="8" width="52" height="12" rx="2" fill="#FFFFFF"/>
                <rect x="37" y="18" width="14" height="52" rx="2" fill="#FFFFFF"/>
                {/* SOFTWARE */}
                <text x="82" y="38" fontFamily="'Poppins','Inter',sans-serif" fontWeight="800" fontSize="28" fill="#FFFFFF" letterSpacing="0.5">SOFTWARE</text>
                {/* TRAINING */}
                <text x="82" y="68" fontFamily="'Poppins','Inter',sans-serif" fontWeight="800" fontSize="28" fill="#FFFFFF" letterSpacing="0.5">TRAINING</text>
                {/* Rule */}
                <line x1="0" y1="78" x2="420" y2="78" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/>
                {/* Subtitle */}
                <text x="0" y="91" fontFamily="'Inter',sans-serif" fontWeight="500" fontSize="9" fill="rgba(255,255,255,0.35)" letterSpacing="2.5">BANGALORE&apos;S #1 SOFTWARE TRAINING INSTITUTE</text>
              </svg>
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
