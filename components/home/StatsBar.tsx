import styles from './StatsBar.module.css';

const stats = [
  { icon: '👨‍💻', number: '10,000+', label: 'Professionals Trained' },
  { icon: '🏢', number: '200+',    label: 'Hiring Partners' },
  { icon: '📈', number: '98%',     label: 'Placement Rate' },
  { icon: '⭐', number: '4.9/5',   label: 'Google Rating' },
  { icon: '🎓', number: '15+',     label: 'Years of Excellence' },
  { icon: '📍', number: '6+',      label: 'Centres in Bangalore' },
];

export default function StatsBar() {
  return (
    <div style={{ background: 'linear-gradient(135deg, #0D1B3E 0%, #1B3369 60%, #1565C0 100%)' }}>
      <div className="container" style={{ padding: 0, maxWidth: '100%' }}>
        <div className={styles.grid}>
          {stats.map((s) => (
            <div key={s.label} className={styles.item}>
              <div className={styles.iconWrap}>
                <span className={styles.icon}>{s.icon}</span>
              </div>
              <div className={styles.number}>{s.number}</div>
              <div className={styles.label}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
