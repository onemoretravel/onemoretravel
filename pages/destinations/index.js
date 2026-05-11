import Head from 'next/head';
import Link from 'next/link';
import { useLang, t } from '../../context/LangContext';
import { CONTENT, IMAGES, pic } from '../../lib/content';
import { DESTINATIONS } from '../../lib/destinations';
import Label from '../../components/Label';
import PageHero from '../../components/PageHero';
import SafeImg from '../../components/SafeImg';

const regions = CONTENT.home.regions;

export default function DestinationsIndex() {
  const { lang } = useLang();
  const regionList = t(regions, lang);

  return (
    <>
      <Head><title>Destinations — ONE MORE TRAVEL</title></Head>
      <PageHero imgId={IMAGES.heroDest} title={lang==='en'?'Destinations':'目的地'}
        sub={lang==='en'?'Eight regions. Every destination that matters.':'八大区域，每一个值得前往的目的地。'}
        labelText={lang==='en'?'Explore The World':'探索世界'} imgPosition="center 35%" />

      {/* Regions grid */}
      <section className="section section--ivory" style={{ paddingTop:72 }}>
        <div className="container">
          <Label>{lang==='en'?'Browse by Region':'按区域浏览'}</Label>
          <h2 className="section-h" style={{ marginBottom:48 }}>
            {lang==='en'?'Where Would You Like to Go?':'您想去哪里？'}
          </h2>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:8 }}>
            {regionList.map(r=>(
              <Link key={r.slug} href={`/destinations`} className="overlay-card" style={{ aspectRatio:'3/4', display:'block' }}>
                <SafeImg className="overlay-card__img" src={pic(r.imgKey,600)} alt={r.name} />
                <div className="overlay-card__base" /><div className="overlay-card__grad" />
                <div className="overlay-card__content">
                  <div className="overlay-card__title">{r.name}</div>
                  <div className="overlay-card__sub">{r.sub}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All destinations grid */}
      <section className="section section--stone">
        <div className="container">
          <Label>{lang==='en'?'Featured Destinations':'精选目的地'}</Label>
          <h2 className="section-h" style={{ marginBottom:48 }}>
            {lang==='en'?'Destinations We Know Well':'我们深入了解的目的地'}
          </h2>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:3 }}>
            {DESTINATIONS.map(dest=>(
              <Link key={dest.slug} href={`/destinations/${dest.slug}`} style={{ display:'block', background:'#fff', textDecoration:'none' }}>
                <div className="img-wrap" style={{ overflow:'hidden', position:'relative' }}>
                  <SafeImg src={pic(dest.imgKey,700)} alt={t(dest.title,lang)} style={{ width:'100%', aspectRatio:'16/10', objectFit:'cover', display:'block' }} />
                  <div style={{ position:'absolute', inset:0, background:'linear-gradient(to top,rgba(0,0,0,.6) 0%,transparent 50%)' }} />
                  <h3 style={{ position:'absolute', bottom:16, left:20, fontFamily:'var(--font-serif)', fontSize:26, color:'#fff', fontWeight:400, lineHeight:1.15 }}>
                    {t(dest.title,lang)}
                  </h3>
                </div>
                <div style={{ padding:'18px 20px 24px' }}>
                  <p style={{ fontFamily:'var(--font-sans)', fontSize:9.5, color:'var(--gold)', letterSpacing:'.13em', textTransform:'uppercase', marginBottom:8 }}>
                    {t(dest.regions,lang).split('·')[0].trim()}
                  </p>
                  <p style={{ fontFamily:'var(--font-sans)', fontSize:13, color:'var(--brown)', lineHeight:1.76, fontWeight:300 }}>
                    {t(dest.tagline,lang)}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
