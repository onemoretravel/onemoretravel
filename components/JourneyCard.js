import Link from 'next/link';
import { t } from '../context/LangContext';
import { pic, imgAlt } from '../lib/images';
import SafeImg from './SafeImg';

export default function JourneyCard({ journey, lang, variant = 'portrait' }) {
  const src = journey.imgKey ? pic(journey.imgKey, 600) : pic(journey.imgId || 'hero-journeys', 600);
  const alt = journey.imgKey ? imgAlt(journey.imgKey) : t(journey.title, lang);

  if (variant === 'landscape') {
    return (
      <Link href={`/journeys/${journey.slug}`} style={{ display:'flex', background:'#fff', textDecoration:'none', overflow:'hidden' }}>
        <div style={{ width:'42%', flexShrink:0, overflow:'hidden' }} className="img-wrap">
          <SafeImg src={src} alt={alt} style={{ width:'100%', height:'100%', objectFit:'cover', display:'block' }} />
        </div>
        <div style={{ padding:'28px 28px', display:'flex', flexDirection:'column', justifyContent:'center' }}>
          <div style={{ fontFamily:'var(--font-sans)', fontSize:9.5, color:'var(--gold)', letterSpacing:'.14em', textTransform:'uppercase', marginBottom:10 }}>
            {t(journey.region, lang)}
          </div>
          <div style={{ fontFamily:'var(--font-serif)', fontSize:20, color:'var(--charcoal)', lineHeight:1.25, marginBottom:10 }}>{t(journey.title, lang)}</div>
          <p style={{ fontFamily:'var(--font-sans)', fontSize:12, color:'var(--muted)', lineHeight:1.75, fontWeight:300 }}>{t(journey.subtitle, lang)}</p>
        </div>
      </Link>
    );
  }
  return (
    <Link href={`/journeys/${journey.slug}`} className="overlay-card" style={{ aspectRatio:'3/4', display:'block' }}>
      <SafeImg className="overlay-card__img" src={src} alt={alt} />
      <div className="overlay-card__base" /><div className="overlay-card__grad" />
      <div className="overlay-card__content">
        <div style={{ fontFamily:'var(--font-sans)', fontSize:9, color:'var(--gold)', letterSpacing:'.14em', textTransform:'uppercase', marginBottom:8 }}>{t(journey.region, lang)}</div>
        <div className="overlay-card__title" style={{ fontSize:20 }}>{t(journey.title, lang)}</div>
        <div className="overlay-card__sub">{t(journey.subtitle, lang)}</div>
      </div>
    </Link>
  );
}
