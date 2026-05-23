import Link from 'next/link';
import {
  TrendingUp, Globe, Shield, Rocket,
  CheckCircle, ArrowRight,
} from 'lucide-react';
import type { ServiceDetail } from '@/data/serviceDetails';
import type { ServiceItem } from '@/data/services';

interface Props { service: ServiceItem; detail: ServiceDetail; }

const benefits = [
  { Icon: TrendingUp, title: '3–5x Salary Growth', body: 'IT skills offer the fastest salary growth path in India. Bangalore pays premium for every technology on this page.', color: '#7B2FBE' },
  { Icon: Globe,      title: 'Work Anywhere Globally', body: 'These skills are globally valued. Opportunities open in US, UK, Canada, Australia, Singapore and UAE.', color: '#28A745' },
  { Icon: Shield,     title: 'Recession-Proof Career', body: 'IT professionals are the last to be affected by layoffs. Technology is the backbone of every industry.', color: '#0284C7' },
  { Icon: Rocket,     title: 'Fast-Track Promotions', body: 'Move from fresher to senior in 2–3 years. Leadership roles open up faster in tech than any other sector.', color: '#D63384' },
];

export default function ServiceWhy({ service, detail }: Props) {
  const roles = detail.careerRoles || [];

  return (
    <section style={{ background: '#fff', padding: '80px 0' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <div className="sec-pill" style={{ justifyContent: 'center' }}>Why Learn This</div>
          <h2 className="sec-title" style={{ textAlign: 'center' }}>
            Why <span style={{ color: 'var(--purple)' }}>{service.short}</span> in 2026?
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48 }}>
          {/* Benefits */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            {benefits.map(({ Icon, title, body, color }) => (
              <div key={title} style={{ padding: '22px 20px', background: 'var(--gray-50)', border: '1px solid var(--gray-200)', borderRadius: 14, transition: 'all .3s' }}>
                <div style={{ width: 44, height: 44, borderRadius: 10, background: `${color}10`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 12 }}>
                  <Icon size={20} style={{ color }} />
                </div>
                <h4 style={{ fontFamily: "'Poppins',sans-serif", fontSize: '.9rem', fontWeight: 700, color: 'var(--t-dark)', marginBottom: 6 }}>{title}</h4>
                <p style={{ fontSize: '.8rem', color: 'var(--t-muted)', lineHeight: 1.65 }}>{body}</p>
              </div>
            ))}
          </div>

          {/* Career Roles */}
          {roles.length > 0 && (
            <div style={{ background: 'var(--grad-hero)', border: '1px solid rgba(123,47,190,0.15)', borderRadius: 16, padding: 24 }}>
              <div className="sec-pill" style={{ marginBottom: 16 }}>Career Roles You Can Target</div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {roles.map((role, i) => (
                  <div key={role} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '12px 0', borderBottom: '1px solid rgba(123,47,190,0.1)' }}>
                    <span style={{ fontFamily: "'Poppins',sans-serif", fontSize: '.72rem', fontWeight: 800, color: 'var(--purple)', minWidth: 28, background: 'rgba(123,47,190,0.1)', padding: '2px 6px', borderRadius: 4, textAlign: 'center' }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span style={{ flex: 1, fontSize: '.9rem', fontWeight: 600, color: 'var(--t-dark)' }}>{role}</span>
                    <CheckCircle size={14} style={{ color: 'var(--purple)', flexShrink: 0 }} />
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 20 }}>
                <Link href="/contact" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  Get Free Career Counselling <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
