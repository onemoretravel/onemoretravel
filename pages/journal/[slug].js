import Head from 'next/head';
import Link from 'next/link';
import { useLang, t } from '../../context/LangContext';
import { pic } from '../../lib/content';
import { JOURNAL_ENTRIES, JOURNAL_CATEGORIES, getJournalEntryBySlug, getAllJournalSlugs } from '../../lib/journal';
import Label from '../../components/Label';
import SafeImg from '../../components/SafeImg';

export default function JournalEntryPage({ entry }) {
  const { lang } = useLang();
  if (!entry) return null;
  const e = entry;
  const cat = JOURNAL_CATEGORIES.find(c => c.slug === e.category);
  const body = t(e.body, lang);

  // Convert **text** to bold spans for simple markdown bold
  function renderBody(text) {
    const parts = text.split(/\*\*(.*?)\*\*/g);
    return parts.map((part, i) =>
      i % 2 === 1 ? <strong key={i} style={{ fontWeight:600, color:'var(--charcoal)' }}>{part}</strong> : part
    );
  }

  return (
    <>
      <Head><title>{t(e.title,lang)} — ONE MORE TRAVEL</title></Head>

      {/* Hero image */}
      <div style={{ height:'60vh', minHeight:440, position:'relative', overflow:'hidden', marginTop:'var(--nav-height)' }}>
        <SafeImg src={pic(e.imgKey,1400)} alt={t(e.title,lang)||imgAlt(e.imgKey)} style={{ width:'100%', height:'100%', objectFit:'cover', objectPosition:'center' }} />
        <div style={{ position:'absolute', inset:0, background:'linear-gradient(to bottom,rgba(0,0,0,.2) 0%,rgba(0,0,0,.5) 100%)' }} />
      </div>

      {/* Article */}
      <article style={{ background:'#fff' }}>
        <div className="container" style={{ maxWidth:760, padding:'64px 80px 80px' }}>
          {/* Meta */}
          <div style={{ display:'flex', gap:16, alignItems:'center', marginBottom:28 }}>
            {cat && <span style={{ fontFamily:'var(--font-sans)', fontSize:9, letterSpacing:'.18em', textTransform:'uppercase', color:'var(--gold)', fontWeight:600 }}>{t(cat.label,lang)}</span>}
            <span style={{ color:'rgba(0,0,0,.2)' }}>·</span>
            <span style={{ fontFamily:'var(--font-sans)', fontSize:10.5, color:'var(--muted)' }}>{t(e.readTime,lang)}</span>
          </div>

          <h1 style={{ fontFamily:'var(--font-serif)', fontSize:'clamp(28px,4vw,44px)', fontWeight:400, lineHeight:1.15, color:'var(--charcoal)', marginBottom:36 }}>
            {t(e.title,lang)}
          </h1>

          <p style={{ fontFamily:'var(--font-sans)', fontSize:16, color:'var(--brown)', lineHeight:1.96, fontWeight:300, marginBottom:44, fontStyle:'italic', borderLeft:'3px solid var(--gold)', paddingLeft:20 }}>
            {t(e.excerpt,lang)}
          </p>

          {body.split('\n\n').map((para, i) => (
            <p key={i} style={{ fontFamily:'var(--font-sans)', fontSize:15, color:'var(--brown)', lineHeight:1.96, fontWeight:300, marginBottom:22 }}>
              {renderBody(para)}
            </p>
          ))}

          <div style={{ borderTop:'1px solid var(--stone)', paddingTop:36, marginTop:52, display:'flex', justifyContent:'space-between', alignItems:'center' }}>
            <Link href="/journal" style={{ fontFamily:'var(--font-sans)', fontSize:9.5, letterSpacing:'.16em', textTransform:'uppercase', color:'var(--muted)', textDecoration:'none' }}>
              {lang==='en'?'← Back to Journal':'← 返回日记'}
            </Link>
            <Link href="/inquiry" className="btn btn--primary" style={{ fontSize:9.5 }}>
              {lang==='en'?'Plan a Journey':'规划旅程'}
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}

export async function getStaticPaths() {
  return { paths: getAllJournalSlugs().map(slug=>({params:{slug}})), fallback: false };
}
export async function getStaticProps({ params }) {
  const entry = getJournalEntryBySlug(params.slug);
  if (!entry) return { notFound: true };
  return { props: { entry } };
}
