'use client';
import { useState } from 'react';
import Link from 'next/link';
import {
  ChevronRight, Clock, Users, IndianRupee, Calendar,
  CheckCircle, ChevronDown, Zap, Cpu, Monitor, Briefcase,
  BookOpen, BadgeCheck, TrendingUp, Building2, Star,
  Phone, ArrowRight, Award, Shield, Rocket, Globe, Send,
} from 'lucide-react';
import type { ServiceItem } from '@/data/services';
import type { ServiceDetail } from '@/data/serviceDetails';
import { PHONE_DISPLAY, PHONE_E164, WHATSAPP_BASE } from '@/data/contact';
import styles from './PlatformPage.module.css';

interface Props { service: ServiceItem; detail: ServiceDetail; }

const WHY_ITEMS = [
  { Icon: Cpu,        title: 'Expert Trainers',       body: '10–20 yrs of MNC project experience. Real consultants, not just teachers.',   color: '#F26522' },
  { Icon: Monitor,    title: 'Live Project Training',  body: 'Work on production-grade projects. Build a portfolio that gets you hired.',    color: '#F26522' },
  { Icon: Briefcase,  title: '200+ Hiring Partners',   body: 'Direct recruiter access. Resume, LinkedIn, mock interviews & referrals.',      color: '#F26522' },
  { Icon: BookOpen,   title: 'Lifetime Access',        body: 'Attend future batches free. Access all recordings indefinitely.',              color: '#F26522' },
  { Icon: Clock,      title: 'Flexible Batches',       body: 'Weekday mornings, evenings, weekends & fast-track intensive options.',         color: '#F26522' },
  { Icon: BadgeCheck, title: 'Cert-Aligned Prep',      body: 'Globally recognised certification prep built into every module.',              color: '#F26522' },
  { Icon: TrendingUp, title: '85%+ Placement Rate',    body: '90-day active placement support until your offer letter is signed.',          color: '#F26522' },
  { Icon: Building2,  title: '6 Bangalore Centres',    body: 'Koramangala · Whitefield · HSR · Marathahalli · Indiranagar · Electronic City.', color: '#F26522' },
];

const REVIEWS = [
  { name: 'Priya Sharma',  avatar: 'PS', role: 'Salesforce Developer',    company: 'Infosys',  pkg: '\u20b98.5 LPA', text: 'Joined with zero IT background and got placed in 6 weeks. The trainer explained everything with real-world context. Best investment I\'ve made.', color: '#1B3369' },
  { name: 'Rahul Nair',    avatar: 'RN', role: 'AWS Solutions Architect',  company: 'Amazon',   pkg: '\u20b918 LPA',  text: 'Cleared AWS SAA in first attempt. Hands-on labs on actual AWS accounts. Mock interviews were tougher than the real ones!', color: '#0F2147' },
  { name: 'Divya Menon',   avatar: 'DM', role: 'Senior Data Scientist',    company: 'Wipro',    pkg: '\u20b912 LPA',  text: 'From Python basics to production ML models in 5 months. The GenAI module was cutting-edge -- you won\'t find it elsewhere in Bangalore.', color: '#1565C0' },
  { name: 'Karthik Reddy', avatar: 'KR', role: 'SAP FICO Consultant',      company: 'Deloitte', pkg: '\u20b914 LPA',  text: 'SAP FICO trainer had 18 years consulting experience. Real client scenarios, end-to-end implementation. Got placed with a 280% hike.', color: '#1B3369' },
];

export default function PlatformPage({ service, detail }: Props) {
  const [openAcc, setOpenAcc] = useState<number | null>(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const curriculum  = detail.curriculum   || [];
  const tools       = detail.tools        || [];
  const careerRoles = detail.careerRoles  || [];
  const certs       = detail.certifications || [];
  const faqs        = detail.faqs         || [];

  // First 12 topics as "what you'll learn" tiles
  const learnTopics = curriculum.flatMap(m => m.topics).slice(0, 12);

  // Salary ranges per slug
  const salaryRanges: Record<string, { fresh: string; mid: string; senior: string }> = {
    salesforce: { fresh: '₹4–8 LPA', mid: '₹10–18 LPA', senior: '₹22–30 LPA' },
    cloud:      { fresh: '₹8–14 LPA', mid: '₹15–30 LPA', senior: '₹35–50 LPA' },
    sap:        { fresh: '₹4–8 LPA', mid: '₹12–20 LPA', senior: '₹25–40 LPA' },
    'python-data-science': { fresh: '₹6–12 LPA', mid: '₹15–25 LPA', senior: '₹30–50 LPA' },
    devops:     { fresh: '₹6–10 LPA', mid: '₹15–28 LPA', senior: '₹30–45 LPA' },
    cybersecurity: { fresh: '₹5–8 LPA', mid: '₹12–22 LPA', senior: '₹25–40 LPA' },
  };
  const salary = salaryRanges[service.slug] || { fresh: '₹4–8 LPA', mid: '₹10–20 LPA', senior: '₹20–35 LPA' };

  const whatsappMsg = encodeURIComponent(`Hi, I'm interested in ${service.name} at IT Software Training Bangalore`);

  return (
    <>
      {/* ══════════ HERO ══════════ */}
      <section className={styles.hero}>
        <div className="container">
          {/* Breadcrumb */}
          <div className={styles.heroBreadcrumb}>
            <Link href="/">Home</Link>
            <ChevronRight size={11} />
            <Link href="/all-courses">Platforms</Link>
            <ChevronRight size={11} />
            <span>{service.name}</span>
          </div>

          <div className={styles.heroInner}>
            {/* LEFT */}
            <div className={styles.heroLeft}>
              <div className={styles.heroPlatformBadge}>
                <Zap size={11} /> {service.badge} · {service.demand} Demand
              </div>
              <h1 className={styles.heroH1}>
                {service.h1
                  ? service.h1.split(' in Bangalore')[0]
                  : <>{service.name}</>}
                {' '}in <em>Bangalore</em>
              </h1>
              <p className={styles.heroTagline}>{service.description}</p>

              <div className={styles.heroCtas}>
                <Link href="/contact" className={styles.heroCtaPrimary}>
                  <CheckCircle size={15} /> Book Free Demo
                </Link>
                <a
                  href={`${WHATSAPP_BASE}?text=${whatsappMsg}`}
                  target="_blank" rel="noopener"
                  className={styles.heroCtaSecondary}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/></svg>
                  WhatsApp Us
                </a>
              </div>

              <div className={styles.heroTrust}>
                {['No cost, no commitment', `${service.students} enrolled`, 'EMI available', 'Batch starts soon'].map(t => (
                  <div key={t} className={styles.heroTrustItem}>
                    <span className={styles.heroTrustDot} /> {t}
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT — Info card */}
            <div className={styles.heroCard}>
              <div className={styles.heroCardTitle}>Quick Facts</div>
              {[
                { Icon: Clock,        val: service.duration,  lbl: 'Course Duration' },
                { Icon: Users,        val: service.students,  lbl: 'Students Trained' },
                { Icon: IndianRupee,  val: service.salary,    lbl: 'Avg Package Range' },
                { Icon: Calendar,     val: service.nextBatch, lbl: 'Next Batch' },
                { Icon: Award,        val: `${service.modules} Modules`, lbl: 'Structured Curriculum' },
                { Icon: Star,         val: `${service.rating} / 5.0`,    lbl: 'Average Rating' },
              ].map(({ Icon, val, lbl }) => (
                <div key={lbl} className={styles.heroCardStat}>
                  <div className={styles.heroCardStatIcon}>
                    <Icon size={15} style={{ color: '#FFFFFF' }} />
                  </div>
                  <div>
                    <div className={styles.heroCardStatVal}>{val}</div>
                    <div className={styles.heroCardStatLbl}>{lbl}</div>
                  </div>
                </div>
              ))}
              <div style={{ marginTop: 20 }}>
                <Link href="/contact" className={styles.currSideBtn}>
                  <CheckCircle size={15} /> Apply Now — Free Demo
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Stats wave */}
        <div className={styles.statsWave}>
          <div className="container">
            <div className={styles.statsWaveInner}>
              {[
                { val: service.students, label: 'Students Enrolled' },
                { val: service.salary,   label: 'Average Package' },
                { val: '85%+',           label: 'Placement Rate' },
                { val: service.rating,   label: 'Course Rating' },
                { val: '6',              label: 'Training Centres' },
              ].map(({ val, label }) => (
                <div key={label} className={styles.statsWaveItem}>
                  <div className={styles.statsWaveVal}>{val}</div>
                  <div className={styles.statsWaveLbl}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ WHAT YOU LEARN ══════════ */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.centerText}>
            <div className={styles.sectionLabel}><CheckCircle size={11} /> What You'll Learn</div>
            <h2 className={styles.sectionH2}>Skills You'll <em>Master</em></h2>
            <p className={styles.sectionSub}>Hands-on, industry-validated skills taught by working professionals with 10–20 years of real MNC experience.</p>
          </div>
          <div className={styles.learnGrid}>
            {learnTopics.map((topic) => (
              <div key={topic} className={styles.learnCard}>
                <div className={styles.learnCardIcon}>
                  <CheckCircle size={15} style={{ color: 'var(--blue)' }} />
                </div>
                <span className={styles.learnCardText}>{topic}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ CURRICULUM ══════════ */}
      {curriculum.length > 0 && (
        <section className={styles.sectionAlt}>
          <div className="container">
            <div className={styles.sectionLabel}><BookOpen size={11} /> Full Syllabus</div>
            <h2 className={styles.sectionH2}>Course <em>Curriculum</em></h2>
            <p className={styles.sectionSub} style={{ marginBottom: 36 }}>
              {service.modules} comprehensive modules covering theory, hands-on labs, and real-world project work.
            </p>

            <div className={styles.curriculumLayout}>
              {/* Accordion */}
              <div className={styles.accordion}>
                {curriculum.map((mod, i) => (
                  <div
                    key={i}
                    className={`${styles.accItem} ${openAcc === i ? styles.accItemOpen : ''}`}
                  >
                    <button className={styles.accHeader} onClick={() => setOpenAcc(openAcc === i ? null : i)}>
                      <span className={styles.accNum}>{String(i + 1).padStart(2, '0')}</span>
                      <span className={styles.accTitle}>{mod.module}</span>
                      <span className={styles.accCount}>{mod.topics.length} topics</span>
                      <ChevronDown size={16} style={{ color: 'var(--blue)', transition: 'transform .25s', transform: openAcc === i ? 'rotate(180deg)' : '', flexShrink: 0 }} />
                    </button>
                    {openAcc === i && (
                      <div className={styles.accBody}>
                        {mod.topics.map(topic => (
                          <div key={topic} className={styles.accTopic}>
                            <span className={styles.accDot} />
                            {topic}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Sidebar */}
              <div className={styles.currSideCard}>
                <div className={styles.currSideTitle}>Ready to Enrol?</div>
                <div className={styles.currSideSub}>Our counsellors will send you the full syllabus, batch dates and fee structure.</div>
                {[
                  { Icon: Clock,       val: service.duration,      lbl: 'Duration' },
                  { Icon: Monitor,     val: 'Classroom + Online',   lbl: 'Mode' },
                  { Icon: IndianRupee, val: '0% Interest',          lbl: 'EMI Option' },
                  { Icon: Award,       val: 'Industry Certificate', lbl: 'Credential' },
                ].map(({ Icon, val, lbl }) => (
                  <div key={lbl} className={styles.currSideStat}>
                    <div className={styles.currSideStatIcon}>
                      <Icon size={14} style={{ color: '#FFFFFF' }} />
                    </div>
                    <div>
                      <div className={styles.currSideStatVal}>{val}</div>
                      <div className={styles.currSideStatLbl}>{lbl}</div>
                    </div>
                  </div>
                ))}
                <Link href="/contact" className={styles.currSideBtn}>
                  <ArrowRight size={14} /> Download Full Syllabus
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ══════════ TOOLS & TECH ══════════ */}
      {tools.length > 0 && (
        <section className={styles.section}>
          <div className="container">
            <div className={styles.centerText}>
              <div className={styles.sectionLabel}><Cpu size={11} /> Tools & Technologies</div>
              <h2 className={styles.sectionH2}>Industry <em>Tools</em> You'll Use</h2>
              <p className={styles.sectionSub}>Train on the exact same tools used by top MNCs and product companies worldwide.</p>
            </div>
            <div className={styles.toolsGrid}>
              {tools.map(t => (
                <div key={t} className={styles.toolChip}>
                  <span className={styles.toolChipDot} />
                  {t}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ══════════ WHY TRAIN HERE ══════════ */}
      <section className={styles.sectionDark}>
        <div className="container">
          <div className={styles.centerText}>
            <div className={`${styles.sectionLabel} ${styles.sectionLabelLight}`}><Shield size={11} /> Why Choose Us</div>
            <h2 className={`${styles.sectionH2} ${styles.sectionH2Light}`}>Why IT Software <em style={{ color: '#F26522' }}>Training Bangalore</em>?</h2>
            <p className={`${styles.sectionSub} ${styles.sectionSubLight}`} style={{ marginBottom: 44, marginLeft: 'auto', marginRight: 'auto' }}>
              Bangalore's most trusted institute for working professionals and freshers. Not just a course — a career transformation.
            </p>
          </div>
          <div className={styles.whyGrid}>
            {WHY_ITEMS.map(({ Icon, title, body }) => (
              <div key={title} className={styles.whyCard}>
                <div className={styles.whyCardIcon}>
                  <Icon size={22} style={{ color: '#F26522' }} />
                </div>
                <div className={styles.whyCardTitle}>{title}</div>
                <div className={styles.whyCardBody}>{body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ CAREER ROLES ══════════ */}
      {careerRoles.length > 0 && (
        <section className={styles.sectionAlt}>
          <div className="container">
            <div className={styles.sectionLabel}><Rocket size={11} /> Career Outcomes</div>
            <h2 className={styles.sectionH2}>Roles You Can <em>Target</em></h2>
            <p className={styles.sectionSub} style={{ marginBottom: 32 }}>
              Our graduates are working across Infosys, Wipro, Accenture, TCS, Deloitte, Amazon, and 200+ companies.
            </p>
            <div className={styles.careerGrid}>
              {careerRoles.map((role, i) => (
                <div key={role} className={styles.careerCard}>
                  <div className={styles.careerCardNum}>{String(i + 1).padStart(2, '0')}</div>
                  <div className={styles.careerCardRole}>{role}</div>
                  <div className={styles.careerCardSalary}>High demand · Premium pay</div>
                </div>
              ))}
            </div>

            {/* Salary highlight */}
            <div className={styles.salaryHighlight}>
              <div>
                <div className={styles.salaryBig}>{service.salary}</div>
                <div className={styles.salaryBigLbl}>Average salary range in Bangalore</div>
              </div>
              <div style={{ flex: 1, display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16, paddingLeft: 32, borderLeft: '1px solid rgba(255,255,255,0.15)' }}>
                {[
                  { label: 'Fresher',    val: salary.fresh },
                  { label: 'Mid-Level',  val: salary.mid   },
                  { label: 'Senior',     val: salary.senior },
                ].map(({ label, val }) => (
                  <div key={label} style={{ textAlign: 'center' }}>
                    <div style={{ fontFamily: "'Inter',sans-serif", fontSize: '1.15rem', fontWeight: 900, color: '#FFFFFF' }}>{val}</div>
                    <div style={{ fontSize: '.7rem', color: 'rgba(255,255,255,0.5)', marginTop: 4 }}>{label}</div>
                  </div>
                ))}
              </div>
              <Link href="/contact" className={styles.heroCtaSecondary} style={{ whiteSpace: 'nowrap', flexShrink: 0 }}>
                Get Career Guidance <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ══════════ CERTIFICATIONS ══════════ */}
      {certs.length > 0 && (
        <section className={styles.section}>
          <div className="container">
            <div className={styles.centerText}>
              <div className={styles.sectionLabel}><Award size={11} /> Certifications</div>
              <h2 className={styles.sectionH2}>Industry <em>Certifications</em> You'll Earn</h2>
              <p className={styles.sectionSub}>Globally recognised credentials that open doors at top MNCs worldwide.</p>
            </div>
            <div className={styles.certGrid}>
              {certs.map(c => (
                <div key={c} className={styles.certCard}>
                  <div className={styles.certBadgeIcon}>
                    <Award size={20} style={{ color: '#FFC107' }} />
                  </div>
                  <div className={styles.certName}>{c}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ══════════ REVIEWS ══════════ */}
      <section className={styles.sectionAlt}>
        <div className="container">
          <div className={styles.centerText}>
            <div className={styles.sectionLabel}><Star size={11} /> Student Reviews</div>
            <h2 className={styles.sectionH2}>Real <em>Success Stories</em></h2>
            <p className={styles.sectionSub}>Hear from our students who transformed their careers with us.</p>
          </div>
          <div className={styles.reviewsGrid}>
            {REVIEWS.map(r => (
              <div key={r.name} className={styles.reviewCard}>
                <div className={styles.reviewQuote}>&ldquo;</div>
                <p className={styles.reviewText}>{r.text}</p>
                <div className={styles.reviewFooter}>
                  <div className={styles.reviewAvatar} style={{ background: `${r.color}15`, color: r.color }}>
                    {r.avatar}
                  </div>
                  <div>
                    <div className={styles.reviewStars}>
                      {[...Array(5)].map((_, i) => <Star key={i} size={11} style={{ color: '#FFC107', fill: '#FFC107' }} />)}
                    </div>
                    <div className={styles.reviewName}>{r.name}</div>
                    <div className={styles.reviewRole}>{r.role} · {r.company}</div>
                  </div>
                  <div className={styles.reviewPkg}>{r.pkg}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ FAQ ══════════ */}
      {faqs.length > 0 && (
        <section className={styles.section}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 520px', gap: 56, alignItems: 'start' }}>
              <div>
                <div className={styles.sectionLabel}><BookOpen size={11} /> FAQs</div>
                <h2 className={styles.sectionH2}>Common <em>Questions</em></h2>
                <p className={styles.sectionSub} style={{ marginBottom: 28 }}>
                  Everything you need to know about our {service.short} training programme.
                </p>
                <a href={`tel:${PHONE_E164}`} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '14px 18px', background: '#fff', border: '1.5px solid var(--border)', borderRadius: 12, textDecoration: 'none', color: 'var(--t-dark)', transition: 'all .2s', width: 'fit-content' }}>
                  <div style={{ width: 40, height: 40, borderRadius: 10, background: 'rgba(29,78,216,.10)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Phone size={16} style={{ color: 'var(--blue)' }} />
                  </div>
                  <div>
                    <div style={{ fontSize: '.68rem', color: 'var(--t-muted)' }}>Talk to a counsellor</div>
                    <div style={{ fontWeight: 800, fontSize: '.95rem' }}>{PHONE_DISPLAY}</div>
                  </div>
                </a>
              </div>
              <div className={styles.faqList}>
                {faqs.map(({ q, a }, i) => (
                  <div key={i} className={`${styles.faqItem} ${openFaq === i ? styles.faqItemOpen : ''}`}>
                    <button className={styles.faqQ} onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                      <span className={styles.faqQText}>{q}</span>
                      <ChevronDown size={16} style={{ color: 'var(--blue)', transition: 'transform .25s', transform: openFaq === i ? 'rotate(180deg)' : '', flexShrink: 0 }} />
                    </button>
                    {openFaq === i && <div className={styles.faqA}>{a}</div>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ══════════ FINAL CTA ══════════ */}
      <section className={styles.finalCta}>
        <div className="container">
          <h2 className={styles.finalCtaH2}>Start Your <em>{service.short}</em> Journey Today</h2>
          <p className={styles.finalCtaSub}>
            Free demo class · No commitment · EMI available · Placement support from Day 1
          </p>
          <div className={styles.finalCtaBtns}>
            <Link href="/contact" className={styles.heroCtaPrimary}>
              <Send size={15} /> Book Free Demo Class
            </Link>
            <a
              href={`${WHATSAPP_BASE}?text=${whatsappMsg}`}
              target="_blank" rel="noopener"
              className={styles.heroCtaSecondary}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/></svg>
              Chat on WhatsApp
            </a>
            <a href={`tel:${PHONE_E164}`} className={styles.heroCtaSecondary}>
              <Phone size={15} /> {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
