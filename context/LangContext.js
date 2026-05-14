import { createContext, useContext, useState, useEffect } from 'react';

const LangContext = createContext({ lang: 'en', setLang: () => {} });

export function LangProvider({ children }) {
  const [lang, setLang] = useState('en');

  // Set <html lang="..."> so the :lang(zh) CSS selectors fire and Chinese
  // fonts apply correctly. Also persist user choice between visits.
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const saved = window.localStorage.getItem('omt_lang');
    if (saved === 'en' || saved === 'zh') setLang(saved);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    document.documentElement.setAttribute('lang', lang === 'zh' ? 'zh' : 'en');
    try { window.localStorage.setItem('omt_lang', lang); } catch (e) { /* ignore */ }
  }, [lang]);

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}

// Pick the right language value from a { en, zh } object
export function t(obj, lang) {
  if (!obj) return '';
  if (typeof obj === 'string') return obj;
  return obj[lang] ?? obj.en ?? '';
}
