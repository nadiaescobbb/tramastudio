import {
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
} from "remotion";

export const Scene2Problem = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Entrance spring
  const enterSpring = spring({
    frame,
    fps,
    config: { damping: 14, stiffness: 90 },
  });

  // Fade out towards frame 180 (scene relative length 180 frames)
  const fadeOut = interpolate(frame, [160, 180], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Code to UI Morph progress
  const codeProgress = interpolate(frame, [10, 80], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Card slide up delays
  const card1Spring = spring({
    frame: frame - 40,
    fps,
    config: { damping: 12, stiffness: 100 },
  });
  const card2Spring = spring({
    frame: frame - 60,
    fps,
    config: { damping: 12, stiffness: 100 },
  });
  const card3Spring = spring({
    frame: frame - 80,
    fps,
    config: { damping: 12, stiffness: 100 },
  });

  return (
    <div
      style={{ opacity: fadeOut }}
      className="w-full h-full bg-[#0F0E0D] text-white flex flex-col items-center justify-center relative p-16 font-sans overflow-hidden select-none"
    >
      {/* Background radial glow */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-[hsl(15,65%,45%)]/10 blur-[100px] pointer-events-none" />

      {/* Header */}
      <div
        style={{
          transform: `translateY(${(1 - enterSpring) * 20}px)`,
          opacity: enterSpring,
        }}
        className="text-center space-y-3 mb-12"
      >
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-[hsl(15,65%,55%)] font-semibold">
          Proceso & Criterio Directo
        </span>
        <h2 className="font-heading text-4xl md:text-5xl font-normal tracking-tight">
          De la estrategia al código, <span className="font-serif italic text-gray-300">sin intermediarios</span>.
        </h2>
      </div>

      {/* Code to UI Split Container */}
      <div className="grid grid-cols-12 gap-8 w-full max-w-5xl items-center">
        {/* Left: Code Snippet Card */}
        <div
          style={{
            opacity: interpolate(codeProgress, [0, 0.5], [1, 0.4]),
            transform: `scale(${1 - codeProgress * 0.05})`,
          }}
          className="col-span-6 bg-[#141312] border border-[#262422] rounded-2xl p-6 font-mono text-xs text-gray-300 shadow-2xl space-y-2 relative overflow-hidden"
        >
          <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[#262422]">
            <span className="w-3 h-3 rounded-full bg-red-500/80" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <span className="w-3 h-3 rounded-full bg-green-500/80" />
            <span className="text-[10px] text-gray-500 ml-2">App.tsx — React / Tailwind</span>
          </div>
          <p className="text-purple-400">const<span className="text-white"> Studio </span>=<span className="text-blue-400"> () =&gt; </span>&#123;</p>
          <p className="pl-4 text-gray-400">// Identidad visual + Frontend de alta precisión</p>
          <p className="pl-4 text-purple-400">return <span className="text-yellow-300">&lt;DigitalProduct</span></p>
          <p className="pl-8 text-blue-300">focus=<span className="text-green-300">"conversion"</span></p>
          <p className="pl-8 text-blue-300">architecture=<span className="text-green-300">"swiss-minimal"</span></p>
          <p className="pl-4 text-yellow-300">/&gt;</p>
          <p className="text-purple-400">&#125;;</p>
        </div>

        {/* Right: Rendered Precision UI Cards */}
        <div className="col-span-6 space-y-4">
          <div
            style={{
              transform: `translateY(${(1 - Math.max(0, card1Spring)) * 30}px)`,
              opacity: Math.max(0, card1Spring),
            }}
            className="p-5 rounded-xl bg-[#1A1918] border border-[#2E2C2A] shadow-xl flex items-center justify-between"
          >
            <div>
              <span className="font-mono text-[10px] uppercase tracking-widest text-[hsl(15,65%,55%)] block mb-1">
                01. Estrategia
              </span>
              <h4 className="font-heading text-lg font-normal">Jerarquía Comercial Limpia</h4>
            </div>
            <span className="w-8 h-8 rounded-full bg-[hsl(15,65%,45%)]/20 text-[hsl(15,65%,55%)] flex items-center justify-center font-mono text-xs font-bold">
              ✓
            </span>
          </div>

          <div
            style={{
              transform: `translateY(${(1 - Math.max(0, card2Spring)) * 30}px)`,
              opacity: Math.max(0, card2Spring),
            }}
            className="p-5 rounded-xl bg-[#1A1918] border border-[#2E2C2A] shadow-xl flex items-center justify-between"
          >
            <div>
              <span className="font-mono text-[10px] uppercase tracking-widest text-[hsl(15,65%,55%)] block mb-1">
                02. Diseño UI/UX
              </span>
              <h4 className="font-heading text-lg font-normal">Tokens HSL & Tipografía Expresiva</h4>
            </div>
            <span className="w-8 h-8 rounded-full bg-[hsl(15,65%,45%)]/20 text-[hsl(15,65%,55%)] flex items-center justify-center font-mono text-xs font-bold">
              ✓
            </span>
          </div>

          <div
            style={{
              transform: `translateY(${(1 - Math.max(0, card3Spring)) * 30}px)`,
              opacity: Math.max(0, card3Spring),
            }}
            className="p-5 rounded-xl bg-[#1A1918] border border-[#2E2C2A] shadow-xl flex items-center justify-between"
          >
            <div>
              <span className="font-mono text-[10px] uppercase tracking-widest text-[hsl(15,65%,55%)] block mb-1">
                03. Frontend Real
              </span>
              <h4 className="font-heading text-lg font-normal">React + Vite + Tailwind CSS</h4>
            </div>
            <span className="w-8 h-8 rounded-full bg-[hsl(15,65%,45%)]/20 text-[hsl(15,65%,55%)] flex items-center justify-center font-mono text-xs font-bold">
              ✓
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
