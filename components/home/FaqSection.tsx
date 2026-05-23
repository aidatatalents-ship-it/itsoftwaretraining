'use client';
import { useState } from 'react';
import styles from './FaqSection.module.css';

interface Faq { q: string; a: string; category: string; }

const faqs: Faq[] = [
  // Course Selection
  { category: 'Course Selection', q: 'Which IT course has the highest salary in Bangalore in 2026?', a: 'Salesforce (particularly LWC and CPQ specialists), Cloud Architecture (AWS/Azure), and SAP are the highest-paying IT courses in Bangalore. Freshers with Salesforce Admin certification earn ₹4–7 LPA, while experienced cloud architects earn ₹25–45 LPA. DevOps and cybersecurity roles also show consistent 25–35% year-on-year salary growth.' },
  { category: 'Course Selection', q: 'Which IT software training course is best for freshers in Bangalore?', a: 'Salesforce Administrator, Power BI, and Python with Data Science are the three best IT software courses for freshers in Bangalore in 2026. These platforms have the lowest prior-knowledge barrier, the highest volume of entry-level job openings, and deliver an average first salary of ₹5.5–7.8 LPA.' },
  { category: 'Course Selection', q: 'What is the difference between SAP and Salesforce training?', a: 'SAP is an ERP platform managing internal business operations (finance, supply chain, manufacturing), while Salesforce is a CRM platform for sales, marketing, and customer service. SAP suits professionals with finance or operations backgrounds. Salesforce has a lower entry barrier, making it ideal for freshers and career switchers.' },
  { category: 'Course Selection', q: 'Which is better for a career change — Salesforce, Python, or Cloud?', a: 'Salesforce is ideal for professionals from finance, sales, or operations. Python and Data Science suits analytical professionals. Cloud (AWS + Azure) suits those with IT infrastructure backgrounds. The platform that best matches your existing experience gives you the fastest salary jump.' },
  // Learning Format
  { category: 'Learning Format', q: 'Can I do IT software training while working full time?', a: 'Yes. Weekend batches (Saturday–Sunday) and weekday evening batches (7 PM–9 PM) are available for working professionals. All sessions are recorded on-demand, so a missed session never causes you to fall behind. Most working professionals complete their course within 3–4 months without taking leave.' },
  { category: 'Learning Format', q: 'What is the difference between online and offline IT training in Bangalore?', a: 'Offline IT training provides direct mentor access, structured lab sessions, peer networking, and faster doubt resolution — critical for practical skills like Salesforce configuration, cloud deployment, and coding. Our online batches use the same curriculum, trainers, and live platform access as classroom training.' },
  { category: 'Learning Format', q: 'How long are the training batches and what are the timings?', a: 'Batches run Monday–Friday (evening 7–9 PM) or Saturday–Sunday (10 AM–1 PM). Course duration ranges from 2 months (Cloud certifications) to 6 months (SAP or full Python + AI stack). You choose your batch at enrollment and can switch between modes once per course.' },
  // Placement & Career
  { category: 'Placement & Career', q: 'How long does it take to get placed after an IT training course?', a: 'The average placement time after a structured IT training course in Bangalore is 45–90 days for freshers and 30–60 days for experienced professionals upskilling. Students who activate a paid Naukri profile alongside LinkedIn optimisation consistently see shorter job search timelines.' },
  { category: 'Placement & Career', q: 'What companies hire IT software trained professionals in Bangalore?', a: 'TCS, Infosys, Wipro, Cognizant, Accenture, IBM, Capgemini, HCLTech, L&T Infotech, and Mphasis actively hire Salesforce and SAP professionals in Bangalore. Cloud, DevOps, and Data Science roles are absorbed by high-growth product companies like Swiggy, Flipkart, and PhonePe.' },
  { category: 'Placement & Career', q: 'Do you provide 100% placement guarantee?', a: 'We provide structured placement support — resume building, LinkedIn optimisation, mock interviews, recruiter referrals, and paid Naukri activation — not a blanket guarantee. We have placed 1,200+ students. Our commitment: every student who completes the course and follows the placement process gets interview calls.' },
  // Eligibility
  { category: 'Eligibility', q: 'Can I get an IT job in Bangalore without a computer science degree?', a: 'Yes. Over 60% of IT professionals hired in Bangalore have non-CS backgrounds. Practical certifications (Salesforce, AWS, Azure) and demonstrable project portfolios matter more than degrees for roles like Salesforce Admin, Cloud Support Engineer, or Python Data Analyst.' },
  { category: 'Eligibility', q: 'Is there a minimum qualification required to join?', a: 'Any graduate (any stream) can enroll. Non-IT professionals like CA, MBA, commerce, science, arts graduates have successfully transitioned into IT using our courses. Salesforce and SAP are particularly well-suited for domain professionals who want to transition without a coding background.' },
  // Fees & Value
  { category: 'Fees & Value', q: 'What is the fee for Salesforce training in Bangalore?', a: 'Salesforce training fees in Bangalore range from ₹18,000 to ₹60,000 depending on course depth and placement support level. At our institute, fees start at ₹25,000 for the Basic package and ₹42,000 for the Premium package with AI specialisation and guaranteed interview calls.' },
  { category: 'Fees & Value', q: 'Are there EMI options available for the course fee?', a: 'Yes. EMI options are available with zero-cost EMI through select payment partners for 3, 6, and 12-month tenures. Income share agreements (ISA) are also available for eligible candidates — you pay after you get placed. Contact us for the current EMI partner list.' },
  // Certification
  { category: 'Certification', q: 'Which IT certifications are most valued by employers in Bangalore?', a: 'The most valued IT certifications by Bangalore employers in 2026 are: Salesforce Administrator (ADM 201), AWS Solutions Architect Associate (SAA-C03), Microsoft Azure Administrator (AZ-104), Certified Kubernetes Administrator (CKA), CompTIA Security+, and SAP Certified Application Associate.' },
  { category: 'Certification', q: 'Do I get a certificate after completing the course?', a: 'Yes. You receive our institute course completion certificate upon finishing the program. More importantly, our courses are structured to prepare you for vendor certifications (Salesforce ADM-201, AWS SAA-C03, Azure AZ-104, etc.) — those are the credentials employers actually value in Bangalore.' },
];

const CATEGORIES = [
  'Course Selection',
  'Learning Format',
  'Placement & Career',
  'Eligibility',
  'Fees & Value',
  'Certification',
];

export default function FaqSection() {
  const [activeCategory, setActiveCategory] = useState(CATEGORIES[0]);
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const filtered = faqs.filter(f => f.category === activeCategory);

  return (
    <section className={styles.section} id="faq" aria-label="Frequently Asked Questions" itemScope itemType="https://schema.org/FAQPage">
      <div className={styles.inner}>

        {/* ── Title ── */}
        <div className={styles.header}>
          <h2 className={styles.title}>Frequently Asked Questions</h2>
          <p className={styles.sub}>Honest answers to questions every serious candidate asks before choosing a course.</p>
        </div>

        {/* ── Two-column layout ── */}
        <div className={styles.layout}>

          {/* Left sidebar */}
          <aside className={styles.sidebar}>
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                className={`${styles.sideBtn} ${activeCategory === cat ? styles.sideBtnActive : ''}`}
                onClick={() => { setActiveCategory(cat); setOpenIdx(0); }}
              >
                {cat}
              </button>
            ))}
          </aside>

          {/* Right content */}
          <div className={styles.content}>
            <h3 className={styles.catTitle}>{activeCategory}</h3>

            <div className={styles.list}>
              {filtered.map((faq, idx) => {
                const isOpen = openIdx === idx;
                return (
                  <div
                    key={idx}
                    className={`${styles.item} ${isOpen ? styles.itemOpen : ''}`}
                    itemScope itemProp="mainEntity" itemType="https://schema.org/Question"
                  >
                    <button
                      className={styles.question}
                      onClick={() => setOpenIdx(isOpen ? null : idx)}
                      aria-expanded={isOpen}
                    >
                      <span className={styles.qText} itemProp="name">{faq.q}</span>
                      <span className={`${styles.icon} ${isOpen ? styles.iconOpen : ''}`} aria-hidden="true">
                        <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                          <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                    </button>
                    {isOpen && (
                      <div
                        className={styles.answer}
                        itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer"
                      >
                        <p itemProp="text">{faq.a}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className={styles.cta}>
          <p>Still have a question? Our career counsellors give honest, no-pressure answers.</p>
          <a href="/contact" className={styles.ctaBtn}>Book a Free Counselling Call →</a>
        </div>

      </div>
    </section>
  );
}
