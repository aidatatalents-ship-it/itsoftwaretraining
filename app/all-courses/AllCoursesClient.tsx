'use client';
import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, Clock, IndianRupee, BookOpen, ArrowRight, Users, Award, TrendingUp } from 'lucide-react';
import { courseTree } from '@/data/courseTree';
import { PHONE_DISPLAY, PHONE_E164 } from '@/data/contact';
import styles from './AllCourses.module.css';

const PLATFORM_COLORS: Record<string, string> = {
  salesforce: '#1565C0',
  cloud:      '#D97706',
  sap:        '#7C3AED',
  'python-data-science': '#059669',
  devops:     '#0284C7',
  cybersecurity: '#DC2626',
};

export default function AllCoursesClient() {
  const [open, setOpen] = useState<Record<string, boolean>>(
    Object.fromEntries(courseTree.map(p => [p.slug, true]))
  );

  const toggle = (slug: string) => setOpen(prev => ({ ...prev, [slug]: !prev[slug] }));

  const totalCourses = courseTree.reduce((sum, p) => sum + p.children.length, 0);

  return (
    <>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroGrid} />
        <div className={styles.heroGlow} />
        <div className={styles.heroInner}>
          <div className={styles.heroBadge}>
            <span className={styles.heroBadgeDot} />
            Admissions Open · June 2026 Batch
          </div>
          <h1 className={styles.heroH1}>
            All IT Training Courses<br />
            <em>in Bangalore</em>
          </h1>
          <p className={styles.heroSub}>
            {courseTree.length} platforms · {totalCourses}+ specialisations · Live projects · Global certifications · 100% placement support
          </p>
          <div className={styles.heroStats}>
            {[
              { Icon: Users,      label: '10,000+ Placed' },
              { Icon: Award,      label: '20+ Certifications' },
              { Icon: TrendingUp, label: '₹4L → ₹45L Salary Jumps' },
              { Icon: Clock,      label: '60-Day Avg. Offer' },
            ].map(({ Icon, label }) => (
              <div key={label} className={styles.heroStatItem}>
                <Icon size={14} className={styles.heroStatIcon} />
                {label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COURSE DIRECTORY */}
      <section className={styles.body}>
        <div className={styles.container}>

          {/* Summary bar */}
          <div className={styles.summaryBar}>
            <div className={styles.summaryCount}>
              <span>{totalCourses}</span> Courses across <span>{courseTree.length}</span> Platforms
            </div>
            <div className={styles.summaryActions}>
              <button className={styles.toggleAll} onClick={() => setOpen(Object.fromEntries(courseTree.map(p => [p.slug, true])))}>Expand All</button>
              <button className={styles.toggleAll} onClick={() => setOpen(Object.fromEntries(courseTree.map(p => [p.slug, false])))}>Collapse All</button>
            </div>
          </div>

          {/* Platform sections */}
          {courseTree.map(parent => {
            const color = PLATFORM_COLORS[parent.slug] || '#1B3369';
            const isOpen = open[parent.slug] ?? true;

            return (
              <div key={parent.slug} className={styles.platform}>
                {/* Platform header */}
                <div className={styles.platformHeader} style={{ borderLeftColor: color }}>
                  <div className={styles.platformLeft}>
                    <div className={styles.platformIcon} style={{ background: `${color}18` }}>
                      {parent.icon}
                    </div>
                    <div>
                      <div className={styles.platformTitle}>{parent.title.replace(' Training in Bangalore', '')}</div>
                      <div className={styles.platformTagline}>{parent.tagline}</div>
                    </div>
                  </div>
                  <div className={styles.platformRight}>
                    <span className={styles.platformCount} style={{ background: `${color}15`, color }}>
                      {parent.children.length} course{parent.children.length > 1 ? 's' : ''}
                    </span>
                    <Link href={`/courses/${parent.slug}`} className={styles.platformViewAll} style={{ color }}>
                      View All <ArrowRight size={13} />
                    </Link>
                    <button
                      className={`${styles.platformToggle} ${isOpen ? styles.platformToggleOpen : ''}`}
                      onClick={() => toggle(parent.slug)}
                      aria-label={isOpen ? 'Collapse' : 'Expand'}
                    >
                      <ChevronDown size={18} />
                    </button>
                  </div>
                </div>

                {/* Child courses */}
                {isOpen && (
                  <div className={styles.childGrid}>
                    {parent.children.map(child => (
                      <Link
                        key={child.slug}
                        href={child.href ?? `/services/${child.slug}`}
                        className={styles.childCard}
                        style={{ '--card-color': color } as React.CSSProperties}
                      >
                        <div className={styles.childTop}>
                          <span className={styles.childIcon}>{child.icon}</span>
                          {child.badge && (
                            <span className={styles.childBadge} style={{ color, background: `${color}15` }}>
                              {child.badge}
                            </span>
                          )}
                        </div>
                        <div className={styles.childTitle}>{child.title}</div>
                        <div className={styles.childTagline}>{child.tagline}</div>
                        <div className={styles.childMeta}>
                          <span className={styles.childMetaItem}><Clock size={10} />{child.duration}</span>
                          <span className={styles.childMetaItem}><BookOpen size={10} />{child.level}</span>
                          <span className={styles.childMetaItem}><IndianRupee size={10} />{child.salary}</span>
                        </div>
                        <div className={styles.childCta} style={{ color }}>
                          View Course <ArrowRight size={12} />
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className={styles.cta}>
        <h2 className={styles.ctaH}>Not sure which course to pick?</h2>
        <p className={styles.ctaP}>
          Book a free 30-minute counselling call. We&apos;ll help you choose the right track
          based on your background and career goals — no pressure, just honest guidance.
        </p>
        <div className={styles.ctaBtns}>
          <Link href="/contact" className={styles.ctaBtnOrange}>Book Free Counselling →</Link>
          <a href={`tel:${PHONE_E164}`} className={styles.ctaBtnGhost}>📞 {PHONE_DISPLAY}</a>
        </div>
      </section>
    </>
  );
}
