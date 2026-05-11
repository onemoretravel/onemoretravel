import Head from 'next/head';
import { useLang, t } from '../../context/LangContext';
import { IMAGES } from '../../lib/content';
import { JOURNEYS } from '../../lib/journeys';
import Label from '../../components/Label';
import PageHero from '../../components/PageHero';
import JourneyCard from '../../components/JourneyCard';

export default function JourneysIndex() {
  const { lang } = useLang();
  return (
    <>
      <Head><title>Journeys — ONE MORE TRAVEL</title></Head>
      <PageHero imgId={IMAGES.heroJourneys} title={lang==='en'?'Signature Journeys':'精选行程'}
        sub={lang==='en'?'Itinerary inspirations — every journey is a starting point, not a fixed product.':'行程灵感——每段旅程都是起点，而非固定产品。'}
        labelText={lang==='en'?'Journeys':'精选行程'} />

      <section className="section section--ivory" style={{ paddingBottom:56 }}>
        <div className="container">
          <Label>{lang==='en'?'Curated Inspiration':'精选灵感'}</Label>
          <h2 className="section-h" style={{ marginBottom:16 }}>
            {lang==='en'?'A Few Journeys We Love':'我们喜爱的几段旅程'}
          </h2>
          <p className="body-text" style={{ marginBottom:52, maxWidth:600 }}>
            {lang==='en'
              ? 'These are starting points. Every journey we design is adapted to the specific people, dates and preferences of those making it.'
              : '这些是起点。我们设计的每段旅程都会根据旅行者本身、具体日期与个人偏好进行调整。'}
          </p>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(2,1fr)', gap:3 }}>
            {JOURNEYS.map(j=>(
              <JourneyCard key={j.slug} journey={j} lang={lang} variant="landscape" />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--stone" style={{ textAlign:'center', padding:'64px 80px' }}>
        <div className="container" style={{ maxWidth:500 }}>
          <h2 className="section-h" style={{ marginBottom:16 }}>
            {lang==='en'?'Have a Different Journey in Mind?':'有其他旅行构想？'}
          </h2>
          <p className="body-text" style={{ color:'var(--muted)', marginBottom:32 }}>
            {lang==='en'?'Tell us. We will design from there.':'告诉我们，剩下的由我们设计。'}
          </p>
          <a href="/inquiry" className="btn btn--primary">{lang==='en'?'Tell Us Your Vision':'告诉我们您的构想'}</a>
        </div>
      </section>
    </>
  );
}
