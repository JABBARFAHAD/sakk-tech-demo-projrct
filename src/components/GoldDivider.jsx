/** Thin decorative divider with gold fade edges */
export default function GoldDivider() {
  return (
    <div
      className="w-full h-px"
      style={{ background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.25), transparent)' }}
      aria-hidden="true"
    />
  )
}
