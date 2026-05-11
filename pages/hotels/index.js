import Head from 'next/head';
import Link from 'next/link';
import { useLang, t } from '../../context/LangContext';
import { IMAGES, pic } from '../../lib/content';
import { HOTEL_BRANDS, HOTEL_CATEGORIES } from '../../lib/hotels';
import Label from '../../components/Label';
import PageHero from '../../components/PageHero';
import SafeImg from '../../components/SafeImg';

export default function HotelsIndex() {
  const { lang } = useLang();

  return (
    <>
      <Head><title>Hotels & Lodges — ONE MORE TRAVEL</title></Head>
      <PageHero imgId={IMAGES.heroHotels} title={lang==='en'?'Hotels & Lodges':'酒店与别墅'}
        sub={lang==='en'?'Curated hotel inspirations — selected for destination, season and guest.':'精选住宿灵感——依目的地、季节与宾客而定。'}
        labelText={lang==='en'?'Hotels & Lodges':'酒店与别墅'} />

      {/* Note */}
      <section className="section section--ivory" style={{ paddingBottom:48 }}>
        <div className="container" style={{ maxWidth:800, textAlign:'center' }}>
          <Label>{lang==='en'?'A Note on Our Approach':'关于我们的方式'}</Label>
          <p className="body-text" style={{ fontSize:15 }}>
            {lang==='en'
              ? 'The hotels and lodges featured here are curated highlights, not limitations. Every stay is recommended according to destination, season, travel style and guest preferences.'
              : '网站展示酒店为玩陌精选灵感，并非完整合作清单。实际安排中，我们会根据目的地、季节、同行人群与旅行节奏灵活推荐更合适的酒店组合。'}
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="section section--ivory" style={{ paddingTop:0 }}>
        <div className="container">
          <div style={{ display:'grid', gridTemplateColumns:'repeat(2,1fr)', gap:3, marginBottom:8 }}>
            {HOTEL_CATEGORIES.map(cat=>(
              <div key={cat.slug} style={{ position:'relative', overflow:'hidden', aspectRatio:'16/7' }} className="img-wrap">
                <SafeImg src={pic(cat.imgKey,900)} alt={t(cat.title,lang)} style={{ width:'100%', height:'100%', objectFit:'cover' }} />
                <div style={{ position:'absolute', inset:0, background:'rgba(0,0,0,.22)' }} />
                <div style={{ position:'absolute', inset:0, background:'linear-gradient(to top,rgba(0,0,0,.7) 0%,transparent 52%)' }} />
                <div style={{ position:'absolute', bottom:28, left:32 }}>
                  <h3 style={{ fontFamily:'var(--font-serif)', fontSize:26, color:'#fff', fontWeight:400, marginBottom:6 }}>{t(cat.title,lang)}</h3>
                  <p style={{ fontFamily:'var(--font-sans)', fontSize:11.5, color:'rgba(255,255,255,.7)', fontWeight:300 }}>{t(cat.tagline,lang)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All brands */}
      <section className="section section--stone">
        <div className="container">
          <Label>{lang==='en'?'Selected Hotels & Lodges':'精选酒店与别墅'}</Label>
          <h2 className="section-h" style={{ marginBottom:48 }}>
            {lang==='en'?'Curated Inspirations':'精选住宿灵感'}
          </h2>
          <p style={{ fontFamily:'var(--font-sans)', fontSize:13, color:'var(--muted)', lineHeight:1.82, maxWidth:780, fontWeight:300, marginBottom:36 }}>
            {lang==='en'
              ? 'These are selected highlights only. Final recommendations vary according to destination, season, travel style and guest preferences.'
              : '以下为玩陌精选灵感，并非完整合作清单。实际安排中，我们会根据目的地、季节、同行人群、预算与旅行节奏灵活推荐更合适的酒店组合。'}
          </p>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:3 }}>
            {HOTEL_BRANDS.map(h=>(
              <Link key={h.slug} href={`/hotels/${h.slug}`} className="overlay-card" style={{ aspectRatio:'4/3', display:'block' }}>
                <SafeImg className="overlay-card__img" src={pic(h.imgKey,700)} alt={h.name} />
                <div className="overlay-card__base" /><div className="overlay-card__grad" />
                <div className="overlay-card__content">
                  <div className="overlay-card__title" style={{ fontSize:22 }}>{h.name}</div>
                  <div className="overlay-card__sub">{t(h.tag,lang)}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
