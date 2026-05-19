import styles from './TestimonialsSection.module.css';

const testimonials = [
  { name: 'Priya Sharma', role: 'Salesforce Developer @ Infosys', avatar: 'PS', color: '#2563EB', rating: 5, text: 'I came from a non-IT background. Nexus\'s Salesforce training was hands-on with real CRM projects. Got placed at Infosys within 2 months of completing! The trainers were ex-Salesforce consultants.', course: 'Salesforce Developer', package: '₹8.5 LPA', city: 'Bangalore' },
  { name: 'Rahul Nair', role: 'AWS Solutions Architect @ Amazon', avatar: 'RN', color: '#D97706', rating: 5, text: 'AWS + Azure training at Nexus is the best in Bangalore. Real cloud labs, hands-on architecture projects. Cracked AWS SAA cert in first attempt and got selected at Amazon!', course: 'Cloud — AWS & Azure', package: '₹18 LPA', city: 'Bangalore' },
  { name: 'Divya Menon', role: 'Data Scientist @ Wipro', avatar: 'DM', color: '#059669', rating: 5, text: 'Python & Data Science course was incredibly comprehensive — from basics to GenAI. The mock interview prep and live projects made all the difference.', course: 'Python & Data Science', package: '₹12 LPA', city: 'Bangalore' },
  { name: 'Karthik Reddy', role: 'SAP FICO Consultant @ Deloitte', avatar: 'KR', color: '#7C3AED', rating: 5, text: 'The SAP FICO trainer had 18 years of SAP consulting experience. Deep functional knowledge. The case studies and end-to-end implementation projects were gold.', course: 'SAP FICO', package: '₹14 LPA', city: 'Bangalore' },
  { name: 'Ananya Singh', role: 'DevOps Engineer @ TCS', avatar: 'AS', color: '#0284C7', rating: 5, text: 'Jenkins pipelines, Docker, Kubernetes — all done on real servers. Not just theory. The placement team lined up 6 interview calls in 3 weeks. Placed at TCS!', course: 'DevOps', package: '₹9 LPA', city: 'Bangalore' },
  { name: 'Vikram Joshi', role: 'Cybersecurity Analyst @ HCL', avatar: 'VJ', color: '#DC2626', rating: 5, text: 'Real penetration testing labs, VAPT on live-environment replicas, CTF challenges. Cleared CEH with distinction. HCL hired me even before I finished the course!', course: 'Cybersecurity / CEH', package: '₹10.5 LPA', city: 'Bangalore' },
];

export default function TestimonialsSection() {
  return (
    <section style={{ padding: '80px 0', background: '#fff' }}>
      <div className="container">
        <div className="section-header">
          <div className="badge">Success Stories</div>
          <h2>Our Students, <span style={{ color: '#F26522', fontStyle: 'italic' }}>Their Success</span></h2>
          <p>Real stories from Bangalore alumni now working at the city&apos;s top IT companies.</p>
          <div className="divider" />
        </div>

        <div className={styles.grid}>
          {testimonials.map((t) => (
            <div key={t.name} className={styles.card}>
              <div className={styles.topRow}>
                <div className={styles.avatar} style={{ background: `${t.color}15`, color: t.color, border: `2px solid ${t.color}30` }}>
                  {t.avatar}
                </div>
                <div>
                  <div className={styles.name}>{t.name}</div>
                  <div className={styles.role}>{t.role}</div>
                  <div className="stars">★★★★★</div>
                </div>
              </div>
              <p className={styles.text}>&ldquo;{t.text}&rdquo;</p>
              <div className={styles.footer}>
                <span className={styles.coursePill} style={{ background: `${t.color}10`, color: t.color }}>{t.course}</span>
                <span className={styles.package}>📦 {t.package}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Google rating */}
        <div className={styles.googleBox}>
          <div className={styles.googleStars}>
            <span style={{ fontSize: '2rem' }}>⭐⭐⭐⭐⭐</span>
            <div>
              <div className={styles.googleRating}>4.9 / 5.0</div>
              <div className={styles.googleCount}>Based on 5,200+ Google Reviews</div>
            </div>
          </div>
          <div className={styles.googleVerified}>✅ Verified by Google My Business</div>
        </div>
      </div>
    </section>
  );
}
