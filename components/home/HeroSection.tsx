'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.grid}`}>

        {/* ── LEFT ── */}
        <div className={styles.left}>
          <h1 className={styles.h1}>
            Build Skills<br />
            That Get You Hired
          </h1>
          <p className={styles.sub}>
            Industry-aligned IT courses with practical projects and certification.
          </p>
          <Link href="/contact" className={styles.ctaBtn}>
            Get Started
          </Link>
        </div>

        {/* ── RIGHT — Lead Form ── */}
        <div className={styles.right}>
          <div className={styles.leadFormCard}>
            <div className={styles.formHeader}>
              <h3>Book Your Free Demo</h3>
              <p>Enter your details to get course curriculum and batch timings.</p>
            </div>
            <form suppressHydrationWarning className={styles.leadForm}>
              <input type="text" placeholder="Full Name *" required className={styles.inputField} />
              <input type="tel" placeholder="Mobile Number *" required className={styles.inputField} />
              <input type="email" placeholder="Email Address *" required className={styles.inputField} />
              <div className={styles.selectWrapper}>
                <select className={styles.inputField} required defaultValue="">
                  <option value="" disabled>Select Course *</option>
                  <option value="python">Python Full Stack</option>
                  <option value="data-science">Data Science & AI</option>
                  <option value="aws">AWS Cloud</option>
                  <option value="digital-marketing">Digital Marketing</option>
                </select>
              </div>
              <button type="submit" className={styles.submitBtn}>
                Request Free Demo
              </button>
              <div className={styles.formFooter}>
                🔒 100% Secure. We never share your data.
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
