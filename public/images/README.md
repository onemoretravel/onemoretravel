# ONE MORE TRAVEL — Image Assets

All images currently load from Unsplash CDN as temporary placeholders.
The image registry is in `lib/images.js`. Every entry has `status: "cdn-placeholder"`.

## Folder Structure

```
/public/images/
  home/           Homepage hero, philosophy section
  destinations/   Italy, Japan, Maldives, Patagonia etc.
  hotels/         Aman, Four Seasons, Rosewood, Six Senses etc.
  lodges/         Singita, andBeyond, Angama, Wilderness etc.
  villas/         Samujana, Nihi Sumba, Lake Como villas etc.
  wellness/       Clinique La Prairie, Lanserhof, SHA etc.
  journeys/       Italy Summer, Japan Winter, Antarctica etc.
  experiences/    Rail, Private Jet, Expedition, Safari etc.
  travel-styles/  School Holidays, Safari, Slow Luxury etc.
```

## How to Replace an Image

1. Add file: e.g. `/public/images/destinations/patagonia.jpg`
2. Open `lib/images.js`, find entry `'dest-patagonia'`
3. Add `url: '/images/destinations/patagonia.jpg'`
4. Update `pic()` to check `entry.url` first (one-line change, commented in images.js)
5. Change `status: 'cdn-placeholder'` → `status: 'approved'`

## Standards

- Minimum 2000px wide for heroes, 1200px for cards
- JPG or WebP, licensed for commercial use
- No watermarks, no credit overlays
