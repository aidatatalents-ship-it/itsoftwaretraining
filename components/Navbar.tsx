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
          <svg
            width="210" height="48"
            viewBox="0 0 420 96"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="IT Software Training Bangalore"
          >
            {/* ── "I" column — left stem with orange triangle accent ── */}
            <rect x="0" y="8" width="12" height="62" rx="2" fill="#FFFFFF"/>
            {/* Orange triangle accent on top-left of I — mirrors ASCENT's A inner orange */}
            <polygon points="0,8 14,8 0,26" fill="#F26522"/>

            {/* ── "T" crossbar + stem ── */}
            <rect x="18" y="8" width="52" height="12" rx="2" fill="#FFFFFF"/>
            <rect x="37" y="18" width="14" height="52" rx="2" fill="#FFFFFF"/>

            {/* ── SOFTWARE TRAINING — right wordmark ── */}
            {/* SOFTWARE */}
            <text
              x="82" y="38"
              fontFamily="'Poppins','Inter',sans-serif"
              fontWeight="800"
              fontSize="28"
              fill="#FFFFFF"
              letterSpacing="0.5"
            >SOFTWARE</text>
            {/* TRAINING */}
            <text
              x="82" y="68"
              fontFamily="'Poppins','Inter',sans-serif"
              fontWeight="800"
              fontSize="28"
              fill="#FFFFFF"
              letterSpacing="0.5"
            >TRAINING</text>

            {/* ── Thin horizontal rule ── */}
            <line x1="0" y1="78" x2="420" y2="78" stroke="rgba(255,255,255,0.25)" strokeWidth="1"/>

            {/* ── Subtitle ── */}
            <text
              x="0" y="91"
              fontFamily="'Inter',sans-serif"
              fontWeight="500"
              fontSize="9"
              fill="rgba(255,255,255,0.4)"
              letterSpacing="2.5"
            >BANGALORE&apos;S #1 SOFTWARE TRAINING INSTITUTE</text>
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
