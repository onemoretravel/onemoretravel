import Link from 'next/link';
import { t } from '../context/LangContext';
import { pic, imgAlt } from '../lib/images';
import SafeImg from './SafeImg';

export default function DestinationCard({ dest, lang, href, style = {} }) {
  const imgKey = dest.imgKey;
  const src = imgKey ? pic(imgKey, 600) : pic(dest.imgId || 'hero-main', 600);
  const alt = imgKey ? imgAlt(imgKey) : (t(dest.title||dest.name, lang) || 'ONE MORE TRAVEL');
  return (
    <Link href={href || `/destinations/${dest.slug}`} className="overlay-card" style={{ aspectRatio:'3/4', display:'block', ...style }}>
      <SafeImg className="overlay-card__img" src={src} alt={alt} />
      <div className="overlay-card__base" /><div className="overlay-card__grad" />
      <div className="overlay-card__content">
        <div className="overlay-card__title">{t(dest.title||dest.name, lang)}</div>
        {dest.tagline && <div className="overlay-card__sub">{t(dest.tagline, lang)}</div>}
        {dest.sub && !dest.tagline && <div className="overlay-card__sub">{dest.sub}</div>}
      </div>
    </Link>
  );
}
