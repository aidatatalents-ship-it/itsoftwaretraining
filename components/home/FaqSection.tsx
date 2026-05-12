'use client';
import { useState } from 'react';
import styles from './FaqSection.module.css';

/**
 * FAQ DATA — Structured using Koray Tugberk's semantic content methodology.
 *
 * Strategy:
 * - Each question mirrors a real PAA (People Also Ask) search query from Google.
 * - Each answer starts with a direct, concise sentence for Featured Snippet extraction.
 * - Answers include supporting context (2nd & 3rd sentence) for topical depth (GEO/AEO).
 * - Questions are grouped by semantic intent cluster (not just topic), covering:
 *   [1] Course & Platform Selection Intent
 *   [2] Learning Format & Logistics Intent
 *   [3] Placement & Career Outcome Intent
 *   [4] Eligibility & Prior Experience Intent
 *   [5] Cost & Value Intent
 *   [6] Certification & Recognition Intent
 */

interface Faq {
  q: string;
  a: string;
  category: string;
}

const faqs: Faq[] = [
  // ── CLUSTER 1: Course & Platform Selection ────────────────────────────
  {
    category: 'Course Selection',
    q: 'Which IT software training course is best in Bangalore for freshers?',
    a: 'Salesforce Administrator, Power BI, and Python with Data Science are the three best IT software courses for freshers in Bangalore in 2025. These platforms have the lowest prior-knowledge barrier, the highest volume of entry-level job openings in Bangalore, and deliver an average first salary of ₹5.5 LPA to ₹7.8 LPA. A free career counselling session can match the right platform to your specific academic background and career goal.',
  },
  {
    category: 'Course Selection',
    q: 'Which IT course has the highest salary in Bangalore in 2025?',
    a: 'Cloud computing (AWS + Azure), DevOps, and SAP HANA are the highest-paid IT courses in Bangalore in 2025, with average salaries ranging from ₹10 LPA to ₹14 LPA. DevOps engineers with Kubernetes and CI/CD pipeline experience are among the top 5 highest-paid IT professionals across Bangalore\'s tech parks. These roles require either prior IT experience or an accelerated learning track.',
  },
  {
    category: 'Course Selection',
    q: 'Is Salesforce training worth it in Bangalore?',
    a: 'Yes, Salesforce training is highly worth it in Bangalore because India is the second-largest Salesforce talent market globally, and Bangalore leads all Indian cities in active Salesforce job postings. Salesforce-certified professionals in Bangalore earn an average of ₹8.5 LPA, compared to ₹4.2 LPA for general software support roles. The rise of Salesforce Einstein AI and Agentforce has further increased demand for Salesforce-certified candidates with AI skills.',
  },
  {
    category: 'Course Selection',
    q: 'What is the difference between SAP and Salesforce training?',
    a: 'SAP is an enterprise resource planning (ERP) platform used to manage internal business operations like finance, supply chain, and manufacturing, while Salesforce is a customer relationship management (CRM) platform used to manage sales, marketing, and customer service. SAP typically suits professionals with finance, operations, or engineering backgrounds and commands a higher average salary (₹10–14 LPA), while Salesforce suits business-minded freshers and career switchers and has a lower entry barrier. Both platforms offer strong career paths in Bangalore\'s IT services and consulting ecosystem.',
  },
  {
    category: 'Course Selection',
    q: 'Which is better for career change: Salesforce, Python, or Cloud?',
    a: 'The best platform for a career change depends on your existing domain background. Salesforce is ideal for professionals from finance, sales, or operations backgrounds because their domain knowledge directly translates into Salesforce implementation expertise. Python and Data Science suits analytical professionals from engineering, mathematics, or research fields. Cloud (AWS + Azure) suits those with IT infrastructure, networking, or systems administration backgrounds. The platform that best matches your existing experience will give you the fastest and strongest salary jump.',
  },

  // ── CLUSTER 2: Learning Format & Logistics ───────────────────────────
  {
    category: 'Learning Format',
    q: 'Can I do IT software training in Bangalore while working full time?',
    a: 'Yes, you can complete IT software training in Bangalore while working full time through weekend batches (Saturday–Sunday) and weekday evening batches (7 PM–9 PM). All training sessions are recorded and available on-demand, so a missed session due to work deadlines never causes you to fall behind. Most working professionals complete their chosen course within 3 to 4 months without taking any leave from their current job.',
  },
  {
    category: 'Learning Format',
    q: 'What is the duration of IT software training courses in Bangalore?',
    a: 'IT software training courses in Bangalore typically run for 8 to 16 weeks depending on the platform and depth of curriculum. Salesforce Administrator training runs for 8 to 10 weeks, SAP functional modules run for 10 to 14 weeks, and DevOps or Cloud training runs for 12 to 16 weeks. Intensive fast-track batches compress the same curriculum into 6 to 8 weeks for professionals who need to upskill quickly.',
  },
  {
    category: 'Learning Format',
    q: 'Is online IT training as effective as offline training in Bangalore?',
    a: 'Online IT training is equally effective as offline training when it is delivered as live instructor-led sessions — not pre-recorded videos. Our online batches use the same curriculum, the same trainers, and live hands-on access to the actual software platform as classroom training. The key differentiator is access to live practice labs, direct trainer interaction, and peer learning, all of which are fully available in our online live format.',
  },

  // ── CLUSTER 3: Placement & Career Outcomes ───────────────────────────
  {
    category: 'Placement & Career',
    q: 'What is the placement rate for IT software training institutes in Bangalore?',
    a: 'Our placement rate for students who complete training and utilise the full placement support programme is above 85% within 90 days of course completion. This includes resume building, LinkedIn profile optimisation, Naukri paid activation, AI interview simulation, and direct recruiter submissions to our network of hiring managers across Bangalore. Placement rates vary based on the platform chosen, the student\'s prior experience, and market conditions at the time of job search.',
  },
  {
    category: 'Placement & Career',
    q: 'How long does it take to get a job after IT training in Bangalore?',
    a: 'Most students receive their first interview call within 30 to 45 days of course completion, and a job offer within 60 to 90 days, when using structured placement support. Factors that affect time-to-offer include the platform chosen (Salesforce and Cloud typically have faster hiring cycles), the completeness of your career profile, and whether you pursued a recognised industry certification. Students who activate a paid Naukri profile alongside LinkedIn optimisation consistently see shorter job search periods.',
  },
  {
    category: 'Placement & Career',
    q: 'Does IT software training in Bangalore guarantee a job?',
    a: 'No IT training institute can legally guarantee employment because hiring decisions are made by companies, not training providers. What we do guarantee is structured, 90-day active placement support that includes resume building, LinkedIn optimisation, paid job portal activation, AI interview simulation, direct recruiter submissions, and continued support until you have an offer letter. Our Premium package includes a guaranteed minimum of 3 interview calls within the support period.',
  },
  {
    category: 'Placement & Career',
    q: 'What companies hire IT software trained professionals in Bangalore?',
    a: 'Bangalore-based companies actively hiring IT-trained professionals include TCS, Infosys, Wipro, Cognizant, Accenture, IBM, Capgemini, HCLTech, L&T Infotech, and Mphasis for Salesforce and SAP roles, along with high-growth product companies for Cloud, DevOps, and Data Science roles. Salesforce professionals are also hired by Bangalore-based Salesforce implementation partners like Deloitte Digital, PwC, and Wipro Salesforce Practice. Placement outcomes are strongest for candidates who hold a recognised platform certification alongside their training certificate.',
  },

  // ── CLUSTER 4: Eligibility & Prior Experience ────────────────────────
  {
    category: 'Eligibility',
    q: 'Can a non-IT graduate do IT software training in Bangalore?',
    a: 'Yes, a non-IT graduate can successfully complete IT software training in Bangalore and build a strong career in platforms like Salesforce, Power BI, and Python. Salesforce and Power BI are particularly accessible to non-IT graduates from commerce, business administration, science, or engineering backgrounds because the platforms are designed for business users, not just programmers. Non-IT professionals often have a competitive advantage in domain-specific Salesforce roles (e.g., a finance professional implementing Salesforce for a bank) compared to fresh IT graduates with no business context.',
  },
  {
    category: 'Eligibility',
    q: 'What is the minimum qualification required for IT software training?',
    a: 'The minimum educational qualification for IT software training in Bangalore is any graduate degree — BE, BTech, BCA, BSc, BCom, or BA. Certain specialised tracks like SAP FICO or SAP MM prefer candidates with relevant domain degrees (commerce or supply chain), while DevOps and Cloud training benefit from at least 1 to 2 years of IT work experience. There is no mandatory minimum qualification for Salesforce Administrator, Power BI, or Python Basics training.',
  },
  {
    category: 'Eligibility',
    q: 'Is IT software training suitable for people over 30 or 35 years old?',
    a: 'Yes, IT software training is highly suitable for professionals over 30 or 35 because enterprise platforms like Salesforce, SAP, and Cloud computing actively value domain expertise and professional maturity alongside technical skills. Many of our most successful placement stories involve professionals aged 30 to 42 who leveraged their existing banking, finance, operations, or manufacturing experience to quickly move into high-paying Salesforce or SAP consulting roles. Age is not a barrier in enterprise IT consulting — domain expertise combined with platform knowledge is.',
  },

  // ── CLUSTER 5: Cost & Value ──────────────────────────────────────────
  {
    category: 'Fees & Value',
    q: 'How much does IT software training cost in Bangalore?',
    a: 'IT software training courses in Bangalore range from ₹20,000 to ₹65,000 depending on the platform, course depth, and the level of placement support included. At our institute, course fees start at ₹25,000 for the training-only Basic package, ₹32,000 for the Pro package with full placement support, and ₹42,000 for the Premium package that includes AI specialisation, certification prep, guaranteed interview calls, and lifetime alumni access. EMI options are available to split fees across 3 to 6 monthly instalments.',
  },
  {
    category: 'Fees & Value',
    q: 'Is IT software training in Bangalore worth the investment?',
    a: 'IT software training in Bangalore is worth the investment when the platform you choose has strong, sustained job demand and your course fee is recovered within the first two to three months of your new salary. For example, a ₹32,000 course fee is recovered within 45 days if you move from a ₹4 LPA role to a ₹8 LPA Salesforce role. The key factors that determine return on investment are the platform chosen, the completeness of placement support, and whether you pursue a recognised industry certification alongside the training.',
  },

  // ── CLUSTER 6: Certification ─────────────────────────────────────────
  {
    category: 'Certification',
    q: 'Which IT certifications are most valued by employers in Bangalore?',
    a: 'The most valued IT certifications by Bangalore employers in 2025 are: Salesforce Administrator (ADM 201), AWS Solutions Architect Associate, Microsoft Azure Administrator (AZ-104), Certified Kubernetes Administrator (CKA), CompTIA Security+, SAP Certified Application Associate, and Google Professional Data Engineer. Certified candidates consistently receive 2 to 3 times more interview calls on Naukri and LinkedIn than non-certified candidates with equivalent training hours. Our Premium package includes full preparation for your chosen platform\'s primary certification exam.',
  },
  {
    category: 'Certification',
    q: 'Does completing IT training give a government-recognised certificate?',
    a: 'IT software training certificates from private institutes in Bangalore are not government-recognised but are widely respected by the IT industry for skill verification. The most important credential for IT hiring in Bangalore is the official vendor certification from the platform company — such as Salesforce, AWS, Microsoft, or SAP — which is globally recognised and frequently mandatory in job descriptions. Our training is specifically structured to prepare you for these official vendor certification exams, which carry significantly more hiring weight than any institute-level certificate.',
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
          <span className={styles.pill}>❓ FAQ</span>
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
            Book a Free Counselling Call →
          </a>
        </div>

      </div>
    </section>
  );
}
