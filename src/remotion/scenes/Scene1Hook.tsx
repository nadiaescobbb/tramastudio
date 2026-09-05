import {
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
} from "remotion";

export const Scene1Hook = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Entrance spring animation for main title
  const titleSpring = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 100 },
  });

  // Fade out towards the end of scene
  const fadeOut = interpolate(frame, [130, 150], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Cursor movement interpolation
  const cursorX = interpolate(frame, [0, 50, 70], [800, 540, 540], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const cursorY = interpolate(frame, [0, 50, 70], [600, 360, 360], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const cursorScale = interpolate(frame, [65, 70, 75], [1, 0.85, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Badge morph text opacity
  const badgeText1Opacity = interpolate(frame, [0, 68], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const badgeText2Opacity = interpolate(frame, [72, 85], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{ opacity: fadeOut }}
      className="w-full h-full bg-[#0F0E0D] text-white flex flex-col items-center justify-center relative p-16 font-sans overflow-hidden select-none"
    >
      {/* Background ambient radial glow */}
      <div className="absolute w-[600px] h-[600px] rounded-full bg-[hsl(15,65%,45%)]/15 blur-[120px] pointer-events-none" />

      {/* Top Tagline / Category */}
      <div className="mb-8 font-mono text-sm uppercase tracking-[0.25em] text-[hsl(40,6%,60%)] flex items-center gap-3">
        <span className="w-2.5 h-2.5 rounded-full bg-[hsl(15,65%,45%)]" />
        HeyTrama Studio — Design & Frontend
      </div>

      {/* Main Headline */}
      <h1
        style={{
          transform: `scale(${0.9 + titleSpring * 0.1}) translateY(${(1 - titleSpring) * 30}px)`,
          opacity: titleSpring,
        }}
        className="font-heading text-6xl md:text-7xl font-normal tracking-tight text-center max-w-5xl leading-[1.1]"
      >
        Diseñamos productos digitales que ayudan a{" "}
        <span className="font-serif italic text-[hsl(15,65%,55%)]">
          decidir
        </span>
        , no solo a mirar.
      </h1>

      {/* Interactive Badge Container */}
      <div className="mt-12 relative">
        <div className="px-8 py-3.5 rounded-full bg-[#1A1918] border border-[#2A2826] shadow-2xl flex items-center gap-3 font-mono text-sm font-semibold tracking-wide">
          <span className="relative inline-block w-48 text-center">
            <span
              style={{ opacity: badgeText1Opacity }}
              className="absolute inset-0 text-gray-400 line-through decoration-red-500/80"
            >
              Solo mirar
            </span>
            <span
              style={{ opacity: badgeText2Opacity }}
              className="text-[hsl(15,65%,55%)] font-bold"
            >
              Diseñado para Decidir ✓
            </span>
          </span>
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
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-lg"
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
