'use client';
import Link from 'next/link';
import { ArrowRight, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { PHONE_DISPLAY, PHONE_E164, WHATSAPP_BASE, EMAIL, ADDRESS, HOURS } from '@/data/contact';

const quickLinks = [
  { label: 'All Courses',        href: '/#courses' },
  { label: 'Salesforce Training', href: '/services/salesforce' },
  { label: 'Cloud (AWS & Azure)', href: '/services/cloud' },
  { label: 'SAP Training',        href: '/services/sap' },
  { label: 'Python & AI',         href: '/services/python-data-science' },
  { label: 'Placements',          href: '/placements' },
];

const findUs = [
  { label: 'Instagram', href: '#' },
  { label: 'Twitter / X', href: '#' },
  { label: 'Facebook', href: '#' },
  { label: 'LinkedIn', href: '#' },
  { label: 'YouTube', href: '#' },
];

export default function Footer() {
  return (
    <footer style={{ background: '#0A1530', padding: '60px 0 0' }}>
      <div className="container footer-grid" style={{
        paddingBottom: 48,
      }}>
        {/* Col 1 — Logo + description */}
        <div>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', marginBottom: 20 }}>
            <svg width="36" height="36" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="40" height="40" rx="10" fill="#1D4ED8" />
              <polyline points="14,12 7,20 14,28" stroke="white" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              <line x1="24" y1="29" x2="19" y2="11" stroke="white" strokeWidth="2.8" strokeLinecap="round" strokeOpacity="0.82" />
              <polyline points="26,12 33,20 26,28" stroke="white" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
            <div>
              <div style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: '1rem', color: '#FFFFFF' }}>IT Software Training</div>
              <div style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.5)', fontWeight: 500 }}>BANGALORE&apos;S #1 IT INSTITUTE</div>
            </div>
          </Link>
          <p style={{ fontSize: '0.83rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, maxWidth: 260 }}>
            Transforming careers since 2010. Expert-led IT training with 100% placement support. 10,000+ students placed at India&apos;s top companies.
          </p>
        </div>

        {/* Col 2 — Quick Links */}
        <div>
          <h4 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: '1rem', color: '#FFFFFF', marginBottom: 20 }}>
            Quick Links
          </h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
            {quickLinks.map(item => (
              <li key={item.label} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <ArrowRight size={13} style={{ color: 'rgba(255,255,255,0.4)', flexShrink: 0 }} />
                <Link href={item.href} style={{ fontSize: '0.87rem', color: 'rgba(255,255,255,0.6)', textDecoration: 'none' }}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3 — Find Us */}
        <div>
          <h4 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: '1rem', color: '#FFFFFF', marginBottom: 20 }}>
            Follow Us
          </h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
            {findUs.map(item => (
              <li key={item.label} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <ArrowRight size={13} style={{ color: 'rgba(255,255,255,0.4)', flexShrink: 0 }} />
                <a href={item.href} style={{ fontSize: '0.87rem', color: 'rgba(255,255,255,0.6)', textDecoration: 'none' }}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 4 — Contact */}
        <div>
          <h4 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: '1rem', color: '#FFFFFF', marginBottom: 20 }}>
            Contact Us
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <a href={`tel:${PHONE_E164}`} style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
              <Phone size={14} style={{ color: '#A5B4FC', flexShrink: 0 }} />
              <span style={{ fontSize: '0.87rem', color: 'rgba(255,255,255,0.75)', fontWeight: 600 }}>{PHONE_DISPLAY}</span>
            </a>
            <a href={`${WHATSAPP_BASE}?text=Hi+I+want+to+know+more+about+IT+training`} target="_blank" rel="noopener" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
              <svg width="14" height="14" viewBox="0 0 48 48" fill="none"><path d="M24 4C12.95 4 4 12.95 4 24c0 3.7 1.02 7.16 2.77 10.13L4.09 43.91l10.02-2.63C17 43.22 20.39 44 24 44c11.05 0 20-8.95 20-20S35.05 4 24 4z" fill="#A5B4FC"/></svg>
              <span style={{ fontSize: '0.87rem', color: 'rgba(255,255,255,0.6)' }}>WhatsApp Us</span>
            </a>
            <a href={`mailto:${EMAIL}`} style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
              <Mail size={14} style={{ color: '#A5B4FC', flexShrink: 0 }} />
              <span style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.6)' }}>{EMAIL}</span>
            </a>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
              <MapPin size={14} style={{ color: '#A5B4FC', flexShrink: 0, marginTop: 2 }} />
              <span style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.5 }}>{ADDRESS}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <Clock size={14} style={{ color: '#A5B4FC', flexShrink: 0 }} />
              <span style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.5)' }}>{HOURS}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', padding: '16px 0' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 8 }}>
          <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.35)', margin: 0 }}>
            © 2025 IT Software Training Bangalore. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: 20 }}>
            {['Privacy Policy', 'Terms of Use', 'Sitemap'].map(l => (
              <Link key={l} href="#" style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.35)', textDecoration: 'none' }}>{l}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
