'use client';
import Link from 'next/link';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ServicesGrid from '@/components/home/ServicesGrid';
import FaqSection from '@/components/home/FaqSection';
import styles from './HomePage.module.css';
import { WHATSAPP_BASE } from '@/data/contact';

/* ── PLACEMENT DATA ── */
const placements = [
  { init: 'RS', bg: 'linear-gradient(135deg,#1565C0,#5B9BD5)', name: 'Rahul S.', role: '→ Salesforce Admin',     from: 'Manual Tester',   salary: '₹3.2L → ₹6.5L LPA', days: '58 days' },
  { init: 'PK', bg: 'linear-gradient(135deg,#1565C0,#5B9BD5)', name: 'Priya K.',  role: '→ SAP FICO Consultant', from: 'Accounts Exec',   salary: '₹4.1L → ₹8.2L LPA', days: '72 days' },
  { init: 'AM', bg: 'linear-gradient(135deg,#0A7A45,#2DB876)', name: 'Arjun M.',  role: '→ DevOps Engineer',     from: 'Java Dev',        salary: '₹5.5L → ₹9.2L LPA', days: '44 days' },
  { init: 'NR', bg: 'linear-gradient(135deg,#7A2DB8,#B060FF)', name: 'Neha R.',   role: '→ Python Data Analyst', from: 'Fresher',         salary: 'First Job: ₹5.8L LPA', days: '81 days' },
  { init: 'SK', bg: 'linear-gradient(135deg,#C47A00,#F0A830)', name: 'Suresh K.', role: '→ AWS Cloud Engineer',  from: 'Support Eng',     salary: '₹3.8L → ₹8.6L LPA', days: '63 days' },
];

const journeyTabs = ['Fresher', 'Upskilling', 'Switching'];

const journeyData: Record<string, { steps: {done:boolean;active:boolean;title:string;sub:string}[]; outcome:string }> = {
  Fresher: {
    steps: [
      { done: true,  active: false, title: 'Free Counselling Call',       sub: 'We find the right platform for your background and goals' },
      { done: true,  active: false, title: 'Hands-On Training',            sub: 'Live platform from Day 1. Real projects, not theory slides' },
      { done: false, active: true,  title: 'Build Portfolio + Get Certified', sub: 'A real project and certification you can show any interviewer' },
      { done: false, active: false, title: 'Full Placement Support',       sub: 'Resume, LinkedIn, paid Naukri, AI interviews, recruiters' },
    ],
    outcome: '₹6.2 LPA first job · Offer in 60–90 days',
  },
  Upskilling: {
    steps: [
      { done: true,  active: false, title: 'Skills Mapping Session',       sub: 'Fastest path from your current role to target platform' },
      { done: true,  active: false, title: 'Accelerated Weekend Track',    sub: 'Learn without leaving your current job. Evenings + weekends' },
      { done: false, active: true,  title: 'Platform + AI Specialisation', sub: 'The combo that pushes salaries past ₹10 LPA' },
      { done: false, active: false, title: 'Certification + Placement',    sub: 'Certified candidates get 3x more interview calls' },
    ],
    outcome: '₹3.5 LPA salary jump · Interview call in 30 days',
  },
  Switching: {
    steps: [
      { done: true,  active: false, title: 'Career Repositioning Call',   sub: 'We map your domain expertise to the right platform niche' },
      { done: true,  active: false, title: 'Domain-Contextualised Training', sub: 'Learn the platform through your own industry\'s lens' },
      { done: false, active: true,  title: 'Build Your Differentiation Story', sub: '"Domain expertise + platform skills" — a rare combination' },
      { done: false, active: false, title: 'Targeted Placement',           sub: 'Companies in your industry that need both sides of you' },
    ],
    outcome: '₹9.4 LPA avg package · Least competitive segment',
  },
};

/* ── HOW WE TRAIN ── */
const methods = [
  { n: '01', title: 'You Work Inside the Real Platform From Day 1', body: 'No slides for weeks before you touch anything. You log into the actual platform in your very first session. By Week 6 you have more hands-on hours than most "experienced" candidates from other institutes.' },
  { n: '02', title: 'Every Week You Solve a Real Business Problem',  body: 'Each week brings a scenario drawn from an actual company implementation — not a textbook exercise. You\'re training your mind to think like a consultant, not memorise answers.' },
  { n: '03', title: 'AI Tools Are Woven Into Every Course',          body: 'Einstein for Salesforce. AI security tools for Cybersecurity. ML pipelines for Python. AI-assisted DevOps. By graduation, using AI as a productivity multiplier is natural — not a novelty.' },
  { n: '04', title: 'Your Career Profile Grows Throughout the Course', body: 'Most institutes build your resume in the last two weeks. We start Week 1. By the time you finish, your professional profile has been active and growing for 3 months.' },
];

/* ── PLACEMENT SUPPORT ── */
const placementSteps = [
  { n: '01', title: 'AI-Built Resume',            body: 'Written around the exact keywords your platform\'s recruiters search for — custom built around your background, projects, and certification.' },
  { n: '02', title: 'LinkedIn Profile Overhaul',  body: 'Your headline, summary, and skills section completely rewritten for recruiter discovery. 70% of IT hiring in Bangalore happens via LinkedIn searches.' },
  { n: '03', title: 'Paid Naukri Activation',     body: 'We set up a paid Naukri subscription for you. Paid profiles get 3–5x more recruiter visibility and receive direct recruiter calls.', highlight: true },
  { n: '04', title: 'AI Interview Simulation',    body: 'Many companies now use HireVue and Talview for AI-powered first-round screening. We run you through a full mock session before you face the real thing.' },
  { n: '05', title: 'Direct Recruiter Submissions', body: 'We personally send your profile to our active network of hiring managers and platform-specific recruiters in Bangalore — with a direct recommendation.' },
  { n: '06', title: '90-Day Active Follow-Up',    body: 'Day 30, 60, and 90 check-ins after your course. If something isn\'t working, we diagnose and fix it. We keep pushing until your offer letter is signed.' },
];

/* ── PRICING ── */
const packages = [
  {
    tier: 'Basic', price: '₹25,000', hot: false,
    for: 'For students who want solid platform training and will handle their own job search.',
    yes: ['Full platform course (your choice)', 'AI tools module included', 'Weekend + evening batches', 'Recorded session access', 'Basic resume guidance'],
    no:  ['AI-built resume + LinkedIn', 'Paid Naukri activation', 'Direct recruiter submissions', '90-day placement support', 'AI interview simulation'],
    cta: 'Get Started →',
  },
  {
    tier: 'Pro', price: '₹32,000', hot: true,
    for: 'For students who want us to build their entire career profile and placement support.',
    yes: ['Everything in Basic', 'AI-built, ATS-optimized resume', 'LinkedIn profile complete overhaul', 'Paid Naukri activation (3–5x visibility)', 'Hirist profile setup', 'Direct recruiter submissions', '90-day active placement support'],
    no:  ['AI interview simulation', 'Certification exam prep', 'Guaranteed interview calls'],
    cta: 'Reserve Your Seat →',
  },
  {
    tier: 'Premium', price: '₹42,000', hot: false,
    for: 'For students who want the complete package — training, AI, certification, and guaranteed interviews.',
    yes: ['Everything in Pro', 'Advanced AI module + specialisation', 'Full AI interview simulation (×2)', 'Certification exam preparation', 'GitHub portfolio projects', 'Guaranteed 3 interview calls', 'Priority placement track', 'Salary negotiation coaching', '1-on-1 monthly counselling', 'Lifetime alumni network access'],
    no:  [],
    cta: 'Go Premium →',
  },
];

/* ── TESTIMONIALS ── */
const testimonials = [
  { init: 'PS', bg: 'linear-gradient(135deg,#1565C0,#5B9BD5)', name: 'Priya Sharma',  role: 'Salesforce Developer',     text: 'The classes were highly practical and easy to follow even for beginners. The trainers were supportive, the placement guidance helped me build confidence and land my first IT role within 3 months.' },
  { init: 'RN', bg: 'linear-gradient(135deg,#0A7A45,#2DB876)', name: 'Rahul Nair',    role: 'AWS Solutions Architect',   text: 'Cracked AWS SAA in first attempt after 10 weeks of training. Hands-on labs on actual AWS accounts — not simulators. The placement team arranged 6 interview calls within 45 days of course completion.' },
  { init: 'DM', bg: 'linear-gradient(135deg,#7A2DB8,#B060FF)', name: 'Divya Menon',   role: 'Senior Data Scientist',     text: 'From Python basics to building production ML models in 5 months. The GenAI module was absolutely cutting-edge. Structured curriculum and mentor support made every concept click instantly.' },
];

export default function HomePage() {
  const [activeJourney, setActiveJourney] = useState('Fresher');
  const [activeT, setActiveT] = useState(0);
  const t = testimonials[activeT];

  return (
    <main style={{ paddingTop: 68 }}>

      {/* ══ 1. HERO ══ */}
      <div className={styles.hero}>
        <div className={styles.heroInner}>

          {/* LEFT */}
          <div className={styles.heroLeft}>
            <div className={styles.heroPill}>
              <span className={styles.pulse} />
              Bangalore&apos;s Future-Proof IT Career Platform
            </div>
            <h1 className={styles.heroH1}>
              Salesforce, SAP, Python,<br />Cloud &amp; DevOps Training<br />in Bangalore —<br />
              <em>Built for the Hiring Market.</em>
            </h1>
            <p className={styles.heroDesc}>Learn from working professionals. Build real-world projects. Get placed in 60 days or keep learning free.</p>
            <div className={styles.heroPlatforms}>
              {['Salesforce','SAP','Cybersecurity','Python + AI','AWS + Azure','Power BI','DevOps'].map(p => (
                <span key={p} className={styles.hp}>{p}</span>
              ))}
            </div>
            <p className={styles.heroNote}>Not sure which platform is right for you? Book a free counselling call — we&apos;ll figure it out together based on your background and goals.</p>
            <div className={styles.heroBtns}>
              <Link href="/contact" className={styles.btnInk}>Book Free Counselling Call →</Link>
              <a href="#paths" className={styles.btnGhost}>See Our Approach</a>
            </div>
            <div className={styles.heroTrust}>
              <div className={styles.avs}>
                {[['RS','linear-gradient(135deg,#1565C0,#5B9BD5)'],['PK','linear-gradient(135deg,#1565C0,#5B9BD5)'],['AM','linear-gradient(135deg,#0A7A45,#2DB876)'],['NR','linear-gradient(135deg,#7A2DB8,#B060FF)']].map(([i,bg]) => (
                  <div key={i} className={styles.av} style={{ background: bg }}>{i}</div>
                ))}
              </div>
              <p className={styles.trustTxt}><strong>200+ students placed</strong> across Bangalore&apos;s top IT companies</p>
            </div>
          </div>

          {/* RIGHT — placements + journey */}
          <div className={styles.heroRight}>
            <div className={styles.placementsCard}>
              <div className={styles.plHeader}><span className={styles.plDot} />Recent Placements</div>
              {placements.map(p => (
                <div key={p.name} className={styles.plItem}>
                  <div className={styles.plAv} style={{ background: p.bg }}>{p.init}</div>
                  <div className={styles.plInfo}>
                    <div className={styles.plName}>{p.name} <span className={styles.plRole}>{p.role}</span></div>
                    <div className={styles.plDetail}>{p.from} · <strong>{p.salary}</strong></div>
                  </div>
                  <div className={styles.plDays}>{p.days}</div>
                </div>
              ))}
            </div>

            <div className={styles.journeyLabel}>Your Learning Journey</div>
            <div className={styles.journeyTabs}>
              {journeyTabs.map(tab => (
                <button key={tab} className={`${styles.jTab} ${activeJourney === tab ? styles.jTabActive : ''}`} onClick={() => setActiveJourney(tab)}>{tab}</button>
              ))}
            </div>
            <div className={styles.journeySteps}>
              {journeyData[activeJourney].steps.map((s, i) => (
                <div key={i} className={styles.jStep}>
                  <div className={`${styles.jDot} ${s.done ? styles.jDone : s.active ? styles.jActive : styles.jNext}`}>
                    {s.done ? '✓' : s.active ? '→' : i + 1}
                  </div>
                  <div>
                    <div className={styles.jTitle}>{s.title}</div>
                    <div className={styles.jSub}>{s.sub}</div>
                  </div>
                </div>
              ))}
              <div className={styles.jOutcome}>
                <span>Typical Outcome</span>
                <p>{journeyData[activeJourney].outcome}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ══ 2. STATS BAR ══ */}
      <div className={styles.statsBar}>
        {[['1,200+','Students Trained'],['4.9★','Google Rating'],['₹4L → ₹18L','Avg Salary Jump'],['60 Days','Avg Time to Placement']].map(([n, l]) => (
          <div key={l} className={styles.stat}>
            <div className={styles.statN}>{n}</div>
            <div className={styles.statL}>{l}</div>
          </div>
        ))}
      </div>

      {/* ══ 3. OUR POPULAR COURSES — ServicesGrid kept intact ══ */}
      <ServicesGrid />

      {/* ══ 4. THREE PATHS ══ */}
      <section className={styles.pathsSec} id="paths">
        <div className={styles.wrap}>
          <div className={styles.sTag}>Our Approach</div>
          <h2>Three Paths. One Goal — Your Offer Letter.</h2>
          <p className={styles.sSub}>We don&apos;t treat everyone the same. Where you are right now determines how we train you.</p>
          <div className={styles.pathsGrid}>
            {[
              { tag: '🎓 Just Starting Out', tagCls: styles.pTagBlue, h3: 'Zero Experience? We Help You Find the Right Platform and Build a Career From Scratch.', story: 'Most freshers pick a technology randomly, spend months learning it, and realise the market is flooded or shrinking. We fix that before it happens — we talk to you first, understand your interests, then point you at the one platform that gives you the best shot at a strong first job.', numCls: styles.numB, outcome: 'Starting salary ₹6.2 LPA · First offer in 60–90 days after course', outCls: styles.outBlue, steps: ['Free Counselling Call — We recommend the right platform for you, not the most popular one.','Hands-On Training — You work inside the real platform from Day 1.','AI Tools Included — Every course includes the AI tools changing that platform.','Build Your Portfolio — You finish with a real project built by you.','Full Placement Support — Resume, LinkedIn, paid Naukri, AI interviews, 90-day support.'] },
              { tag: '💼 Already in IT. Ready for More.', tagCls: styles.pTagOrange, h3: 'Beyond the Next Increment — Build Skills That Keep You Relevant for the Next 10 Years.', story: "You've been in IT a few years. You're good at your job. But the increment is small, the role hasn't changed, and you're wondering — is my skill set future-proof? Generic IT roles face automation first. Specialists on enterprise platforms are the last ones touched.", numCls: styles.numO, outcome: 'Average salary jump ₹3.5 LPA · First interview call within 30 days', outCls: styles.outOrange, steps: ['Skills Mapping Session — Fastest path from your current role to your target platform.','Accelerated Learning Track — Skip what you already know. Weekend + evening batches.','Platform + AI Specialisation — Deep skills + AI tools. This combo pushes salaries past ₹10 LPA.','Certification Sprint — We prep you for the industry certification.','Salary-Smart Placement — Present your existing experience + new skills for maximum salary leverage.'] },
              { tag: '🔄 Switching Fields or Tech Tracks', tagCls: styles.pTagGreen, h3: "Your Past Experience Isn't Baggage. In the Right Platform, It's Your Biggest Advantage.", story: "A banking professional who learns Salesforce already understands the business it's built around. A supply chain manager who learns SAP already knows the processes the software automates. Your background isn't baggage — in the right platform, it's your edge.", numCls: styles.numG, outcome: '₹9.4 LPA avg package · Least competitive segment — highest quality job matches', outCls: styles.outGreen, steps: ['Career Repositioning Call — We find the platform that makes the most of your existing background.','Domain-Contextualised Training — Examples connect to your domain. You learn faster.','Your Niche + AI Skills — Platform module most relevant to your industry, plus AI skills.','Build Your Story — "I have X years in [domain] and now bring that to [platform]."','Targeted Placement — Companies in your industry that use your platform and need both sides.'] },
            ].map(card => (
              <div key={card.tag} className={styles.pathCard}>
                <div className={`${styles.ptag} ${card.tagCls}`}>{card.tag}</div>
                <h3>{card.h3}</h3>
                <p className={styles.pathStory}>{card.story}</p>
                <div className={styles.stepsList}>
                  {card.steps.map((s, i) => (
                    <div key={i} className={styles.slItem}>
                      <div className={`${styles.slNum} ${card.numCls}`}>{i + 1}</div>
                      <div>
                        <div className={styles.slTitle}>{s.split(' — ')[0]}</div>
                        <div className={styles.slDesc}>{s.split(' — ')[1]}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className={`${styles.outcomeBox} ${card.outCls}`}>
                  <div className={styles.outLabel}>Typical Outcome</div>
                  <p>{card.outcome}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 5. HOW WE TRAIN ══ */}
      <section className={styles.howSec} id="how">
        <div className={styles.wrap}>
          <div className={styles.sTagLight}>The Method</div>
          <h2 style={{ color: '#fff' }}>This Is How We Actually Teach.</h2>
          <p className={styles.sSubLight}>Four things we do differently — and why they produce better results.</p>
          <div className={styles.howGrid}>
            {methods.map(m => (
              <div key={m.n} className={styles.howCard}>
                <div className={styles.howNum}>{m.n}</div>
                <h4>{m.title}</h4>
                <p>{m.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 6. PLACEMENT SUPPORT ══ */}
      <section className={styles.placeSec} id="placement">
        <div className={styles.wrap}>
          <div className={styles.sTag}>Placement Support</div>
          <h2>We Don&apos;t Stop When the Course Ends.</h2>
          <p className={styles.sSub}>Your WhatsApp group stays active for 2 years after course completion. Our alumni have re-used our mock interview sessions up to 3 times when switching jobs. This isn&apos;t a transaction — it&apos;s a long-term career partnership. Here&apos;s exactly what we do for every student — step by step.</p>
          <div className={styles.placeGrid}>
            {placementSteps.map(s => (
              <div key={s.n} className={`${styles.psCard} ${s.highlight ? styles.psHighlight : ''}`}>
                <div className={styles.psN}>{s.n}</div>
                <h4>{s.title}</h4>
                <p>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 7. PRICING ══ */}
      <section className={styles.pkgSec} id="packages">
        <div className={styles.wrap}>
          <div className={styles.sTag}>Pricing</div>
          <h2>Three Packages. One Goal.</h2>
          <p className={styles.pkgIntro}>Same pricing across all platforms. The difference is how much of the placement support you want us to handle. All packages include the core training and weekend + evening batches.</p>
          <div className={styles.pkgGrid}>
            {packages.map(pkg => (
              <div key={pkg.tier} className={`${styles.pkg} ${pkg.hot ? styles.pkgHot : ''}`}>
                {pkg.hot && <div className={styles.pkgBadge}>Most Popular</div>}
                <div className={styles.pkgTier}>{pkg.tier}</div>
                <div className={styles.pkgPrice}>{pkg.price}</div>
                <div className={styles.pkgFor}>{pkg.for}</div>
                <ul className={styles.pkgFeats}>
                  {pkg.yes.map(f => <li key={f} className={styles.featY}>{f}</li>)}
                  {pkg.no.map(f  => <li key={f} className={styles.featN}>{f}</li>)}
                </ul>
                <Link href="/contact" className={`${styles.pkgBtn} ${pkg.hot ? styles.pkgBtnHot : ''}`}>{pkg.cta}</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 8. FAQ ══ */}
      <FaqSection />

      {/* ══ 9. COUNSELLING CTA ══ */}
      <section className={styles.counselSec} id="counsel">
        <div className={styles.wrap} style={{ textAlign: 'center' }}>
          <div className={styles.sTagLight}>Free Counselling</div>
          <h2 style={{ color: '#fff', marginBottom: 14 }}>Not Sure Where to Start?<br />Let&apos;s Figure It Out Together.</h2>
          <p className={styles.counselSub}>A lot of students come to us not knowing which platform to choose. That&apos;s completely normal. Book a free call — we&apos;ll spend 20–30 minutes understanding your background and career goals, then tell you honestly which platform gives you the best shot. No pitch. No pressure.</p>
          <div className={styles.counselPoints}>
            {['We understand your background and goals','We walk you through which platforms fit your profile','We tell you honestly what salary and timeline to expect','You leave with a clear next step — whether you join us or not'].map(p => (
              <span key={p} className={styles.cp}>{p}</span>
            ))}
          </div>
          <Link href="/contact" className={styles.btnAccent}>Book Your Free Counselling Call →</Link>
          <p className={styles.counselNote}>No pitch. No pressure. Just 30 minutes of honest career guidance.</p>
        </div>
      </section>

      {/* ══ 10. TESTIMONIALS ══ */}
      <section className={styles.testSec}>
        <div className={styles.wrap} style={{ textAlign: 'center' }}>
          <div className={styles.sTag}>Student Success</div>
          <h2>What Our Students Say</h2>
          <p className={styles.sSub} style={{ margin: '0 auto 48px' }}>Discover how our students transformed their careers through practical learning.</p>
          <div className={styles.testCard}>
            <div className={styles.testAv} style={{ background: t.bg }}>{t.init}</div>
            <p className={styles.testQuote}>&ldquo;{t.text}&rdquo;</p>
            <div className={styles.testName}>{t.name}</div>
            <div className={styles.testRole}>{t.role}</div>
            <div className={styles.testNav}>
              <button onClick={() => setActiveT(i => (i === 0 ? testimonials.length - 1 : i - 1))} className={styles.testBtn}><ChevronLeft size={18} /></button>
              <button onClick={() => setActiveT(i => (i === testimonials.length - 1 ? 0 : i + 1))} className={styles.testBtn}><ChevronRight size={18} /></button>
            </div>
          </div>
        </div>
      </section>

      {/* ══ 11. FINAL CTA ══ */}
      <section className={styles.finalSec}>
        <div className={styles.wrap} style={{ textAlign: 'center' }}>
          <div className={styles.sTag}>Start Today</div>
          <h2>One Call. Clear Direction.<br />No Pressure.</h2>
          <p className={styles.finalSub}>Whether you&apos;re a fresher, a professional ready to upskill, or someone switching careers — we&apos;ll give you an honest answer on your best path forward.</p>
          <div className={styles.finalBtns}>
            <Link href="/contact" className={styles.btnInk}>Book Free Counselling Call →</Link>
            <a href={WHATSAPP_BASE} className={styles.btnGhost}>Chat on WhatsApp</a>
          </div>
        </div>
      </section>

    </main>
  );
}
