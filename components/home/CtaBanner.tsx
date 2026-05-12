import Link from 'next/link';
import styles from './CtaBanner.module.css';

export default function CtaBanner() {
  return (
    <section className={styles.section}>
      <div className={styles.overlay} />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className={styles.inner}>
          {/* Left */}
          <div className={styles.left}>
            <div className={styles.liveDot}>
              <span className="pulse-dot" />
              <span>Admissions Open — June 2025</span>
            </div>
            <h2 className={styles.h2}>
              Take the First Step Towards<br />
              Your <span style={{ color: '#FFD700' }}>Dream IT Career</span>
            </h2>
            <p className={styles.sub}>
              Join 10,000+ professionals who transformed their careers through Nexus Training.
              Free demo. Zero pressure. Just world-class learning.
            </p>
            <div className={styles.ctas}>
              <Link href="/contact" className="btn-white">
                🎓 Book Free Demo Now
              </Link>
              <a
                href="https://wa.me/918888888888"
                target="_blank"
                rel="noopener"
                className="btn-whatsapp"
              >
                <svg width="18" height="18" viewBox="0 0 30 30" fill="none"><path d="M11.3 10.2c-.22-.5-.46-.51-.67-.52H9.9c-.19 0-.5.07-.76.35-.26.28-1 .98-1 2.38s1.02 2.77 1.16 2.96c.15.2 1.97 3.14 4.84 4.28 2.4.95 2.88.76 3.4.71.52-.05 1.67-.68 1.9-1.34.24-.66.24-1.22.17-1.34-.07-.12-.26-.19-.55-.33-.29-.14-1.67-.82-1.93-.91-.26-.1-.45-.14-.64.14-.19.29-.73.91-.9 1.1-.16.19-.33.21-.62.07-.29-.14-1.22-.45-2.33-1.43-.86-.77-1.44-1.71-1.61-2-.16-.29-.02-.44.12-.59.13-.13.29-.33.43-.5.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.08-.14-.64-1.55-.9-2.11z" fill="white"/><circle cx="15" cy="15" r="13" stroke="white" strokeWidth="1.5" fill="none" opacity="0.4"/></svg>
                WhatsApp Now
              </a>
            </div>
            <a href="tel:+918888888888" className={styles.phoneLink}>
              📞 +91 88888 88888 — Available 9am to 9pm, 7 Days
            </a>
          </div>

          {/* Right — Offer box */}
          <div className={styles.right}>
            <div className={styles.offerCard}>
              <div className={styles.offerTag}>🔥 June 2025 Special</div>
              <h3 className={styles.offerTitle}>What You Get — Free!</h3>
              <ul className={styles.offerList}>
                {[
                  'Free Demo Class (Worth ₹2,000)',
                  'Course Syllabus & Schedule',
                  'Trainer Profile & Reviews',
                  'Early Bird Discount',
                  'Certification Roadmap',
                  'Career Counselling Session',
                ].map((i) => (
                  <li key={i}>
                    <span className={styles.checkIcon}>✓</span>
                    {i}
                  </li>
                ))}
              </ul>
              <div className={styles.seatsLeft}>
                ⚠️ Only <strong>8 seats</strong> left in June batch — Register now!
              </div>
              <Link href="/contact" className="btn-primary" style={{ width: '100%', marginTop: '16px' }}>
                Reserve My Free Seat →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
