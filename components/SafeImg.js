// SafeImg — drop-in <img> replacement with a branded fallback.
// If the src URL 404s or fails, shows the ONE MORE TRAVEL placeholder
// instead of a broken image icon. Eliminates ALL broken images site-wide.

const FALLBACK_SVG = `data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='800' viewBox='0 0 1200 800'%3E%3Crect width='1200' height='800' fill='%231B2D24'/%3E%3Cline x1='0' y1='0' x2='1200' y2='800' stroke='%23243d30' stroke-width='1'/%3E%3Cline x1='1200' y1='0' x2='0' y2='800' stroke='%23243d30' stroke-width='1'/%3E%3Ctext x='600' y='390' text-anchor='middle' dominant-baseline='middle' font-family='Georgia%2C serif' font-size='22' letter-spacing='6' fill='%23C4A35A'%3EONE MORE TRAVEL%3C%2Ftext%3E%3Ctext x='600' y='424' text-anchor='middle' dominant-baseline='middle' font-family='sans-serif' font-size='11' letter-spacing='3' fill='%23C4A35A' opacity='0.6'%3E%E7%8E%A9%E9%99%8C%E6%97%85%E8%A1%8C%3C%2Ftext%3E%3C%2Fsvg%3E`;

export default function SafeImg({ src, alt, className, style, onLoad, ...rest }) {
  function handleError(e) {
    e.currentTarget.onerror = null; // prevent infinite loop
    e.currentTarget.src = FALLBACK_SVG;
  }

  return (
    <img
      src={src || FALLBACK_SVG}
      alt={alt || 'ONE MORE TRAVEL'}
      className={className}
      style={style}
      onError={handleError}
      onLoad={onLoad}
      loading="lazy"
      {...rest}
    />
  );
}
