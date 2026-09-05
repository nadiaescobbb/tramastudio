import {
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
  Img,
} from "remotion";

export const Scene3Showcase = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Total duration: 330 frames (0-165 FAMVAR, 165-330 CUORE)
  const fadeOut = interpolate(frame, [310, 330], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // FAMVAR Springs
  const famvarSpring = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 85 },
  });
  const famvarOpacity = interpolate(frame, [0, 20, 145, 165], [0, 1, 1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // CUORE Springs
  const cuoreSpring = spring({
    frame: frame - 165,
    fps,
    config: { damping: 12, stiffness: 85 },
  });
  const cuoreOpacity = interpolate(frame, [165, 185, 310, 330], [0, 1, 1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Image pan & scale zoom
  const famvarImgScale = interpolate(frame, [0, 165], [1, 1.08], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const cuoreImgScale = interpolate(frame, [165, 330], [1, 1.08], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{ opacity: fadeOut }}
      className="w-full h-full bg-[#0B0A0A] text-white flex flex-col items-center justify-between p-16 font-sans overflow-hidden select-none relative"
    >
      {/* Background Animated Grid Texture */}
      <div
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
        className="absolute inset-0 pointer-events-none opacity-50"
      />

      {/* Ambient Lights */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full bg-[hsl(15,65%,45%)]/20 blur-[150px] pointer-events-none" />

      {/* Top Header Bar */}
      <div className="w-full max-w-6xl flex items-center justify-between z-10">
        <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-gray-400">
          <span className="w-2.5 h-2.5 rounded-full bg-[hsl(15,65%,45%)] shadow-[0_0_12px_hsl(15,65%,45%)]" />
          Casos Reales en Producción
        </div>
        <div className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-gray-300">
          Proyectos Reales
        </div>
      </div>

      {/* FAMVAR SHOWCASE CARD (0s - 5.5s) */}
      {frame < 170 && (
        <div
          style={{
            opacity: famvarOpacity,
            transform: `scale(${0.92 + famvarSpring * 0.08}) translateY(${(1 - famvarSpring) * 30}px)`,
          }}
          className="w-full max-w-5xl bg-[#141312] border border-white/15 rounded-3xl p-6 shadow-2xl z-10 backdrop-blur-xl relative space-y-4 my-auto"
        >
          {/* Browser Chrome Bar */}
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <span className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <div className="bg-[#090808] px-6 py-1.5 rounded-full border border-white/10 text-xs font-mono text-gray-300 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              famvar.com.ar — Catálogo Digital
            </div>
            <span className="font-mono text-xs text-[hsl(15,65%,55%)] font-bold">
              PASO 01
            </span>
          </div>

          {/* Browser Content */}
          <div className="overflow-hidden rounded-2xl border border-white/10 aspect-[21/9] relative shadow-2xl">
            <Img
              src="/famvarhome.avif"
              alt="FAMVAR E-Commerce"
              style={{ transform: `scale(${famvarImgScale})` }}
              className="w-full h-full object-cover transition-transform"
            />
            {/* Overlay Feature Badge */}
            <div className="absolute bottom-6 left-6 right-6 bg-[#0E0D0C]/85 backdrop-blur-md p-5 rounded-xl border border-white/15 flex items-center justify-between shadow-2xl">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-[hsl(15,65%,55%)] block mb-1">
                  Catálogo Digital & E-Commerce
                </span>
                <h4 className="font-heading text-2xl font-normal text-white">
                  FAMVAR — Tecnología & Bazar Importado
                </h4>
              </div>
              <div className="px-5 py-2 rounded-full bg-white text-black font-mono text-xs font-bold shadow-lg">
                Consulta Directa por WhatsApp ↗
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CUORE SHOWCASE CARD (5.5s - 11s) */}
      {frame >= 160 && (
        <div
          style={{
            opacity: cuoreOpacity,
            transform: `scale(${0.92 + cuoreSpring * 0.08}) translateY(${(1 - cuoreSpring) * 30}px)`,
          }}
          className="w-full max-w-5xl bg-[#141312] border border-white/15 rounded-3xl p-6 shadow-2xl z-10 backdrop-blur-xl relative space-y-4 my-auto"
        >
          {/* Browser Chrome Bar */}
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <span className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <div className="bg-[#090808] px-6 py-1.5 rounded-full border border-white/10 text-xs font-mono text-gray-300 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              joyeriacuore.com — Catálogo & Taller
            </div>
            <span className="font-mono text-xs text-[hsl(15,65%,55%)] font-bold">
              PASO 02
            </span>
          </div>

          {/* Browser Content */}
          <div className="overflow-hidden rounded-2xl border border-white/10 aspect-[21/9] relative shadow-2xl">
            <Img
              src="/cuore-home.avif"
              alt="CUORE Joyería y Relojería"
              style={{ transform: `scale(${cuoreImgScale})` }}
              className="w-full h-full object-cover transition-transform"
            />
            {/* Overlay Feature Badge */}
            <div className="absolute bottom-6 left-6 right-6 bg-[#0E0D0C]/85 backdrop-blur-md p-5 rounded-xl border border-white/15 flex items-center justify-between shadow-2xl">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-[hsl(15,65%,55%)] block mb-1">
                  Catálogo & Taller Artesanal
                </span>
                <h4 className="font-heading text-2xl font-normal text-white">
                  CUORE — 40 Años de Joyería & Relojería
                </h4>
              </div>
              <div className="px-5 py-2 rounded-full bg-white text-black font-mono text-xs font-bold shadow-lg">
                Consulta de Piezas ↗
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
