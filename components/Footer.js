import Link from 'next/link';
import { useLang, t } from '../context/LangContext';
import { CONTENT } from '../lib/content';

const { nav: NAV, footer: F } = CONTENT;

const COL1 = [0,1,2,3]; // Home Dest Hotels Styles
const COL2 = [4,5,6,7,8]; // Exp Journeys About Journal Enquire

export default function Footer() {
  const { lang, setLang } = useLang();
  const labels = NAV[lang === 'en' ? 'en' : 'zh'];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          {/* Brand */}
          <div>
            <div className="footer__brand">ONE MORE TRAVEL</div>
            <div className="footer__brand-sub">玩陌旅行</div>
            <p style={{ fontFamily:'var(--font-sans)', fontSize:13, color:'rgba(255,255,255,.46)', lineHeight:1.88, fontWeight:300, maxWidth:280 }}>
              {t(F.tagline, lang)}
            </p>
            <div style={{ display:'flex', gap:10, marginTop:18, flexWrap:'wrap' }}>
              {t(F.cities, lang).map((c,i,arr)=>(
                <span key={c} style={{ display:'flex', alignItems:'center', gap:10 }}>
                  <span style={{ fontFamily:'var(--font-sans)', fontSize:9.5, letterSpacing:'.18em', color:'rgba(255,255,255,.35)', textTransform:'uppercase' }}>{c}</span>
                  {i<arr.length-1 && <span style={{ color:'rgba(255,255,255,.18)' }}>·</span>}
                </span>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div>
            <div className="footer__col-label">{t(F.cols.explore, lang)}</div>
            {COL1.map(i => (
              <Link key={i} href={NAV.pages[i]} className="footer__link">{labels[i]}</Link>
            ))}
          </div>

          {/* More */}
          <div>
            <div className="footer__col-label">{t(F.cols.travel, lang)}</div>
            {COL2.map(i => (
              <Link key={i} href={NAV.pages[i]} className="footer__link">{labels[i]}</Link>
            ))}
          </div>

          {/* Contact */}
          <div>
            <div className="footer__col-label">{t(F.cols.contact, lang)}</div>
            <div className="footer__info">
              omtravel@onemoretravel.com<br/>
              bobby.yu@onemoretravel.com<br/>
              WeChat: wanmotravel<br/>
              www.onemoretravel.com
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copy">{t(F.copy, lang)}</p>
          <button
            onClick={() => setLang(lang==='en'?'zh':'en')}
            style={{ fontFamily:'var(--font-sans)', fontSize:9.5, letterSpacing:'.12em', color:'rgba(255,255,255,.42)', border:'1px solid rgba(255,255,255,.18)', padding:'5px 14px', background:'none', cursor:'pointer', transition:'all .2s' }}
          >
            {t(NAV.langBtn, lang)}
          </button>
        </div>
      </div>
    </footer>
  );
}
