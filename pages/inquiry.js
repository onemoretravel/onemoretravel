import Head from 'next/head';
import { useLang, t } from '../context/LangContext';
import { CONTENT, IMAGES } from '../lib/content';
import Label from '../components/Label';
import PageHero from '../components/PageHero';
import InquiryForm from '../components/InquiryForm';

const C = CONTENT.inquiry;

export default function Inquiry() {
  const { lang } = useLang();
  return (
    <>
      <Head><title>Tailor-Made Inquiry — ONE MORE TRAVEL</title></Head>
      <PageHero imgId={IMAGES.heroInquiry} title={t(C.heroTitle,lang)} sub={t(C.heroSub,lang)} labelText={lang==='en'?'ONE MORE TRAVEL':'玩陌旅行'} />

      <section className="section section--ivory">
        <div className="container">
          <div className="contact-grid" style={{ display:'grid', gridTemplateColumns:'1fr 1.6fr', gap:80 }}>
            <div>
              <Label>{t(C.introLabel, lang)}</Label>
              <h2 className="section-h" style={{ fontSize:'clamp(22px,2.8vw,36px)', marginBottom:32, whiteSpace:'pre-line' }}>
                {t(C.introTitle, lang)}
              </h2>
              <p className="body-text">{t(C.introBody, lang)}</p>

              <div style={{ borderTop:'1px solid var(--stone)', paddingTop:28, marginTop:36, display:'flex', flexDirection:'column', gap:22 }}>
                {[
                  ['Email','omtravel@onemoretravel.com'],
                  ['Email','bobby.yu@onemoretravel.com'],
                  ['WeChat','wanmotravel'],
                ].map(([l,v])=>(
                  <div key={v}>
                    <div className="contact-info-label">{l}</div>
                    <p className="contact-info-value">{v}</p>
                  </div>
                ))}
              </div>

              <div className="brand-stamp">
                <div className="brand-stamp__main">ONE MORE TRAVEL</div>
                <div className="brand-stamp__sub">玩陌旅行</div>
                <div className="brand-stamp__divider" />
                <div className="brand-stamp__cities">{lang==='en'?'CHENGDU · MELBOURNE':'成都 · 墨尔本'}</div>
              </div>
            </div>
            <div>
              <InquiryForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
