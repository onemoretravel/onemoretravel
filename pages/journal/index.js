import Head from 'next/head';
import { useLang, t } from '../../context/LangContext';
import { IMAGES } from '../../lib/content';
import { JOURNAL_ENTRIES, JOURNAL_CATEGORIES } from '../../lib/journal';
import Label from '../../components/Label';
import PageHero from '../../components/PageHero';
import JournalCard from '../../components/JournalCard';

export default function JournalIndex() {
  const { lang } = useLang();
  return (
    <>
      <Head><title>Journal — ONE MORE TRAVEL</title></Head>
      <PageHero imgId={IMAGES.heroJournal} title={lang==='en'?'Journal':'旅行日记'}
        sub={lang==='en'?'Notes on travel, hotels, destinations and how to do it well.':'关于旅行、酒店、目的地与如何真正旅行好的笔记。'}
        labelText={lang==='en'?'ONE MORE TRAVEL':'玩陌旅行'} />

      {/* Categories */}
      <section className="section section--ivory" style={{ paddingBottom:0 }}>
        <div className="container">
          <div style={{ display:'flex', gap:8, flexWrap:'wrap', paddingBottom:48 }}>
            <span style={{ fontFamily:'var(--font-sans)', fontSize:9, letterSpacing:'.18em', textTransform:'uppercase', padding:'7px 16px', background:'var(--charcoal)', color:'#fff' }}>
              {lang==='en'?'All':'全部'}
            </span>
            {JOURNAL_CATEGORIES.map(cat=>(
              <span key={cat.slug} style={{ fontFamily:'var(--font-sans)', fontSize:9, letterSpacing:'.18em', textTransform:'uppercase', padding:'7px 16px', border:'1px solid var(--stone)', color:'var(--muted)', cursor:'pointer', transition:'all .2s' }}>
                {t(cat.label,lang)}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Articles grid */}
      <section className="section section--ivory" style={{ paddingTop:8 }}>
        <div className="container">
          <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:3 }}>
            {JOURNAL_ENTRIES.map(entry=>(
              <JournalCard key={entry.slug} entry={entry} lang={lang} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
