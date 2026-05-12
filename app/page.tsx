'use client';
import Link from 'next/link';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Calendar, MonitorSmartphone, ArrowRight } from 'lucide-react';
import HeroSection from '@/components/home/HeroSection';
import ServicesGrid from '@/components/home/ServicesGrid';

/* ── DATA ─────────────────────────────────────── */

const whyPoints = [
  'Individual-focused learning support',
  'Small, well-structured class sizes',
  'Real-time, project-based learning',
  'Industry-aligned, modern syllabus',
  'Career and interview readiness guidance',
];

const partners = ['TCS', 'Coforge', 'Cognizant', 'Infosys', 'Wipro', 'Accenture', 'IBM', 'Capgemini'];

const batches = [
  { course: 'Salesforce Training',   date: '15 Jun 2025', mode: 'Online & Offline', slug: 'salesforce' },
  { course: 'Python & Data Science', date: '10 Jun 2025', mode: 'Online & Offline', slug: 'python-data-science' },
  { course: 'Cloud — AWS & Azure',   date: '8 Jun 2025',  mode: 'Online & Offline', slug: 'cloud' },
];

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Salesforce Developer',
    img: '/avatar-priya.jpg',
    text: 'The classes were highly practical, well-structured, and very easy to follow, even for beginners. Each topic was explained clearly with real-world examples and hands-on practice. The trainers were supportive and knowledgeable, and the placement guidance helped me build confidence, improve my interview skills, and prepare effectively for real-world IT jobs.',
  },
  {
    name: 'Rahul Nair',
    role: 'AWS Solutions Architect',
    img: '/avatar-rahul.jpg',
    text: 'Cracked AWS SAA in first attempt after 10 weeks of training. Hands-on labs on actual AWS accounts — not simulators. The placement team arranged 6 interview calls within 45 days of course completion.',
  },
  {
    name: 'Divya Menon',
    role: 'Senior Data Scientist',
    img: '/avatar-divya.jpg',
    text: 'From Python basics to building production ML models in 5 months. The GenAI module was absolutely cutting-edge. The structured curriculum and mentor support made every concept click instantly.',
  },
];

/* ── PAGE ─────────────────────────────────────── */

export default function HomePage() {
  const [activeT, setActiveT] = useState(0);

  const prev = () => setActiveT(i => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () => setActiveT(i => (i === testimonials.length - 1 ? 0 : i + 1));

  const t = testimonials[activeT];

  return (
    <>
      {/* 1. HERO */}
      <HeroSection />

      {/* 2. OUR POPULAR COURSES */}
      <ServicesGrid />

      {/* 3. WHY CHOOSE US — dark navy split layout */}
      <section style={{
        background: '#0D1B3E',
        padding: '80px 0',
      }}>
        <div className="container grid-split">
          {/* Left — circular collage image */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{
              width: 380,
              height: 380,
              borderRadius: '50%',
              overflow: 'hidden',
              border: '4px solid rgba(255,255,255,0.25)',
              flexShrink: 0,
            }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/why-us.jpg"
                alt="Why choose IT Software Training Bangalore"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>

          {/* Right — text */}
          <div>
            <h2 style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
              fontWeight: 800,
              color: '#FFFFFF',
              lineHeight: 1.25,
              marginBottom: 20,
            }}>
              Why Students Choose<br />to Learn With Us
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.95rem', lineHeight: 1.75, marginBottom: 24 }}>
              We provide career-oriented IT training that combines expert mentorship with practical
              experience. Our programs are designed to equip learners with job-ready skills for
              today&apos;s competitive tech industry.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px', display: 'flex', flexDirection: 'column', gap: 10 }}>
              {whyPoints.map(p => (
                <li key={p} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, color: 'rgba(255,255,255,0.85)', fontSize: '0.9rem' }}>
                  <span style={{ color: '#FFFFFF', fontWeight: 800, fontSize: '1rem', lineHeight: 1.5, flexShrink: 0 }}>&raquo;</span>
                  {p}
                </li>
              ))}
            </ul>
            <Link href="/contact" style={{
              display: 'inline-flex',
              alignItems: 'center',
              background: '#FFFFFF',
              color: '#0D1B3E',
              padding: '11px 28px',
              borderRadius: 30,
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 700,
              fontSize: '0.9rem',
              textDecoration: 'none',
              transition: 'opacity .2s',
            }}>
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* 4. OUR HIRING PARTNERS — dark navy, white panel */}
      <section style={{ background: '#0D1B3E', paddingBottom: 60 }}>
        <div className="container">
          <h2 style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
            fontWeight: 800,
            color: '#FFFFFF',
            marginBottom: 28,
          }}>
            Our Hiring Partners
          </h2>
          <div style={{
            background: '#FFFFFF',
            borderRadius: 16,
            padding: '28px 36px',
            display: 'flex',
            flexWrap: 'wrap',
            gap: 20,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            {partners.map(p => (
              <div key={p} style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 700,
                fontSize: '1.05rem',
                color: '#0D1B3E',
                padding: '8px 20px',
                borderRight: '1px solid #E2E8F0',
              }}>
                {p}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. UPCOMING BATCHES */}
      <section style={{ background: '#FFFFFF', padding: '72px 0 80px' }}>
        <div className="container">
          <h2 style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
            fontWeight: 800,
            color: '#0D1B3E',
            textAlign: 'center',
            marginBottom: 60,
          }}>
            Upcoming Batches
          </h2>
          <div className="grid-3" style={{
            maxWidth: 900,
            margin: '0 auto',
          }}>
            {batches.map(b => (
              /*
               * The ENTIRE card is the arch shape.
               * border-radius: 999px 999px 0 0 on a wide box gets clamped to
               * half-the-width, producing a perfect tombstone arch.
               * padding-top pushes content below the curved arch portion.
               */
              <div key={b.course} style={{
                background: '#FFFFFF',
                border: '3px solid #1E3A8A',
                borderRadius: '999px 999px 0 0',   /* entire top is the arch */
                paddingTop: 180,                    /* pushes content below the arch */
                paddingLeft: 28,
                paddingRight: 28,
                paddingBottom: 28,
                display: 'flex',
                flexDirection: 'column',
                gap: 10,
              }}>
                <div style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 600,
                  fontSize: '1rem',
                  color: '#0D1B3E',
                  marginBottom: 2,
                }}>
                  {b.course}
                </div>
                <div style={{ fontSize: '0.87rem', color: '#374151' }}>
                  Starts: {b.date}
                </div>
                <div style={{ fontSize: '0.87rem', color: '#374151', marginBottom: 10 }}>
                  Mode: {b.mode}
                </div>
                <Link
                  href={`/services/${b.slug}`}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: '#1E3A8A',
                    color: '#FFFFFF',
                    padding: '12px 0',
                    borderRadius: 8,
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 700,
                    fontSize: '0.88rem',
                    textDecoration: 'none',
                  }}
                >
                  Enroll Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* 6. TESTIMONIALS — dark navy, single-card slider, circular photo + gold star ring */}
      <section style={{ background: '#0D1B3E', padding: '80px 0' }}>
        <div className="container">
          <h2 style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)',
            fontWeight: 800,
            color: '#FFFFFF',
            textAlign: 'center',
            marginBottom: 8,
          }}>
            What Our Students Say
          </h2>
          <p style={{ textAlign: 'center', color: 'rgba(255,255,255,0.5)', fontSize: '0.88rem', marginBottom: 48 }}>
            Discover how our students transformed their careers through practical learning and expert guidance.
          </p>

          {/* Single testimonial card with prev/next */}
          <div className="grid-testimonial">
            {/* LEFT — quote + text */}
            <div>
              {/* Opening large quote */}
              <div style={{
                fontFamily: 'Georgia, serif',
                fontSize: '5rem',
                color: 'rgba(255,255,255,0.15)',
                lineHeight: 0.8,
                marginBottom: 16,
                userSelect: 'none',
              }}>&ldquo;&ldquo;</div>

              <div style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: '1.1rem', color: '#FFFFFF', marginBottom: 4 }}>
                {t.name}
              </div>
              <div className="flex-center-mobile" style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 20 }}>
                <span style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.6)', background: 'rgba(255,255,255,0.08)', padding: '3px 12px', borderRadius: 4 }}>{t.role}</span>
                <span style={{ color: '#FFC107', fontSize: '1rem', letterSpacing: 2 }}>★★★★★</span>
              </div>

              <p style={{
                fontSize: '0.92rem',
                color: 'rgba(255,255,255,0.78)',
                lineHeight: 1.85,
                maxWidth: 560,
              }}>
                {t.text}
              </p>

              {/* Prev / Next arrows */}
              <div className="flex-center-mobile" style={{ display: 'flex', gap: 10, marginTop: 28, alignItems: 'center' }}>
                <button onClick={prev} style={{
                  width: 36, height: 36, borderRadius: '50%',
                  background: '#FFC107', border: 'none', cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <ChevronLeft size={18} color="#0D1B3E" />
                </button>
                <button onClick={next} style={{
                  width: 36, height: 36, borderRadius: '50%',
                  background: '#FFC107', border: 'none', cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <ChevronRight size={18} color="#0D1B3E" />
                </button>
              </div>

              {/* Closing large quote (bottom-right) */}
              <div style={{
                fontFamily: 'Georgia, serif',
                fontSize: '4rem',
                color: 'rgba(255,255,255,0.15)',
                lineHeight: 1,
                marginTop: 16,
                userSelect: 'none',
                display: 'flex',
                justifyContent: 'flex-end',
                maxWidth: 560,
              }}>&rdquo;&rdquo;</div>
            </div>

            {/* RIGHT — circular photo with gold star ring */}
            <div className="flex-center-mobile" style={{ display: 'flex', justifyContent: 'center' }}>
              <div style={{ position: 'relative', width: 280, height: 280, flexShrink: 0 }}>
              {/* Gold star ring using CSS + positioned stars */}
              {/* Outer gold circle */}
              <div style={{
                position: 'absolute',
                top: '-20px', left: '-20px',
                width: 320, height: 320,
                borderRadius: '50%',
                border: '2.5px solid #FFC107',
              }} />
              {/* Stars at N, E, S, W positions */}
              {[
                { top: -28, left: '50%', transform: 'translateX(-50%)' },
                { right: -28, top: '50%', transform: 'translateY(-50%)' },
                { bottom: -28, left: '50%', transform: 'translateX(-50%)' },
                { left: -28, top: '50%', transform: 'translateY(-50%)' },
              ].map((pos, i) => (
                <div key={i} style={{
                  position: 'absolute',
                  ...pos,
                  fontSize: '1.5rem',
                  lineHeight: 1,
                  zIndex: 2,
                }}>⭐</div>
              ))}
              {/* Photo */}
              <div style={{
                width: 280, height: 280,
                borderRadius: '50%',
                overflow: 'hidden',
                border: '4px solid #FFC107',
              }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={t.img}
                  alt={t.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }}
                />
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
