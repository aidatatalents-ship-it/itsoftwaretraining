'use client';
import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react';
import { PHONE_DISPLAY, PHONE_E164, WHATSAPP_BASE, EMAIL, ADDRESS, HOURS } from '@/data/contact';

const quickLinks = [
  { label: 'Salesforce Training', href: '/courses/salesforce' },
  { label: 'Cloud (AWS & Azure)', href: '/courses/cloud' },
  { label: 'SAP Training',        href: '/courses/sap' },
  { label: 'Python & AI',         href: '/courses/python-data-science' },
  { label: 'DevOps & Kubernetes', href: '/courses/devops' },
  { label: 'Cybersecurity / CEH', href: '/courses/cybersecurity' },
];

const companyLinks = [
  { label: 'About Us',        href: '/about' },
  { label: 'All Courses',     href: '/#courses' },
  { label: 'Placements',      href: '/placements' },
  { label: 'Contact Us',      href: '/contact' },
];

const socialLinks = [
  {
    title: 'Facebook',
    href: '#',
    color: '#1877F2',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073C24 5.406 18.627 0 12 0S0 5.406 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.791-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.887v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
      </svg>
    ),
  },
  {
    title: 'LinkedIn',
    href: '#',
    color: '#0A66C2',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    title: 'YouTube',
    href: '#',
    color: '#FF0000',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    ),
  },
  {
    title: 'Instagram',
    href: '#',
    color: '#E1306C',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
      </svg>
    ),
  },
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
                <text x="82" y="38" fontFamily="'Poppins','Poppins',sans-serif" fontWeight="800" fontSize="28" fill="#FFFFFF" letterSpacing="0.5">SOFTWARE</text>
                {/* TRAINING */}
                <text x="82" y="68" fontFamily="'Poppins','Poppins',sans-serif" fontWeight="800" fontSize="28" fill="#FFFFFF" letterSpacing="0.5">TRAINING</text>
                {/* Rule */}
                <line x1="0" y1="78" x2="420" y2="78" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/>
                {/* Subtitle */}
                <text x="0" y="91" fontFamily="'Poppins',sans-serif" fontWeight="500" fontSize="9" fill="rgba(255,255,255,0.35)" letterSpacing="2.5">BANGALORE&apos;S #1 SOFTWARE TRAINING INSTITUTE</text>
              </svg>
            </Link>
            <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '0.83rem', color: 'rgba(255,255,255,0.4)', lineHeight: 1.75, maxWidth: 260, marginBottom: 20 }}>
              Transforming careers since 2010. Expert-led IT training with 100% placement support. 10,000+ students placed at India&apos;s top companies.
            </p>
            {/* Social icons */}
            <div style={{ display: 'flex', gap: 8 }}>
              {socialLinks.map(s => (
                <a
                  key={s.title}
                  href={s.href}
                  title={s.title}
                  aria-label={s.title}
                  style={{
                    width: 36, height: 36, borderRadius: 8,
                    background: 'rgba(255,255,255,0.07)',
                    border: '1px solid rgba(255,255,255,0.10)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'rgba(255,255,255,0.55)',
                    textDecoration: 'none',
                    transition: 'background 0.2s, color 0.2s, border-color 0.2s',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLAnchorElement).style.background = s.color;
                    (e.currentTarget as HTMLAnchorElement).style.color = '#fff';
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = s.color;
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(255,255,255,0.07)';
                    (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.55)';
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,0.10)';
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 — Courses */}
          <div>
            <h4 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: '0.75rem', color: 'rgba(255,255,255,0.35)', marginBottom: 18, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              Popular Courses
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {quickLinks.map(item => (
                <li key={item.label} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <ArrowRight size={12} style={{ color: 'rgba(255,255,255,0.25)', flexShrink: 0 }} />
                  <Link href={item.href} style={{ fontFamily: "'Poppins', sans-serif", fontSize: '0.85rem', color: 'rgba(255,255,255,0.55)', textDecoration: 'none', transition: 'color 0.2s' }}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Company */}
          <div>
            <h4 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: '0.75rem', color: 'rgba(255,255,255,0.35)', marginBottom: 18, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              Company
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {companyLinks.map(item => (
                <li key={item.label} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <ArrowRight size={12} style={{ color: 'rgba(255,255,255,0.25)', flexShrink: 0 }} />
                  <Link href={item.href} style={{ fontFamily: "'Poppins', sans-serif", fontSize: '0.85rem', color: 'rgba(255,255,255,0.55)', textDecoration: 'none' }}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact */}
          <div>
            <h4 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: '0.75rem', color: 'rgba(255,255,255,0.35)', marginBottom: 18, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              Contact Us
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <a href={`tel:${PHONE_E164}`} style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
                <div style={{ width: 32, height: 32, borderRadius: 8, background: 'rgba(99,179,237,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Phone size={14} style={{ color: '#90CDF4' }} />
                </div>
                <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: '0.87rem', color: 'rgba(255,255,255,0.70)', fontWeight: 600 }}>{PHONE_DISPLAY}</span>
              </a>
              <a href={`${WHATSAPP_BASE}?text=Hi+I+want+to+know+more+about+IT+training`} target="_blank" rel="noopener" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
                <div style={{ width: 32, height: 32, borderRadius: 8, background: 'rgba(72,187,120,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <span style={{ fontSize: '0.9rem' }}>💬</span>
                </div>
                <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: '0.87rem', color: 'rgba(255,255,255,0.60)' }}>WhatsApp Us</span>
              </a>
              <a href={`mailto:${EMAIL}`} style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
                <div style={{ width: 32, height: 32, borderRadius: 8, background: 'rgba(99,179,237,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Mail size={14} style={{ color: '#90CDF4' }} />
                </div>
                <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: '0.82rem', color: 'rgba(255,255,255,0.55)' }}>{EMAIL}</span>
              </a>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                <div style={{ width: 32, height: 32, borderRadius: 8, background: 'rgba(99,179,237,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>
                  <MapPin size={14} style={{ color: '#90CDF4' }} />
                </div>
                <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: '0.82rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.6 }}>{ADDRESS}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{ width: 32, height: 32, borderRadius: 8, background: 'rgba(99,179,237,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Clock size={14} style={{ color: '#90CDF4' }} />
                </div>
                <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: '0.82rem', color: 'rgba(255,255,255,0.45)' }}>{HOURS}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: '16px 0' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 8 }}>
          <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '0.78rem', color: 'rgba(255,255,255,0.25)', margin: 0 }}>
            © 2026 IT Software Training Bangalore. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: 20 }}>
            {['Privacy Policy', 'Terms of Use', 'Sitemap'].map(l => (
              <Link key={l} href="#" style={{ fontFamily: "'Poppins', sans-serif", fontSize: '0.75rem', color: 'rgba(255,255,255,0.25)', textDecoration: 'none' }}>{l}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
