'use client';
import { useState } from 'react';
import Link from 'next/link';
import { ChevronRight, CheckCircle, Clock, Users, IndianRupee, Award, ChevronDown, Phone, ArrowRight } from 'lucide-react';
import type { TrainingModule } from '@/data/cloudModules';
import { PHONE_DISPLAY, PHONE_E164, WHATSAPP_BASE } from '@/data/contact';
import styles from '@/components/salesforce/SalesforceModulePage.module.css';

interface Props {
  mod: TrainingModule;
  parentTitle: string;
  parentSlug: string;
  siblings: { slug: string; short: string }[];
  siblingBase: string; // e.g. '/cloud'
}

export default function TrainingModulePage({ mod, parentTitle, parentSlug, siblings, siblingBase }: Props) {
  const [openAcc, setOpenAcc] = useState<number | null>(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const learnTopics = mod.curriculum.flatMap(m => m.topics).slice(0, 12);
  const whatsappMsg = encodeURIComponent(`Hi, I am interested in ${mod.title}`);

  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <nav className={styles.breadcrumb}>
            <Link href="/">Home</Link><ChevronRight size={11} />
            <Link href={`/courses/${parentSlug}`}>{parentTitle}</Link><ChevronRight size={11} />
            <span>{mod.short} Training</span>
          </nav>
          <div className={styles.heroInner}>
            <div>
              <div className={styles.badge}>⚡ {mod.badge} · {mod.demand} Demand</div>
              <h1 className={styles.h1}>{mod.h1}</h1>
              <p className={styles.desc}>{mod.description}</p>
              <div className={styles.pills}>
                {[mod.duration, mod.salary + ' avg salary', mod.students + ' trained', mod.rating + '/5 rating'].map(p => (
                  <span key={p} className={styles.pill}>✓ {p}</span>
                ))}
              </div>
              <div className={styles.ctas}>
                <Link href="/contact" className={styles.ctaOrange}><CheckCircle size={15} /> Book Free Demo</Link>
                <a href={`${WHATSAPP_BASE}?text=${whatsappMsg}`} target="_blank" rel="noopener" className={styles.ctaGhost}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/></svg>
                  WhatsApp Us
                </a>
              </div>
            </div>
            <div className={styles.heroCard}>
              {[
                { Icon: Clock, val: mod.duration, lbl: 'Duration' },
                { Icon: Users, val: mod.students + ' Trained', lbl: 'Students' },
                { Icon: IndianRupee, val: mod.salary, lbl: 'Salary Range' },
                { Icon: Award, val: mod.rating + ' / 5.0', lbl: 'Rating' },
              ].map(({ Icon, val, lbl }) => (
                <div key={lbl} className={styles.heroCardRow}>
                  <div className={styles.heroCardIcon}><Icon size={14} style={{ color: '#fff' }} /></div>
                  <div><div className={styles.heroCardVal}>{val}</div><div className={styles.heroCardLbl}>{lbl}</div></div>
                </div>
              ))}
              <div style={{ marginTop: 16 }}>
                <Link href="/contact" className={styles.sideBtn}><CheckCircle size={14} /> Apply Now — Free Demo</Link>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.statsBar}>
          <div className="container">
            <div className={styles.statsBarInner}>
              {[{ val: mod.students, lbl: 'Trained' }, { val: mod.salary, lbl: 'Avg Salary' }, { val: '85%+', lbl: 'Placement Rate' }, { val: mod.rating, lbl: 'Rating' }, { val: '6', lbl: 'Centres' }].map(({ val, lbl }) => (
                <div key={lbl} className={styles.statItem}><div className={styles.statVal}>{val}</div><div className={styles.statLbl}>{lbl}</div></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div style={{ background: 'var(--cream)' }}>
        <div className="container">
          <div className={styles.layout}>
            <main className={styles.main}>
              {learnTopics.length > 0 && (
                <div className={styles.sec}>
                  <h2 className={styles.secH}>Skills You Will <em>Master</em></h2>
                  <p className={styles.secSub}>Hands-on skills taught by working professionals with real MNC project experience.</p>
                  <div className={styles.learnGrid}>
                    {learnTopics.map(t => (
                      <div key={t} className={styles.learnItem}>
                        <div className={styles.learnDot}><CheckCircle size={11} style={{ color: '#28A745' }} /></div>
                        {t}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className={styles.sec}>
                <h2 className={styles.secH}>Course <em>Curriculum</em></h2>
                <p className={styles.secSub}>{mod.modules} structured modules with theory, hands-on labs and live projects.</p>
                <div className={styles.acc}>
                  {mod.curriculum.map((m, i) => (
                    <div key={i} className={`${styles.accItem} ${openAcc === i ? styles.accItemOpen : ''}`}>
                      <button className={styles.accBtn} onClick={() => setOpenAcc(openAcc === i ? null : i)}>
                        <span className={styles.accNum}>{String(i + 1).padStart(2, '0')}</span>
                        <span className={styles.accTitle}>{m.module}</span>
                        <span className={styles.accCount}>{m.topics.length} topics</span>
                        <ChevronDown size={15} style={{ color: 'var(--blue)', transform: openAcc === i ? 'rotate(180deg)' : '', transition: 'transform .25s', flexShrink: 0 }} />
                      </button>
                      {openAcc === i && (
                        <div className={styles.accBody}>
                          {m.topics.map(t => (
                            <div key={t} className={styles.accTopic}><span className={styles.accDot} />{t}</div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {mod.tools.length > 0 && (
                <div className={styles.sec}>
                  <h2 className={styles.secH}>Tools & <em>Technologies</em></h2>
                  <div className={styles.toolsWrap}>
                    {mod.tools.map(t => <div key={t} className={styles.toolChip}><span className={styles.toolDot} />{t}</div>)}
                  </div>
                </div>
              )}

              {mod.careerRoles.length > 0 && (
                <div className={styles.sec}>
                  <h2 className={styles.secH}>Career <em>Roles</em> You Can Target</h2>
                  <div className={styles.rolesGrid}>
                    {mod.careerRoles.map((r, i) => (
                      <div key={r} className={styles.roleCard}><span className={styles.roleNum}>{String(i + 1).padStart(2, '0')}</span>{r}</div>
                    ))}
                  </div>
                </div>
              )}

              {mod.certifications.length > 0 && (
                <div className={styles.sec}>
                  <h2 className={styles.secH}>Industry <em>Certifications</em></h2>
                  <div className={styles.certGrid}>
                    {mod.certifications.map(c => (
                      <div key={c} className={styles.certCard}>
                        <div className={styles.certIcon}><Award size={20} style={{ color: '#FFC107' }} /></div>
                        <div className={styles.certName}>{c}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {mod.faqs.length > 0 && (
                <div className={styles.sec}>
                  <h2 className={styles.secH}>Frequently Asked <em>Questions</em></h2>
                  <div className={styles.faqList}>
                    {mod.faqs.map(({ q, a }, i) => (
                      <div key={i} className={`${styles.faqItem} ${openFaq === i ? styles.faqItemOpen : ''}`}>
                        <button className={styles.faqQ} onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                          <span className={styles.faqQText}>{q}</span>
                          <ChevronDown size={15} style={{ color: 'var(--blue)', transform: openFaq === i ? 'rotate(180deg)' : '', transition: 'transform .25s', flexShrink: 0 }} />
                        </button>
                        {openFaq === i && <div className={styles.faqA}>{a}</div>}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </main>

            <aside className={styles.sidebar}>
              <div className={styles.sideCard}>
                <div className={styles.sideCardTitle}>Get Course Details</div>
                <div className={styles.sideCardSub}>Syllabus, batch dates & fees sent within 30 mins.</div>
                <input className={styles.sideInp} type="text" placeholder="Your Full Name *" />
                <input className={styles.sideInp} type="tel" placeholder="WhatsApp Number *" />
                <input className={styles.sideInp} type="email" placeholder="Email Address" />
                <Link href="/contact" className={styles.sideBtn}><CheckCircle size={14} /> Book Free Demo Class</Link>
              </div>
              <a href={`tel:${PHONE_E164}`} className={styles.sideCallCard}>
                <div className={styles.sideCallIcon}><Phone size={16} style={{ color: 'var(--blue)' }} /></div>
                <div><div className={styles.sideCallLbl}>Call a counsellor</div><div className={styles.sideCallNum}>{PHONE_DISPLAY}</div></div>
              </a>
              {siblings.length > 1 && (
                <div className={styles.sideRelated}>
                  <div className={styles.sideRelatedTitle}>Other {parentTitle} Courses</div>
                  {siblings.filter(s => s.slug !== mod.moduleSlug).map(s => (
                    <Link key={s.slug} href={`${siblingBase}/${s.slug}`} className={styles.sideRelatedItem}>
                      {s.short}<ArrowRight size={11} style={{ marginLeft: 'auto', color: 'var(--t-muted)' }} />
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
