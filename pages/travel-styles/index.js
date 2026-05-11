import Head from 'next/head';
import { useLang, t } from '../../context/LangContext';
import { IMAGES } from '../../lib/content';
import { TRAVEL_STYLES } from '../../lib/travelStyles';
import Label from '../../components/Label';
import PageHero from '../../components/PageHero';
import TravelStyleCard from '../../components/TravelStyleCard';

export default function TravelStylesIndex() {
  const { lang } = useLang();
  return (
    <>
      <Head><title>Travel Styles — ONE MORE TRAVEL</title></Head>
      <PageHero imgId={IMAGES.heroStyles} title={lang==='en'?'Travel Styles':'旅行方式'}
        sub={lang==='en'?'Browse by how you like to travel — not just where.':'按您喜欢的旅行方式浏览——而非仅仅是目的地。'}
        labelText={lang==='en'?'How We Travel':'旅行方式'} />

      <section className="section section--ivory" style={{ paddingBottom:56 }}>
        <div className="container">
          <Label>{lang==='en'?'Find Your Style':'找到您的旅行方式'}</Label>
          <h2 className="section-h" style={{ marginBottom:48 }}>
            {lang==='en'?'How Would You Like to Travel?':'您想以哪种方式旅行？'}
          </h2>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:8 }}>
            {TRAVEL_STYLES.map(style=>(
              <TravelStyleCard key={style.slug} style={style} lang={lang} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
