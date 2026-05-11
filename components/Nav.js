import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useLang, t } from '../context/LangContext';
import { CONTENT } from '../lib/content';

const NAV = CONTENT.nav;

// Abbreviated labels for desktop (9 items need to fit)
const SHORT = {
  en: ['Home','Destinations','Hotels','Travel Styles','Experiences','Journeys','About','Journal','Enquire'],
  zh: ['首页','目的地','酒店','旅行方式','非凡体验','行程','关于','日记','咨询'],
};

export default function Nav() {
  const router = useRouter();
  const { lang, setLang } = useLang();
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [router.pathname]);

  function openMenu()  { setMenuOpen(true);  document.body.style.overflow = 'hidden'; }
  function closeMenu() { setMenuOpen(false); document.body.style.overflow = ''; }

  const shortLabels  = SHORT[lang === 'en' ? 'en' : 'zh'];
  const fullLabels   = NAV[lang === 'en' ? 'en' : 'zh'];

  function isActive(href) {
    if (href === '/') return router.pathname === '/';
    return router.pathname.startsWith(href);
  }

  return (
    <>
      <nav className={`nav${scrolled ? ' nav--scrolled' : ''}`} role="navigation">
        {/* Logo */}
        <Link href="/" className="nav__logo" aria-label="ONE MORE TRAVEL">
          <div className="nav__logo-main">ONE MORE TRAVEL</div>
          <div className="nav__logo-sub">玩陌旅行</div>
        </Link>

        {/* Desktop links */}
        <div className="nav__links">
          {NAV.pages.map((href, i) => (
            <Link
              key={href}
              href={href}
              className={`nav__link${isActive(href) ? ' nav__link--active' : ''}`}
            >
              {shortLabels[i]}
            </Link>
          ))}
          <button
            className="nav__lang"
            onClick={() => setLang(lang === 'en' ? 'zh' : 'en')}
            aria-label="Switch language"
          >
            {t(NAV.langBtn, lang)}
          </button>
        </div>

        {/* Hamburger */}
        <button className="nav__menu-btn" onClick={openMenu} aria-label="Open menu">
          <span style={{ display:'block', width:22, height:1.5, background:'#fff', marginBottom:5 }} />
          <span style={{ display:'block', width:16, height:1.5, background:'rgba(255,255,255,.65)' }} />
        </button>
      </nav>

      {/* Mobile overlay */}
      <div className={`mobile-menu${menuOpen ? ' mobile-menu--open' : ''}`} role="dialog" aria-modal="true">
        <button className="mobile-menu__close" onClick={closeMenu} aria-label="Close">✕</button>
        <div style={{ overflowY: 'auto', maxHeight: '90vh', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, paddingBottom: 24 }}>
          {NAV.pages.map((href, i) => (
            <Link
              key={href}
              href={href}
              className="mobile-menu__link"
              onClick={closeMenu}
            >
              {fullLabels[i]}
            </Link>
          ))}
          <div className="mobile-menu__divider" />
          <button
            className="mobile-menu__lang"
            onClick={() => { setLang(lang === 'en' ? 'zh' : 'en'); closeMenu(); }}
          >
            {t(NAV.langBtn, lang)}
          </button>
        </div>
      </div>
    </>
  );
}
