import styles from './TrustLogos.module.css';

const companies = [
  'Infosys', 'Wipro', 'TCS', 'Accenture', 'Cognizant',
  'IBM', 'Capgemini', 'HCL Tech', 'Tech Mahindra', 'Deloitte',
  'Amazon', 'Microsoft', 'Salesforce', 'SAP India', 'Oracle',
  'Google', 'KPMG', 'EY', 'Mindtree', 'Mphasis',
];

export default function TrustLogos() {
  const doubled = [...companies, ...companies];
  return (
    <div className={styles.wrapper}>
      <div className="container">
        <p className={styles.label}>Our students placed at top companies across India</p>
      </div>
      <div className={styles.track}>
        <div className={styles.inner}>
          {doubled.map((c, i) => (
            <div key={i} className={styles.logo}>
              <span className={styles.logoDot} />
              {c}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
