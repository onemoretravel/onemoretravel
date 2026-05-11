import Link from 'next/link';
import { t } from '../context/LangContext';
import { pic, imgAlt } from '../lib/images';
import SafeImg from './SafeImg';

export default function ExperienceCard({ exp, lang }) {
  const src = exp.imgKey ? pic(exp.imgKey, 700) : pic(exp.imgId || 'hero-experiences', 700);
  const alt = exp.imgKey ? imgAlt(exp.imgKey) : t(exp.title, lang);
  return (
    <Link href={`/experiences/${exp.slug}`} className="overlay-card" style={{ aspectRatio:'4/3', display:'block' }}>
      <SafeImg className="overlay-card__img" src={src} alt={alt} />
      <div className="overlay-card__base" /><div className="overlay-card__grad" />
      <div className="overlay-card__content">
        <div className="overlay-card__title" style={{ fontSize:20 }}>{t(exp.title, lang)}</div>
        {exp.tagline && <div className="overlay-card__sub">{t(exp.tagline, lang)}</div>}
      </div>
    </Link>
  );
}
