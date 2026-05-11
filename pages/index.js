import Head from 'next/head';
import Link from 'next/link';
import { useLang, t } from '../context/LangContext';
import { CONTENT } from '../lib/content';
import { pic, imgAlt } from '../lib/images';
import Label from '../components/Label';
import JourneyCard from '../components/JourneyCard';
import SafeImg from '../components/SafeImg';

const H = CONTENT.home;

export default function Home() {
  const { lang } = useLang();
  const regions         = t(H.regions, lang);
  const stylesPreview   = t(H.stylesPreview, lang);
  const journeysPreview = H.journeysPreview;
  const whoStat         = t(H.whoStat, lang);

  return (
    <>
      <Head>
        <title>ONE MORE TRAVEL / 玩陌旅行 — Bespoke Luxury Travel</title>
        <meta name="description" content="ONE MORE TRAVEL designs private, considered journeys for families, couples and discerning travelers. Founded Chengdu 2018, present Melbourne." />
      </Head>

      {/* ── HERO ── */}
      <section className="hero hero--full">
        <SafeImg className="hero__img" src={pic('hero-main',1920)} alt={imgAlt('hero-main')} loading="eager" style={{ objectPosition:'center 32%' }} />
        <div className="hero__overlay--editorial" />
        <div className="hero__content">
          <div className="hero__eyebrow">
            <div className="hero__eyebrow-line" />
            <span className="hero__eyebrow-text">{t(H.heroEyebrow, lang)}</span>
          </div>
          <h1 style={{ fontFamily:'var(--font-serif)', fontWeight:400, lineHeight:1.06, fontSize:'clamp(38px,5.2vw,74px)', color:'#fff', marginBottom:20, maxWidth:860, whiteSpace:'pre-line' }}>
            {t(H.heroTitle, lang)}
          </h1>
          <p style={{ fontFamily:'var(--font-sans)', fontSize:15, color:'rgba(255,255,255,.76)', maxWidth:460, lineHeight:1.84, fontWeight:300, marginBottom:44 }}>
            {t(H.heroSub, lang)}
          </p>
          <div style={{ display:'flex', gap:14, flexWrap:'wrap' }}>
            <Link href="/destinations" className="btn--hero">{t(H.heroCta, lang)}</Link>
            <Link href="/inquiry" className="btn--ghost-white">{t(H.heroCtaAlt, lang)}</Link>
          </div>
        </div>
        <div className="hero__scroll"><div className="hero__scroll-line" /><span className="hero__scroll-text">scroll</span></div>
      </section>

      {/* ── PHILOSOPHY ── */}
      <section className="section section--ivory">
        <div className="container">
          <div className="grid-2">
            <div>
              <Label>{t(H.philLabel, lang)}</Label>
              <h2 className="section-h" style={{ marginBottom:24 }}>{t(H.philTitle, lang)}</h2>
              <p className="body-text">{t(H.philBody, lang)}</p>
              <div style={{ display:'flex', gap:32, marginTop:36 }}>
                <div className="stat-box" style={{ position:'static', flex:'0 0 auto' }}>
                  <div className="stat-box__num">{whoStat[0]}</div>
                  <div className="stat-box__lbl">{whoStat[1]}</div>
                </div>
              </div>
            </div>
            <div className="img-wrap">
              <SafeImg src={pic('hero-about')} alt={imgAlt('hero-about')} style={{ width:'100%', aspectRatio:'4/5', objectFit:'cover', objectPosition:'center top', display:'block' }} />
            </div>
          </div>
        </div>
      </section>

      {/* ── REGIONS ── */}
      <section className="section section--green">
        <div className="container">
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-end', marginBottom:48, flexWrap:'wrap', gap:16 }}>
            <div>
              <Label light>{t(H.regionsLabel, lang)}</Label>
              <h2 className="section-h" style={{ color:'#fff' }}>{t(H.regionsTitle, lang)}</h2>
            </div>
            <Link href="/destinations" className="btn--light-out">{lang==='en'?'All Destinations':'所有目的地'}</Link>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:8 }}>
            {regions.map(r => (
              <Link key={r.slug} href="/destinations" className="overlay-card" style={{ aspectRatio:'2/3', display:'block' }}>
                <SafeImg className="overlay-card__img" src={pic(r.imgKey,600)} alt={r.name} />
                <div className="overlay-card__base" /><div className="overlay-card__grad" />
                <div className="overlay-card__content">
                  <div className="overlay-card__title" style={{ fontSize:22 }}>{r.name}</div>
                  <div className="overlay-card__sub">{r.sub}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOTELS HERO ── */}
      <div style={{ position:'relative', height:480, overflow:'hidden' }}>
        <SafeImg src={pic('hero-hotels',1600)} alt={imgAlt('hero-hotels')} style={{ width:'100%', height:'100%', objectFit:'cover', position:'absolute', objectPosition:'center 38%' }} />
        <div style={{ position:'absolute', inset:0, background:'linear-gradient(to right,rgba(10,10,8,.76) 0%,rgba(10,10,8,.3) 58%,rgba(10,10,8,.1) 100%)' }} />
        <div className="hotel-cta__inner" style={{ position:'absolute', inset:0, display:'flex', flexDirection:'column', justifyContent:'center', padding:'0 84px', maxWidth:780 }}>
          <Label light>{t(H.hotelsLabel, lang)}</Label>
          <h2 style={{ fontFamily:'var(--font-serif)', fontWeight:400, lineHeight:1.12, fontSize:'clamp(26px,3.4vw,46px)', color:'#fff', whiteSpace:'pre-line', marginBottom:18 }}>
            {t(H.hotelsTitle, lang)}
          </h2>
          <p style={{ fontFamily:'var(--font-sans)', fontSize:13.5, color:'rgba(255,255,255,.72)', fontWeight:300, lineHeight:1.82, maxWidth:460, marginBottom:8 }}>
            {t(H.hotelsNote, lang)}
          </p>
          <Link href="/hotels" className="btn--hero" style={{ alignSelf:'flex-start', marginTop:20 }}>{t(H.hotelsCta, lang)}</Link>
        </div>
      </div>

      {/* ── HOTEL BRAND PREVIEW ── */}
      <section className="section section--ivory" style={{ paddingTop:64, paddingBottom:64 }}>
        <div className="container">
          <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:8 }}>
            {H.hotelsPreview.map(h => (
              <Link key={h.slug} href={`/hotels/${h.slug}`} className="overlay-card" style={{ aspectRatio:'3/4', display:'block' }}>
                <SafeImg className="overlay-card__img" src={pic(h.imgKey,600)} alt={h.name} />
                <div className="overlay-card__base" /><div className="overlay-card__grad" />
                <div className="overlay-card__content">
                  <div className="overlay-card__title" style={{ fontSize:20 }}>{h.name}</div>
                  <div className="overlay-card__sub">{t(h.tag, lang)}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRAVEL STYLES ── */}
      <section className="section section--stone">
        <div className="container">
          <div className="styles-layout" style={{ display:'grid', gridTemplateColumns:'1fr 2fr', gap:64, alignItems:'start' }}>
            <div style={{ position:'sticky', top:90 }}>
              <Label>{t(H.stylesLabel, lang)}</Label>
              <h2 className="section-h" style={{ marginBottom:28 }}>{t(H.stylesTitle, lang)}</h2>
              <p className="body-text" style={{ marginBottom:32 }}>
                {lang==='en' ? 'Browse by how you like to travel — not just where you want to go.' : '按您喜欢的旅行方式浏览——而非仅仅是目的地。'}
              </p>
              <Link href="/travel-styles" className="btn btn--primary">{t(H.stylesCta, lang)}</Link>
            </div>
            <div className="styles-inner" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:8 }}>
              {stylesPreview.map(s => (
                <Link key={s.slug} href={`/travel-styles/${s.slug}`} className="img-wrap"
                  style={{ position:'relative', aspectRatio:'3/4', display:'block', overflow:'hidden' }}>
                  <SafeImg src={pic(s.imgKey,700)} alt={s.name} style={{ width:'100%', height:'100%', objectFit:'cover', display:'block' }} />
                  <div style={{ position:'absolute', inset:0, background:'linear-gradient(to top,rgba(0,0,0,.78) 0%,rgba(0,0,0,.04) 58%)' }} />
                  <div style={{ position:'absolute', bottom:20, left:18, right:18 }}>
                    <span style={{ fontFamily:'var(--font-serif)', fontSize:19, color:'#fff', fontWeight:400, lineHeight:1.2 }}>{s.name}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── EXPERIENCES ── */}
      <section className="section section--ivory">
        <div className="container">
          <div style={{ textAlign:'center', marginBottom:52 }}>
            <Label>{t(H.expLabel, lang)}</Label>
            <h2 className="section-h">{t(H.expTitle, lang)}</h2>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:8, marginBottom:36 }}>
            {H.expPreview.map(e => (
              <Link key={e.slug} href={`/experiences/${e.slug}`} className="overlay-card" style={{ aspectRatio:'4/3', display:'block' }}>
                <SafeImg className="overlay-card__img" src={pic(e.imgKey,700)} alt={t(e.name, lang)} />
                <div className="overlay-card__base" /><div className="overlay-card__grad" />
                <div className="overlay-card__content">
                  <div className="overlay-card__title" style={{ fontSize:20 }}>{t(e.name, lang)}</div>
                </div>
              </Link>
            ))}
          </div>
          <div style={{ textAlign:'center' }}>
            <Link href="/experiences" className="btn btn--dark">{t(H.expCta, lang)}</Link>
          </div>
        </div>
      </section>

      {/* ── JOURNEYS ── */}
      <section className="section section--charcoal">
        <div className="container">
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-end', marginBottom:52, flexWrap:'wrap', gap:16 }}>
            <div>
              <Label light>{t(H.journeysLabel, lang)}</Label>
              <h2 className="section-h" style={{ color:'#fff' }}>{t(H.journeysTitle, lang)}</h2>
            </div>
            <Link href="/journeys" className="btn--light-out">{t(H.journeysCta, lang)}</Link>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:8 }}>
            {journeysPreview.map(j => (
              <JourneyCard key={j.slug} journey={j} lang={lang} />
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className="section section--ivory">
        <div className="container">
          <div style={{ textAlign:'center', marginBottom:60 }}>
            <Label>{t(H.whyLabel, lang)}</Label>
            <h2 className="section-h">{t(H.whyTitle, lang)}</h2>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:3 }}>
            {t(H.whyItems, lang).map((item, i) => (
              <div key={i} style={{ padding:'36px 28px', background: i%2===0?'#fff':'var(--stone)', borderTop:'2px solid var(--stone)' }}>
                <div className="gold-num">0{i+1}</div>
                <div className="card-title" style={{ fontSize:16, marginBottom:10 }}>{item.t}</div>
                <p className="card-body" style={{ fontSize:12.5 }}>{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section section--stone" style={{ textAlign:'center' }}>
        <div className="container" style={{ maxWidth:540 }}>
          <div className="gold-divider" style={{ height:52, marginBottom:36 }} />
          <h2 className="section-h" style={{ fontSize:'clamp(30px,4.4vw,52px)', marginBottom:18, whiteSpace:'pre-line' }}>
            {t(H.ctaTitle, lang)}
          </h2>
          <p className="body-text" style={{ color:'var(--muted)', marginBottom:36 }}>{t(H.ctaSub, lang)}</p>
          <Link href="/inquiry" className="btn btn--primary">{t(H.ctaBtn, lang)}</Link>
        </div>
      </section>
    </>
  );
}
