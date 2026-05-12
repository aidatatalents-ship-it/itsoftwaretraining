import Link from 'next/link';
import styles from './WhyChooseUs.module.css';

const reasons = [
  { icon: '🧑‍🏫', title: 'Industry Expert Trainers', desc: 'All trainers have 10–20 years of real-world enterprise experience. Zero theoretical-only faculty.', color: '#2563EB' },
  { icon: '🔴', title: 'Live Project Training', desc: 'Hands-on projects on real client-grade environments. Graduate with a portfolio employers love.', color: '#DC2626' },
  { icon: '💼', title: '100% Placement Support', desc: 'Dedicated placement cell. 200+ hiring partners. Resume building, mock interviews, and direct referrals.', color: '#059669' },
  { icon: '📜', title: 'Global Certifications', desc: 'Prepare for Salesforce, SAP, AWS, Azure, CEH, and other globally recognised certifications.', color: '#7C3AED' },
  { icon: '🔄', title: 'Flexible Batch Timings', desc: 'Weekday morning/evening, Weekend, Fast-Track, and Online instructor-led batches to suit you.', color: '#0284C7' },
  { icon: '🔁', title: 'Lifetime Course Access', desc: 'Re-attend any batch free of cost. Access recordings for life. Never let your skills go stale.', color: '#D97706' },
  { icon: '📦', title: 'Small Batch Sizes', desc: 'Max 15 students per batch. Personal attention from trainers. Your questions always get answered.', color: '#7C3AED' },
  { icon: '📍', title: '6 Centres in Bangalore', desc: 'Koramangala, Whitefield, HSR Layout, Marathahalli, Indiranagar, Electronic City.', color: '#059669' },
];

export default function WhyChooseUs() {
  return (
    <section style={{ padding: '80px 0', background: 'var(--bg-section)' }}>
      <div className="container">
        <div className="section-header">
          <div className="badge">Why Students Choose Us</div>
          <h2>The Nexus Training <span className="grad-text">Difference</span></h2>
          <p>We don&apos;t just teach technology. We engineer careers. Here&apos;s what sets us apart from every other IT institute in Bangalore.</p>
          <div className="divider" />
        </div>

        <div className={styles.grid}>
          {reasons.map((r) => (
            <div key={r.title} className={styles.card}>
              <div className={styles.icon} style={{ background: `${r.color}12`, border: `1px solid ${r.color}25` }}>
                <span style={{ fontSize: '1.4rem' }}>{r.icon}</span>
              </div>
              <h3 className={styles.title}>{r.title}</h3>
              <p className={styles.desc}>{r.desc}</p>
              <div className={styles.accent} style={{ background: r.color }} />
            </div>
          ))}
        </div>

        {/* Mid CTA */}
        <div className={styles.midCta}>
          <div>
            <h3 className={styles.midCtaH}>Still deciding? Talk to a student who&apos;s been through our training.</h3>
            <p className={styles.midCtaP}>We&apos;ll connect you with our alumni for an unbiased conversation. No sales pitch.</p>
          </div>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn-primary">Book Free Demo</Link>
            <a href="tel:+918888888888" className="btn-outline">📞 Call Now</a>
          </div>
        </div>
      </div>
    </section>
  );
}
