export default function Label({ children, light = false }) {
  return (
    <div className={`label-row${light ? ' label-row--light' : ''}`}>
      <div className="label-line" />
      <span className="label-text">{children}</span>
    </div>
  );
}
