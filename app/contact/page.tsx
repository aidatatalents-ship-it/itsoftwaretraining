import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Phone, Mail, MessageCircle, MapPin,
  CheckCircle, Clock,
  GraduationCap, Star,
} from 'lucide-react';
import ContactForm from '@/components/contact/ContactForm';
import { PHONE_DISPLAY, PHONE_E164, WHATSAPP_BASE, EMAIL } from '@/data/contact';

export const metadata: Metadata = {
  title: 'Book Free Demo Class | IT Software Training Bangalore',
  description: 'Book a free IT training demo class in Bangalore. Salesforce, SAP, Python, Cloud, Cybersecurity, DevOps. Call +91 99894 32324. Centres in Koramangala, Whitefield, HSR Layout.',
};

const courses = ['Salesforce', 'SAP', 'Cybersecurity', 'Python & Data Science', 'Cloud — AWS & Azure', 'Power BI & Analytics', 'DevOps'];

const offices = [
  { area: 'Koramangala', addr: '5th Block, Koramangala, Bangalore — 560034', ph: '+91 88888 88888', mapLink: '#' },
  { area: 'Whitefield', addr: 'ITPL Main Road, Whitefield, Bangalore — 560066', ph: '+91 77777 77777', mapLink: '#' },
  { area: 'HSR Layout', addr: '27th Main, Sector 2, HSR Layout — 560102', ph: '+91 66666 66666', mapLink: '#' },
];

const whyDemo = [
  'Experience teaching quality firsthand',
  'Meet the actual course trainer',
  'Understand the full curriculum & syllabus',
  'Know batch timings & exact fee structure',
  'Get a personalised learning roadmap',
  'Absolutely zero payment or registration fee',
];

const contactCards = [
  { Icon: Phone,         label: 'Call Us Now',     val: PHONE_DISPLAY,  href: `tel:${PHONE_E164}`,               iconBg: 'rgba(21,101,192,0.08)',  iconColor: '#1565C0' },
  { Icon: MessageCircle, label: 'WhatsApp Chat',   val: 'Get Instant Reply', href: `${WHATSAPP_BASE}?text=${encodeURIComponent('Hi, I want to book a free demo class')}`, iconBg: 'rgba(37,211,102,0.1)', iconColor: '#16A34A' },
  { Icon: Mail,          label: 'Email Us',        val: EMAIL,          href: `mailto:${EMAIL}`,                  iconBg: 'rgba(2,132,199,0.08)',   iconColor: '#0284C7' },
];

export default function ContactPage() {
  return (
    <main>
      {/* Hero */}
      <div style={{ background: 'var(--grad-hero)', padding: '56px 0 72px', position: 'relative', overflow: 'hidden', borderBottom: '1px solid rgba(123,47,190,0.12)' }}>
        <div style={{ position: 'absolute', top: '-60px', right: '-60px', width: 280, height: 280, borderRadius: '50%', background: 'rgba(123,47,190,0.08)', filter: 'blur(60px)', pointerEvents: 'none' }} />
        <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <div className="sec-pill" style={{ justifyContent: 'center', marginBottom: 14 }}>
            <GraduationCap size={12} /> Free Demo
          </div>
          <h1 style={{ fontFamily: "'Poppins',sans-serif", fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 900, color: 'var(--t-dark)', marginBottom: 12, lineHeight: 1.15 }}>
            Get Course Details &amp; <span style={{ color: 'var(--purple)' }}>Book Your Demo</span>
          </h1>
          <p style={{ color: 'var(--t-muted)', maxWidth: 480, margin: '0 auto', lineHeight: 1.7, fontSize: '1rem' }}>
            Our career counsellor will call you within 30 minutes with the full course details, batch schedule, and fee structure.
          </p>
        </div>
      </div>

      {/* Main content */}
      <section style={{ background: 'var(--gray-50)', padding: '0 0 80px' }}>
        <div className="container">
          <div className="grid-contact" style={{ marginTop: -32, position: 'relative', zIndex: 10 }}>

            {/* Registration Form — live via Web3Forms */}
            <div style={{ background: '#fff', border: '1px solid var(--gray-200)', borderRadius: 20, overflow: 'hidden', boxShadow: '0 12px 40px rgba(21,101,192,0.12)' }}>
              <div style={{ padding: '16px 24px', background: 'linear-gradient(135deg,#1B3369,#1565C0)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, color: '#fff', fontSize: '1rem' }}>Register for Free Demo</span>
                <span style={{ fontSize: '.75rem', color: 'rgba(255,255,255,.75)', display: 'flex', alignItems: 'center', gap: 5 }}>
                  <Clock size={12} /> Reply within 30 mins
                </span>
              </div>
              <ContactForm />
            </div>

            {/* Info Panel */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {/* Why demo */}
              <div style={{ background: '#fff', border: '1px solid var(--gray-200)', borderRadius: 14, padding: '20px 22px', boxShadow: 'var(--sh-sm)' }}>
                <div className="sec-pill" style={{ marginBottom: 12 }}>Why Book a Free Demo?</div>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 9 }}>
                  {whyDemo.map(item => (
                    <li key={item} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '.85rem', color: 'var(--t-body)' }}>
                      <div style={{ width: 20, height: 20, borderRadius: '50%', background: '#DCFCE7', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <CheckCircle size={12} style={{ color: '#28A745' }} />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact buttons */}
              {contactCards.map(({ Icon, label, val, href, iconBg, iconColor }) => (
                <a key={label} href={href} target={href.startsWith('https') ? '_blank' : undefined} rel="noopener"
                  style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '14px 18px', background: '#fff', border: '1.5px solid var(--gray-200)', borderRadius: 12, textDecoration: 'none', color: 'var(--t-dark)', transition: 'all .2s', boxShadow: 'var(--sh-xs)' }}>
                  <div style={{ width: 40, height: 40, borderRadius: 10, background: iconBg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Icon size={18} style={{ color: iconColor }} />
                  </div>
                  <div>
                    <div style={{ fontSize: '.7rem', color: 'var(--t-muted)', fontWeight: 500 }}>{label}</div>
                    <div style={{ fontSize: '.92rem', fontWeight: 700 }}>{val}</div>
                  </div>
                </a>
              ))}

              {/* Training Centres */}
              <div className="sec-pill" style={{ marginTop: 4 }}>
                <MapPin size={12} /> Our Training Centres
              </div>
              {offices.map(o => (
                <div key={o.area} style={{ background: '#fff', border: '1px solid var(--gray-200)', borderRadius: 12, padding: '14px 18px', boxShadow: 'var(--sh-xs)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 3 }}>
                    <MapPin size={14} style={{ color: 'var(--purple)', flexShrink: 0 }} />
                    <p style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: '.9rem', color: 'var(--t-dark)' }}>{o.area}</p>
                  </div>
                  <p style={{ fontSize: '.76rem', color: 'var(--t-muted)', marginBottom: 5, paddingLeft: 22 }}>{o.addr}</p>
                  <a href={`tel:${o.ph.replace(/\s/g, '')}`} style={{ fontSize: '.82rem', color: 'var(--purple)', fontWeight: 700, textDecoration: 'none', paddingLeft: 22, display: 'flex', alignItems: 'center', gap: 5 }}>
                    <Phone size={12} /> {o.ph}
                  </a>
                </div>
              ))}

              {/* Trust badges */}
              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                {[
                  { Icon: Star,         label: '4.9 Google Rating' },
                  { Icon: GraduationCap, label: '10,000+ Placed' },
                  { Icon: CheckCircle,  label: 'ISO Certified' },
                ].map(({ Icon, label }) => (
                  <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '7px 14px', background: '#fff', border: '1px solid var(--gray-200)', borderRadius: 99, fontSize: '.76rem', fontWeight: 600, color: 'var(--t-dark)', boxShadow: 'var(--sh-xs)' }}>
                    <Icon size={13} style={{ color: 'var(--purple)' }} /> {label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
