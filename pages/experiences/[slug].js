import Head from 'next/head';
import Link from 'next/link';
import { useLang, t } from '../../context/LangContext';
import { pic } from '../../lib/content';
import { EXPERIENCES, getExperienceBySlug, getAllExperienceSlugs } from '../../lib/experiences';
import Label from '../../components/Label';
import PageHero from '../../components/PageHero';

export default function ExperiencePage({ experience }) {
  const { lang } = useLang();
  if (!experience) return null;
  const e = experience;

  return (
    <>
      <Head><title>{t(e.title,lang)} — ONE MORE TRAVEL</title></Head>
      <PageHero imgKey={e.imgKey} title={t(e.title,lang)} sub={t(e.tagline,lang)} labelText={lang==='en'?'Extraordinary Experiences':'非凡体验'} />

      {/* Intro */}
      <section className="section section--ivory">
        <div className="container" style={{ maxWidth:840 }}>
          <p className="body-text" style={{ fontSize:16, lineHeight:1.92 }}>{t(e.intro,lang)}</p>
        </div>
      </section>

      {/* Highlights */}
      <section className="section section--stone">
        <div className="container">
          <Label>{lang==='en'?'Selected Highlights':'精选亮点'}</Label>
          <h2 className="section-h" style={{ marginBottom:40 }}>
            {lang==='en'?'Examples We Often Arrange':'我们常安排的示例'}
          </h2>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(2,1fr)', gap:3 }}>
            {t(e.highlights,lang).map((h,i)=>(
              <div key={i} style={{ background:'#fff', padding:'32px 28px', display:'flex', gap:20 }}>
                <div style={{ fontFamily:'var(--font-serif)', fontSize:32, fontWeight:300, color:'var(--gold)', lineHeight:1, flexShrink:0, width:44 }}>
                  {String(i+1).padStart(2,'0')}
                </div>
                <div>
                  <div className="card-title" style={{ fontSize:18, marginBottom:10 }}>{h.t}</div>
                  <p className="card-body">{h.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Thoughts */}
      <section className="section section--ivory">
        <div className="container" style={{ maxWidth:760 }}>
          <Label>{lang==='en'?'Our Thoughts':'我们的想法'}</Label>
          <p className="body-text" style={{ fontSize:15, lineHeight:1.92 }}>{t(e.ourThoughts,lang)}</p>
        </div>
      </section>

      <section className="section section--green" style={{ textAlign:'center', padding:'64px 80px' }}>
        <div className="container">
          <h2 className="section-h" style={{ color:'#fff', fontSize:'clamp(22px,2.8vw,36px)', marginBottom:20 }}>
            {lang==='en'?'Interested in This Experience?':'对这段体验感兴趣？'}
          </h2>
          <Link href="/inquiry" className="btn--hero">{lang==='en'?'Start Planning':'开始规划'}</Link>
        </div>
      </section>
    </>
  );
}

export async function getStaticPaths() {
  return { paths: getAllExperienceSlugs().map(slug=>({params:{slug}})), fallback: false };
}
export async function getStaticProps({ params }) {
  const experience = getExperienceBySlug(params.slug);
  if (!experience) return { notFound: true };
  return { props: { experience } };
}
