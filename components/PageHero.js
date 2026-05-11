import { pic, imgAlt } from '../lib/images';
import Label from './Label';
import SafeImg from './SafeImg';

export default function PageHero({ imgId, imgKey, title, sub, labelText, imgPosition = 'center 40%' }) {
  const src = imgKey ? pic(imgKey) : (imgId ? pic(imgId) : pic('hero-main'));
  const alt = imgKey ? imgAlt(imgKey) : (title || 'ONE MORE TRAVEL');

  return (
    <div className="hero hero--short">
      <SafeImg
        className="hero__img"
        src={src}
        alt={alt}
        loading="eager"
        style={{ objectPosition: imgPosition }}
      />
      <div className="hero__overlay--inner" />
      <div className="hero__content">
        {labelText && <Label light>{labelText}</Label>}
        <h1 style={{ fontFamily:'var(--font-serif)', fontWeight:400, lineHeight:1.1, fontSize:'clamp(32px,5vw,64px)', color:'#fff', marginBottom:16, whiteSpace:'pre-line' }}>
          {title}
        </h1>
        {sub && (
          <p style={{ fontFamily:'var(--font-sans)', fontSize:14, color:'rgba(255,255,255,0.8)', maxWidth:520, lineHeight:1.8, fontWeight:300 }}>
            {sub}
          </p>
        )}
      </div>
    </div>
  );
}
