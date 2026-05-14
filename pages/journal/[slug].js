import Head from 'next/head';
import Link from 'next/link';
import { useLang, t } from '../../context/LangContext';
import { pic, imgAlt } from '../../lib/images';
import {
  JOURNAL_ENTRIES,
  JOURNAL_CATEGORIES,
  getJournalEntryBySlug,
  getAllJournalSlugs,
} from '../../lib/journal';
import SafeImg from '../../components/SafeImg';

export default function JournalEntryPage({ entry }) {
  const { lang } = useLang();
  if (!entry) return null;
  const e = entry;
  const cat = JOURNAL_CATEGORIES.find((c) => c.slug === e.category);
  const body = t(e.body, lang) || '';

  // Render a single paragraph with **bold** support
  function renderInline(text) {
    const parts = text.split(/\*\*(.*?)\*\*/g);
    return parts.map((p, i) =>
      i % 2 === 1 ? (
        <strong key={i} style={{ fontWeight: 600, color: 'var(--charcoal)' }}>{p}</strong>
      ) : (
        p
      )
    );
  }

  // Split body into paragraphs. A paragraph that begins with **Word.** becomes a small section heading.
  const paragraphs = body.split('\n\n').filter(Boolean);

  return (
    <>
      <Head>
        <title>{t(e.title, lang)} — ONE MORE TRAVEL</title>
        <meta name="description" content={t(e.excerpt, lang)} />
      </Head>

      {/* Hero image — taller and quieter */}
      <div
        style={{
          height: '58vh',
          minHeight: 380,
          maxHeight: 620,
          position: 'relative',
          overflow: 'hidden',
          marginTop: 'var(--nav-height)',
        }}
      >
        <SafeImg
          src={pic(e.imgKey, 1600)}
          alt={imgAlt(e.imgKey) || t(e.title, lang)}
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(to bottom, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0) 35%, rgba(0,0,0,0) 65%, rgba(0,0,0,0.42) 100%)',
          }}
        />
      </div>

      <article style={{ background: '#fff' }} className="article-body">
        <div className="article-container">
          {/* Meta line */}
          <div className="article-meta">
            {cat && <span className="article-cat">{t(cat.label, lang)}</span>}
            <span className="article-dot">·</span>
            <span className="article-read">{t(e.readTime, lang)}</span>
            {e.date && (
              <>
                <span className="article-dot">·</span>
                <span className="article-date">
                  {new Date(e.date).toLocaleDateString(lang === 'zh' ? 'zh-CN' : 'en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </span>
              </>
            )}
          </div>

          <h1 className="article-title">{t(e.title, lang)}</h1>

          {/* Excerpt as a refined lead */}
          <p className="article-lead">{t(e.excerpt, lang)}</p>

          {/* Body paragraphs */}
          <div className="article-prose">
            {paragraphs.map((para, i) => {
              // Detect a heading-style paragraph: starts with **Heading.** or **Heading?**
              const headingMatch = para.match(/^\*\*([^*]+?)\*\*\s*(.*)$/s);
              if (headingMatch && headingMatch[1].length < 60) {
                const heading = headingMatch[1];
                const rest = headingMatch[2];
                return (
                  <div key={i} className="article-section">
                    <h2 className="article-h2">{heading}</h2>
                    {rest && <p className="article-p">{renderInline(rest)}</p>}
                  </div>
                );
              }
              return (
                <p key={i} className="article-p">
                  {renderInline(para)}
                </p>
              );
            })}
          </div>

          {/* CTA block */}
          <div className="article-cta">
            <div className="article-cta-label">
              {lang === 'en' ? 'PLANNING SOMETHING SIMILAR?' : '在考虑类似的旅程？'}
            </div>
            <h3 className="article-cta-h">
              {lang === 'en'
                ? 'Let us help you think through it.'
                : '让我们与您一同思考。'}
            </h3>
            <p className="article-cta-p">
              {lang === 'en'
                ? 'We work through these conversations carefully, one journey at a time.'
                : '我们以一次一段旅程的节奏，认真地走过每一次对话。'}
            </p>
            <Link href="/inquiry" className="btn btn--primary article-cta-btn">
              {lang === 'en' ? 'Start Planning' : '与我们联系'}
            </Link>
          </div>

          {/* Back link */}
          <div className="article-back">
            <Link href="/journal" className="article-back-link">
              {lang === 'en' ? '← Back to Journal' : '← 返回旅行日记'}
            </Link>
          </div>
        </div>
      </article>

      {/* Scoped CSS for article typography — tuned for both English and Chinese */}
      <style jsx>{`
        .article-body {
          padding: 64px 0 96px;
        }
        .article-container {
          max-width: 680px;
          margin: 0 auto;
          padding: 0 28px;
        }
        .article-meta {
          display: flex;
          gap: 14px;
          align-items: center;
          flex-wrap: wrap;
          margin-bottom: 30px;
        }
        .article-cat {
          font-family: var(--font-sans);
          font-size: 9.5px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--gold);
          font-weight: 600;
        }
        .article-dot {
          color: rgba(0, 0, 0, 0.2);
        }
        .article-read,
        .article-date {
          font-family: var(--font-sans);
          font-size: 11px;
          letter-spacing: 0.08em;
          color: var(--muted);
        }
        .article-title {
          font-family: var(--font-serif);
          font-weight: 400;
          line-height: 1.16;
          color: var(--charcoal);
          margin-bottom: 36px;
          font-size: clamp(28px, 3.6vw, 42px);
          letter-spacing: -0.005em;
        }
        :global([lang='zh']) .article-title {
          font-size: clamp(24px, 3.2vw, 34px);
          line-height: 1.32;
          letter-spacing: 0.02em;
          font-weight: 500;
        }
        .article-lead {
          font-family: var(--font-sans);
          font-size: 16.5px;
          color: var(--brown);
          line-height: 1.78;
          font-weight: 300;
          font-style: italic;
          padding: 0 0 0 22px;
          border-left: 2px solid var(--gold);
          margin-bottom: 48px;
        }
        :global([lang='zh']) .article-lead {
          font-size: 15.5px;
          line-height: 1.92;
          font-style: normal;
          letter-spacing: 0.01em;
        }
        .article-prose {
          margin-bottom: 56px;
        }
        .article-section {
          margin-top: 36px;
        }
        .article-section:first-child {
          margin-top: 0;
        }
        .article-h2 {
          font-family: var(--font-serif);
          font-weight: 500;
          font-size: 18px;
          letter-spacing: 0;
          color: var(--charcoal);
          margin-bottom: 14px;
          line-height: 1.32;
        }
        :global([lang='zh']) .article-h2 {
          font-size: 17px;
          letter-spacing: 0.02em;
          font-weight: 600;
        }
        .article-p {
          font-family: var(--font-sans);
          font-size: 15.5px;
          color: var(--brown);
          line-height: 1.92;
          font-weight: 300;
          margin-bottom: 20px;
        }
        :global([lang='zh']) .article-p {
          font-size: 15px;
          line-height: 1.98;
          letter-spacing: 0.015em;
        }
        .article-cta {
          margin-top: 80px;
          padding: 48px 32px;
          background: var(--ivory);
          text-align: center;
          border-top: 1px solid var(--stone);
          border-bottom: 1px solid var(--stone);
        }
        .article-cta-label {
          font-family: var(--font-sans);
          font-size: 9.5px;
          letter-spacing: 0.26em;
          text-transform: uppercase;
          color: var(--gold);
          font-weight: 600;
          margin-bottom: 18px;
        }
        .article-cta-h {
          font-family: var(--font-serif);
          font-weight: 400;
          font-size: clamp(22px, 2.4vw, 28px);
          color: var(--charcoal);
          line-height: 1.3;
          margin-bottom: 14px;
        }
        :global([lang='zh']) .article-cta-h {
          font-size: clamp(19px, 2.2vw, 24px);
          letter-spacing: 0.03em;
          font-weight: 500;
        }
        .article-cta-p {
          font-family: var(--font-sans);
          font-size: 13.5px;
          color: var(--brown);
          line-height: 1.78;
          font-weight: 300;
          margin-bottom: 24px;
          max-width: 460px;
          margin-left: auto;
          margin-right: auto;
        }
        :global([lang='zh']) .article-cta-p {
          line-height: 1.88;
        }
        :global(.article-cta-btn) {
          font-size: 10px !important;
        }
        .article-back {
          margin-top: 40px;
          text-align: center;
        }
        .article-back-link {
          font-family: var(--font-sans);
          font-size: 10px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--muted);
          text-decoration: none;
        }
        .article-back-link:hover {
          color: var(--charcoal);
        }

        @media (max-width: 768px) {
          .article-body {
            padding: 40px 0 64px;
          }
          .article-container {
            padding: 0 22px;
          }
          .article-title {
            font-size: clamp(24px, 6.5vw, 32px);
            margin-bottom: 26px;
          }
          :global([lang='zh']) .article-title {
            font-size: clamp(22px, 6vw, 28px);
          }
          .article-lead {
            font-size: 15px;
            padding-left: 18px;
            margin-bottom: 36px;
          }
          :global([lang='zh']) .article-lead {
            font-size: 14.5px;
          }
          .article-p {
            font-size: 15px;
            line-height: 1.88;
          }
          :global([lang='zh']) .article-p {
            font-size: 14.5px;
            line-height: 1.94;
          }
          .article-cta {
            padding: 36px 24px;
            margin-top: 56px;
          }
        }
      `}</style>
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: getAllJournalSlugs().map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const entry = getJournalEntryBySlug(params.slug);
  if (!entry) return { notFound: true };
  return { props: { entry } };
}
