import Head from 'next/head';
import { useLang, t } from '../../context/LangContext';
import { IMAGES } from '../../lib/content';
import { EXPERIENCES } from '../../lib/experiences';
import Label from '../../components/Label';
import PageHero from '../../components/PageHero';
import ExperienceCard from '../../components/ExperienceCard';

export default function ExperiencesIndex() {
  const { lang } = useLang();
  return (
    <>
      <Head><title>Extraordinary Experiences — ONE MORE TRAVEL</title></Head>
      <PageHero imgId={IMAGES.heroExp} title={lang==='en'?'Extraordinary Experiences':'非凡体验'}
        sub={lang==='en'?'Beyond the destination — the journeys that define a lifetime.':'超越目的地——那些定义一生的旅程。'}
        labelText={lang==='en'?'Extraordinary Experiences':'非凡体验'} />

      <section className="section section--ivory" style={{ paddingBottom:56 }}>
        <div className="container">
          <Label>{lang==='en'?'Selected Experiences':'精选体验'}</Label>
          <h2 className="section-h" style={{ marginBottom:48 }}>
            {lang==='en'?'Journeys Beyond the Ordinary':'超越寻常的旅程'}
          </h2>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:8 }}>
            {EXPERIENCES.map(exp=>(
              <ExperienceCard key={exp.slug} exp={exp} lang={lang} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
