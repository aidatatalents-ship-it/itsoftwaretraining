import styles from './StatsBar.module.css';

const stats = [
  { icon: '👨‍💻', number: '10,000+', label: 'Professionals Trained', color: '#2563EB' },
  { icon: '🏢', number: '200+', label: 'Hiring Partners', color: '#7C3AED' },
  { icon: '📈', number: '98%', label: 'Placement Rate', color: '#059669' },
  { icon: '⭐', number: '4.9/5', label: 'Google Rating', color: '#D97706' },
  { icon: '🎓', number: '15+', label: 'Years of Excellence', color: '#0284C7' },
  { icon: '📍', number: '6+', label: 'Centres in Bangalore', color: '#DC2626' },
];

export default function StatsBar() {
  return (
    <section style={{ padding: '56px 0', background: 'var(--bg-light)' }}>
      <div className="container">
        <div className={styles.grid}>
          {stats.map((s) => (
            <div key={s.label} className={styles.item}>
              <div className={styles.iconWrap} style={{ background: `${s.color}12` }}>
                <span className={styles.icon}>{s.icon}</span>
              </div>
              <div className={styles.number} style={{ color: s.color }}>{s.number}</div>
              <div className={styles.label}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
