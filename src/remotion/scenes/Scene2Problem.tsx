import {
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
} from "remotion";

export const Scene2Problem = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Header spring
  const headerSpring = spring({
    frame,
    fps,
    config: { damping: 14, stiffness: 90 },
  });

  // Fade out towards frame 180
  const fadeOut = interpolate(frame, [160, 180], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Card slide up springs
  const card1Spring = spring({
    frame: frame - 20,
    fps,
    config: { damping: 12, stiffness: 90 },
  });
  const card2Spring = spring({
    frame: frame - 45,
    fps,
    config: { damping: 12, stiffness: 90 },
  });
  const card3Spring = spring({
    frame: frame - 70,
    fps,
    config: { damping: 12, stiffness: 90 },
  });

  // Typing effect length
  const typingCharCount = Math.floor(interpolate(frame, [10, 90], [0, 85]));
  const fullCodeText = `<DigitalProduct focus="conversion" architecture="swiss-minimal" designSystem="hsl-tokens" />`;
  const visibleCodeText = fullCodeText.slice(0, typingCharCount);

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

      {/* Radial Lights */}
      <div className="absolute top-1/4 -right-32 w-[600px] h-[600px] rounded-full bg-[hsl(15,65%,45%)]/15 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] rounded-full bg-[hsl(38,70%,55%)]/10 blur-[130px] pointer-events-none" />

      {/* Header */}
      <div
        style={{
          transform: `translateY(${(1 - headerSpring) * 20}px)`,
          opacity: headerSpring,
        }}
        className="text-center space-y-3 z-10"
      >
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-[hsl(15,65%,55%)] font-semibold bg-[hsl(15,65%,45%)]/10 px-4 py-1.5 rounded-full border border-[hsl(15,65%,45%)]/30">
          Proceso & Criterio Directo
        </span>
        <h2 className="font-heading text-4xl md:text-6xl font-normal tracking-tight pt-2">
          De la estrategia al código, <span className="font-serif italic text-gray-300">sin intermediarios</span>.
        </h2>
      </div>

      {/* Main Split Grid */}
      <div className="grid grid-cols-12 gap-8 w-full max-w-6xl items-center z-10 my-auto">
        {/* Left: Code IDE Editor Window */}
        <div className="col-span-6 bg-[#121110] border border-white/15 rounded-2xl p-6 shadow-2xl space-y-4 backdrop-blur-xl relative overflow-hidden">
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <span className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <span className="text-xs font-mono text-gray-400">Architecture.tsx</span>
          </div>

          <div className="font-mono text-sm leading-relaxed space-y-2 min-h-[180px]">
            <p className="text-purple-400">
              export const <span className="text-blue-300">ProductArchitecture</span> = () =&gt; &#123;
            </p>
            <p className="pl-4 text-gray-400">// 1. Criterio comercial antes que adorno</p>
            <p className="pl-4 text-gray-400">// 2. Frontend React 18 + Tailwind CSS</p>
            <div className="pl-4 text-yellow-300 pt-2 font-bold break-all">
              {visibleCodeText}
              <span className="inline-block w-2 h-4 bg-[hsl(15,65%,55%)] ml-1 animate-pulse" />
            </div>
            <p className="text-purple-400 pt-2">&#125;;</p>
          </div>
        </div>

        {/* Right: Rendered Precision Feature Cards */}
        <div className="col-span-6 space-y-4">
          <div
            style={{
              transform: `translateY(${(1 - Math.max(0, card1Spring)) * 30}px)`,
              opacity: Math.max(0, card1Spring),
            }}
            className="p-5 rounded-2xl bg-[#161514] border border-white/15 shadow-xl flex items-center justify-between backdrop-blur-xl"
          >
            <div className="space-y-1">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[hsl(15,65%,55%)] block">
                01. Estrategia & Copy
              </span>
              <h4 className="font-heading text-xl font-normal">Jerarquía Comercial Limpia</h4>
              <p className="text-xs text-gray-400">Mensajes estructurados para la decisión de compra.</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-[hsl(15,65%,45%)]/20 border border-[hsl(15,65%,45%)]/40 text-[hsl(15,65%,55%)] flex items-center justify-center font-mono text-sm font-bold shadow-md">
              ✓
            </div>
          </div>

          <div
            style={{
              transform: `translateY(${(1 - Math.max(0, card2Spring)) * 30}px)`,
              opacity: Math.max(0, card2Spring),
            }}
            className="p-5 rounded-2xl bg-[#161514] border border-white/15 shadow-xl flex items-center justify-between backdrop-blur-xl"
          >
            <div className="space-y-1">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[hsl(15,65%,55%)] block">
                02. Diseño UI/UX
              </span>
              <h4 className="font-heading text-xl font-normal">Tokens HSL & Tipografía Suiza</h4>
              <p className="text-xs text-gray-400">Sistema visual consistente con alto contraste WCAG AA.</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-[hsl(15,65%,45%)]/20 border border-[hsl(15,65%,45%)]/40 text-[hsl(15,65%,55%)] flex items-center justify-center font-mono text-sm font-bold shadow-md">
              ✓
            </div>
          </div>

          <div
            style={{
              transform: `translateY(${(1 - Math.max(0, card3Spring)) * 30}px)`,
              opacity: Math.max(0, card3Spring),
            }}
            className="p-5 rounded-2xl bg-[#161514] border border-white/15 shadow-xl flex items-center justify-between backdrop-blur-xl"
          >
            <div className="space-y-1">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[hsl(15,65%,55%)] block">
                03. Desarrollo Frontend
              </span>
              <h4 className="font-heading text-xl font-normal">React + Vite + Animations</h4>
              <p className="text-xs text-gray-400">Código optimizado con 100/100 en rendimiento.</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-[hsl(15,65%,45%)]/20 border border-[hsl(15,65%,45%)]/40 text-[hsl(15,65%,55%)] flex items-center justify-center font-mono text-sm font-bold shadow-md">
              ✓
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
