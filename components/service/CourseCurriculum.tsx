'use client';
import { useState } from 'react';
import Link from 'next/link';
import type { ServiceDetail } from '@/data/serviceDetails';
import type { ServiceItem } from '@/data/services';
import styles from './CourseCurriculum.module.css';

interface Props {
  service: ServiceItem;
  detail: ServiceDetail;
}

export default function CourseCurriculum({ service, detail }: Props) {
  const [activeTab, setActiveTab] = useState(0);
  const curriculum = detail.curriculum || [];
  const tools = detail.tools || [];
  const certs = detail.certifications || [];

  if (curriculum.length === 0) return null;

  return (
    <section className={styles.wrap}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <div className="sec-pill" style={{ justifyContent: 'center' }}>📚 Full Curriculum</div>
          <h2 className="sec-title" style={{ textAlign: 'center' }}>
            What You Will <span style={{ color: 'var(--purple)' }}>Learn</span>
          </h2>
        </div>

        {/* Tabs */}
        <div className={styles.tabs}>
          {curriculum.map((m, i) => (
            <button
              key={i}
              className={`${styles.tab} ${activeTab === i ? styles.tabActive : ''}`}
              onClick={() => setActiveTab(i)}
            >
              <span className={styles.tabNum}>{String(i + 1).padStart(2, '0')}</span>
              {m.module}
            </button>
          ))}
        </div>

        {/* Active module content */}
        <div className={styles.content}>
          <div className={styles.moduleHead}>
            <h3 className={styles.moduleName}>{curriculum[activeTab]?.module}</h3>
            <span className={styles.moduleCount}>{curriculum[activeTab]?.topics.length} Topics</span>
          </div>
          <div className={styles.topicsGrid}>
            {curriculum[activeTab]?.topics.map(topic => (
              <div key={topic} className={styles.topic}>
                <span style={{ color: 'var(--purple)', fontWeight: 700, marginRight: 8 }}>✓</span>
                {topic}
              </div>
            ))}
          </div>
        </div>

        {/* Tools + Certs */}
        <div className={styles.bottomRow}>
          {tools.length > 0 && (
            <div className={styles.toolsBox}>
              <div className="sec-pill">🔧 Tools You Will Use</div>
              <div className={styles.toolsGrid}>
                {tools.map(t => (
                  <span key={t} className={styles.toolChip}>{t}</span>
                ))}
              </div>
            </div>
          )}
          {certs.length > 0 && (
            <div className={styles.certsBox}>
              <div className="sec-pill">🏆 Certifications</div>
              <ul className={styles.certsList}>
                {certs.map(c => (
                  <li key={c} className={styles.certItem}>
                    <span style={{ color: '#28A745', marginRight: 8 }}>✓</span>{c}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div style={{ textAlign: 'center', marginTop: 32 }}>
          <Link href="/contact" className="btn-primary" style={{ padding: '13px 32px' }}>
            Download Full Syllabus →
          </Link>
        </div>
      </div>
    </section>
  );
}
