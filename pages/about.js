import Head from 'next/head';
import Link from 'next/link';
import { useLang, t } from '../context/LangContext';
import { CONTENT, IMAGES, pic } from '../lib/content';
import Label from '../components/Label';
import PageHero from '../components/PageHero';
import SafeImg from '../components/SafeImg';

const A = CONTENT.about;

export default function About() {
  const { lang } = useLang();
  const sections = t(A.sections, lang);
  const offices  = t(A.offices, lang);
  const steps    = t(A.approach.steps, lang);
  const bgs = ['section--ivory','section--white','section--stone'];

  return (
    <>
      <Head><title>About Us — ONE MORE TRAVEL</title></Head>
      <PageHero imgId={IMAGES.heroAbout} title={t(A.heroTitle,lang)} sub={t(A.heroSub,lang)} labelText="ONE MORE TRAVEL" />

      {sections.map((sec,i)=>(
        <section key={i} className={`section ${bgs[i]}`}>
          <div className="container">
            <div className="grid-2">
              <div style={{ order: i%2===0?0:1 }}>
                <Label>{sec.label}</Label>
                <h2 className="section-h" style={{ marginBottom:24 }}>{sec.title}</h2>
                <p className="body-text">{sec.body}</p>
              </div>
              <div className="img-wrap" style={{ order: i%2===0?1:0 }}>
                <SafeImg src={pic(IMAGES[A.sectionsImgKeys[i]])} alt={sec.title} style={{ width:'100%', aspectRatio:'4/3', objectFit:'cover' }} />
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Our Approach */}
      <section className="section section--ivory">
        <div className="container">
          <div style={{ textAlign:'center', marginBottom:56 }}>
            <Label>{t(A.approach.label, lang)}</Label>
            <h2 className="section-h">{t(A.approach.title, lang)}</h2>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:3 }}>
            {steps.map((step,i)=>(
              <div key={i} style={{ padding:'40px 28px', background: i%2===0?'#fff':'var(--stone)' }}>
                <div className="adv-num" style={{ fontSize:38, marginBottom:16 }}>{step.n}</div>
                <div className="adv-title">{step.t}</div>
                <p className="adv-body">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offices */}
      <section className="section section--green">
        <div className="container">
          <div style={{ textAlign:'center', marginBottom:48 }}>
            <Label light>{t(A.offLabel, lang)}</Label>
          </div>
          <div className="offices-grid" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:3 }}>
            {offices.map((o,i)=>(
              <div key={i} className="img-wrap" style={{ position:'relative', overflow:'hidden' }}>
                <SafeImg src={pic(IMAGES[o.imgKey],1000)} alt={o.city} style={{ width:'100%', aspectRatio:'3/2', objectFit:'cover', objectPosition:'center' }} />
                <div style={{ position:'absolute', inset:0, background:'rgba(18,25,20,.72)' }} />
                <div style={{ position:'absolute', bottom:0, left:0, right:0, padding:44 }}>
                  <h3 style={{ fontFamily:'var(--font-serif)', fontSize:44, color:'#fff', fontWeight:400, marginBottom:14 }}>{o.city}</h3>
                  <p style={{ fontFamily:'var(--font-sans)', fontSize:13, color:'rgba(255,255,255,.62)', lineHeight:1.82, fontWeight:300, maxWidth:380 }}>{o.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section--stone" style={{ textAlign:'center' }}>
        <div className="container" style={{ maxWidth:480 }}>
          <h2 className="section-h" style={{ marginBottom:16 }}>
            {lang==='en'?'Ready to Start Planning?':'准备好开始规划了吗？'}
          </h2>
          <p className="body-text" style={{ color:'var(--muted)', marginBottom:32 }}>
            {lang==='en'?'Tell us how you like to travel. We will design from there.':'告诉我们您理想中的旅行方式，剩下的由我们为您慢慢设计。'}
          </p>
          <Link href="/inquiry" className="btn btn--primary">
            {lang==='en'?'Tailor-Made Inquiry':'定制咨询'}
          </Link>
        </div>
      </section>
    </>
  );
}
