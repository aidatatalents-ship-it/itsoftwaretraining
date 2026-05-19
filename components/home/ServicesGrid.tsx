'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Clock, BookOpen, Calendar, Star } from 'lucide-react';
import styles from './ServicesGrid.module.css';
import { services } from '@/data/services';

export { services };

export default function ServicesGrid() {
  return (
    <section style={{ background: '#fff', padding: '80px 0' }}>
      <div className="container">

        {/* Header */}
        <div style={{ marginBottom: 40 }}>
          <div className="sec-pill">🎓 6 Core IT Programmes · Online &amp; Offline</div>
          <h2 className="sec-title">Our <span>Core Courses</span></h2>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '1rem',
            color: '#6B7280',
            marginTop: 10,
            maxWidth: 540,
          }}>
            Six industry-leading IT programmes with live projects, global certifications,
            and 100% placement support.
          </p>
        </div>

        {/* 2-row × 3-column grid — all 6 services always visible */}
        <div className={styles.grid}>
          {services.map((s) => (
            <div key={s.slug} className={styles.card}>

              {/* Image */}
              <div className={styles.imgWrap}>
                <Image
                  src={s.img}
                  alt={`${s.name} in Bangalore`}
                  fill
                  className={styles.img}
                  sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                  priority={['salesforce', 'cloud', 'sap'].includes(s.slug)}
                />
                {s.badge && (
                  <span className={`${styles.cardBadge} ${
                    s.badgeType === 'hot'     ? 'badge-hot'
                    : s.badgeType === 'new'  ? 'badge-new'
                    : 'badge-recommended'
                  }`}>
                    {s.badge}
                  </span>
                )}
              </div>

              {/* Body */}
              <div className={styles.body}>
                <h3 className={styles.name}>{s.name}</h3>
                <p className={styles.tagline}>{s.tagline}</p>

                <div className={styles.meta}>
                  <span><Clock size={12} style={{ verticalAlign: 'middle', marginRight: 4, color: '#374151' }} />{s.duration}</span>
                  <span><BookOpen size={12} style={{ verticalAlign: 'middle', marginRight: 4, color: '#374151' }} />{s.modules} Modules</span>
                  <span><Calendar size={12} style={{ verticalAlign: 'middle', marginRight: 4, color: '#374151' }} />{s.nextBatch}</span>
                </div>

                <div className={styles.ratingRow}>
                  <div style={{ display: 'flex', gap: 1 }}>
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={11} style={{ color: '#FFC107', fill: '#FFC107' }} />
                    ))}
                  </div>
                  <span className={styles.ratingVal}>{s.rating}</span>
                  <span className={styles.ratingCount}>({s.students})</span>
                  <span className={styles.salary}>{s.salary}/yr</span>
                </div>

                <div className={styles.cardCtas}>
                  <Link href={`/services/${s.slug}`} className={styles.viewBtn}>
                    View Programs
                  </Link>
                  <Link href="/contact" className={styles.enrollBtn}>
                    Enroll Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div style={{ textAlign: 'center', marginTop: 52 }}>
          <Link href="/contact" className={styles.viewMoreBtn}>
            Browse All Courses →
          </Link>
        </div>

      </div>
    </section>
  );
}
