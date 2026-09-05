import {
  useCurrentFrame,
  useVideoConfig,
  spring,
} from "remotion";

export const Scene4Outro = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Entrance spring
  const logoSpring = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 90 },
  });

  const ctaSpring = spring({
    frame: frame - 30,
    fps,
    config: { damping: 14, stiffness: 100 },
  });

  return (
    <div className="w-full h-full bg-[#0F0E0D] text-white flex flex-col items-center justify-center relative p-16 font-sans overflow-hidden select-none">
      {/* Background ambient radial glow */}
      <div className="absolute w-[800px] h-[800px] rounded-full bg-[hsl(15,65%,45%)]/20 blur-[150px] pointer-events-none" />

      {/* Main Logo & Headline Container */}
      <div
        style={{
          transform: `scale(${0.85 + logoSpring * 0.15})`,
          opacity: logoSpring,
        }}
        className="text-center space-y-6 max-w-3xl"
      >
        <h1 className="font-heading text-7xl md:text-8xl font-normal tracking-tight">
          HeyTrama
        </h1>
        <p className="font-serif italic text-2xl md:text-3xl text-gray-300">
          Diseño de Productos Digitales & Desarrollo Frontend
        </p>

        {/* Founder Tag */}
        <div className="pt-2">
          <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-[hsl(15,65%,55%)] bg-[hsl(15,65%,45%)]/10 px-5 py-2 rounded-full border border-[hsl(15,65%,45%)]/30">
            Nadia Escobar — founder HeyTrama
          </span>
        </div>
      </div>

      {/* CTA Box */}
      <div
        style={{
          transform: `translateY(${(1 - Math.max(0, ctaSpring)) * 30}px)`,
          opacity: Math.max(0, ctaSpring),
        }}
        className="mt-14"
      >
        <div className="px-10 py-5 rounded-full bg-white text-black font-mono text-base font-bold shadow-2xl flex items-center gap-4 hover:scale-105 transition-transform">
          <span>Hablemos de tu proyecto en heytrama.com</span>
          <span className="w-7 h-7 rounded-full bg-black text-white flex items-center justify-center text-sm font-bold">
            ↗
          </span>
        </div>
      </div>
    </div>
  );
};
