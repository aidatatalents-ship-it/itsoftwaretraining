'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Clock, BookOpen, Star, Users, TrendingUp, ArrowRight } from 'lucide-react';
import styles from './ServicesGrid.module.css';
import { services } from '@/data/services';

export { services };

// Per-platform vivid gradient overlays and accent colours
const PLATFORM_ACCENTS: Record<string, { gradient: string; accent: string; icon: string }> = {
  salesforce:          { gradient: 'linear-gradient(160deg,rgba(21,101,192,.72) 0%,rgba(11,26,61,.55) 60%,transparent 100%)',  accent: '#1565C0', icon: '☁️' },
  cloud:               { gradient: 'linear-gradient(160deg,rgba(217,119,6,.72)  0%,rgba(11,26,61,.55) 60%,transparent 100%)',  accent: '#D97706', icon: '⚡' },
  sap:                 { gradient: 'linear-gradient(160deg,rgba(124,58,237,.72)  0%,rgba(11,26,61,.55) 60%,transparent 100%)', accent: '#7C3AED', icon: '🔷' },
  'python-data-science': { gradient: 'linear-gradient(160deg,rgba(5,150,105,.72) 0%,rgba(11,26,61,.55) 60%,transparent 100%)',  accent: '#059669', icon: '🐍' },
  devops:              { gradient: 'linear-gradient(160deg,rgba(2,132,199,.72)   0%,rgba(11,26,61,.55) 60%,transparent 100%)',  accent: '#0284C7', icon: '🔄' },
  cybersecurity:       { gradient: 'linear-gradient(160deg,rgba(220,38,38,.72)   0%,rgba(11,26,61,.55) 60%,transparent 100%)', accent: '#DC2626', icon: '🛡️' },
};

export default function ServicesGrid() {
  return (
    <section style={{ background: '#fff', padding: '80px 0' }}>
      <div className="container">

        {/* Header */}
        <div style={{ marginBottom: 40 }}>
          <div className="sec-pill">🎓 6 Core IT Programmes · Online &amp; Offline</div>
          <h2 className="sec-title">Our <span>Core Courses</span></h2>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '1rem', color: '#6B7280', marginTop: 10, maxWidth: 540 }}>
            Six industry-leading IT programmes with live projects, global certifications, and 100% placement support.
          </p>
        </div>

        {/* Grid */}
        <div className={styles.grid}>
          {services.map((s) => {
            const accent = PLATFORM_ACCENTS[s.slug] ?? { gradient: 'linear-gradient(160deg,rgba(27,51,105,.72) 0%,transparent 100%)', accent: '#1B3369', icon: s.icon };
            return (
              <div key={s.slug} className={styles.card} style={{ '--card-accent': accent.accent } as React.CSSProperties}>

                {/* ── Image Area ── */}
                <div className={styles.imgWrap}>
                  <Image
                    src={s.img}
                    alt={`${s.name} in Bangalore`}
                    fill
                    className={styles.img}
                    sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                    priority={['salesforce', 'cloud', 'sap'].includes(s.slug)}
                  />

                  {/* Colour overlay — unique per platform */}
                  <div className={styles.imgOverlay} style={{ background: accent.gradient }} />

                  {/* Animated shimmer on hover */}
                  <div className={styles.imgShimmer} />

                  {/* Platform icon — floats top-right */}
                  <div className={styles.platformIcon}>{accent.icon}</div>

                  {/* Badge */}
                  {s.badge && (
                    <span className={`${styles.cardBadge} ${
                      s.badgeType === 'hot' ? 'badge-hot'
                      : s.badgeType === 'new' ? 'badge-new'
                      : 'badge-recommended'
                    }`}>
                      {s.badge}
                    </span>
                  )}

                  {/* Bottom image strip — salary + demand */}
                  <div className={styles.imgStrip}>
                    <div className={styles.imgStripStat}>
                      <TrendingUp size={11} />
                      <span>{s.salary}/yr</span>
                    </div>
                    <div className={styles.imgStripStat}>
                      <Users size={11} />
                      <span>{s.students} trained</span>
                    </div>
                    <div className={styles.imgStripDemand} style={{ background: accent.accent }}>
                      {s.demand} Demand
                    </div>
                  </div>
                </div>

                {/* ── Card Body ── */}
                <div className={styles.body}>
                  <h3 className={styles.name}>{s.name}</h3>
                  <p className={styles.tagline}>{s.tagline}</p>

                  <div className={styles.meta}>
                    <span><Clock size={12} style={{ verticalAlign: 'middle', marginRight: 4 }} />{s.duration}</span>
                    <span><BookOpen size={12} style={{ verticalAlign: 'middle', marginRight: 4 }} />{s.modules} Modules</span>
                  </div>

                  <div className={styles.ratingRow}>
                    <div style={{ display: 'flex', gap: 1 }}>
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={11} style={{ color: '#FFC107', fill: '#FFC107' }} />
                      ))}
                    </div>
                    <span className={styles.ratingVal}>{s.rating}</span>
                    <span className={styles.ratingCount}>({s.students})</span>
                  </div>

                  <div className={styles.cardCtas}>
                    <Link href={`/courses/${s.slug}`} className={styles.viewBtn}>
                      View Courses
                    </Link>
                    <Link href="/contact" className={styles.enrollBtn}>
                      Free Demo <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div style={{ textAlign: 'center', marginTop: 52 }}>
          <Link href="/all-courses" className={styles.viewMoreBtn}>
            Browse All Courses →
          </Link>
        </div>

      </div>
    </section>
  );
}
