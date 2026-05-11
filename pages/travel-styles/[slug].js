import Head from 'next/head';
import Link from 'next/link';
import { useLang, t } from '../../context/LangContext';
import { pic } from '../../lib/content';
import { TRAVEL_STYLES, getStyleBySlug, getAllStyleSlugs } from '../../lib/travelStyles';
import Label from '../../components/Label';
import PageHero from '../../components/PageHero';

export default function TravelStylePage({ style }) {
  const { lang } = useLang();
  if (!style) return null;
  const s = style;

  const meta = [
    { label: lang==='en'?'Best Destinations':'最佳目的地', value: t(s.bestDest,lang) },
    { label: lang==='en'?'Best Season':'最佳季节',         value: t(s.bestSeason,lang) },
    { label: lang==='en'?'Hotels We Recommend':'推荐酒店',  value: t(s.hotels,lang) },
  ];

  return (
    <>
      <Head><title>{t(s.title,lang)} — ONE MORE TRAVEL</title></Head>
      <PageHero imgKey={s.imgKey} title={t(s.title,lang)} sub={t(s.tagline,lang)} labelText={lang==='en'?'Travel Styles':'旅行方式'} />

      <section className="section section--ivory">
        <div className="container">
          <div className="grid-2" style={{ alignItems:'start' }}>
            <div>
              <Label>{lang==='en'?'Why This Works':'为何这种方式有效'}</Label>
              <h2 className="section-h" style={{ marginBottom:24 }}>{t(s.title,lang)}</h2>
              <p className="body-text">{t(s.why,lang)}</p>
            </div>
            <div style={{ display:'flex', flexDirection:'column', gap:0 }}>
              {meta.map(m=>(
                <div key={m.label} style={{ padding:'22px 28px', background:'var(--stone)', borderBottom:'1px solid rgba(0,0,0,.07)' }}>
                  <div className="contact-info-label">{m.label}</div>
                  <p style={{ fontFamily:'var(--font-sans)', fontSize:13.5, color:'var(--charcoal)', lineHeight:1.76, marginTop:8 }}>{m.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* If It Were Us */}
      <section className="section section--green">
        <div className="container" style={{ maxWidth:760 }}>
          <Label light>{lang==='en'?'If It Were Us':'如果是我们'}</Label>
          <h2 className="section-h" style={{ color:'#fff', marginBottom:24 }}>
            {lang==='en'?'Our Honest Recommendation':'我们的真实建议'}
          </h2>
          <p className="body-text" style={{ color:'rgba(255,255,255,.78)' }}>{t(s.ifItWereUs,lang)}</p>
        </div>
      </section>

      <section className="section section--stone" style={{ textAlign:'center', padding:'64px 80px' }}>
        <div className="container">
          <Link href="/inquiry" className="btn btn--primary">
            {lang==='en'?'Plan This Journey':'规划此类旅行'}
          </Link>
        </div>
      </section>
    </>
  );
}

export async function getStaticPaths() {
  return { paths: getAllStyleSlugs().map(slug=>({params:{slug}})), fallback: false };
}
export async function getStaticProps({ params }) {
  const style = getStyleBySlug(params.slug);
  if (!style) return { notFound: true };
  return { props: { style } };
}
