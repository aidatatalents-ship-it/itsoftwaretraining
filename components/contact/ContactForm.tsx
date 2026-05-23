'use client';
import { useState, useRef } from 'react';
import { ArrowRight, Lock, CheckCircle, Loader2, AlertCircle } from 'lucide-react';

const courses = [
  'Salesforce Training',
  'SAP Training',
  'Cybersecurity & CEH',
  'Python & Data Science',
  'Machine Learning / AI',
  'Generative AI',
  'Cloud — AWS',
  'Cloud — Azure',
  'DevOps & Kubernetes',
  'SAP FICO', 'SAP MM', 'SAP SD', 'SAP ABAP',
  'SAP HR/HCM', 'SAP S/4HANA', 'SAP BASIS',
  'Other / Not sure yet',
];

type State = 'idle' | 'loading' | 'success' | 'error';

export default function ContactForm() {
  const [state, setState] = useState<State>('idle');
  const [errMsg, setErrMsg] = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState('loading');
    setErrMsg('');

    const form = e.currentTarget;
    const data = new FormData(form);

    // Web3Forms — free, no backend needed.
    // The access_key field targets our mailbox. Replace with real key from web3forms.com.
    data.append('access_key', process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? 'YOUR_WEB3FORMS_KEY');
    data.append('subject', `New Demo Request — ${data.get('course') ?? 'IT Training'}`);
    data.append('from_name', 'IT Software Training Bangalore Website');

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: data,
      });
      const json = await res.json();
      if (json.success) {
        setState('success');
        formRef.current?.reset();
      } else {
        throw new Error(json.message ?? 'Submission failed');
      }
    } catch (err: unknown) {
      setState('error');
      setErrMsg(err instanceof Error ? err.message : 'Something went wrong. Please call us directly.');
    }
  }

  if (state === 'success') {
    return (
      <div style={{
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        justifyContent: 'center', textAlign: 'center',
        padding: '48px 24px', gap: 16,
      }}>
        <div style={{
          width: 72, height: 72, borderRadius: '50%',
          background: '#DCFCE7', display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <CheckCircle size={36} style={{ color: '#16A34A' }} />
        </div>
        <h3 style={{ fontFamily: "'Fraunces',serif", fontSize: '1.5rem', fontWeight: 900, color: 'var(--ink)', margin: 0 }}>
          You're All Set! 🎉
        </h3>
        <p style={{ color: 'var(--t-muted)', lineHeight: 1.75, maxWidth: 340, margin: 0, fontSize: '.92rem' }}>
          Our counsellor will call you within <strong>30 minutes</strong> with your free demo details,
          batch schedule and fee structure.
        </p>
        <p style={{ fontSize: '.78rem', color: 'var(--t-muted)', margin: 0 }}>
          Didn't receive a call? Ring us at{' '}
          <a href="tel:+919989432324" style={{ color: 'var(--blue)', fontWeight: 700 }}>+91 99894 32324</a>
        </p>
        <button
          onClick={() => setState('idle')}
          style={{
            marginTop: 8, padding: '10px 24px',
            background: 'none', border: '1.5px solid var(--border)',
            borderRadius: 8, cursor: 'pointer',
            fontSize: '.85rem', fontWeight: 600, color: 'var(--t-muted)',
          }}
        >
          Submit another enquiry
        </button>
      </div>
    );
  }

  const isLoading = state === 'loading';

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: 14 }}
    >
      {/* Hidden honeypot anti-spam */}
      <input type="checkbox" name="botcheck" style={{ display: 'none' }} />

      <div className="form-grid">
        <div>
          <label style={{ display: 'block', fontSize: '.76rem', fontWeight: 600, color: 'var(--t-muted)', marginBottom: 6 }}>
            Full Name *
          </label>
          <input
            className="inp" type="text" name="name"
            placeholder="Your full name" required disabled={isLoading}
          />
        </div>
        <div>
          <label style={{ display: 'block', fontSize: '.76rem', fontWeight: 600, color: 'var(--t-muted)', marginBottom: 6 }}>
            WhatsApp Number *
          </label>
          <input
            className="inp" type="tel" name="phone"
            placeholder="+91 00000 00000" required disabled={isLoading}
            pattern="[0-9+\s\-]{8,15}"
          />
        </div>
      </div>

      <div>
        <label style={{ display: 'block', fontSize: '.76rem', fontWeight: 600, color: 'var(--t-muted)', marginBottom: 6 }}>
          Email Address
        </label>
        <input
          className="inp" type="email" name="email"
          placeholder="your@email.com" disabled={isLoading}
        />
      </div>

      <div className="form-grid">
        <div>
          <label style={{ display: 'block', fontSize: '.76rem', fontWeight: 600, color: 'var(--t-muted)', marginBottom: 6 }}>
            Course *
          </label>
          <select className="inp" name="course" required disabled={isLoading}>
            <option value="">Select a course</option>
            {courses.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
        <div>
          <label style={{ display: 'block', fontSize: '.76rem', fontWeight: 600, color: 'var(--t-muted)', marginBottom: 6 }}>
            Training Mode
          </label>
          <select className="inp" name="mode" disabled={isLoading}>
            <option value="Classroom">Classroom</option>
            <option value="Online Live">Online Live</option>
            <option value="Weekend Batch">Weekend Batch</option>
            <option value="Fast-Track">Fast-Track</option>
          </select>
        </div>
      </div>

      <div className="form-grid">
        <div>
          <label style={{ display: 'block', fontSize: '.76rem', fontWeight: 600, color: 'var(--t-muted)', marginBottom: 6 }}>
            Experience
          </label>
          <select className="inp" name="experience" disabled={isLoading}>
            <option value="Fresher / Student">Fresher / Student</option>
            <option value="0–2 Years">0–2 Years</option>
            <option value="2–5 Years">2–5 Years</option>
            <option value="5+ Years">5+ Years</option>
          </select>
        </div>
        <div>
          <label style={{ display: 'block', fontSize: '.76rem', fontWeight: 600, color: 'var(--t-muted)', marginBottom: 6 }}>
            Preferred Time
          </label>
          <select className="inp" name="preferred_time" disabled={isLoading}>
            <option value="Weekday Morning">Weekday Morning</option>
            <option value="Weekday Evening">Weekday Evening</option>
            <option value="Weekend">Weekend</option>
            <option value="Flexible">Flexible</option>
          </select>
        </div>
      </div>

      <div>
        <label style={{ display: 'block', fontSize: '.76rem', fontWeight: 600, color: 'var(--t-muted)', marginBottom: 6 }}>
          Message (Optional)
        </label>
        <textarea
          className="inp" name="message" rows={3}
          placeholder="Any specific questions or requirements..."
          style={{ resize: 'vertical' }} disabled={isLoading}
        />
      </div>

      {state === 'error' && (
        <div style={{
          display: 'flex', alignItems: 'center', gap: 10,
          padding: '12px 16px', background: '#FEF2F2',
          border: '1px solid #FECACA', borderRadius: 8,
          fontSize: '.82rem', color: '#DC2626',
        }}>
          <AlertCircle size={15} style={{ flexShrink: 0 }} />
          {errMsg || 'Submission failed. Please call us directly.'}
        </div>
      )}

      <button
        type="submit"
        disabled={isLoading}
        className="btn-primary"
        style={{
          width: '100%', padding: '15px', fontSize: '1rem',
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
          opacity: isLoading ? 0.75 : 1, cursor: isLoading ? 'not-allowed' : 'pointer',
        }}
      >
        {isLoading ? (
          <><Loader2 size={18} style={{ animation: 'spin 1s linear infinite' }} /> Sending…</>
        ) : (
          <><ArrowRight size={18} /> Submit — Get Free Demo Details</>
        )}
      </button>

      <p style={{ textAlign: 'center', fontSize: '.7rem', color: 'var(--t-muted)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 5 }}>
        <Lock size={11} /> 100% Private · No Spam · No Commitment Required
      </p>

      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>
    </form>
  );
}
