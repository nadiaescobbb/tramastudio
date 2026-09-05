import {
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
  Img,
} from "remotion";

export const Scene1Hook = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Entrance spring for main title
  const titleSpring = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 100 },
  });

  // Floating mockup spring
  const mockupSpring = spring({
    frame: frame - 15,
    fps,
    config: { damping: 14, stiffness: 80 },
  });

  // Fade out towards end
  const fadeOut = interpolate(frame, [135, 150], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Cursor movement
  const cursorX = interpolate(frame, [0, 50, 70], [900, 680, 680], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const cursorY = interpolate(frame, [0, 50, 70], [650, 480, 480], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const cursorScale = interpolate(frame, [65, 70, 75], [1, 0.85, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Badge morphing text
  const badgeOpacity1 = interpolate(frame, [0, 68], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const badgeOpacity2 = interpolate(frame, [72, 88], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Background grid movement
  const bgGridOffsetY = (frame * 0.5) % 40;

  return (
    <div
      style={{ opacity: fadeOut }}
      className="w-full h-full bg-[#0B0A0A] text-white flex flex-col items-center justify-between p-16 font-sans overflow-hidden select-none relative"
    >
      {/* Background Animated Grid Texture */}
      <div
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          transform: `translateY(${bgGridOffsetY}px)`,
        }}
        className="absolute inset-0 pointer-events-none opacity-60"
      />

      {/* Layered Glowing Lights */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full bg-[hsl(15,65%,45%)]/20 blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-40 left-1/4 w-[600px] h-[400px] rounded-full bg-[hsl(38,70%,50%)]/10 blur-[130px] pointer-events-none" />

      {/* Top Header Bar */}
      <div className="w-full max-w-6xl flex items-center justify-between z-10">
        <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-gray-400">
          <span className="w-2.5 h-2.5 rounded-full bg-[hsl(15,65%,45%)] shadow-[0_0_12px_hsl(15,65%,45%)]" />
          HeyTrama — Studio Launch
        </div>
        <div className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-gray-300">
          Edition 2026
        </div>
      </div>

      {/* Hero Central Content */}
      <div className="z-10 text-center space-y-6 max-w-4xl my-auto">
        <h1
          style={{
            transform: `scale(${0.9 + titleSpring * 0.1}) translateY(${(1 - titleSpring) * 30}px)`,
            opacity: titleSpring,
          }}
          className="font-heading text-6xl md:text-7xl font-normal tracking-tight leading-[1.1]"
        >
          Diseñamos productos digitales que ayudan a{" "}
          <span className="font-serif italic text-[hsl(15,65%,55%)] underline decoration-[hsl(15,65%,45%)]/40 underline-offset-8">
            decidir
          </span>
          , no solo a mirar.
        </h1>

        {/* Interactive Morph Badge */}
        <div className="flex justify-center pt-2">
          <div className="px-8 py-3.5 rounded-full bg-[#181716]/90 border border-white/15 backdrop-blur-xl shadow-2xl flex items-center gap-3 font-mono text-sm font-semibold">
            <span className="relative inline-block w-52 text-center">
              <span
                style={{ opacity: badgeOpacity1 }}
                className="absolute inset-0 text-gray-400 line-through decoration-red-500/80"
              >
                Website Genérico
              </span>
              <span
                style={{ opacity: badgeOpacity2 }}
                className="text-[hsl(15,65%,55%)] font-bold flex items-center justify-center gap-2"
              >
                <span>Diseñado para Conversión</span>
                <span className="w-2 h-2 rounded-full bg-[hsl(15,65%,50%)] animate-pulse" />
              </span>
            </span>
          </div>
        </div>
      </div>

      {/* Floating Website Preview Mockup Card */}
      <div
        style={{
          transform: `translateY(${(1 - Math.max(0, mockupSpring)) * 60}px) rotateX(8deg)`,
          opacity: Math.max(0, mockupSpring),
        }}
        className="w-full max-w-4xl bg-[#141312] border border-white/15 rounded-2xl p-4 shadow-2xl z-10 backdrop-blur-xl relative"
      >
        <div className="flex items-center gap-2 pb-3 mb-3 border-b border-white/10">
          <span className="w-3 h-3 rounded-full bg-red-500/80" />
          <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <span className="w-3 h-3 rounded-full bg-green-500/80" />
          <span className="text-xs font-mono text-gray-400 ml-3">heytrama.com</span>
        </div>
        <div className="overflow-hidden rounded-xl aspect-[21/9] border border-white/10 relative">
          <Img
            src="/famvarhome.avif"
            alt="HeyTrama Showcase"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
            <span className="font-heading text-2xl font-normal text-white drop-shadow-md">
              Swiss Minimal & Editorial Canvas
            </span>
          </div>
        </div>
      </div>

      {/* Animated Swiss Cursor */}
      <div
        style={{
          transform: `translate3d(${cursorX}px, ${cursorY}px, 0) scale(${cursorScale})`,
        }}
        className="absolute top-0 left-0 pointer-events-none z-50 transition-transform duration-75"
      >
        <svg
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-2xl"
        >
          <path
            d="M3 3L10.07 19.97L12.58 12.58L19.97 10.07L3 3Z"
            fill="white"
            stroke="black"
            strokeWidth="1.5"
          />
        </svg>
      </div>
    </div>
  );
};
