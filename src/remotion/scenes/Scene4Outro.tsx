import {
  useCurrentFrame,
  useVideoConfig,
  spring,
  Img,
  staticFile,
} from "remotion";

export const Scene4Outro = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Entrance springs
  const logoSpring = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 90 },
  });

  const ctaSpring = spring({
    frame: frame - 25,
    fps,
    config: { damping: 14, stiffness: 100 },
  });

  return (
    <div className="w-full h-full bg-[#0B0A0A] text-white flex flex-col items-center justify-center relative p-16 font-sans overflow-hidden select-none">
      {/* Background Grid Pattern */}
      <div
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
        className="absolute inset-0 pointer-events-none opacity-50"
      />

      {/* Layered Glowing Lights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-full bg-[hsl(15,65%,45%)]/25 blur-[160px] pointer-events-none" />

      {/* Main Glassmorphism Outro Card */}
      <div
        style={{
          transform: `scale(${0.88 + logoSpring * 0.12})`,
          opacity: logoSpring,
        }}
        className="w-full max-w-3xl bg-[#141312]/90 border border-white/20 rounded-3xl p-12 shadow-2xl backdrop-blur-xl text-center space-y-8 relative overflow-hidden z-10"
      >
        {/* Top Tagline */}
        <div className="flex justify-center">
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.3em] text-[hsl(15,65%,55%)] bg-[hsl(15,65%,45%)]/15 px-5 py-2 rounded-full border border-[hsl(15,65%,45%)]/30">
            Estudio de Productos Digitales
          </span>
        </div>

        {/* Brand Headline */}
        <div className="space-y-3">
          <h1 className="font-heading text-7xl md:text-8xl font-normal tracking-tight">
            HeyTrama
          </h1>
          <p className="font-serif italic text-2xl text-gray-300 max-w-xl mx-auto leading-relaxed">
            Diseño Estratégico & Desarrollo Frontend para Servicios y Marcas.
          </p>
        </div>

        {/* Founder Avatar & Badge */}
        <div className="flex items-center justify-center gap-3 pt-2">
          <div className="w-10 h-10 rounded-full overflow-hidden border border-white/20 shadow-md">
            <Img
              src={staticFile("/founder-nadia.avif")}
              alt="Nadia Escobar"
              className="w-full h-full object-cover grayscale"
            />
          </div>
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-gray-300">
            Nadia Escobar — founder HeyTrama
          </span>
        </div>

        {/* CTA Button Box */}
        <div
          style={{
            transform: `translateY(${(1 - Math.max(0, ctaSpring)) * 25}px)`,
            opacity: Math.max(0, ctaSpring),
          }}
          className="pt-4 flex justify-center"
        >
          <div className="px-10 py-5 rounded-full bg-white text-black font-mono text-base font-bold shadow-2xl flex items-center gap-4 hover:scale-105 transition-transform">
            <span>Hablemos de tu proyecto en heytrama.com</span>
            <span className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-sm font-bold">
              ↗
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
