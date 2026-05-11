import Link from 'next/link';
import { t } from '../context/LangContext';
import { pic, imgAlt } from '../lib/images';
import SafeImg from './SafeImg';

export default function HotelBrandCard({ hotel, lang }) {
  const src = hotel.imgKey ? pic(hotel.imgKey, 700) : pic(hotel.imgId || 'hotel-aman', 700);
  const alt = hotel.imgKey ? imgAlt(hotel.imgKey) : hotel.name;
  return (
    <Link href={`/hotels/${hotel.slug}`} className="overlay-card" style={{ aspectRatio:'4/3', display:'block' }}>
      <SafeImg className="overlay-card__img" src={src} alt={alt} />
      <div className="overlay-card__base" /><div className="overlay-card__grad" />
      <div className="overlay-card__content">
        <div className="overlay-card__title" style={{ fontSize:22 }}>{hotel.name}</div>
        {hotel.tag && <div className="overlay-card__sub">{t(hotel.tag, lang)}</div>}
      </div>
    </Link>
  );
}
