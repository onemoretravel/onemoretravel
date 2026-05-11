import { useState } from 'react';
import { useLang, t } from '../context/LangContext';
import { CONTENT } from '../lib/content';

const C = CONTENT.contact;

export default function ContactForm() {
  const { lang } = useLang();
  const fields  = t(C.fields,       lang);
  const options = t(C.styleOptions, lang);
  const [form, setForm] = useState({ name:'', email:'', phone:'', dest:'', dates:'', travelers:'', style:'', msg:'' });
  const [sent, setSent]   = useState(false);
  const [error, setError] = useState('');

  const set = (key) => (e) => setForm({ ...form, [key]: e.target.value });

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.name || !form.email) { setError(lang === 'en' ? 'Please fill in your name and email.' : '请填写姓名和邮箱。'); return; }
    setError('');
    // TODO: wire to real backend (Formspree, Resend, or pages/api/contact.js)
    setSent(true);
  }

  if (sent) {
    return (
      <div style={{ padding: '52px 0', textAlign: 'center' }}>
        <div className="success-check">✓</div>
        <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 30, color: 'var(--charcoal)', marginBottom: 12 }}>{t(C.thankTitle, lang)}</h3>
        <p style={{ fontFamily: 'var(--font-sans)', fontSize: 14, color: 'var(--muted)', lineHeight: 1.78, fontWeight: 300, maxWidth: 380, margin: '0 auto' }}>{t(C.thankBody, lang)}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      {error && (
        <p style={{ fontFamily: 'var(--font-sans)', fontSize: 12, color: '#c0392b', marginBottom: 16 }}>{error}</p>
      )}

      {/* Row 1: Name + Email */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
        {[['name','text',true], ['email','email',true]].map(([key,type,req]) => (
          <div className="form-group" key={key}>
            <label className="form-label" htmlFor={`f-${key}`}>{fields[key]}{req && <span style={{ color:'var(--gold)', marginLeft:2 }}>*</span>}</label>
            <input id={`f-${key}`} type={type} className="form-input" value={form[key]} onChange={set(key)} required={req} />
          </div>
        ))}
      </div>

      {/* Row 2: Phone + Destination */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
        {[['phone','tel'], ['dest','text']].map(([key,type]) => (
          <div className="form-group" key={key}>
            <label className="form-label" htmlFor={`f-${key}`}>{fields[key]}</label>
            <input id={`f-${key}`} type={type} className="form-input" value={form[key]} onChange={set(key)} />
          </div>
        ))}
      </div>

      {/* Row 3: Dates + Travelers */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
        {[['dates','text'], ['travelers','text']].map(([key,type]) => (
          <div className="form-group" key={key}>
            <label className="form-label" htmlFor={`f-${key}`}>{fields[key]}</label>
            <input id={`f-${key}`} type={type} className="form-input" value={form[key]} onChange={set(key)} />
          </div>
        ))}
      </div>

      {/* Travel Style dropdown */}
      <div className="form-group">
        <label className="form-label" htmlFor="f-style">{fields.style}</label>
        <select id="f-style" className="form-input" value={form.style} onChange={set('style')}
          style={{ cursor: 'pointer', appearance: 'none', backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%239A9189' stroke-width='1.5' fill='none'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 14px center' }}>
          {options.map((opt, i) => <option key={i} value={i === 0 ? '' : opt} disabled={i === 0}>{opt}</option>)}
        </select>
      </div>

      {/* Message */}
      <div className="form-group">
        <label className="form-label" htmlFor="f-msg">{fields.msg}</label>
        <textarea id="f-msg" className="form-input" value={form.msg} onChange={set('msg')} rows={5} />
      </div>

      <button type="submit" className="btn btn--primary" style={{ marginTop: 8 }}>{t(C.submit, lang)}</button>
      <p style={{ fontFamily: 'var(--font-sans)', fontSize: 11, color: 'var(--muted)', marginTop: 14, fontStyle: 'italic' }}>{t(C.note, lang)}</p>
    </form>
  );
}
