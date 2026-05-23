'use client';
import { useState } from 'react';
import Link from 'next/link';
import {
  ChevronRight, TrendingUp, Users, IndianRupee,
  CheckCircle, XCircle, ArrowRight, BarChart2,
  Rocket, ChevronDown, Building2, BookOpen,
} from 'lucide-react';
import type { ServiceItem } from '@/data/services';
import type { ServiceDetail } from '@/data/serviceDetails';
import type { PlatformGuide } from '@/data/platformGuides';
import { courseTree } from '@/data/courseTree';
import { WHATSAPP_BASE } from '@/data/contact';
import styles from './PlatformPage.module.css';

interface Props { service: ServiceItem; detail: ServiceDetail; guide?: PlatformGuide; }

export default function PlatformPage({ service, detail, guide }: Props) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const parentNode = courseTree.find(p => p.slug === service.slug);
  const whatsappMsg = encodeURIComponent(`Hi, I want to know more about ${service.name} career path`);

  return (
    <>
      {/* ══ HERO — Career Guide framing ══ */}
      <section className={styles.hero}>
        <div className="container">
          <nav className={styles.heroBreadcrumb}>
            <Link href="/">Home</Link>
            <ChevronRight size={11} />
            <Link href="/all-courses">All Platforms</Link>
            <ChevronRight size={11} />
            <span>{service.name} Career Guide</span>
          </nav>

          <div className={styles.heroInner}>
            <div className={styles.heroLeft}>
              <div className={styles.heroPlatformBadge}>
                📋 Career Guide · Updated May 2026
              </div>
              <h1 className={styles.heroH1}>
                {guide?.tagline ?? `Is ${service.name} the right career for you?`}
              </h1>
              <p className={styles.heroTagline}>
                {guide?.marketOverview ?? service.description}
              </p>
              <div className={styles.heroCtas}>
                <Link href={guide?.nextStepHref ?? `/courses/${service.slug}`} className={styles.heroCtaPrimary}>
                  <BookOpen size={15} /> {guide?.nextStep ?? 'Explore Courses'}
                </Link>
                <a href={`${WHATSAPP_BASE}?text=${whatsappMsg}`} target="_blank" rel="noopener" className={styles.heroCtaSecondary}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/></svg>
                  Ask a Counsellor
                </a>
              </div>
            </div>

            {/* Right — Industry stats card */}
            <div className={styles.heroCard}>
              <div className={styles.heroCardTitle}>📊 Market at a Glance</div>
              {(guide?.industryStats ?? [
                { val: service.students, label: 'Students Trained' },
                { val: service.salary,   label: 'Avg Salary Range' },
                { val: '85%+',           label: 'Placement Rate' },
                { val: service.rating,   label: 'Course Rating' },
              ]).map(({ val, label }) => (
                <div key={label} className={styles.heroCardStat}>
                  <div className={styles.heroCardStatVal}>{val}</div>
                  <div className={styles.heroCardStatLbl}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ WHY NOW ══ */}
      {guide?.whyNow && (
        <section className={styles.section}>
          <div className="container">
            <div className={styles.sectionLabel}><TrendingUp size={11} /> Market Opportunity</div>
            <h2 className={styles.sectionH2}>Why {service.short} is a <em>Smart Career Move</em> in 2026</h2>
            <div className={styles.whyNowGrid}>
              {guide.whyNow.map((point, i) => (
                <div key={i} className={styles.whyNowCard}>
                  <div className={styles.whyNowNum}>{String(i + 1).padStart(2, '0')}</div>
                  <div className={styles.whyNowText}>{point}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ══ CAREER ROADMAP ══ */}
      {guide?.roadmap && (
        <section className={styles.sectionAlt}>
          <div className="container">
            <div className={styles.sectionLabel}><Rocket size={11} /> Career Progression</div>
            <h2 className={styles.sectionH2}>Your <em>{service.short}</em> Career Roadmap</h2>
            <p className={styles.sectionSub}>From zero to senior level — a realistic 5–8 year career trajectory with salary milestones.</p>
            <div className={styles.roadmap}>
              {guide.roadmap.map((step, i) => (
                <div key={i} className={styles.roadmapStep}>
                  <div className={styles.roadmapLine}>
                    <div className={styles.roadmapDot} style={{ background: step.color }} />
                    {i < guide.roadmap.length - 1 && <div className={styles.roadmapConnector} />}
                  </div>
                  <div className={styles.roadmapCard} style={{ borderTopColor: step.color }}>
                    <div className={styles.roadmapLevel} style={{ color: step.color }}>{step.level}</div>
                    <div className={styles.roadmapTitle}>{step.title}</div>
                    <div className={styles.roadmapMeta}>
                      <span className={styles.roadmapTimeline}>⏱ {step.timeline}</span>
                      <span className={styles.roadmapSalary} style={{ color: step.color }}>
                        <IndianRupee size={11} style={{ display: 'inline' }} /> {step.salary}
                      </span>
                    </div>
                    <div className={styles.roadmapSkills}>
                      {step.skills.map(s => (
                        <span key={s} className={styles.roadmapSkillChip}>{s}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ══ IS THIS RIGHT FOR YOU ══ */}
      {guide && (
        <section className={styles.section}>
          <div className="container">
            <div className={styles.sectionLabel}><BarChart2 size={11} /> Career Fit Assessment</div>
            <h2 className={styles.sectionH2}>Is <em>{service.short}</em> the Right Fit For You?</h2>
            <div className={styles.fitGrid}>
              <div className={styles.fitCard}>
                <div className={styles.fitCardTitle} style={{ color: '#059669' }}>
                  <CheckCircle size={16} style={{ color: '#059669' }} /> This career is great if you…
                </div>
                <ul className={styles.fitList}>
                  {guide.isRightFor.map((point, i) => (
                    <li key={i} className={styles.fitItem}>
                      <CheckCircle size={13} style={{ color: '#059669', flexShrink: 0 }} />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={styles.fitCard}>
                <div className={styles.fitCardTitle} style={{ color: '#DC2626' }}>
                  <XCircle size={16} style={{ color: '#DC2626' }} /> You may want to reconsider if…
                </div>
                <ul className={styles.fitList}>
                  {guide.isNotFor.map((point, i) => (
                    <li key={i} className={styles.fitItem}>
                      <XCircle size={13} style={{ color: '#DC2626', flexShrink: 0 }} />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className={styles.fitCta}>
              <p>Not sure which path is right for you? Our counsellors offer a free 30-min career assessment call.</p>
              <Link href="/contact" className={styles.heroCtaPrimary}>
                Book Free Career Counselling →
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ══ SPECIALISATIONS (sub-courses) ══ */}
      {parentNode && parentNode.children.length > 0 && (
        <section className={styles.sectionAlt}>
          <div className="container">
            <div className={styles.sectionLabel}><BookOpen size={11} /> Specialisations</div>
            <h2 className={styles.sectionH2}>Explore <em>{service.short}</em> Specialisations</h2>
            <p className={styles.sectionSub}>
              Choose the exact sub-discipline that aligns with your career goals. Each specialisation has a dedicated curriculum, certification path and placement support.
            </p>
            <div className={styles.specsGrid}>
              {parentNode.children.map(child => (
                <Link
                  key={child.slug}
                  href={child.href ?? `/services/${child.slug}`}
                  className={styles.specCard}
                >
                  <span className={styles.specIcon}>{child.icon}</span>
                  <div className={styles.specTitle}>{child.title}</div>
                  <div className={styles.specTagline}>{child.tagline}</div>
                  <div className={styles.specMeta}>
                    <span>{child.duration}</span>
                    <span style={{ color: '#1565C0', fontWeight: 700 }}>{child.salary}</span>
                  </div>
                  <div className={styles.specCta}>
                    View Course Details <ArrowRight size={12} />
                  </div>
                </Link>
              ))}
            </div>
            <div style={{ textAlign: 'center', marginTop: 28 }}>
              <Link href={`/courses/${service.slug}`} className={styles.heroCtaPrimary}>
                View Full {service.short} Course Directory <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ══ HIRING COMPANIES ══ */}
      {guide?.hiringCompanies && (
        <section className={styles.section}>
          <div className="container">
            <div className={styles.sectionLabel}><Building2 size={11} /> Top Hirers</div>
            <h2 className={styles.sectionH2}>Companies Hiring <em>{service.short}</em> Professionals</h2>
            <p className={styles.sectionSub}>Our graduates work at these companies and 200+ more across Bangalore, Hyderabad, Pune, and Mumbai.</p>
            <div className={styles.compGrid}>
              {guide.hiringCompanies.map(company => (
                <div key={company} className={styles.compCard}>{company}</div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ══ FAQ ══ */}
      {(detail.faqs ?? []).length > 0 && (
        <section className={styles.sectionAlt}>
          <div className="container">
            <div className={styles.sectionLabel}><BookOpen size={11} /> FAQs</div>
            <h2 className={styles.sectionH2}>Common <em>Questions</em> About {service.short} Careers</h2>
            <div className={styles.faqList} style={{ maxWidth: 760, margin: '0 auto' }}>
              {(detail.faqs ?? []).map(({ q, a }, i) => (
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
        </section>
      )}

      {/* ══ FINAL CTA ══ */}
      <section className={styles.finalCta}>
        <div className="container">
          <div className={styles.finalCtaInner}>
            <Users size={28} style={{ color: '#F26522', marginBottom: 12 }} />
            <h2 className={styles.finalCtaH2}>
              Ready to Start Your <em>{service.short}</em> Journey?
            </h2>
            <p className={styles.finalCtaSub}>
              Get a personalised career roadmap, syllabus and batch schedule from our counsellors — free, no commitment.
            </p>
            <div className={styles.finalCtaBtns}>
              <Link href={guide?.nextStepHref ?? `/courses/${service.slug}`} className={styles.heroCtaPrimary}>
                <BookOpen size={15} /> {guide?.nextStep ?? 'View Courses'}
              </Link>
              <Link href="/contact" className={styles.heroCtaSecondary}>
                Book Free Career Counselling
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
