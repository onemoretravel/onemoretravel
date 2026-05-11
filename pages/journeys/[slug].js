import Head from 'next/head';
import Link from 'next/link';
import { useLang, t } from '../../context/LangContext';
import { pic } from '../../lib/content';
import { JOURNEYS, getJourneyBySlug, getAllJourneySlugs } from '../../lib/journeys';
import Label from '../../components/Label';
import PageHero from '../../components/PageHero';

export default function JourneyPage({ journey }) {
  const { lang } = useLang();
  if (!journey) return null;
  const j = journey;
  const tags = t(j.tags, lang);

  const sections = [
    { label: lang==='en'?'Overview':'行程概述',               key: 'overview' },
    { label: lang==='en'?'Why This Journey Works':'为何有效',  key: 'whyWorks' },
    { label: lang==='en'?'Suggested Route':'建议路线',          key: 'route' },
    { label: lang==='en'?'Pace':'旅行节奏',                    key: 'pace' },
    { label: lang==='en'?'Best For':'适合谁',                  key: 'bestFor' },
  ];

  return (
    <>
      <Head><title>{t(j.title,lang)} — ONE MORE TRAVEL</title></Head>
      <PageHero imgKey={j.imgKey} title={t(j.title,lang)} sub={t(j.subtitle,lang)} labelText={t(j.region,lang)} />

      {/* Tags */}
      <div style={{ background:'var(--charcoal)', padding:'16px 80px', display:'flex', gap:10, flexWrap:'wrap' }}>
        {tags.map(tag=>(
          <span key={tag} style={{ fontFamily:'var(--font-sans)', fontSize:9, letterSpacing:'.16em', textTransform:'uppercase', color:'rgba(255,255,255,.52)', border:'1px solid rgba(255,255,255,.18)', padding:'4px 12px' }}>{tag}</span>
        ))}
      </div>

      {/* Main content */}
      <section className="section section--ivory">
        <div className="container">
          <div className="grid-2" style={{ alignItems:'start', gap:60 }}>
            <div>
              {sections.map(s=>(
                <div key={s.key} style={{ marginBottom:32 }}>
                  <div className="contact-info-label">{s.label}</div>
                  <p className="body-text" style={{ marginTop:10 }}>{t(j[s.key],lang)}</p>
                </div>
              ))}
            </div>
            <div style={{ background:'var(--stone)', padding:36 }}>
              <div style={{ marginBottom:26 }}>
                <div className="contact-info-label">{lang==='en'?'Hotels We May Recommend':'可能推荐的酒店'}</div>
                <p style={{ fontFamily:'var(--font-sans)', fontSize:13, color:'var(--brown)', lineHeight:1.82, fontWeight:300, marginTop:10 }}>{t(j.hotels,lang)}</p>
              </div>
              <div style={{ borderTop:'1px solid rgba(0,0,0,.1)', paddingTop:22 }}>
                <div className="contact-info-label">{lang==='en'?'Our Thoughts':'我们的想法'}</div>
                <p className="body-text" style={{ marginTop:10, fontSize:13 }}>{t(j.ourThoughts,lang)}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section--green" style={{ textAlign:'center', padding:'64px 80px' }}>
        <div className="container">
          <h2 className="section-h" style={{ color:'#fff', fontSize:'clamp(22px,2.8vw,36px)', marginBottom:20 }}>
            {t(j.customise,lang)}
          </h2>
          <p style={{ fontFamily:'var(--font-sans)', fontSize:14, color:'rgba(255,255,255,.68)', fontWeight:300, marginBottom:32 }}>
            {lang==='en'?'Every journey is adapted to the specific people making it.':'每段旅程都会根据具体旅行者进行调整。'}
          </p>
          <Link href="/inquiry" className="btn--hero">{lang==='en'?'Enquire About This Journey':'咨询此行程'}</Link>
        </div>
      </section>
    </>
  );
}

export async function getStaticPaths() {
  return { paths: getAllJourneySlugs().map(slug=>({params:{slug}})), fallback: false };
}
export async function getStaticProps({ params }) {
  const journey = getJourneyBySlug(params.slug);
  if (!journey) return { notFound: true };
  return { props: { journey } };
}
