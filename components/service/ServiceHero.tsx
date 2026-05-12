import Link from 'next/link';
import {
  Clock, IndianRupee, Calendar, TrendingUp,
  Monitor, CreditCard, Award, CheckCircle,
  ArrowRight, Phone, MessageCircle, AlertTriangle,
} from 'lucide-react';
import type { ServiceItem } from '@/data/services';
import styles from './ServiceHero.module.css';

interface Props { service: ServiceItem; }

const highlightIcons = [
  { key: 'Duration',       Icon: Clock },
  { key: 'Avg Salary',     Icon: IndianRupee },
  { key: 'Next Batch',     Icon: Calendar },
  { key: 'Placement Rate', Icon: TrendingUp },
  { key: 'Training Mode',  Icon: Monitor },
  { key: 'EMI Available',  Icon: CreditCard },
  { key: 'Certificate',    Icon: Award },
];

const highlights = (s: ServiceItem) => [
  { k: 'Duration',        v: s.duration,                red: false },
  { k: 'Avg Salary',      v: s.salary,                  red: false },
  { k: 'Next Batch',      v: `${s.nextBatch} 2025`,     red: true  },
  { k: 'Placement Rate',  v: '98%',                     red: false },
  { k: 'Training Mode',   v: 'Classroom + Online',       red: false },
  { k: 'EMI Available',   v: '0% Interest',              red: false },
  { k: 'Certificate',     v: 'Industry Recognised',      red: false },
];

export default function ServiceHero({ service }: Props) {
  return (
    <section className={styles.hero}>
      <div className="container">
        {/* Breadcrumb */}
        <div className={styles.bc}>
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/#courses">Courses</Link>
          <span>/</span>
          <span>{service.name}</span>
        </div>

        <div className={styles.grid}>
          {/* LEFT */}
          <div className={styles.left}>
            <div className={styles.demandBadge}>
              <span className="dot-live" />
              {service.demand} Demand — Industry Leading Course
            </div>

            <h1 className={styles.h1}>
              Best <span style={{ color: 'var(--purple)' }}>{service.name}</span><br />
              in Bangalore
            </h1>

            <p className={styles.tagline}>{service.tagline}</p>
            <p className={styles.desc}>{service.description}</p>

            {/* Quick meta */}
            <div className={styles.quickMeta}>
              {[
                { Icon: Clock,       label: 'Duration',  val: service.duration },
                { Icon: IndianRupee, label: 'Avg Salary', val: service.salary },
                { Icon: Calendar,    label: 'Next Batch', val: service.nextBatch, red: true },
                { Icon: TrendingUp,  label: 'Placement',  val: '98%' },
              ].map(({ Icon, label, val, red }) => (
                <div key={label} className={styles.qm}>
                  <div className={styles.qiWrap}><Icon size={14} style={{ color: '#A5B4FC' }} /></div>
                  <div>
                    <span className={styles.qv} style={red ? { color: '#DC3545' } : {}}>{val}</span>
                    <span className={styles.ql}>{label}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Module tags */}
            <div className={styles.tags}>
              {service.courses.map(c => (
                <span key={c} className={styles.tag}>
                  <CheckCircle size={11} style={{ color: '#A5B4FC', flexShrink: 0 }} /> {c}
                </span>
              ))}
            </div>

            <div className={styles.ctaRow}>
              <Link href="/contact" className="btn-primary" style={{ padding: '14px 28px', fontSize: '0.95rem' }}>
                Book Free Demo <ArrowRight size={16} />
              </Link>
              <a
                href={`https://wa.me/918888888888?text=Hi+I+am+interested+in+${encodeURIComponent(service.name)}+in+Bangalore`}
                target="_blank" rel="noopener"
                className="btn-wa"
              >
                <MessageCircle size={16} /> WhatsApp Enquiry
              </a>
            </div>

            <p style={{ fontSize: '.8rem', color: 'rgba(255,255,255,0.55)', display: 'flex', alignItems: 'center', gap: 6 }}>
              <Phone size={13} style={{ color: '#7DD3FC' }} />
              <a href="tel:+918888888888" style={{ color: '#7DD3FC', fontWeight: 700, textDecoration: 'none' }}>+91 88888 88888</a>
              <span>· Mon–Sat, 9am–8pm</span>
            </p>
          </div>

          {/* RIGHT */}
          <div className={styles.right}>
            {/* Course image */}
            <div className={styles.imgWrap}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={service.img} alt={service.name} className={styles.img} />
              <div className={styles.urgency}>
                <AlertTriangle size={14} style={{ flexShrink: 0 }} />
                Only <strong>8 seats left</strong> in {service.nextBatch} batch!
              </div>
            </div>

            {/* Enrol card */}
            <div className={styles.enrolCard}>
              <div className={styles.enrolHead}>
                <span style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, color: '#fff' }}>Course Highlights</span>
                <span style={{ fontSize: '.72rem', color: 'rgba(255,255,255,.7)' }}>Updated June 2025</span>
              </div>
              <div className={styles.enrolBody}>
                {highlights(service).map(r => {
                  const iconItem = highlightIcons.find(h => h.key === r.k);
                  const Icon = iconItem?.Icon;
                  return (
                    <div key={r.k} className={styles.eRow}>
                      <span className={styles.ek} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                        {Icon && <Icon size={13} style={{ color: '#A5B4FC' }} />} {r.k}
                      </span>
                      <span className={styles.ev} style={r.red ? { color: '#DC3545', fontWeight: 700 } : {}}>{r.v}</span>
                    </div>
                  );
                })}
                <div style={{ padding: '10px 0 0', display: 'flex', alignItems: 'center', gap: 4 }}>
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#FFC107"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                  ))}
                  <span style={{ fontWeight: 700, fontSize: '.85rem', marginLeft: 4, color: '#fff' }}>4.9</span>
                  <span style={{ fontSize: '.75rem', color: 'rgba(255,255,255,0.55)' }}>(5,000+ reviews)</span>
                </div>
                <Link href="/contact" className="btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: 8 }}>
                  Reserve My Seat <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
