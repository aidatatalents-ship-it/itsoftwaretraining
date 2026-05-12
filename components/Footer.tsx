'use client';
import Link from 'next/link';
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const builtFor = [
  { label: 'Inspiration', href: '/' },
  { label: 'Get Hired', href: '/placements' },
  { label: 'Courses', href: '/services/salesforce' },
  { label: 'Certifications', href: '/contact' },
];

const findUs = [
  { label: 'Instagram', href: '#' },
  { label: 'Twitter', href: '#' },
  { label: 'Pinterest', href: '#' },
  { label: 'Facebook', href: '#' },
  { label: 'LinkedIn', href: '#' },
];

export default function Footer() {
  const [email, setEmail] = useState('');

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

        {/* Col 2 — Built For */}
        <div>
          <h4 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: '1rem', color: '#FFFFFF', marginBottom: 20 }}>
            Built For
          </h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
            {builtFor.map(item => (
              <li key={item.label} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <ArrowRight size={13} style={{ color: 'rgba(255,255,255,0.4)', flexShrink: 0 }} />
                <Link href={item.href} style={{ fontSize: '0.87rem', color: 'rgba(255,255,255,0.6)', textDecoration: 'none', transition: 'color .2s' }}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3 — Find Us */}
        <div>
          <h4 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: '1rem', color: '#FFFFFF', marginBottom: 20 }}>
            Find Us
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

        {/* Col 4 — Stay in Touch */}
        <div>
          <h4 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: '1rem', color: '#FFFFFF', marginBottom: 20 }}>
            Stay in Touch
          </h4>
          <div style={{ display: 'flex', gap: 0 }}>
            <input
              type="email"
              placeholder="Enter your mail"
              value={email}
              onChange={e => setEmail(e.target.value)}
              style={{
                flex: 1,
                padding: '10px 14px',
                background: 'rgba(255,255,255,0.1)',
                border: '1px solid rgba(255,255,255,0.2)',
                borderRight: 'none',
                borderRadius: '8px 0 0 8px',
                color: '#FFFFFF',
                fontSize: '0.83rem',
                outline: 'none',
              }}
            />
            <button style={{
              padding: '10px 18px',
              background: 'rgba(255,255,255,0.12)',
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: '0 8px 8px 0',
              color: '#FFFFFF',
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 600,
              fontSize: '0.83rem',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
            }}>
              Subscribe
            </button>
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
