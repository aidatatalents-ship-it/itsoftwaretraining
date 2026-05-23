'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, ArrowRight, BookOpen, Phone } from 'lucide-react';
import { courseTree } from '@/data/courseTree';
import { PHONE_DISPLAY, PHONE_E164 } from '@/data/contact';
import styles from './Navbar.module.css';

const PLATFORM_COLORS: Record<string, string> = {
  salesforce: '#1565C0',
  cloud:      '#D97706',
  sap:        '#7C3AED',
  'python-data-science': '#059669',
  devops:     '#0284C7',
  cybersecurity: '#DC2626',
};

const navLinks = [
  { label: 'Home',       href: '/' },
  { label: 'Placements', href: '/placements' },
  { label: 'About',      href: '/about' },
  { label: 'Contact',    href: '/contact' },
];

const totalCourses = courseTree.reduce((s, p) => s + p.children.length, 0);

export default function Navbar() {
  const [menuOpen, setMenuOpen]   = useState(false);
  const [megaOpen, setMegaOpen]   = useState(false);
  const [scrolled, setScrolled]   = useState(false);
  const [mobOpen, setMobOpen]     = useState<Record<string, boolean>>({});
  const megaRef = useRef<HTMLLIElement>(null);
  const path = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mega on route change
  useEffect(() => { setMegaOpen(false); setMenuOpen(false); }, [path]);

  const toggleMobPlatform = (slug: string) =>
    setMobOpen(prev => ({ ...prev, [slug]: !prev[slug] }));

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.navScrolled : ''}`}>
      <div className={styles.row}>

        {/* ── Logo ── */}
        <Link href="/" className={styles.logo} style={{ gap: 0 }}>
          <svg width="210" height="48" viewBox="0 0 420 96" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="IT Software Training Bangalore">
            <rect x="0" y="8" width="12" height="62" rx="2" fill="#FFFFFF"/>
            <polygon points="0,8 14,8 0,26" fill="#F26522"/>
            <rect x="18" y="8" width="52" height="12" rx="2" fill="#FFFFFF"/>
            <rect x="37" y="18" width="14" height="52" rx="2" fill="#FFFFFF"/>
            <text x="82" y="38" fontFamily="'Poppins','Inter',sans-serif" fontWeight="800" fontSize="28" fill="#FFFFFF" letterSpacing="0.5">SOFTWARE</text>
            <text x="82" y="68" fontFamily="'Poppins','Inter',sans-serif" fontWeight="800" fontSize="28" fill="#FFFFFF" letterSpacing="0.5">TRAINING</text>
            <line x1="0" y1="78" x2="420" y2="78" stroke="rgba(255,255,255,0.25)" strokeWidth="1"/>
            <text x="0" y="91" fontFamily="'Inter',sans-serif" fontWeight="500" fontSize="9" fill="rgba(255,255,255,0.4)" letterSpacing="2.5">BANGALORE&apos;S #1 SOFTWARE TRAINING INSTITUTE</text>
          </svg>
        </Link>

        {/* ── Desktop Nav ── */}
        <ul className={styles.links}>
          <li>
            <Link href="/" className={`${styles.link} ${path === '/' ? styles.active : ''}`}>Home</Link>
          </li>

          {/* ── MEGA MENU TRIGGER ── */}
          <li
            ref={megaRef}
            className={styles.megaWrap}
            onMouseEnter={() => setMegaOpen(true)}
            onMouseLeave={() => setMegaOpen(false)}
          >
            <button className={`${styles.link} ${megaOpen ? styles.dropBtnOpen : ''}`}>
              Courses <ChevronDown size={13} />
            </button>

            <div className={`${styles.mega} ${megaOpen ? styles.megaOpen : ''}`}>
              {/* Top bar */}
              <div className={styles.megaTop}>
                <span className={styles.megaTopLabel}>
                  {totalCourses} Specialisations across {courseTree.length} Platforms
                </span>
                <Link href="/all-courses" className={styles.megaTopLink} onClick={() => setMegaOpen(false)}>
                  View All Courses <ArrowRight size={12} />
                </Link>
              </div>

              {/* Platform columns — 3×2 grid */}
              <div className={styles.megaGrid}>
                {courseTree.map(parent => {
                  const color = PLATFORM_COLORS[parent.slug] || '#1B3369';
                  return (
                    <div key={parent.slug} className={styles.megaPlatform}>
                      {/* Platform heading */}
                      <Link
                        href={`/courses/${parent.slug}`}
                        className={styles.megaPlatformHead}
                        onClick={() => setMegaOpen(false)}
                      >
                        <div className={styles.megaPlatformIcon} style={{ background: `${color}22` }}>
                          {parent.icon}
                        </div>
                        <div>
                          <div className={styles.megaPlatformTitle}>
                            {parent.title.replace(' Training in Bangalore', '')}
                          </div>
                          <div className={styles.megaPlatformTagline}>
                            {parent.children.length} course{parent.children.length > 1 ? 's' : ''}
                          </div>
                        </div>
                      </Link>

                      {/* Sub-course chips */}
                      <div className={styles.megaChildren}>
                        {parent.children.slice(0, 5).map(child => (
                          <Link
                            key={child.slug}
                            href={child.href ?? `/services/${child.slug}`}
                            className={styles.megaChild}
                            onClick={() => setMegaOpen(false)}
                          >
                            <span className={styles.megaChildDot} style={{ background: color }} />
                            {child.title}
                          </Link>
                        ))}
                        {parent.children.length > 5 && (
                          <Link
                            href={`/courses/${parent.slug}`}
                            className={styles.megaPlatformViewAll}
                            style={{ color }}
                            onClick={() => setMegaOpen(false)}
                          >
                            +{parent.children.length - 5} more <ArrowRight size={11} />
                          </Link>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Bottom bar */}
              <div className={styles.megaBottom}>
                <div className={styles.megaBottomStat}>
                  <BookOpen size={13} /><strong>85%+</strong> Placement Rate &nbsp;·&nbsp;
                  <strong>200+</strong> Hiring Partners &nbsp;·&nbsp;
                  <strong>6</strong> Bangalore Centres
                </div>
                <Link href="/contact" className={styles.megaBottomCta} onClick={() => setMegaOpen(false)}>
                  Book Free Demo <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          </li>

          {navLinks.slice(1).map(l => (
            <li key={l.href}>
              <Link href={l.href} className={`${styles.link} ${path === l.href ? styles.active : ''}`}>
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/platforms" className={`${styles.link} ${path.startsWith('/platforms') ? styles.active : ''}`}>
              Career Guides
            </Link>
          </li>
        </ul>

        {/* ── CTAs ── */}
        <div className={styles.ctas}>
          <a href={`tel:${PHONE_E164}`} className={styles.link} style={{ display: 'none' }} aria-label="Call us">
            <Phone size={14} />
          </a>
          <Link href="/contact" className={styles.signIn}>Free Demo →</Link>
          <button className={styles.burger} onClick={() => setMenuOpen(m => !m)} aria-label="Menu">
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* ══════ MOBILE MENU ══════ */}
      {menuOpen && (
        <div className={styles.mob}>
          <Link href="/" className={styles.mobLink} onClick={() => setMenuOpen(false)}>Home</Link>

          <div className={styles.mobSec}>Courses</div>

          {courseTree.map(parent => {
            const color = PLATFORM_COLORS[parent.slug] || '#1B3369';
            const isOpen = mobOpen[parent.slug];
            return (
              <div key={parent.slug} className={styles.mobPlatform}>
                <button
                  className={styles.mobPlatformBtn}
                  onClick={() => toggleMobPlatform(parent.slug)}
                >
                  <span className={styles.mobPlatformBtnLeft}>
                    <span className={styles.mobPlatformIcon}>{parent.icon}</span>
                    {parent.title.replace(' Training in Bangalore', '')}
                  </span>
                  <ChevronDown
                    size={15}
                    className={`${styles.mobPlatformChevron} ${isOpen ? styles.mobPlatformChevronOpen : ''}`}
                  />
                </button>
                {isOpen && (
                  <div className={styles.mobChildren}>
                    {parent.children.map(child => (
                      <Link
                        key={child.slug}
                        href={child.href ?? `/services/${child.slug}`}
                        className={styles.mobChild}
                        onClick={() => setMenuOpen(false)}
                      >
                        <span className={styles.mobChildDot} style={{ background: color }} />
                        {child.title}
                      </Link>
                    ))}
                    <Link
                      href={`/courses/${parent.slug}`}
                      className={styles.mobViewAll}
                      style={{ color }}
                      onClick={() => setMenuOpen(false)}
                    >
                      <ArrowRight size={12} /> View All {parent.title.replace(' Training in Bangalore', '')} Courses
                    </Link>
                  </div>
                )}
              </div>
            );
          })}

          <div className={styles.mobSec}>More</div>
          {navLinks.slice(1).map(l => (
            <Link key={l.href} href={l.href} className={styles.mobLink} onClick={() => setMenuOpen(false)}>
              {l.label}
            </Link>
          ))}
          <Link href="/platforms" className={styles.mobLink} onClick={() => setMenuOpen(false)}>
            📋 Career Guides
          </Link>
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
