'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Clock, BookOpen, Calendar, Star } from 'lucide-react';
import styles from './ServicesGrid.module.css';
import { services } from '@/data/services';

export { services };

const TABS = ['All Courses', 'Hot', 'Recommended', 'Most Placed'];

export default function ServicesGrid() {
  const [tab, setTab] = useState('All Courses');

  const filtered = tab === 'All Courses' ? services
    : tab === 'Hot' ? services.filter(s => s.badgeType === 'hot')
    : tab === 'Recommended' ? services.filter(s => s.category === 'recommended')
    : services.filter(s => s.category === 'popular');

  return (
    <section style={{ background: '#fff', padding: '80px 0' }}>
      <div className="container">
        {/* Header */}
        <div className={styles.header}>
          <div>
            <div className="sec-pill">🎓 {services.length}+ Online &amp; Offline Courses</div>
            <h2 className="sec-title">Our <span>Popular Courses</span></h2>
          </div>
          {/* Filter tabs */}
          <div className={styles.tabs}>
            {TABS.map(t => (
              <button key={t} className={`${styles.tab} ${tab === t ? styles.tabActive : ''}`} onClick={() => setTab(t)}>
                {t === 'Hot' && <span className="badge-hot" style={{ fontSize: '0.6rem', padding: '1px 6px' }}>New</span>}
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Course cards grid */}
        <div className={styles.grid}>
          {filtered.map(s => (
            <div key={s.slug} className={styles.card}>
              {/* Image */}
              <div className={styles.imgWrap}>
                <Image src={s.img} alt={s.name} fill className={styles.img} sizes="(max-width:768px) 100vw, 33vw" />
                {s.badge && (
                  <span className={`${styles.cardBadge} ${
                    s.badgeType === 'hot' ? 'badge-hot'
                    : s.badgeType === 'new' ? 'badge-new'
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
                    {[...Array(5)].map((_, i) => <Star key={i} size={11} style={{ color: '#FFC107', fill: '#FFC107' }} />)}
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

        <div style={{ textAlign: 'center', marginTop: 48 }}>
          <Link href="/contact" className={styles.viewMoreBtn}>View More Courses</Link>
        </div>
      </div>
    </section>
  );
}
