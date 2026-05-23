'use client';
import Link from 'next/link';
import { CheckCircle2, Users, Award } from 'lucide-react';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.grid}`}>

        {/* ── LEFT ── */}
        <div className={styles.left}>

          {/* Top badge */}
          <div className={styles.heroBadge}>
            <span className={styles.badgeDot} />
            <span className={styles.badgeText}>Bangalore&apos;s #1 IT Training Institute</span>
          </div>

          <h1 className={styles.h1}>
            Build Skills<br />
            That Get You{' '}
            <em className={styles.h1Accent}>Hired</em>
          </h1>

          <p className={styles.sub}>
            Industry-aligned IT courses with live projects, global certifications,
            and 100% placement support. Join 10,000+ professionals who transformed
            their careers with us.
          </p>

          {/* Trust signals */}
          <div className={styles.trustRow}>
            <div className={styles.trustItem}>
              <CheckCircle2 size={14} color="#22C55E" />
              100% Placement Support
            </div>
            <div className={styles.trustDivider} />
            <div className={styles.trustItem}>
              <Users size={14} color="#60A5FA" />
              10,000+ Trained
            </div>
            <div className={styles.trustDivider} />
            <div className={styles.trustItem}>
              <Award size={14} color="#FBBF24" />
              4.9★ Google Rating
            </div>
          </div>

          {/* CTAs */}
          <div className={styles.ctaRow}>
            <Link href="/contact" className={styles.ctaBtn}>
              Book Free Demo →
            </Link>
            <a href="tel:+918147111010" className={styles.ctaBtnGhost}>
              📞 Call Now
            </a>
          </div>
        </div>

        {/* ── RIGHT — Lead Form ── */}
        <div className={styles.right}>
          <div className={styles.leadFormCard}>
            <div className={styles.formHeader}>
              <h3>Book Your Free Demo</h3>
              <p>Get course curriculum, batch timings &amp; fee details instantly.</p>
            </div>
            <form suppressHydrationWarning className={styles.leadForm}>
              <input type="text" placeholder="Full Name *" required className={styles.inputField} />
              <input type="tel" placeholder="Mobile Number *" required className={styles.inputField} />
              <input type="email" placeholder="Email Address *" required className={styles.inputField} />
              <div className={styles.selectWrapper}>
                <select className={styles.inputField} required defaultValue="">
                  <option value="" disabled>Select Course *</option>
                  <option value="salesforce">Salesforce Training</option>
                  <option value="sap">SAP Training</option>
                  <option value="python">Python &amp; Data Science</option>
                  <option value="aws">AWS Cloud / Azure</option>
                  <option value="devops">DevOps &amp; Kubernetes</option>
                  <option value="cybersecurity">Cybersecurity / CEH</option>
                  <option value="powerbi">Power BI &amp; Analytics</option>
                  <option value="digital-marketing">Digital Marketing</option>
                </select>
              </div>
              <button type="submit" className={styles.submitBtn}>
                Request Free Demo →
              </button>
              <div className={styles.formFooter}>
                🔒 100% Secure · No spam · No sales calls
              </div>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
}
