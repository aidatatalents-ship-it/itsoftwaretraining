'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
import styles from './Navbar.module.css';

const services = [
  { label: 'Salesforce Training',    href: '/services/salesforce' },
  { label: 'SAP Training',           href: '/services/sap' },
  { label: 'Cybersecurity & CEH',    href: '/services/cybersecurity' },
  { label: 'Python & Data Science',  href: '/services/python-data-science' },
  { label: 'Cloud — AWS & Azure',    href: '/services/cloud' },
  { label: 'Power BI & Analytics',   href: '/services/power-bi' },
  { label: 'DevOps & Kubernetes',    href: '/services/devops' },
];

const navLinks = [
  { label: 'Home',     href: '/' },
  { label: 'Programs', href: '/services/salesforce' },
  { label: 'Trainers', href: '/placements' },
  { label: 'About',    href: '/about' },
  { label: 'Contact',  href: '/contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);
  const path = usePathname();

  return (
    <nav className={styles.nav}>
      <div className={`container ${styles.row}`}>

        {/* ── Logo ── */}
        <Link href="/" className={styles.logo}>
          <Image
            src="/it-software-logo.png"
            alt="IT Software Training Logo"
            width={40}
            height={40}
            style={{ borderRadius: '8px', objectFit: 'contain' }}
          />
          <div className={styles.logoText}>
            <span className={styles.logoName}>IT Software Training</span>
            <span className={styles.logoSub}>BANGALORE&apos;S #1 IT INSTITUTE</span>
          </div>
        </Link>

        {/* ── Nav Links ── */}
        <ul className={styles.links}>
          <li>
            <Link href="/" className={`${styles.link} ${path === '/' ? styles.active : ''}`}>
              Home
            </Link>
          </li>
          {/* Courses dropdown */}
          <li className={styles.dropWrap}
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

        {/* ── Sign In CTA ── */}
        <div className={styles.ctas}>
          <Link href="/contact" className={styles.signIn}>
            Sign In
          </Link>
          {/* Burger */}
          <button className={styles.burger} onClick={() => setMenuOpen(m => !m)} aria-label="Menu">
            {menuOpen ? <X size={22} color="white" /> : <Menu size={22} color="white" />}
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
          {navLinks.slice(1).map(l => (
            <Link key={l.href} href={l.href} className={styles.mobLink} onClick={() => setMenuOpen(false)}>{l.label}</Link>
          ))}
          <div style={{ padding: '12px 16px' }}>
            <Link href="/contact" className={styles.signIn} style={{ display: 'block', textAlign: 'center', borderRadius: 30 }} onClick={() => setMenuOpen(false)}>
              Sign In
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
