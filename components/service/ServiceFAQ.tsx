'use client';
import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, Phone, MessageCircle, ArrowRight, HelpCircle } from 'lucide-react';
import type { ServiceDetail } from '@/data/serviceDetails';
import type { ServiceItem } from '@/data/services';

interface Props { service: ServiceItem; detail: ServiceDetail; }

export default function ServiceFAQ({ service, detail }: Props) {
  const [open, setOpen] = useState<number | null>(0);
  const faqs = detail.faqs || [];
  if (faqs.length === 0) return null;

  return (
    <section style={{ background: 'var(--gray-50)', padding: '80px 0' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 56, alignItems: 'start' }}>
          {/* Left */}
          <div>
            <div className="sec-pill"><HelpCircle size={12} /> FAQ</div>
            <h2 className="sec-title">
              Frequently Asked<br /><span style={{ color: 'var(--purple)' }}>Questions</span>
            </h2>
            <p style={{ fontSize: '.9rem', color: 'var(--t-muted)', lineHeight: 1.7, marginBottom: 24 }}>
              Everything you need to know about {service.name} training at Nexus.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <a href="tel:+918888888888" style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '14px 18px', background: '#fff', border: '1px solid var(--gray-200)', borderRadius: 12, textDecoration: 'none', color: 'var(--t-dark)', boxShadow: 'var(--sh-xs)', transition: 'all .2s' }}>
                <div style={{ width: 38, height: 38, borderRadius: 10, background: 'rgba(123,47,190,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Phone size={17} style={{ color: 'var(--purple)' }} />
                </div>
                <div>
                  <div style={{ fontSize: '.7rem', color: 'var(--t-muted)', fontWeight: 500 }}>Have more questions? Call us</div>
                  <div style={{ fontSize: '.9rem', fontWeight: 700 }}>+91 88888 88888</div>
                </div>
              </a>
              <a href={`https://wa.me/918888888888?text=Hi+I+have+questions+about+${encodeURIComponent(service.name)}`} target="_blank" rel="noopener" style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '14px 18px', background: '#fff', border: '1px solid var(--gray-200)', borderRadius: 12, textDecoration: 'none', color: 'var(--t-dark)', boxShadow: 'var(--sh-xs)', transition: 'all .2s' }}>
                <div style={{ width: 38, height: 38, borderRadius: 10, background: 'rgba(37,211,102,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <MessageCircle size={17} style={{ color: 'var(--wa)' }} />
                </div>
                <div>
                  <div style={{ fontSize: '.7rem', color: 'var(--t-muted)', fontWeight: 500 }}>Chat on WhatsApp</div>
                  <div style={{ fontSize: '.9rem', fontWeight: 700 }}>Instant Reply</div>
                </div>
              </a>
            </div>
          </div>

          {/* FAQ Accordion */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {faqs.map((faq, i) => (
              <div key={i} style={{ background: '#fff', border: `1.5px solid ${open === i ? 'var(--purple)' : 'var(--gray-200)'}`, borderRadius: 12, overflow: 'hidden', transition: 'border-color .25s' }}>
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, padding: '16px 20px', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}
                >
                  <span style={{ fontFamily: "'Poppins',sans-serif", fontSize: '.88rem', fontWeight: 700, color: open === i ? 'var(--purple)' : 'var(--t-dark)' }}>{faq.q}</span>
                  <ChevronDown size={18} style={{ color: 'var(--purple)', flexShrink: 0, transition: 'transform .25s', transform: open === i ? 'rotate(180deg)' : '' }} />
                </button>
                {open === i && (
                  <div style={{ padding: '0 20px 16px', fontSize: '.85rem', color: 'var(--t-muted)', lineHeight: 1.75 }}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: 40 }}>
          <Link href="/contact" className="btn-primary" style={{ padding: '13px 32px' }}>
            Book Free Demo — No Commitment <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}
