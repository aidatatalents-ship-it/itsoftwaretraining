'use client';
import { useState } from 'react';
import Link from 'next/link';
import {
  Clock, IndianRupee, Users, Calendar, ChevronRight,
  CheckCircle, ChevronDown, Phone, MessageCircle,
  ArrowRight, Star, GraduationCap, Monitor, Building2,
  Briefcase, TrendingUp, Globe, Shield, Rocket, Award,
  BookOpen, Cpu, Zap, BadgeCheck, CreditCard, Send,
} from 'lucide-react';
import Image from 'next/image';
import type { ServiceItem } from '@/data/services';
import type { ServiceDetail } from '@/data/serviceDetails';
import styles from './CourseDetail.module.css';

interface Props { service: ServiceItem; detail: ServiceDetail; }

const TABS = ['Overview', 'Curriculum', 'Features', 'Career', 'Reviews', 'Enquiry'];

const features = [
  { Icon: Cpu,         title: 'Expert Trainers',      body: '10–20 years of industry experience. Not just theory — real MNC project exposure.', color: '#0D1B3E' },
  { Icon: Monitor,     title: 'Live Project Training', body: 'Work on production-grade projects. Build a portfolio that gets you hired.', color: '#0D1B3E' },
  { Icon: Briefcase,   title: 'Placement Cell',        body: '200+ hiring partners. Resume, LinkedIn, mock interviews & direct referrals.', color: '#0D1B3E' },
  { Icon: BookOpen,    title: 'Lifetime Access',       body: 'Attend any future batch free. Access recordings for life after completion.', color: '#0D1B3E' },
  { Icon: Clock,       title: 'Flexible Batches',      body: 'Weekday mornings, evenings, weekends and fast-track intensive options.', color: '#0D1B3E' },
  { Icon: BadgeCheck,  title: 'Certifications',        body: 'Dedicated exam prep for globally recognised certifications.', color: '#0D1B3E' },
  { Icon: TrendingUp,  title: '98% Placement Rate',    body: 'Consistent placement record backed by real students and Google reviews.', color: '#0D1B3E' },
  { Icon: Building2,   title: '6 Bangalore Centres',   body: 'Koramangala, Whitefield, HSR Layout, Marathahalli, Indiranagar, Electronic City.', color: '#0D1B3E' },
];

const reviews = [
  { name: 'Priya Sharma',   role: 'Salesforce Developer',    company: 'Infosys',   pkg: '₹8.5 LPA',  rating: 5, color: '#0D1B3E', avatar: 'PS', text: 'Best decision of my life. Joined with zero IT background and got placed in 6 weeks. The trainer was exceptional — explained everything with real-world context.' },
  { name: 'Rahul Nair',     role: 'AWS Solutions Architect', company: 'Amazon',    pkg: '₹18 LPA',   rating: 5, color: '#0D1B3E', avatar: 'RN', text: 'Cleared AWS SAA in first attempt after 10 weeks of training. Hands-on labs on actual AWS accounts. Mock interviews were tougher than the real ones.' },
  { name: 'Divya Menon',    role: 'Senior Data Scientist',   company: 'Wipro',     pkg: '₹12 LPA',   rating: 5, color: '#0D1B3E', avatar: 'DM', text: 'From Python basics to production ML models in 5 months. The GenAI module was cutting-edge content you won\'t find elsewhere in Bangalore.' },
  { name: 'Karthik Reddy',  role: 'SAP FICO Consultant',     company: 'Deloitte',  pkg: '₹14 LPA',   rating: 5, color: '#0D1B3E', avatar: 'KR', text: 'SAP FICO trainer had 18 years of consulting experience. Real client scenarios, end-to-end implementation. Got placed with a 280% salary hike.' },
];

const ratingBreakdown = [
  { stars: '5★', pct: 82 }, { stars: '4★', pct: 12 },
  { stars: '3★', pct: 4 },  { stars: '2★', pct: 1 }, { stars: '1★', pct: 1 },
];

export default function CourseDetail({ service, detail }: Props) {
  const [activeTab, setActiveTab] = useState('Overview');
  const [openAcc, setOpenAcc] = useState<number | null>(0);
  const curriculum = detail.curriculum || [];
  const tools = detail.tools || [];
  const careerRoles = detail.careerRoles || [];
  const certs = detail.certifications || [];

  const whatYouLearn = curriculum.flatMap(m => m.topics).slice(0, 14);

  return (
    <>
      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div className="container">
          {/* Breadcrumb */}
          <div className={styles.heroBreadcrumb}>
            <Link href="/">Home</Link>
            <ChevronRight size={12} className={styles.sep} />
            <Link href="/#courses">Courses</Link>
            <ChevronRight size={12} className={styles.sep} />
            <span>{service.name}</span>
          </div>

          {/* Pills */}
          <div className={styles.heroPills}>
            <span className={styles.heroPill}><Clock size={11} /> {service.duration}</span>
            <span className={`${styles.heroPill} ${styles.heroPillGreen}`}><CheckCircle size={11} /> 100% Placement Support</span>
            <span className={`${styles.heroPill} ${styles.heroPillOrange}`}><TrendingUp size={11} /> {service.demand} Demand</span>
            <span className={styles.heroPill}><Star size={11} style={{ fill: '#FFFFFF', color: '#FFFFFF' }} /> 4.9 / 5.0 Rating</span>
          </div>

          {/* Heading */}
          <h1 className={styles.heroH1}>
            Best <span>{service.name}</span> in Bangalore
          </h1>
          <p className={styles.heroDesc}>{service.description}</p>

          {/* Stats strip */}
          <div className={styles.heroStatsRow}>
            {[
              { Icon: Clock,       val: service.duration,   lbl: 'Course Duration',   color: '#7B2FBE' },
              { Icon: Users,       val: service.students,   lbl: 'Students Enrolled',  color: '#28A745' },
              { Icon: IndianRupee, val: service.salary,     lbl: 'Average Salary',     color: '#FF6B35' },
              { Icon: Calendar,    val: service.nextBatch,  lbl: 'Next Batch',         color: '#DC3545' },
              { Icon: Award,       val: '98%',              lbl: 'Placement Rate',     color: '#0284C7' },
            ].map(({ Icon, val, lbl, color }) => (
              <div key={lbl} className={styles.heroStat}>
                <div className={styles.heroStatIcon}><Icon size={16} style={{ color: '#FFFFFF' }} /></div>
                <div>
                  <div className={styles.heroStatVal}>{val}</div>
                  <div className={styles.heroStatLbl}>{lbl}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 2-COLUMN LAYOUT ── */}
      <div className="container">
        <div className={styles.layout}>

          {/* ── STICKY SIDEBAR ── */}
          <aside className={styles.sidebar}>
            <div className={styles.sideCard}>
              <Image
                src={service.img}
                alt={service.name}
                width={296}
                height={160}
                className={styles.sideImg}
              />
              <div className={styles.sideBody}>
                <Link href="/contact" className={styles.sideApplyBtn}>
                  <GraduationCap size={16} /> Apply Now
                </Link>
                <a
                  href={`https://wa.me/918888888888?text=Hi+I+am+interested+in+${encodeURIComponent(service.name)}`}
                  target="_blank" rel="noopener"
                  className={styles.sideWaBtn}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" /><path d="M12 2C6.48 2 2 6.48 2 12c0 1.89.524 3.66 1.438 5.168L2 22l4.98-1.438A9.955 9.955 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2z" opacity=".4" /></svg>
                  Chat on WhatsApp
                </a>

                <div className={styles.sideDivider}>Course Details</div>
                {[
                  { Icon: Clock,        key: 'Duration',     val: service.duration },
                  { Icon: Monitor,      key: 'Mode',         val: 'Classroom + Online' },
                  { Icon: Users,        key: 'Enrolled',     val: service.students },
                  { Icon: Calendar,     key: 'Next Batch',   val: `${service.nextBatch} 2025` },
                  { Icon: IndianRupee,  key: 'Avg Salary',   val: service.salary },
                  { Icon: CreditCard,   key: 'EMI',          val: '0% Interest' },
                  { Icon: Award,        key: 'Certificate',  val: 'Industry Recognised' },
                ].map(({ Icon, key, val }) => (
                  <div key={key} className={styles.sideStat}>
                    <span className={styles.sideStatKey}><Icon size={13} style={{ color: 'var(--purple)' }} /> {key}</span>
                    <span className={styles.sideStatVal}>{val}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Call card */}
            <a href="tel:+918888888888" className={styles.sideCallCard}>
              <div className={styles.sideCallIcon}><Phone size={16} style={{ color: 'var(--purple)' }} /></div>
              <div>
                <div className={styles.sideCallLabel}>Talk to our counsellor</div>
                <div className={styles.sideCallVal}>+91 88888 88888</div>
              </div>
            </a>

            {/* Cert badges */}
            {certs.length > 0 && (
              <div style={{ background: '#fff', border: '1px solid var(--gray-200)', borderRadius: 12, padding: '14px 16px', boxShadow: 'var(--sh-xs)' }}>
                <div style={{ fontSize: '.75rem', fontWeight: 700, color: 'var(--t-muted)', textTransform: 'uppercase', letterSpacing: '.06em', marginBottom: 10 }}>Certifications Covered</div>
                {certs.map(c => (
                  <div key={c} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, padding: '6px 0', borderBottom: '1px solid var(--gray-100)', fontSize: '.76rem', color: 'var(--t-body)' }}>
                    <Award size={12} style={{ color: '#FFC107', flexShrink: 0, marginTop: 2 }} /> {c}
                  </div>
                ))}
              </div>
            )}
          </aside>

          {/* ── MAIN CONTENT ── */}
          <main className={styles.main}>
            {/* Tab navigation */}
            <div className={styles.tabNav}>
              {TABS.map(tab => (
                <button
                  key={tab}
                  className={`${styles.tabBtn} ${activeTab === tab ? styles.tabActive : ''}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* ── OVERVIEW ── */}
            {activeTab === 'Overview' && (
              <>
                <div className={styles.sec}>
                  <div className={styles.secTitle}>
                    What You Will Learn
                    <span className={styles.secBadge}>{whatYouLearn.length} Key Skills</span>
                  </div>
                  <div className={styles.learnGrid}>
                    {whatYouLearn.map(topic => (
                      <div key={topic} className={styles.learnItem}>
                        <div className={styles.learnDot}>
                          <CheckCircle size={11} style={{ color: '#28A745' }} />
                        </div>
                        {topic}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tools */}
                {tools.length > 0 && (
                  <div className={styles.sec}>
                    <div className={styles.secTitle}>Tools &amp; Technologies</div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                      {tools.map(t => (
                        <span key={t} style={{ padding: '6px 14px', borderRadius: 99, background: 'rgba(123,47,190,.08)', border: '1px solid rgba(123,47,190,.18)', fontSize: '.78rem', fontWeight: 700, color: 'var(--purple)' }}>
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Quick CTA */}
                <div style={{ background: 'var(--grad-cta)', borderRadius: 16, padding: '24px 28px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
                  <div>
                    <div style={{ fontFamily: "'Poppins',sans-serif", fontSize: '1rem', fontWeight: 800, color: '#fff', marginBottom: 4 }}>
                      Ready to start your {service.short} journey?
                    </div>
                    <p style={{ fontSize: '.82rem', color: 'rgba(255,255,255,.75)' }}>
                      Free demo · No commitment · EMI available
                    </p>
                  </div>
                  <Link href="/contact" className="btn-white" style={{ padding: '12px 24px', whiteSpace: 'nowrap', fontSize: '.88rem' }}>
                    Book Free Demo <ArrowRight size={15} />
                  </Link>
                </div>
              </>
            )}

            {/* ── CURRICULUM ── */}
            {activeTab === 'Curriculum' && (
              <div className={styles.sec}>
                <div className={styles.secTitle}>
                  Course Curriculum
                  <span className={styles.secBadge}>{curriculum.length} Modules</span>
                </div>
                <div className={styles.accordion}>
                  {curriculum.map((mod, i) => (
                    <div
                      key={i}
                      className={`${styles.accItem} ${openAcc === i ? styles.accItemOpen : ''}`}
                    >
                      <button className={styles.accHeader} onClick={() => setOpenAcc(openAcc === i ? null : i)}>
                        <span className={styles.accNum}>{String(i + 1).padStart(2, '0')}</span>
                        <span className={styles.accTitle}>{mod.module}</span>
                        <span className={styles.accTopicCount}>{mod.topics.length} topics</span>
                        <ChevronDown
                          size={16}
                          style={{ color: 'var(--purple)', transition: 'transform .25s', transform: openAcc === i ? 'rotate(180deg)' : '', flexShrink: 0 }}
                        />
                      </button>
                      {openAcc === i && (
                        <div className={styles.accBody}>
                          {mod.topics.map(topic => (
                            <div key={topic} className={styles.accTopic}>
                              <span className={styles.accTopicDot} />
                              {topic}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: 20, textAlign: 'center' }}>
                  <Link href="/contact" className="btn-primary" style={{ padding: '12px 28px' }}>
                    Download Full Syllabus <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            )}

            {/* ── FEATURES ── */}
            {activeTab === 'Features' && (
              <div className={styles.sec}>
                <div className={styles.secTitle}>Why Train at Nexus?</div>
                <div className={styles.featureGrid}>
                  {features.map(({ Icon, title, body, color }) => (
                    <div key={title} className={styles.featureItem}>
                      <div className={styles.featureIconBox} style={{ background: `${color}10` }}>
                        <Icon size={20} style={{ color }} />
                      </div>
                      <div>
                        <h4>{title}</h4>
                        <p>{body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ── CAREER ── */}
            {activeTab === 'Career' && (
              <>
                {careerRoles.length > 0 && (
                  <div className={styles.sec}>
                    <div className={styles.secTitle}>
                      Career Roles You Can Target
                      <span className={styles.secBadge}>{careerRoles.length} Roles</span>
                    </div>
                    <div className={styles.careerGrid}>
                      {careerRoles.map((role, i) => (
                        <div key={role} className={styles.careerRole}>
                          <span className={styles.careerRoleNum}>{String(i + 1).padStart(2, '0')}</span>
                          {role}
                        </div>
                      ))}
                    </div>
                    <div className={styles.salaryCard}>
                      <div>
                        <div className={styles.salaryVal}>{service.salary}</div>
                        <div className={styles.salaryLbl}>Average Annual Salary in Bangalore</div>
                      </div>
                      <div style={{ flex: 1, paddingLeft: 20, borderLeft: '1px solid rgba(123,47,190,.15)' }}>
                        <div style={{ fontSize: '.82rem', color: 'var(--t-muted)', lineHeight: 1.65 }}>
                          {service.short} professionals are among the highest-paid IT specialists in India. Bangalore market pays a premium due to high demand and limited skilled talent.
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <div className={styles.sec}>
                  <div className={styles.secTitle}>Why This Career in 2025?</div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                    {[
                      { Icon: TrendingUp, title: 'Fastest Growing Field',    body: 'Among the top 10 fastest growing job categories globally.', color: '#0D1B3E' },
                      { Icon: Globe,      title: 'Work Anywhere in World',   body: 'Fully remote-friendly skill. Work from India or abroad.', color: '#0D1B3E' },
                      { Icon: Shield,     title: 'Recession-Proof Career',   body: 'Technology is the backbone of every industry worldwide.', color: '#0D1B3E' },
                      { Icon: Rocket,     title: 'Fast Career Growth',       body: 'Go from fresher to senior in 2-3 years with this skill.', color: '#0D1B3E' },
                    ].map(({ Icon, title, body, color }) => (
                      <div key={title} className={styles.featureItem}>
                        <div className={styles.featureIconBox} style={{ background: `${color}10` }}>
                          <Icon size={18} style={{ color }} />
                        </div>
                        <div><h4>{title}</h4><p>{body}</p></div>
                      </div>
                    ))}
                  </div>
                  <div style={{ marginTop: 18, textAlign: 'center' }}>
                    <Link href="/contact" className="btn-primary" style={{ padding: '12px 28px' }}>
                      Get Free Career Counselling <ArrowRight size={15} />
                    </Link>
                  </div>
                </div>
              </>
            )}

            {/* ── REVIEWS ── */}
            {activeTab === 'Reviews' && (
              <div className={styles.sec}>
                <div className={styles.secTitle}>Student Reviews</div>

                {/* Rating summary */}
                <div className={styles.ratingSummary}>
                  <div className={styles.ratingBig}>
                    <div className={styles.ratingNum}>4.9</div>
                    <div className={styles.ratingStarsRow}>
                      {[...Array(5)].map((_, i) => <Star key={i} size={14} style={{ color: '#FFC107', fill: '#FFC107' }} />)}
                    </div>
                    <div className={styles.ratingTotal}>5,200+ reviews</div>
                  </div>
                  <div className={styles.ratingBars}>
                    {ratingBreakdown.map(({ stars, pct }) => (
                      <div key={stars} className={styles.ratingBarRow}>
                        <span className={styles.ratingBarLabel}>{stars}</span>
                        <div className={styles.ratingBarTrack}>
                          <div className={styles.ratingBarFill} style={{ width: `${pct}%` }} />
                        </div>
                        <span className={styles.ratingBarCount}>{pct}%</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Review cards */}
                {reviews.map(r => (
                  <div key={r.name} className={styles.reviewCard}>
                    <div className={styles.reviewMeta}>
                      <div className={styles.reviewAvatar} style={{ background: `${r.color}15`, color: r.color }}>
                        {r.avatar}
                      </div>
                      <div>
                        <div className={styles.reviewName}>{r.name}</div>
                        <div className={styles.reviewRole}>{r.role} @ {r.company}</div>
                        <div className={styles.reviewStarsRow}>
                          {[...Array(r.rating)].map((_, i) => <Star key={i} size={12} style={{ color: '#FFC107', fill: '#FFC107' }} />)}
                        </div>
                      </div>
                      <span style={{ marginLeft: 'auto', fontSize: '.8rem', fontWeight: 700, color: '#28A745', display: 'flex', alignItems: 'center', gap: 4 }}>
                        <IndianRupee size={12} /> {r.pkg}
                      </span>
                    </div>
                    <p className={styles.reviewText}>&ldquo;{r.text}&rdquo;</p>
                  </div>
                ))}
              </div>
            )}

            {/* ── ENQUIRY ── */}
            {activeTab === 'Enquiry' && (
              <div className={styles.enquiryWrap}>
                <div className={styles.enquiryH}>Get Course Details &amp; Book Your Demo</div>
                <p className={styles.enquirySub}>Our counsellor will contact you within 30 minutes with batch dates, fee structure and syllabus.</p>
                <form className={styles.enquiryForm} suppressHydrationWarning>
                  <div className={styles.enquiryRow}>
                    <input className={styles.enquiryInp} type="text" placeholder="Full Name *" required />
                    <input className={styles.enquiryInp} type="tel" placeholder="WhatsApp Number *" required />
                  </div>
                  <input className={styles.enquiryInp} type="email" placeholder="Email Address" />
                  <div className={styles.enquiryRow}>
                    <select className={styles.enquiryInp}>
                      <option>Classroom Training</option>
                      <option>Online Live Classes</option>
                      <option>Weekend Batch</option>
                      <option>Fast-Track</option>
                    </select>
                    <select className={styles.enquiryInp}>
                      <option>Fresher / Student</option>
                      <option>0–2 Years Experience</option>
                      <option>2–5 Years Experience</option>
                      <option>5+ Years Experience</option>
                    </select>
                  </div>
                  <textarea className={styles.enquiryInp} rows={3} placeholder="Any specific requirements or questions..." style={{ resize: 'vertical' }} />
                  <button type="submit" className="btn-primary" style={{ padding: '14px', fontSize: '.9rem', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
                    <Send size={16} /> Submit Enquiry — Get Free Demo Details
                  </button>
                  <p style={{ textAlign: 'center', fontSize: '.7rem', color: 'var(--t-muted)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 5 }}>
                    <Shield size={11} /> 100% Private · No Spam · No Commitment Required
                  </p>
                </form>
              </div>
            )}

          </main>
        </div>
      </div>
    </>
  );
}
