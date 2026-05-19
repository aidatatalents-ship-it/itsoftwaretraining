'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
import styles from './Navbar.module.css';

const services = [
  { label: 'Salesforce Training',    href: '/services/salesforce' },
  { label: 'SAP Training',           href: '/services/sap' },
  { label: 'Cybersecurity & CEH',    href: '/services/cybersecurity' },
  { label: 'Python & AI',            href: '/services/python-data-science' },
  { label: 'Cloud — AWS & Azure',    href: '/services/cloud' },
  { label: 'DevOps & Kubernetes',    href: '/services/devops' },
  { label: 'All Courses →',          href: '/all-courses' },
];

const navLinks = [
  { label: 'Home',       href: '/' },
  { label: 'Placements', href: '/placements' },
  { label: 'About',      href: '/about' },
  { label: 'Contact',    href: '/contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const path = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.navScrolled : ''}`}>
      <div className={styles.row}>

        {/* ── Logo ── */}
        <Link href="/" className={styles.logo} style={{ gap: 0, textDecoration: 'none' }}>
          <svg width="200" height="44" viewBox="0 0 400 88" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="IT Software Training Bangalore">
            {/* Hexagon */}
            <polygon points="36,4 70,4 87,32 70,60 36,60 19,32" fill="#0B1A3D" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5"/>
            {/* Upward arrow */}
            <polyline points="33,52 43,34 52,44 62,16" stroke="#F26522" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            <polygon points="62,16 55,24 69,24" fill="#F26522"/>
            {/* Graduation cap board */}
            <rect x="50" y="13" width="18" height="3.5" rx="1.5" fill="#F26522"/>
            <polygon points="54,16.5 62,16.5 65,21 51,21" fill="#F26522"/>
            {/* Circuit dots */}
            <circle cx="30" cy="52" r="2.5" fill="#F26522"/>
            <line x1="30" y1="52" x2="40" y2="52" stroke="#F26522" strokeWidth="1.5"/>
            <circle cx="40" cy="52" r="1.8" fill="#F26522"/>
            <line x1="40" y1="52" x2="40" y2="58" stroke="#F26522" strokeWidth="1.5"/>

            {/* IT Software */}
            <text x="100" y="32" fontFamily="Inter, Poppins, sans-serif" fontWeight="800" fontSize="24" fill="#FFFFFF" letterSpacing="-0.8">IT Software</text>
            {/* Training */}
            <text x="100" y="57" fontFamily="Inter, Poppins, sans-serif" fontWeight="800" fontSize="24" fill="#F26522" letterSpacing="-0.8">Training</text>
            {/* Subtitle */}
            <text x="100" y="74" fontFamily="Inter, sans-serif" fontWeight="600" fontSize="9.5" fill="rgba(255,255,255,0.38)" letterSpacing="2">BANGALORE&apos;S #1 IT INSTITUTE</text>
          </svg>
        </Link>


        {/* ── Nav Links ── */}
        <ul className={styles.links}>
          <li>
            <Link href="/" className={`${styles.link} ${path === '/' ? styles.active : ''}`}>
              Home
            </Link>
          </li>
          {/* Courses dropdown */}
          <li
            className={styles.dropWrap}
            onMouseEnter={() => setDropOpen(true)}
            onMouseLeave={() => setDropOpen(false)}
          >
            <button className={`${styles.link} ${styles.dropBtn}`}>
              Courses <ChevronDown size={13} />
            </button>
            <div className={`${styles.drop} ${dropOpen ? styles.dropOpen : ''}`}>
              {services.map(s => (
                <Link key={s.href} href={s.href} className={styles.dropItem}>{s.label}</Link>
              ))}
            </div>
          </li>
          {navLinks.slice(1).map(l => (
            <li key={l.href}>
              <Link href={l.href} className={`${styles.link} ${path === l.href ? styles.active : ''}`}>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* ── Enrol CTA ── */}
        <div className={styles.ctas}>
          <Link href="/contact" className={styles.signIn}>
            Free Demo →
          </Link>
          {/* Burger */}
          <button className={styles.burger} onClick={() => setMenuOpen(m => !m)} aria-label="Menu">
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className={styles.mob}>
          <Link href="/" className={styles.mobLink} onClick={() => setMenuOpen(false)}>Home</Link>
          <div className={styles.mobSec}>Courses</div>
          {services.map(s => (
            <Link key={s.href} href={s.href} className={styles.mobLink} onClick={() => setMenuOpen(false)}>{s.label}</Link>
          ))}
          <div className={styles.mobSec}>More</div>
          {navLinks.slice(1).map(l => (
            <Link key={l.href} href={l.href} className={styles.mobLink} onClick={() => setMenuOpen(false)}>{l.label}</Link>
          ))}
          <div style={{ padding: '12px 16px' }}>
            <Link href="/contact" className={styles.signIn} style={{ display: 'block', textAlign: 'center' }} onClick={() => setMenuOpen(false)}>
              Book Free Demo →
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
