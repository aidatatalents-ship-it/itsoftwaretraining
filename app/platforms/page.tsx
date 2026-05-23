'use client';
import Link from 'next/link';
import { useState } from 'react';

/* ── Quiz data ── */
const questions = [
  {
    id: 'bg',
    q: "What's your current background?",
    opts: [
      { label: '🎓 Fresher / Student', val: 'fresher' },
      { label: '💼 Non-IT professional (Finance, HR, Supply Chain…)', val: 'nonit' },
      { label: '🖥️ Already in IT — want to grow', val: 'it' },
      { label: '🔄 Switching from a different tech stack', val: 'switch' },
    ],
  },
  {
    id: 'salary',
    q: 'What salary range are you targeting within 1 year?',
    opts: [
      { label: '₹4L – ₹7L (first job, stable entry)', val: 'entry' },
      { label: '₹7L – ₹12L (solid mid-level)', val: 'mid' },
      { label: '₹12L – ₹20L (strong specialist)', val: 'senior' },
      { label: '₹20L+ (let me shoot for the top)', val: 'top' },
    ],
  },
  {
    id: 'style',
    q: 'How do you prefer to work?',
    opts: [
      { label: '📊 Dashboards, configs, no coding', val: 'nocode' },
      { label: '👨‍💻 I want to write code and build things', val: 'code' },
      { label: '🔧 Infrastructure, systems, pipelines', val: 'infra' },
      { label: '🏢 Enterprise systems, business processes', val: 'enterprise' },
    ],
  },
];

/* ── Recommendation engine ── */
const recommend = (answers: Record<string, string>): string => {
  const { bg, salary, style } = answers;
  if (style === 'enterprise') return 'sap';
  if (style === 'infra') return salary === 'top' ? 'cloud' : 'devops';
  if (style === 'nocode' && bg === 'nonit') return 'salesforce';
  if (style === 'nocode') return 'salesforce';
  if (style === 'code' && (salary === 'senior' || salary === 'top')) return 'python-data-science';
  if (style === 'code') return 'python-data-science';
  if (bg === 'fresher' && salary === 'entry') return 'salesforce';
  if (bg === 'nonit') return 'sap';
  return 'cloud';
};

/* ── Platform detail ── */
const platforms: Record<string, {
  name: string; icon: string; color: string;
  forWho: string; notFor: string;
  timeToJob: string; avgSalary: string; difficulty: string;
  realTalk: string; topCompanies: string[];
}> = {
  salesforce: {
    name: 'Salesforce', icon: '☁️', color: '#2563EB',
    forWho: 'Non-IT professionals, freshers wanting a clean entry into IT, anyone who hates coding but loves CRM and customer-facing business.',
    notFor: 'Pure coders who want low-level engineering. Salesforce Admin is a business tool — if you want to write complex algorithms, this is not your platform.',
    timeToJob: '60–90 days after course',
    avgSalary: '₹6L – ₹14L (Admin) · ₹10L – ₹25L (Developer)',
    difficulty: '3/5 — Admin track requires no coding at all',
    realTalk: 'Salesforce is the single easiest way for a non-technical professional to enter IT. A Finance or HR professional who learns Salesforce already understands the CRM use cases — companies love that combination. The Bangalore market has 200+ companies hiring Salesforce Admins at any given time.',
    topCompanies: ['Infosys', 'Wipro', 'Accenture', 'Mphasis', 'Deloitte'],
  },
  cloud: {
    name: 'Cloud — AWS & Azure', icon: '⚡', color: '#D97706',
    forWho: 'IT professionals with 1-2 years experience, freshers with strong problem-solving skills, anyone targeting ₹12L+ within a year.',
    notFor: 'Complete beginners with no IT base. Cloud without a foundation in networking or Linux can be overwhelming and lead to shallow knowledge that doesn\'t pass interviews.',
    timeToJob: '45–75 days after certification',
    avgSalary: '₹8L – ₹18L (Cloud Engineer) · ₹18L – ₹45L (Architect)',
    difficulty: '4/5 — Requires some technical base',
    realTalk: 'AWS and Azure salaries are the fastest-growing in Bangalore right now. Every company is migrating to cloud. But the market is also getting saturated at the "AWS beginner" level — certifications alone don\'t get you hired. Labs matter, architecture knowledge matters, and projects that prove you\'ve actually deployed real things matter.',
    topCompanies: ['TCS', 'HCL', 'Cognizant', 'IBM', 'Amazon'],
  },
  sap: {
    name: 'SAP', icon: '🔷', color: '#7C3AED',
    forWho: 'Finance, accounting, supply chain, and HR professionals looking to transition into IT. Also for IT professionals who want stable, high-value consulting roles.',
    notFor: 'Freshers with no domain knowledge. SAP consultants sell their domain expertise + SAP skills — without the domain background, you\'re competing against 15-year veterans with nothing to differentiate you.',
    timeToJob: '60–120 days after course',
    avgSalary: '₹8L – ₹20L (Functional) · ₹12L – ₹30L (Technical ABAP)',
    difficulty: '4/5 — Module complexity is high',
    realTalk: 'SAP placements in Bangalore pay among the highest of any platform. A FICO consultant with 2-3 years experience earns more than most software engineers. The catch: SAP has a steep learning curve, companies prefer candidates with domain background, and getting your first role takes patience. But once you\'re in, the career is exceptionally stable.',
    topCompanies: ['Capgemini', 'IBM', 'EY', 'Deloitte', 'NTT Data'],
  },
  'python-data-science': {
    name: 'Python & AI', icon: '🐍', color: '#059669',
    forWho: 'Logical thinkers, people comfortable with math and statistics, IT professionals who want the highest-paying long-term career, freshers targeting data roles.',
    notFor: 'People who expect quick job placement in 2-3 months. Python + AI takes longer to master than other tracks, and the bar for interviews is higher.',
    timeToJob: '90–120 days after course',
    avgSalary: '₹8L – ₹20L (Data Analyst/Engineer) · ₹18L – ₹40L (ML Engineer)',
    difficulty: '5/5 — Highest learning curve, highest reward',
    realTalk: 'Python and AI is the single highest-paying long-term bet you can make in 2026. GenAI is not a hype cycle — it\'s a permanent platform shift. But it\'s also the most competitive market. A Python developer who can\'t explain gradient descent or build an actual ML pipeline won\'t get past a technical screen. Depth matters here more than any other platform.',
    topCompanies: ['Walmart Labs', 'Swiggy', 'Flipkart', 'PhonePe', 'Microsoft'],
  },
  devops: {
    name: 'DevOps & Kubernetes', icon: '🔄', color: '#0284C7',
    forWho: 'Developers who want to move into platform engineering, sysadmins who want to modernise, anyone who enjoys automation and infrastructure over application code.',
    notFor: 'Business-side professionals. DevOps requires a solid foundation in Linux, networking, and scripting — no shortcut here.',
    timeToJob: '60–90 days after course',
    avgSalary: '₹7L – ₹18L (DevOps Engineer) · ₹16L – ₹35L (Platform Engineer)',
    difficulty: '4/5 — Broad toolchain, but logical if you have Linux base',
    realTalk: 'Every software company now needs DevOps engineers. Kubernetes alone is a job skill that commands a ₹3-5L premium. The Bangalore DevOps market is hot but specific — companies want people who\'ve actually run CI/CD pipelines, not just watched tutorials. Our labs cover real pipelines on AWS with actual deployments.',
    topCompanies: ['Myntra', 'Razorpay', 'Zomato', 'Oracle', 'SAP Labs'],
  },
  cybersecurity: {
    name: 'Cybersecurity / CEH', icon: '🛡️', color: '#DC2626',
    forWho: 'IT professionals who want a specialisation with a clear shortage, freshers with strong analytical skills, anyone interested in ethical hacking and security operations.',
    notFor: 'People who want the fastest possible first job. Cybersecurity has fewer entry-level openings than other platforms — most roles prefer 1+ year of experience.',
    timeToJob: '90–150 days after certification',
    avgSalary: '₹6L – ₹14L (SOC Analyst) · ₹14L – ₹35L (Pen Tester)',
    difficulty: '4/5 — Requires IT foundation, but CEH is well-structured',
    realTalk: 'Cybersecurity is critically undersupplied globally — not just India. Every data breach headline creates 50 new job openings. The challenge: most organisations want experienced security professionals, so breaking in takes more effort. CEH certification opens doors, but your portfolio of lab exercises and your ability to demonstrate actual pen testing skills in interviews is what closes them.',
    topCompanies: ['KPMG', 'EY', 'Tata Consultancy', 'HCL Security', 'Wipro CyberSecurity'],
  },
};

const slugs = ['salesforce', 'cloud', 'sap', 'python-data-science', 'devops', 'cybersecurity'];

export default function PlatformsIndexPage() {
  const [step, setStep] = useState(0); // 0 = landing, 1-3 = quiz, 4 = result, 5 = browse all
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [result, setResult] = useState('');

  const handleAnswer = (qid: string, val: string) => {
    const newAnswers = { ...answers, [qid]: val };
    setAnswers(newAnswers);
    if (step === questions.length) {
      setResult(recommend(newAnswers));
      setStep(step + 1);
    } else {
      setStep(step + 1);
    }
  };

  const currentQ = questions[step - 1];
  const rec = result ? platforms[result] : null;

  return (
    <main style={{ paddingTop: 68, background: '#F5F7FB', minHeight: '100vh' }}>

      {/* ── Hero ── */}
      <section style={{ background: '#0B1A3D', padding: '64px 5% 56px' }}>
        <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontFamily: "'Inter',sans-serif", fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#F26522', marginBottom: 14 }}>
            Career Guides — Bangalore IT Market
          </p>
          <h1 style={{ fontFamily: "'Fraunces',serif", fontSize: 'clamp(1.8rem,3.5vw,2.6rem)', fontWeight: 900, color: '#fff', letterSpacing: '-1px', lineHeight: 1.1, marginBottom: 16 }}>
            Stop Googling. Let Us Tell You<br />Which Platform Fits <em style={{ color: '#F26522', fontStyle: 'italic' }}>Your</em> Background.
          </h1>
          <p style={{ fontFamily: "'Inter',sans-serif", color: 'rgba(255,255,255,0.5)', fontSize: '0.95rem', lineHeight: 1.8, marginBottom: 32 }}>
            3 quick questions. We&apos;ve placed 1,200+ students — we know which platform works for which background. No sales pitch, just honest guidance.
          </p>
          {step === 0 && (
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <button
                onClick={() => setStep(1)}
                style={{ fontFamily: "'Inter',sans-serif", background: '#F26522', color: '#fff', padding: '14px 32px', borderRadius: 8, border: 'none', fontSize: '0.95rem', fontWeight: 700, cursor: 'pointer', boxShadow: '0 6px 20px rgba(242,101,34,0.4)' }}
              >
                Find My Platform — 3 Questions →
              </button>
              <button
                onClick={() => setStep(5)}
                style={{ fontFamily: "'Inter',sans-serif", background: 'transparent', color: 'rgba(255,255,255,0.6)', padding: '14px 24px', borderRadius: 8, border: '1.5px solid rgba(255,255,255,0.2)', fontSize: '0.9rem', fontWeight: 600, cursor: 'pointer' }}
              >
                Browse All Guides
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ── Quiz ── */}
      {step >= 1 && step <= questions.length && (
        <section style={{ maxWidth: 620, margin: '48px auto', padding: '0 24px' }}>
          {/* Progress */}
          <div style={{ display: 'flex', gap: 6, marginBottom: 32 }}>
            {questions.map((_, i) => (
              <div key={i} style={{ flex: 1, height: 4, borderRadius: 2, background: i < step ? '#F26522' : '#E2E8F0' }} />
            ))}
          </div>

          <p style={{ fontFamily: "'Inter',sans-serif", fontSize: '0.75rem', fontWeight: 700, color: '#F26522', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 12 }}>
            Question {step} of {questions.length}
          </p>
          <h2 style={{ fontFamily: "'Fraunces',serif", fontSize: '1.5rem', fontWeight: 800, color: '#1B3369', letterSpacing: '-0.5px', marginBottom: 28 }}>
            {currentQ.q}
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {currentQ.opts.map(opt => (
              <button
                key={opt.val}
                onClick={() => handleAnswer(currentQ.id, opt.val)}
                style={{
                  fontFamily: "'Inter',sans-serif",
                  background: '#fff',
                  border: '1.5px solid #E2E8F0',
                  borderRadius: 10,
                  padding: '16px 20px',
                  textAlign: 'left',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  color: '#1B3369',
                  cursor: 'pointer',
                  transition: 'all 0.15s',
                  boxShadow: '0 1px 6px rgba(27,51,105,0.06)',
                }}
                onMouseEnter={e => {
                  (e.currentTarget).style.borderColor = '#1B3369';
                  (e.currentTarget).style.background = '#F0F4FF';
                }}
                onMouseLeave={e => {
                  (e.currentTarget).style.borderColor = '#E2E8F0';
                  (e.currentTarget).style.background = '#fff';
                }}
              >
                {opt.label}
              </button>
            ))}
          </div>

          {step > 1 && (
            <button onClick={() => setStep(s => s - 1)} style={{ marginTop: 20, fontFamily: "'Inter',sans-serif", background: 'none', border: 'none', color: '#9CA3AF', fontSize: '0.85rem', cursor: 'pointer' }}>
              ← Back
            </button>
          )}
        </section>
      )}

      {/* ── Result ── */}
      {step === questions.length + 1 && rec && (
        <section style={{ maxWidth: 720, margin: '48px auto', padding: '0 24px' }}>
          <div style={{ background: '#fff', borderRadius: 20, overflow: 'hidden', boxShadow: '0 8px 40px rgba(27,51,105,0.12)', border: `2px solid ${rec.color}` }}>
            <div style={{ background: rec.color, padding: '28px 32px', display: 'flex', alignItems: 'center', gap: 16 }}>
              <div style={{ fontSize: '2.5rem' }}>{rec.icon}</div>
              <div>
                <p style={{ fontFamily: "'Inter',sans-serif", fontSize: '0.7rem', fontWeight: 700, color: 'rgba(255,255,255,0.6)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 4 }}>
                  Our recommendation for you
                </p>
                <h2 style={{ fontFamily: "'Fraunces',serif", fontSize: '1.8rem', fontWeight: 900, color: '#fff', letterSpacing: '-0.5px' }}>
                  {rec.name}
                </h2>
              </div>
            </div>

            <div style={{ padding: '28px 32px' }}>
              {/* Real talk */}
              <div style={{ background: '#F8FAFF', borderLeft: `4px solid ${rec.color}`, borderRadius: '0 10px 10px 0', padding: '16px 20px', marginBottom: 24 }}>
                <p style={{ fontFamily: "'Inter',sans-serif", fontSize: '0.88rem', color: '#374151', lineHeight: 1.8 }}>
                  <strong style={{ color: '#1B3369' }}>Honest take:</strong> {rec.realTalk}
                </p>
              </div>

              {/* Stats grid */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginBottom: 24 }}>
                {[
                  { label: 'Time to First Job', val: rec.timeToJob },
                  { label: 'Salary Range', val: rec.avgSalary },
                  { label: 'Difficulty', val: rec.difficulty },
                ].map(stat => (
                  <div key={stat.label} style={{ background: '#F5F7FB', borderRadius: 10, padding: '14px 16px' }}>
                    <div style={{ fontFamily: "'Inter',sans-serif", fontSize: '0.65rem', color: '#9CA3AF', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 6 }}>{stat.label}</div>
                    <div style={{ fontFamily: "'Inter',sans-serif", fontSize: '0.82rem', fontWeight: 700, color: '#1B3369', lineHeight: 1.4 }}>{stat.val}</div>
                  </div>
                ))}
              </div>

              {/* Who it's for / not for */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 28 }}>
                <div style={{ background: '#ECFDF5', borderRadius: 10, padding: '14px 16px' }}>
                  <div style={{ fontFamily: "'Inter',sans-serif", fontSize: '0.65rem', fontWeight: 700, color: '#059669', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 8 }}>✓ Right for you if…</div>
                  <p style={{ fontFamily: "'Inter',sans-serif", fontSize: '0.82rem', color: '#374151', lineHeight: 1.7 }}>{rec.forWho}</p>
                </div>
                <div style={{ background: '#FEF2F2', borderRadius: 10, padding: '14px 16px' }}>
                  <div style={{ fontFamily: "'Inter',sans-serif", fontSize: '0.65rem', fontWeight: 700, color: '#DC2626', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 8 }}>✗ Avoid if…</div>
                  <p style={{ fontFamily: "'Inter',sans-serif", fontSize: '0.82rem', color: '#374151', lineHeight: 1.7 }}>{rec.notFor}</p>
                </div>
              </div>

              {/* Hiring companies */}
              <div style={{ marginBottom: 28 }}>
                <div style={{ fontFamily: "'Inter',sans-serif", fontSize: '0.7rem', fontWeight: 700, color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 10 }}>Top Hiring Companies in Bangalore</div>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  {rec.topCompanies.map(c => (
                    <span key={c} style={{ fontFamily: "'Inter',sans-serif", fontSize: '0.78rem', fontWeight: 600, background: `${rec.color}12`, color: rec.color, padding: '5px 12px', borderRadius: 20, border: `1px solid ${rec.color}30` }}>{c}</span>
                  ))}
                </div>
              </div>

              {/* CTAs */}
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <Link href={`/platforms/${result}`} style={{ fontFamily: "'Inter',sans-serif", background: rec.color, color: '#fff', padding: '13px 24px', borderRadius: 8, textDecoration: 'none', fontSize: '0.88rem', fontWeight: 700, flex: 1, textAlign: 'center' }}>
                  Read Full {rec.name} Career Guide →
                </Link>
                <Link href="/contact" style={{ fontFamily: "'Inter',sans-serif", background: '#F26522', color: '#fff', padding: '13px 24px', borderRadius: 8, textDecoration: 'none', fontSize: '0.88rem', fontWeight: 700, flex: 1, textAlign: 'center' }}>
                  Talk to a Counsellor Free
                </Link>
              </div>
              <button onClick={() => { setStep(1); setAnswers({}); setResult(''); }} style={{ width: '100%', marginTop: 12, fontFamily: "'Inter',sans-serif", background: 'none', border: 'none', color: '#9CA3AF', fontSize: '0.82rem', cursor: 'pointer' }}>
                ← Retake the quiz
              </button>
            </div>
          </div>
        </section>
      )}

      {/* ── Browse All ── */}
      {step === 5 && (
        <section style={{ maxWidth: 1100, margin: '48px auto', padding: '0 24px 64px' }}>
          <h2 style={{ fontFamily: "'Fraunces',serif", fontSize: '1.5rem', fontWeight: 800, color: '#1B3369', marginBottom: 8 }}>All Career Guides</h2>
          <p style={{ fontFamily: "'Inter',sans-serif", color: '#6B7280', marginBottom: 32, fontSize: '0.9rem' }}>
            Click any platform to read the full market breakdown, salary data, roadmap, and fit assessment.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 20 }}>
            {slugs.map(slug => {
              const p = platforms[slug];
              return (
                <Link key={slug} href={`/platforms/${slug}`} style={{ textDecoration: 'none' }}>
                  <div style={{ background: '#fff', border: '1.5px solid #E8EDF4', borderRadius: 14, padding: '22px 22px 18px', boxShadow: '0 2px 8px rgba(27,51,105,0.05)', transition: 'all 0.2s' }}
                    onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-3px)'; (e.currentTarget as HTMLDivElement).style.borderColor = p.color; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform = ''; (e.currentTarget as HTMLDivElement).style.borderColor = '#E8EDF4'; }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                      <div style={{ fontSize: '1.6rem' }}>{p.icon}</div>
                      <div>
                        <div style={{ fontFamily: "'Fraunces',serif", fontWeight: 800, fontSize: '1rem', color: '#1B3369' }}>{p.name}</div>
                        <div style={{ fontFamily: "'Inter',sans-serif", fontSize: '0.7rem', color: p.color, fontWeight: 700 }}>{p.timeToJob}</div>
                      </div>
                    </div>
                    <p style={{ fontFamily: "'Inter',sans-serif", fontSize: '0.8rem', color: '#6B7280', lineHeight: 1.65, marginBottom: 14 }}>
                      {p.forWho.slice(0, 90)}…
                    </p>
                    <span style={{ fontFamily: "'Inter',sans-serif", fontSize: '0.78rem', fontWeight: 700, color: p.color }}>Read Career Guide →</span>
                  </div>
                </Link>
              );
            })}
          </div>
          <div style={{ textAlign: 'center', marginTop: 40 }}>
            <button onClick={() => { setStep(1); setAnswers({}); }} style={{ fontFamily: "'Inter',sans-serif", background: '#F26522', color: '#fff', padding: '13px 28px', borderRadius: 8, border: 'none', fontSize: '0.9rem', fontWeight: 700, cursor: 'pointer' }}>
              Or take the 3-question quiz →
            </button>
          </div>
        </section>
      )}

    </main>
  );
}
