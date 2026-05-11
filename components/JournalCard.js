import Link from 'next/link';
import { t } from '../context/LangContext';
import { pic, imgAlt } from '../lib/images';
import { JOURNAL_CATEGORIES } from '../lib/journal';
import SafeImg from './SafeImg';

export default function JournalCard({ entry, lang }) {
  const cat = JOURNAL_CATEGORIES.find(c => c.slug === entry.category);
  const src = entry.imgKey ? pic(entry.imgKey, 800) : pic(entry.imgId || 'hero-journal', 800);
  const alt = entry.imgKey ? imgAlt(entry.imgKey) : t(entry.title, lang);
  return (
    <Link href={`/journal/${entry.slug}`} style={{ display:'block', textDecoration:'none', background:'#fff' }}>
      <div className="img-wrap" style={{ overflow:'hidden' }}>
        <SafeImg src={src} alt={alt} style={{ width:'100%', aspectRatio:'16/9', objectFit:'cover', display:'block', transition:'transform .75s ease' }} />
      </div>
      <div style={{ padding:'22px 24px 28px' }}>
        <div style={{ display:'flex', gap:12, alignItems:'center', marginBottom:12 }}>
          {cat && <span style={{ fontFamily:'var(--font-sans)', fontSize:9, letterSpacing:'.18em', textTransform:'uppercase', color:'var(--gold)', fontWeight:600 }}>{t(cat.label, lang)}</span>}
          <span style={{ color:'rgba(0,0,0,.18)', fontSize:10 }}>·</span>
          <span style={{ fontFamily:'var(--font-sans)', fontSize:10, color:'var(--muted)' }}>{t(entry.readTime, lang)}</span>
        </div>
        <h3 style={{ fontFamily:'var(--font-serif)', fontSize:22, color:'var(--charcoal)', lineHeight:1.25, marginBottom:10, fontWeight:400 }}>{t(entry.title, lang)}</h3>
        <p style={{ fontFamily:'var(--font-sans)', fontSize:13, color:'var(--brown)', lineHeight:1.8, fontWeight:300 }}>{t(entry.excerpt, lang)}</p>
        <span style={{ fontFamily:'var(--font-sans)', fontSize:9.5, letterSpacing:'.16em', textTransform:'uppercase', color:'var(--gold)', marginTop:14, display:'block' }}>
          {lang==='en'?'Read →':'阅读 →'}
        </span>
      </div>
    </Link>
  );
}
