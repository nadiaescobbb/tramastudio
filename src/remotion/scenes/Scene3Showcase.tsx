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

  // Total duration: 330 frames
  // Sub-phase 1: FAMVAR (Frames 0 - 165)
  // Sub-phase 2: CUORE (Frames 165 - 330)

  // Fade out at end
  const fadeOut = interpolate(frame, [310, 330], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // FAMVAR springs
  const famvarSpring = spring({
    frame,
    fps,
    config: { damping: 13, stiffness: 90 },
  });
  const famvarOpacity = interpolate(frame, [0, 20, 145, 165], [0, 1, 1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // CUORE springs
  const cuoreSpring = spring({
    frame: frame - 165,
    fps,
    config: { damping: 13, stiffness: 90 },
  });
  const cuoreOpacity = interpolate(frame, [165, 185, 310, 330], [0, 1, 1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Floating tilt angles
  const tiltAngle = Math.sin(frame * 0.05) * 2;

  return (
    <div
      style={{ opacity: fadeOut }}
      className="w-full h-full bg-[#0F0E0D] text-white flex flex-col items-center justify-center relative p-16 font-sans overflow-hidden select-none"
    >
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[hsl(15,65%,45%)]/10 blur-[130px] pointer-events-none" />

      {/* Top Header */}
      <div className="absolute top-12 left-16 flex items-center gap-4 font-mono text-xs uppercase tracking-[0.25em] text-[hsl(40,6%,60%)]">
        <span className="w-2 h-2 rounded-full bg-[hsl(15,65%,45%)]" />
        Casos Reales en Producción
      </div>

      {/* CARD 1: FAMVAR */}
      {frame < 170 && (
        <div
          style={{
            opacity: famvarOpacity,
            transform: `scale(${0.9 + famvarSpring * 0.1}) rotate(${tiltAngle}deg)`,
          }}
          className="w-full max-w-4xl bg-[#161514] border border-[#2B2927] rounded-3xl p-8 shadow-2xl space-y-6 relative overflow-hidden"
        >
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <span className="font-mono text-xs uppercase tracking-widest text-[hsl(15,65%,55%)] block">
                PASO 01 — CASO REAL
              </span>
              <h3 className="font-heading text-4xl font-normal">
                FAMVAR <span className="font-serif italic text-gray-400">E-Commerce.</span>
              </h3>
            </div>
            <span className="px-4 py-1.5 rounded-full bg-white/10 font-mono text-xs font-semibold">
              Consulta Directa por WhatsApp
            </span>
          </div>

          {/* Image Container */}
          <div className="overflow-hidden rounded-2xl border border-[#2B2927] aspect-[21/9] relative shadow-lg">
            <Img
              src="/famvarhome.avif"
              alt="FAMVAR E-Commerce"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      )}

      {/* CARD 2: CUORE */}
      {frame >= 160 && (
        <div
          style={{
            opacity: cuoreOpacity,
            transform: `scale(${0.9 + cuoreSpring * 0.1}) rotate(${-tiltAngle}deg)`,
          }}
          className="w-full max-w-4xl bg-[#161514] border border-[#2B2927] rounded-3xl p-8 shadow-2xl space-y-6 relative overflow-hidden"
        >
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <span className="font-mono text-xs uppercase tracking-widest text-[hsl(15,65%,55%)] block">
                PASO 02 — CASO REAL
              </span>
              <h3 className="font-heading text-4xl font-normal">
                CUORE <span className="font-serif italic text-gray-400">Joyería y Relojería.</span>
              </h3>
            </div>
            <span className="px-4 py-1.5 rounded-full bg-white/10 font-mono text-xs font-semibold">
              40 Años de Trayectoria Digitalizada
            </span>
          </div>

          {/* Image Container */}
          <div className="overflow-hidden rounded-2xl border border-[#2B2927] aspect-[21/9] relative shadow-lg">
            <Img
              src="/cuore-home.avif"
              alt="CUORE Joyería y Relojería"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      )}
    </div>
  );
};
