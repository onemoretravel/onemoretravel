import Head from 'next/head';
import Link from 'next/link';
import { useLang, t } from '../../context/LangContext';
import { pic } from '../../lib/content';
import { HOTEL_BRANDS, getHotelBySlug, getAllHotelSlugs } from '../../lib/hotels';
import Label from '../../components/Label';
import PageHero from '../../components/PageHero';

export default function HotelPage({ hotel }) {
  const { lang } = useLang();
  if (!hotel) return null;
  const h = hotel;

  return (
    <>
      <Head><title>{h.name} — ONE MORE TRAVEL</title></Head>
      <PageHero imgKey={h.imgKey} title={h.name} sub={t(h.tag,lang)} labelText={lang==='en'?'Hotels & Lodges':'酒店与别墅'} />

      {/* Overview + Why */}
      <section className="section section--ivory">
        <div className="container">
          <div className="grid-2">
            <div>
              <Label>{lang==='en'?'Brand Overview':'品牌概述'}</Label>
              <h2 className="section-h" style={{ marginBottom:24 }}>{lang==='en'?`About ${h.name}`:`关于${h.name}`}</h2>
              <p className="body-text">{t(h.overview,lang)}</p>
            </div>
            <div style={{ background:'var(--stone)', padding:40 }}>
              <div style={{ marginBottom:28 }}>
                <div className="contact-info-label">{lang==='en'?'Why We Recommend It':'我们为何推荐'}</div>
                <p className="body-text" style={{ marginTop:10 }}>{t(h.whyRecommend,lang)}</p>
              </div>
              <div style={{ borderTop:'1px solid rgba(0,0,0,.1)', paddingTop:22 }}>
                <div className="contact-info-label">{lang==='en'?'Best For':'适合谁'}</div>
                <p style={{ fontFamily:'var(--font-sans)', fontSize:13.5, color:'var(--charcoal)', lineHeight:1.8, marginTop:8 }}>
                  {t(h.bestFor,lang)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="section section--stone">
        <div className="container">
          <Label>{lang==='en'?'Selected Highlights':'精选灵感'}</Label>
          <h2 className="section-h" style={{ marginBottom:40 }}>
            {lang==='en'?'Curated Inspirations':'精选亮点参考'}
          </h2>
            <p style={{ fontFamily:'var(--font-sans)', fontSize:12.5, color:'var(--muted)', lineHeight:1.82, fontWeight:300, maxWidth:680, marginBottom:32, fontStyle:'italic' }}>
              {lang==='en'
                ? 'Selected highlights only. Final recommendations vary according to destination, season, travel style and guest preferences.'
                : '以下为玩陌精选灵感，并非完整合作清单。实际安排中，我们会根据目的地、季节、同行人群、预算与旅行节奏灵活推荐更合适的酒店组合。'}
            </p>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:3 }}>
            {t(h.highlights,lang).map((name,i)=>(
              <div key={i} style={{ background:'#fff', padding:'28px 24px', borderLeft:'2px solid var(--gold)' }}>
                <p style={{ fontFamily:'var(--font-serif)', fontSize:17, color:'var(--charcoal)', lineHeight:1.4 }}>{name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Thoughts */}
      <section className="section section--ivory">
        <div className="container" style={{ maxWidth:760 }}>
          <Label>{lang==='en'?'Our Thoughts':'我们的想法'}</Label>
          <p className="body-text" style={{ fontSize:16, lineHeight:1.92 }}>{t(h.ourThoughts,lang)}</p>
        </div>
      </section>

      {/* CTA */}
      <section className="section section--green" style={{ textAlign:'center', padding:'64px 80px' }}>
        <div className="container">
          <h2 className="section-h" style={{ color:'#fff', fontSize:'clamp(22px,2.8vw,36px)', marginBottom:20 }}>
            {lang==='en'?`Interested in ${h.name}?`:`对${h.name}感兴趣？`}
          </h2>
          <Link href="/inquiry" className="btn--hero">{lang==='en'?'Enquire Now':'立即咨询'}</Link>
        </div>
      </section>
    </>
  );
}

export async function getStaticPaths() {
  return { paths: getAllHotelSlugs().map(slug=>({params:{slug}})), fallback: false };
}
export async function getStaticProps({ params }) {
  const hotel = getHotelBySlug(params.slug);
  if (!hotel) return { notFound: true };
  return { props: { hotel } };
}
