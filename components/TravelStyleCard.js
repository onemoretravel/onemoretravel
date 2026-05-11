import Link from 'next/link';
import { t } from '../context/LangContext';
import { pic, imgAlt } from '../lib/images';
import SafeImg from './SafeImg';

export default function TravelStyleCard({ style, lang }) {
  const src = style.imgKey ? pic(style.imgKey, 600) : pic(style.imgId || 'style-family', 600);
  const alt = style.imgKey ? imgAlt(style.imgKey) : t(style.title, lang);
  return (
    <Link href={`/travel-styles/${style.slug}`} className="overlay-card" style={{ aspectRatio:'3/4', display:'block' }}>
      <SafeImg className="overlay-card__img" src={src} alt={alt} />
      <div className="overlay-card__base" /><div className="overlay-card__grad" />
      <div className="overlay-card__content">
        <div className="overlay-card__title" style={{ fontSize:20 }}>{t(style.title, lang)}</div>
        {style.tagline && <div className="overlay-card__sub">{t(style.tagline, lang)}</div>}
      </div>
    </Link>
  );
}
