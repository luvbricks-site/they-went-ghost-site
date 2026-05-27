export default function VisualTexture() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 `z-1` overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(168,162,158,0.12),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(120,113,108,0.08),transparent_30%)]" />
      <div className="twg-noise absolute inset-0 opacity-[0.09]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-size-[64px_64px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.52)_82%)]" />
    </div>
  );
}