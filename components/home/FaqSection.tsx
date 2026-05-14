'use client';
import { useState } from 'react';
import styles from './FaqSection.module.css';

/**
 * FAQ DATA — Structured using Koray Tugberk's semantic content methodology.
 *
 * Strategy:
 * - Each question mirrors a real PAA (People Also Ask) / Featured Snippet query from Google.
 * - Each answer starts with a direct, concise sentence for Featured Snippet extraction.
 * - 40-60 word answers are optimised for AEO/GEO eligibility.
 * - Questions cover 7 intent clusters for maximum topical authority:
 *   [1] Course & Platform Selection
 *   [2] Learning Format & Logistics
 *   [3] Placement & Career Outcomes
 *   [4] Eligibility & Prior Experience
 *   [5] Cost & Value
 *   [6] Bangalore IT Market
 *   [7] Certification
 */

interface Faq {
  q: string;
  a: string;
  category: string;
}

const faqs: Faq[] = [
  // -- CLUSTER 1: Course & Platform Selection --
  {
    category: 'Course Selection',
    q: 'Which IT course has the highest salary in Bangalore in 2025?',
    a: 'Salesforce (particularly LWC and CPQ specialists), Cloud Architecture (AWS/Azure), and SAP are the highest-paying IT courses in Bangalore. Freshers with Salesforce Admin certification earn Rs.4-7 LPA, while experienced cloud architects earn Rs.25-45 LPA. DevOps and cybersecurity roles also show consistent 25-35% year-on-year salary growth.',
  },
  {
    category: 'Course Selection',
    q: 'Which IT software training course is best in Bangalore for freshers?',
    a: 'Salesforce Administrator, Power BI, and Python with Data Science are the three best IT software courses for freshers in Bangalore in 2025. These platforms have the lowest prior-knowledge barrier, the highest volume of entry-level job openings in Bangalore, and deliver an average first salary of Rs.5.5-7.8 LPA. A free career counselling session can match the right platform to your specific background and goals.',
  },
  {
    category: 'Course Selection',
    q: 'What is the difference between SAP and Salesforce training?',
    a: 'SAP is an ERP platform managing internal business operations (finance, supply chain, manufacturing), while Salesforce is a CRM platform for sales, marketing, and customer service. SAP suits professionals with finance or operations backgrounds and commands higher average salaries (Rs.10-14 LPA). Salesforce has a lower entry barrier, making it ideal for freshers and career switchers. Both platforms have strong career paths in Bangalore.',
  },
  {
    category: 'Course Selection',
    q: 'Which is better for a career change - Salesforce, Python, or Cloud?',
    a: 'Salesforce is ideal for professionals from finance, sales, or operations because domain knowledge translates directly into CRM implementation expertise. Python and Data Science suits analytical professionals from engineering or research. Cloud (AWS + Azure) suits those with IT infrastructure or networking backgrounds. The platform that best matches your existing experience gives you the fastest and strongest salary jump.',
  },

  // -- CLUSTER 2: Learning Format & Logistics --
  {
    category: 'Learning Format',
    q: 'Can I do IT software training in Bangalore while working full time?',
    a: 'Yes. Weekend batches (Saturday-Sunday) and weekday evening batches (7 PM-9 PM) are available for working professionals. All sessions are recorded on-demand, so a missed session never causes you to fall behind. Most working professionals complete their chosen course within 3-4 months without taking leave from their current job.',
  },
  {
    category: 'Learning Format',
    q: 'What is the difference between online and offline IT training in Bangalore?',
    a: 'Offline IT training in Bangalore provides direct mentor access, structured lab sessions, peer networking, and faster doubt resolution - critical for practical skills like Salesforce configuration, cloud deployment, and coding. Online training suits those with work constraints but requires stronger self-discipline. Our online batches use the same curriculum, trainers, and live platform access as classroom training.',
  },

  // -- CLUSTER 3: Placement & Career Outcomes --
  {
    category: 'Placement & Career',
    q: 'How long does it take to get placed after an IT training course in Bangalore?',
    a: 'The average placement time after a structured IT training course in Bangalore is 45-90 days for freshers and 30-60 days for experienced professionals upskilling. Time-to-placement is faster for Salesforce (high demand) and cloud roles (AWS/Azure) compared to niche skills like SAP. Students who activate a paid Naukri profile alongside LinkedIn optimisation consistently see shorter job search timelines.',
  },
  {
    category: 'Placement & Career',
    q: 'What companies hire IT software trained professionals in Bangalore?',
    a: 'TCS, Infosys, Wipro, Cognizant, Accenture, IBM, Capgemini, HCLTech, L&T Infotech, and Mphasis actively hire Salesforce and SAP professionals in Bangalore. Cloud, DevOps, and Data Science roles are absorbed by high-growth product companies. Salesforce professionals are also hired by implementation partners like Deloitte Digital, PwC, and Wipro Salesforce Practice.',
  },

  // -- CLUSTER 4: Eligibility & Prior Experience --
  {
    category: 'Eligibility',
    q: 'Can I get an IT job in Bangalore without a computer science degree?',
    a: 'Yes. Over 60% of IT professionals hired in Bangalore have non-CS backgrounds. Practical certifications (Salesforce, AWS, Azure) and demonstrable project portfolios matter more than degrees for roles like Salesforce Admin, Cloud Support Engineer, or Python Data Analyst. Non-IT professionals often have a competitive edge - a finance professional implementing Salesforce for a bank already understands the business it serves.',
  },

  // -- CLUSTER 5: Cost & Value --
  {
    category: 'Fees & Value',
    q: 'What is the fee for Salesforce training in Bangalore?',
    a: 'Salesforce training fees in Bangalore range from Rs.18,000 to Rs.60,000 depending on the course depth (Admin, Developer, LWC, CPQ), batch type (self-paced vs. live), and placement support level. Courses with ADM-201 or PD1 exam vouchers included typically cost more but offer better ROI. At our institute, fees start at Rs.25,000 for the Basic package and Rs.42,000 for the Premium package with AI specialisation and guaranteed interview calls.',
  },

  // -- CLUSTER 6: Bangalore IT Market --
  {
    category: 'Bangalore Market',
    q: 'Is Bangalore still the best city for IT jobs in India in 2025?',
    a: 'Yes. Bangalore accounts for approximately 35% of India\'s IT exports and houses over 5,000 IT companies including Infosys, Wipro, TCS, and 400+ MNCs. The city\'s IT sector continues to grow at 12-15% annually, making it the strongest job market for freshly trained IT professionals. Salesforce, Cloud, and DevOps roles in Bangalore pay 20-35% more than the same roles in any other Indian city.',
  },

  // -- CLUSTER 7: Certification --
  {
    category: 'Certification',
    q: 'Which IT certifications are most valued by employers in Bangalore?',
    a: 'The most valued IT certifications by Bangalore employers in 2025 are: Salesforce Administrator (ADM 201), AWS Solutions Architect Associate (SAA-C03), Microsoft Azure Administrator (AZ-104), Certified Kubernetes Administrator (CKA), CompTIA Security+, SAP Certified Application Associate, and Google Professional Data Engineer. Certified candidates receive 2-3 times more interview calls on Naukri and LinkedIn than non-certified candidates with equivalent training hours.',
  },
];

// Unique categories in order
const categories = ['All', ...Array.from(new Set(faqs.map(f => f.category)))];

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All' ? faqs : faqs.filter(f => f.category === activeCategory);

  return (
    <section className={styles.section} id="faq" aria-label="Frequently Asked Questions">
      <div className="container">

        {/* Header */}
        <div className={styles.header}>
          <span className={styles.pill}>FAQ</span>
          <h2 className={styles.title}>
            Frequently Asked Questions About<br />
            <span>IT Software Training in Bangalore</span>
          </h2>
          <p className={styles.sub}>
            Honest, detailed answers to the questions every serious candidate asks before choosing a platform and an institute.
          </p>
        </div>

        {/* Category Filter */}
        <div className={styles.filters} role="tablist" aria-label="FAQ categories">
          {categories.map(cat => (
            <button
              key={cat}
              role="tab"
              aria-selected={activeCategory === cat}
              className={`${styles.filterBtn} ${activeCategory === cat ? styles.filterActive : ''}`}
              onClick={() => { setActiveCategory(cat); setOpen(null); }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div
          className={styles.list}
          itemScope
          itemType="https://schema.org/FAQPage"
        >
          {filtered.map((faq, idx) => {
            const isOpen = open === idx;
            return (
              <div
                key={idx}
                className={`${styles.item} ${isOpen ? styles.itemOpen : ''}`}
                itemScope
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
              >
                <button
                  className={styles.question}
                  onClick={() => setOpen(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                  id={`faq-q-${idx}`}
                  aria-controls={`faq-a-${idx}`}
                >
                  <span className={styles.qText} itemProp="name">{faq.q}</span>
                  <span className={`${styles.icon} ${isOpen ? styles.iconOpen : ''}`} aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </button>
                <div
                  id={`faq-a-${idx}`}
                  role="region"
                  aria-labelledby={`faq-q-${idx}`}
                  className={styles.answer}
                  itemScope
                  itemProp="acceptedAnswer"
                  itemType="https://schema.org/Answer"
                >
                  <div className={styles.answerInner} itemProp="text">
                    {faq.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className={styles.cta}>
          <p>Still have a question? Our career counsellors give honest, no-pressure answers.</p>
          <a href="/contact" className={styles.ctaBtn}>
            Book a Free Counselling Call &rarr;
          </a>
        </div>

      </div>
    </section>
  );
}
