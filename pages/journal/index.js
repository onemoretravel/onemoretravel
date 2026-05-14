import Head from 'next/head';
import Link from 'next/link';
import { useState, useMemo } from 'react';
import { useLang, t } from '../../context/LangContext';
import { JOURNAL_ENTRIES, JOURNAL_CATEGORIES } from '../../lib/journal';
import Label from '../../components/Label';
import PageHero from '../../components/PageHero';
import JournalCard from '../../components/JournalCard';

export default function JournalIndex() {
  const { lang } = useLang();
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredEntries = useMemo(() => {
    if (activeCategory === 'all') return JOURNAL_ENTRIES;
    return JOURNAL_ENTRIES.filter(e => e.category === activeCategory);
  }, [activeCategory]);

  // Sort by date desc
  const sortedEntries = [...filteredEntries].sort((a, b) => (b.date || '').localeCompare(a.date || ''));

  return (
    <>
      <Head><title>Journal — ONE MORE TRAVEL</title></Head>
      <PageHero imgKey="hero-journal" title={lang === 'en' ? 'Journal' : '旅行日记'}
        sub={lang === 'en' ? 'Notes on travel, hotels, destinations and how to do it well.' : '关于旅行、酒店、目的地与如何真正旅行好的笔记。'}
        labelText={lang === 'en' ? 'ONE MORE TRAVEL' : '玩陌旅行'} />

      {/* Category Filter */}
      <section className="section section--ivory" style={{ paddingBottom: 0 }}>
        <div className="container">
          <div style={{ display:'flex', gap:8, flexWrap:'wrap', paddingBottom:48, justifyContent:'center' }}>
            <button
              onClick={() => setActiveCategory('all')}
              style={{
                fontFamily:'var(--font-sans)', fontSize:9.5, letterSpacing:'.18em', textTransform:'uppercase',
                padding:'8px 18px', cursor:'pointer', transition:'all .2s',
                background: activeCategory === 'all' ? 'var(--charcoal)' : 'transparent',
                color: activeCategory === 'all' ? '#fff' : 'var(--muted)',
                border: activeCategory === 'all' ? '1px solid var(--charcoal)' : '1px solid var(--stone)',
              }}
            >
              {lang === 'en' ? `All (${JOURNAL_ENTRIES.length})` : `全部 (${JOURNAL_ENTRIES.length})`}
            </button>
            {JOURNAL_CATEGORIES.map(cat => {
              const count = JOURNAL_ENTRIES.filter(e => e.category === cat.slug).length;
              if (count === 0) return null;
              const active = activeCategory === cat.slug;
              return (
                <button
                  key={cat.slug}
                  onClick={() => setActiveCategory(cat.slug)}
                  style={{
                    fontFamily:'var(--font-sans)', fontSize:9.5, letterSpacing:'.18em', textTransform:'uppercase',
                    padding:'8px 18px', cursor:'pointer', transition:'all .2s',
                    background: active ? 'var(--charcoal)' : 'transparent',
                    color: active ? '#fff' : 'var(--muted)',
                    border: active ? '1px solid var(--charcoal)' : '1px solid var(--stone)',
                  }}
                >
                  {t(cat.label, lang)} ({count})
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Articles grid */}
      <section className="section section--ivory" style={{ paddingTop:8 }}>
        <div className="container">
          {sortedEntries.length === 0 ? (
            <p style={{ textAlign:'center', fontFamily:'var(--font-sans)', color:'var(--muted)', padding:'40px 0' }}>
              {lang === 'en' ? 'No articles in this category yet.' : '此类别暂无文章。'}
            </p>
          ) : (
            <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:3 }}>
              {sortedEntries.map(entry => (
                <JournalCard key={entry.slug} entry={entry} lang={lang} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
