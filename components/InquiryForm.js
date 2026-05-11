import { useState } from 'react';
import { useLang, t } from '../context/LangContext';
import { CONTENT } from '../lib/content';

const C = CONTENT.inquiry;

const LOADING_DOT = () => (
  <span style={{ display:'inline-block', marginLeft:8 }}>
    <span style={{ animation:'ldot 1.2s ease-in-out infinite', display:'inline-block', width:4, height:4, borderRadius:'50%', background:'#fff', margin:'0 2px', verticalAlign:'middle' }} />
    <span style={{ animation:'ldot 1.2s ease-in-out .2s infinite', display:'inline-block', width:4, height:4, borderRadius:'50%', background:'#fff', margin:'0 2px', verticalAlign:'middle' }} />
    <span style={{ animation:'ldot 1.2s ease-in-out .4s infinite', display:'inline-block', width:4, height:4, borderRadius:'50%', background:'#fff', margin:'0 2px', verticalAlign:'middle' }} />
    <style>{`@keyframes ldot{0%,80%,100%{opacity:.25}40%{opacity:1}}`}</style>
  </span>
);

export default function InquiryForm() {
  const { lang } = useLang();
  const F = t(C.fields, lang);
  const styleOpts  = t(C.styleOptions,  lang);
  const budgetOpts = t(C.budgetOptions, lang);

  const [form, setForm] = useState({
    name:'', wechat:'', email:'', departure:'', interests:'', dest:'',
    dates:'', travelers:'', children:'', style:'', hotel:'',
    budget:'', occasion:'', notes:'',
    _honey: '', // honeypot — hidden from users, filled by bots
  });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState('');

  const set = k => e => {
    setForm({ ...form, [k]: e.target.value });
    if (errors[k]) setErrors({ ...errors, [k]: '' });
  };

  function validate() {
    const errs = {};
    if (!form.name.trim() || form.name.trim().length < 2) errs.name = lang==='en' ? 'Please enter your name.' : '请填写姓名。';
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) errs.email = lang==='en' ? 'Please enter a valid email address.' : '请填写有效的邮箱地址。';
    return errs;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }

    setStatus('loading');
    setApiError('');

    try {
      const res = await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (res.ok && data.success) {
        setStatus('success');
      } else if (res.status === 400 && data.errors) {
        setErrors(data.errors);
        setStatus('idle');
      } else {
        setApiError(data.error || (lang==='en' ? 'Something went wrong. Please try again or email us directly.' : '提交失败，请重试或直接发邮件联系我们。'));
        setStatus('error');
      }
    } catch (err) {
      setApiError(lang==='en' ? 'Network error. Please check your connection and try again.' : '网络错误，请检查连接后重试。');
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div style={{ textAlign:'center', padding:'52px 0' }}>
        <div className="success-check">✓</div>
        <h3 style={{ fontFamily:'var(--font-serif)', fontSize:32, color:'var(--charcoal)', marginBottom:14, fontWeight:400 }}>
          {t(C.thankTitle, lang)}
        </h3>
        <p style={{ fontFamily:'var(--font-sans)', fontSize:14, color:'var(--muted)', lineHeight:1.82, fontWeight:300, maxWidth:400, margin:'0 auto' }}>
          {lang==='en'
            ? 'We look forward to thoughtfully designing your journey.'
            : '感谢您的咨询，我们会尽快与您联系，并一起慢慢设计这段旅程。'}
        </p>
      </div>
    );
  }

  const fld = (k, type='text', req=false) => (
    <div className="form-group" key={k}>
      <label className="form-label" htmlFor={`f-${k}`}>
        {F[k]}{req && <span style={{ color:'var(--gold)', marginLeft:2 }}>*</span>}
      </label>
      <input
        id={`f-${k}`} type={type} className="form-input" value={form[k]}
        onChange={set(k)} required={req} autoComplete="off"
        style={errors[k] ? { borderColor:'#c0392b' } : {}}
      />
      {errors[k] && <p style={{ fontFamily:'var(--font-sans)', fontSize:11, color:'#c0392b', marginTop:5 }}>{errors[k]}</p>}
    </div>
  );

  const sel = (k, opts) => (
    <div className="form-group" key={k}>
      <label className="form-label" htmlFor={`f-${k}`}>{F[k]}</label>
      <select id={`f-${k}`} className="form-input" value={form[k]} onChange={set(k)}
        style={{ cursor:'pointer', WebkitAppearance:'none', backgroundImage:`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%239A9189' stroke-width='1.5' fill='none'/%3E%3C/svg%3E")`, backgroundRepeat:'no-repeat', backgroundPosition:'right 14px center' }}>
        {opts.map((o,i) => <option key={i} value={i===0?'':o} disabled={i===0}>{o}</option>)}
      </select>
    </div>
  );

  const row2 = (a, b, reqA=false, reqB=false) => (
    <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:12 }} key={`${a}-${b}`}>
      {fld(a, 'text', reqA)} {fld(b, 'text', reqB)}
    </div>
  );

  return (
    <form onSubmit={handleSubmit} noValidate>
      {/* Honeypot — hidden from real users, bots fill it in */}
      <div style={{ display:'none' }} aria-hidden="true">
        <input tabIndex="-1" name="_honey" value={form._honey} onChange={set('_honey')} autoComplete="off" />
      </div>

      {row2('name', 'wechat', true, false)}
      {row2('email', 'departure', true, false)}
      {row2('dates', 'travelers')}
      {row2('children', 'occasion')}
      {fld('interests')}
      {fld('dest')}
      {sel('style', styleOpts)}
      {fld('hotel')}
      {sel('budget', budgetOpts)}

      <div className="form-group">
        <label className="form-label" htmlFor="f-notes">{F.notes}</label>
        <textarea id="f-notes" className="form-input" value={form.notes} onChange={set('notes')} rows={5} />
      </div>

      {(status === 'error' || apiError) && (
        <div style={{ background:'#fdf2f2', border:'1px solid #f5c6c6', borderRadius:2, padding:'14px 18px', marginBottom:16 }}>
          <p style={{ fontFamily:'var(--font-sans)', fontSize:12.5, color:'#c0392b', lineHeight:1.7 }}>
            {apiError || (lang==='en' ? 'Something went wrong. Please try again.' : '提交失败，请重试。')}
          </p>
        </div>
      )}

      <button
        type="submit"
        className="btn btn--primary"
        style={{ marginTop:8, display:'flex', alignItems:'center' }}
        disabled={status === 'loading'}
      >
        {status === 'loading' ? (
          <>{lang==='en' ? 'Sending' : '发送中'}<LOADING_DOT /></>
        ) : (
          t(C.submit, lang)
        )}
      </button>

      <p style={{ fontFamily:'var(--font-sans)', fontSize:11, color:'var(--muted)', marginTop:14, fontStyle:'italic' }}>
        {t(C.note, lang)}
      </p>
    </form>
  );
}
