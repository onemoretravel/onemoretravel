import Head from 'next/head';
import Link from 'next/link';
import { useLang, t } from '../../context/LangContext';
import { pic } from '../../lib/content';
import { DESTINATIONS, getDestinationBySlug, getAllDestinationSlugs } from '../../lib/destinations';
import Label from '../../components/Label';
import PageHero from '../../components/PageHero';

export default function DestinationPage({ destination }) {
  const { lang } = useLang();
  if (!destination) return null;
  const d = destination;

  const sections = [
    { label: lang==='en'?'Why Visit':'为何前往',           key: 'why' },
    { label: lang==='en'?'Best Time to Go':'最佳旅行时节', key: 'bestTime' },
    { label: lang==='en'?'Suggested Pace':'建议节奏',      key: 'pace' },
  ];

  return (
    <>
      <Head><title>{t(d.title,lang)} — ONE MORE TRAVEL</title></Head>
      <PageHero imgKey={d.imgKey} title={t(d.title,lang)} sub={t(d.tagline,lang)} labelText={lang==='en'?'Destinations':'目的地'} />

      {/* Main content */}
      <section className="section section--ivory">
        <div className="container">
          <div className="grid-2" style={{ alignItems:'start' }}>
            <div>
              {sections.map(s => (
                <div key={s.key} style={{ marginBottom:36 }}>
                  <Label>{s.label}</Label>
                  <p className="body-text">{t(d[s.key],lang)}</p>
                </div>
              ))}
            </div>
            <div style={{ background:'var(--stone)', padding:36 }}>
              <div style={{ marginBottom:24 }}>
                <div className="contact-info-label">{lang==='en'?'Regions & Cities':'区域与城市'}</div>
                <p style={{ fontFamily:'var(--font-sans)', fontSize:13.5, color:'var(--charcoal)', lineHeight:1.8 }}>{t(d.regions,lang)}</p>
              </div>
              <div style={{ marginBottom:24, borderTop:'1px solid rgba(0,0,0,.08)', paddingTop:22 }}>
                <div className="contact-info-label">{lang==='en'?'Hotels We Often Recommend':'我们常推荐的酒店'}</div>
                <p style={{ fontFamily:'var(--font-sans)', fontSize:13, color:'var(--brown)', lineHeight:1.8, fontWeight:300 }}>{t(d.hotels,lang)}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Thoughts */}
      <section className="section section--stone">
        <div className="container" style={{ maxWidth:760 }}>
          <Label>{lang==='en'?'Our Thoughts':'我们的想法'}</Label>
          <h2 className="section-h" style={{ marginBottom:24 }}>
            {lang==='en'?`Our View on ${t(d.title,'en')}`:`关于${t(d.title,'zh')}`}
          </h2>
          <p className="body-text">{t(d.ourThoughts,lang)}</p>
        </div>
      </section>

      {/* CTA */}
      <section className="section section--green" style={{ textAlign:'center', padding:'64px 80px' }}>
        <div className="container">
          <h2 className="section-h" style={{ color:'#fff', fontSize:'clamp(24px,3vw,38px)', marginBottom:20 }}>
            {lang==='en'?`Planning a Journey to ${t(d.title,'en')}?`:`计划前往${t(d.title,'zh')}？`}
          </h2>
          <p style={{ fontFamily:'var(--font-sans)', fontSize:14, color:'rgba(255,255,255,.68)', fontWeight:300, marginBottom:32 }}>
            {lang==='en'?'Tell us how you like to travel. We will design from there.':'告诉我们您理想中的旅行方式，剩下的由我们为您慢慢设计。'}
          </p>
          <Link href="/inquiry" className="btn--hero">{lang==='en'?'Start Planning':'开始规划'}</Link>
        </div>
      </section>
    </>
  );
}

export async function getStaticPaths() {
  return { paths: getAllDestinationSlugs().map(slug=>({params:{slug}})), fallback: false };
}
export async function getStaticProps({ params }) {
  const destination = getDestinationBySlug(params.slug);
  if (!destination) return { notFound: true };
  return { props: { destination } };
}
