import styles from './PlacementsSection.module.css';

const placements = [
  { company: 'Infosys', count: '1,200+', logo: 'IN', color: '#0066CC' },
  { company: 'Wipro', count: '980+', logo: 'WI', color: '#341C85' },
  { company: 'TCS', count: '1,500+', logo: 'TC', color: '#CC0000' },
  { company: 'Accenture', count: '840+', logo: 'AC', color: '#A100FF' },
  { company: 'Cognizant', count: '760+', logo: 'CG', color: '#0033A0' },
  { company: 'IBM', count: '540+', logo: 'IB', color: '#006699' },
  { company: 'Capgemini', count: '620+', logo: 'CA', color: '#0070AD' },
  { company: 'Amazon', count: '380+', logo: 'AM', color: '#FF9900' },
];

export default function PlacementsSection() {
  return (
    <section style={{ padding: '80px 0', background: '#F8F9FC' }}>
      <div className="container">
        <div className="section-header">
          <div className="badge">Placement Record</div>
          <h2>10,000+ Careers at <span style={{ color: '#F26522', fontStyle: 'italic' }}>Top Companies</span></h2>
          <p>Our graduates power Bangalore&apos;s biggest IT firms. Your future employer is very likely on this list.</p>
          <div className="divider" />
        </div>

        {/* Highlights strip */}
        <div className={styles.highlights}>
          {[
            { v: '10,000+', l: 'Placed Till Date', i: '🚀' },
            { v: '₹22 LPA', l: 'Highest Package', i: '💰' },
            { v: '340%', l: 'Avg Salary Hike', i: '📈' },
            { v: '45 Days', l: 'Avg Time to Placement', i: '⚡' },
          ].map((h) => (
            <div key={h.l} className={styles.highlight}>
              <span className={styles.hIcon}>{h.i}</span>
              <span className={styles.hVal}>{h.v}</span>
              <span className={styles.hLbl}>{h.l}</span>
            </div>
          ))}
        </div>

        {/* Company grid */}
        <div className={styles.companies}>
          {placements.map((p) => (
            <div key={p.company} className={styles.company}>
              <div className={styles.cLogo} style={{ background: `${p.color}15`, color: p.color }}>
                {p.logo}
              </div>
              <div className={styles.cInfo}>
                <div className={styles.cName}>{p.company}</div>
                <div className={styles.cCount} style={{ color: p.color }}>{p.count} Placed</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
