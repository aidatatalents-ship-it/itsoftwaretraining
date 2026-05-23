'use client';
import { useState } from 'react';
import Link from 'next/link';
import {
  ChevronRight, Phone, ArrowRight, CheckCircle,
  Clock, Users, IndianRupee, ChevronDown,
  Zap, Shield, BookOpen, Award,
} from 'lucide-react';
import type { ParentCourse } from '@/data/courseTree';
import { courseTree } from '@/data/courseTree';
import { PHONE_DISPLAY, PHONE_E164, WHATSAPP_BASE } from '@/data/contact';
import styles from './ParentCoursePage.module.css';

interface Props { parent: ParentCourse; }

const WHY = [
  { icon: '🎓', title: 'Expert Trainers',      body: '10–20 yrs real MNC project experience' },
  { icon: '💼', title: 'Placement Support',     body: '200+ hiring partners, 85%+ placement rate' },
  { icon: '🖥️', title: 'Live Projects',          body: 'Production-grade capstone & real datasets' },
  { icon: '📜', title: 'Certifications',         body: 'Global cert prep built into every module' },
  { icon: '⏰', title: 'Flexible Batches',       body: 'Weekday / weekend / fast-track options' },
  { icon: '♾️', title: 'Lifetime Access',        body: 'Re-attend any batch free forever' },
];

export default function ParentCoursePage({ parent }: Props) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Build FAQ from first child's detail if available, else generic
  const genericFaqs = [
    { q: `Who should join ${parent.title}?`, a: `Anyone looking to start or advance their IT career. We welcome freshers, career-switchers, and working professionals. No strict prerequisites — our curriculum starts from fundamentals.` },
    { q: 'What is the fee structure?', a: 'Fees vary by module and batch type. We offer 0% interest EMI options. Contact us for the latest fee structure and available discounts.' },
    { q: 'Do you provide placement assistance?', a: 'Yes — 100% placement support including AI-powered resume writing, LinkedIn profile optimisation, mock interviews, and direct recruiter referrals to 200+ partner companies.' },
    { q: 'Is online training available?', a: 'Yes. We offer both in-centre classroom training (Koramangala, Whitefield, HSR, Marathahalli, Indiranagar, Electronic City) and live online instructor-led classes.' },
    { q: 'What certifications will I receive?', a: `You will receive our institute's course completion certificate plus guidance and preparation for all globally recognised vendor certifications covered in the curriculum.` },
  ];

  const whatsappMsg = encodeURIComponent(`Hi, I'm interested in ${parent.title} at IT Software Training Bangalore`);

  // Other platforms for sidebar
  const otherPlatforms = courseTree.filter(p => p.slug !== parent.slug).slice(0, 5);

  return (
    <>
      {/* ══════ HERO ══════ */}
      <section className={styles.hero}>
        <div className="container">
          {/* Breadcrumb */}
          <nav className={styles.heroBreadcrumb} aria-label="breadcrumb">
            <Link href="/">Home</Link>
            <ChevronRight size={11} />
            <Link href="/all-courses">Courses</Link>
            <ChevronRight size={11} />
            <span>{parent.title}</span>
          </nav>

          <div className={styles.heroTop}>
            {/* LEFT */}
            <div className={styles.heroLeft}>
              <div className={styles.heroBadge}>
                <Zap size={11} /> {parent.children.length} Specialisation{parent.children.length > 1 ? 's' : ''} Available
              </div>
              <h1 className={styles.heroH1}>{parent.title}</h1>
              <p className={styles.heroTagline}>{parent.tagline}</p>
              <p className={styles.heroDesc}>{parent.description}</p>
              <div className={styles.heroCtas}>
                <Link href="/contact" className={styles.ctaPrimary}>
                  <CheckCircle size={15} /> Book Free Demo
                </Link>
                <a href={`${WHATSAPP_BASE}?text=${whatsappMsg}`} target="_blank" rel="noopener" className={styles.ctaSecondary}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/></svg>
                  WhatsApp Us
                </a>
              </div>
            </div>

            {/* RIGHT quick-card */}
            <div className={styles.heroCard}>
              {[
                { Icon: Users,        val: `${parent.children.length} Courses`, lbl: 'Specialisations' },
                { Icon: Clock,        val: '2–6 Months',                        lbl: 'Course Duration' },
                { Icon: IndianRupee,  val: '₹4–45 LPA',                         lbl: 'Salary Range' },
                { Icon: Award,        val: '85%+',                              lbl: 'Placement Rate' },
                { Icon: Shield,       val: '4.9 / 5.0',                         lbl: 'Student Rating' },
              ].map(({ Icon, val, lbl }) => (
                <div key={lbl} className={styles.heroCardRow}>
                  <div className={styles.heroCardIcon}>
                    <Icon size={14} style={{ color: '#fff' }} />
                  </div>
                  <div>
                    <div className={styles.heroCardVal}>{val}</div>
                    <div className={styles.heroCardLbl}>{lbl}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className={styles.statsBar}>
          <div className="container">
            <div className={styles.statsBarInner}>
              {[
                { val: '1,200+',  label: 'Students Trained' },
                { val: '85%+',    label: 'Placement Rate' },
                { val: '4.9★',    label: 'Average Rating' },
                { val: '200+',    label: 'Hiring Partners' },
                { val: '6',       label: 'Bangalore Centres' },
              ].map(({ val, label }) => (
                <div key={label} className={styles.statItem}>
                  <div className={styles.statVal}>{val}</div>
                  <div className={styles.statLbl}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════ BODY ══════ */}
      <div className={styles.body}>
        <div className="container">
          <div className={styles.pageLayout}>

            {/* ── MAIN ── */}
            <main className={styles.main}>

              {/* Child course cards */}
              <div className={styles.sec}>
                <h2 className={styles.secTitle}>
                  {parent.children.length > 1 ? 'Choose Your' : 'Course'} <em>Specialisation</em>
                </h2>
                <p className={styles.secSub}>
                  {parent.children.length > 1
                    ? `${parent.children.length} targeted courses under ${parent.title.replace(' Training in Bangalore', '')} — from beginner to expert level. Each has a dedicated curriculum, certification prep, and placement support.`
                    : 'A comprehensive programme covering everything from fundamentals to advanced topics with real project work.'}
                </p>
                <div className={styles.childGrid}>
                  {parent.children.map(child => (
                    <Link
                      key={child.slug}
                      href={child.href ?? `/services/${child.slug}`}
                      className={styles.childCard}
                    >
                      <div className={styles.childCardTop}>
                        <span className={styles.childCardIcon}>{child.icon}</span>
                        {child.badge && <span className={styles.childCardBadge}>{child.badge}</span>}
                      </div>
                      <div className={styles.childCardTitle}>{child.title}</div>
                      <div className={styles.childCardTagline}>{child.tagline}</div>
                      <ul className={styles.childCardHighlights}>
                        {child.highlights.map(h => <li key={h}>{h}</li>)}
                      </ul>
                      <div className={styles.childCardMeta}>
                        <span className={styles.childCardMetaItem}>
                          <Clock size={11} /> {child.duration}
                        </span>
                        <span className={styles.childCardMetaItem}>
                          <BookOpen size={11} /> {child.level}
                        </span>
                        <span className={styles.childCardMetaItem}>
                          <IndianRupee size={11} /> {child.salary}
                        </span>
                      </div>
                      <div className={styles.childCardCta}>
                        View Full Details <ArrowRight size={13} />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Why highlights */}
              <div className={styles.sec}>
                <h2 className={styles.secTitle}>Why Learn <em>{parent.title.split(' ')[0]}</em> with Us?</h2>
                <p className={styles.secSub}>Bangalore&apos;s most trusted institute — not just a course, a complete career transformation.</p>
                <div className={styles.highlightGrid}>
                  {[
                    { Icon: CheckCircle, text: 'Trainers with 10–20 years real MNC project experience' },
                    { Icon: CheckCircle, text: 'Hands-on labs and production-grade live project work' },
                    { Icon: CheckCircle, text: '200+ hiring partner network with direct referrals' },
                    { Icon: CheckCircle, text: 'Certification-aligned curriculum for global credentials' },
                    { Icon: CheckCircle, text: '6 training centres across Bangalore + online live classes' },
                    { Icon: CheckCircle, text: 'Lifetime access — attend future batches free of charge' },
                    { Icon: CheckCircle, text: '0% interest EMI available on all course fees' },
                    { Icon: CheckCircle, text: '90-day active placement support until offer letter signed' },
                  ].map(({ Icon, text }) => (
                    <div key={text} className={styles.highlightItem}>
                      <div className={styles.highlightIcon}>
                        <Icon size={15} style={{ color: 'var(--blue)' }} />
                      </div>
                      <span className={styles.highlightText}>{text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why this career */}
              <div className={styles.sec}>
                <h2 className={styles.secTitle}>Why Train at <em>Nexus?</em></h2>
                <div className={styles.whyGrid}>
                  {WHY.map(({ icon, title, body }) => (
                    <div key={title} className={styles.whyCard}>
                      <div className={styles.whyCardIcon}>{icon}</div>
                      <div className={styles.whyCardTitle}>{title}</div>
                      <div className={styles.whyCardBody}>{body}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQ */}
              <div className={styles.sec}>
                <h2 className={styles.secTitle}>Frequently Asked <em>Questions</em></h2>
                <p className={styles.secSub}>Common questions about our {parent.title.split(' Training')[0]} programme.</p>
                <div className={styles.faqList}>
                  {genericFaqs.map(({ q, a }, i) => (
                    <div key={i} className={`${styles.faqItem} ${openFaq === i ? styles.faqItemOpen : ''}`}>
                      <button className={styles.faqQ} onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                        <span className={styles.faqQText}>{q}</span>
                        <ChevronDown size={15} style={{ color: 'var(--blue)', transition: 'transform .25s', transform: openFaq === i ? 'rotate(180deg)' : '', flexShrink: 0 }} />
                      </button>
                      {openFaq === i && <div className={styles.faqA}>{a}</div>}
                    </div>
                  ))}
                </div>
              </div>

            </main>

            {/* ── SIDEBAR ── */}
            <aside className={styles.sidebar}>
              {/* Enquiry form */}
              <div className={styles.sideEnquiry}>
                <div className={styles.sideEnquiryTitle}>Get Course Details</div>
                <div className={styles.sideEnquirySub}>Our counsellor will contact you within 30 mins with syllabus, batch dates &amp; fees.</div>
                <input className={styles.sideInput} type="text" placeholder="Your Full Name *" />
                <input className={styles.sideInput} type="tel" placeholder="WhatsApp Number *" />
                <input className={styles.sideInput} type="email" placeholder="Email Address" />
                <Link href="/contact" className={styles.sideBtn}>
                  <CheckCircle size={14} /> Book Free Demo Class
                </Link>
              </div>

              {/* Call */}
              <a href={`tel:${PHONE_E164}`} className={styles.sideCallCard}>
                <div className={styles.sideCallIcon}>
                  <Phone size={16} style={{ color: 'var(--blue)' }} />
                </div>
                <div>
                  <div className={styles.sideCallLbl}>Talk to a counsellor</div>
                  <div className={styles.sideCallNum}>{PHONE_DISPLAY}</div>
                </div>
              </a>

              {/* Other platforms */}
              {otherPlatforms.length > 0 && (
                <div className={styles.sideRelated}>
                  <div className={styles.sideRelatedTitle}>Other Platforms</div>
                  {otherPlatforms.map(p => (
                    <Link key={p.slug} href={`/courses/${p.slug}`} className={styles.sideRelatedItem}>
                      <span className={styles.sideRelatedIcon}>{p.icon}</span>
                      {p.title.replace(' Training in Bangalore', ' Training')}
                      <ArrowRight size={12} style={{ marginLeft: 'auto', color: 'var(--t-muted)' }} />
                    </Link>
                  ))}
                </div>
              )}
            </aside>

          </div>
        </div>
      </div>
    </>
  );
}
