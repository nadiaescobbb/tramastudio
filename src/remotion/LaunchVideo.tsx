import { Sequence } from "remotion";
import { Scene1Hook } from "./scenes/Scene1Hook";
import { Scene2Problem } from "./scenes/Scene2Problem";
import { Scene3Showcase } from "./scenes/Scene3Showcase";
import { Scene4Outro } from "./scenes/Scene4Outro";

export const LaunchVideo = () => {
  return (
    <div className="w-full h-full bg-[#0F0E0D]">
      {/* Scene 1: Hook (0s - 5s / 150 frames) */}
      <Sequence from={0} durationInFrames={150}>
        <Scene1Hook />
      </Sequence>

      {/* Scene 2: Problem & Process (5s - 11s / 180 frames) */}
      <Sequence from={150} durationInFrames={180}>
        <Scene2Problem />
      </Sequence>

      {/* Scene 3: Showcase FAMVAR & CUORE (11s - 22s / 330 frames) */}
      <Sequence from={330} durationInFrames={330}>
        <Scene3Showcase />
      </Sequence>

      {/* Scene 4: Outro & Call to Action (22s - 30s / 240 frames) */}
      <Sequence from={660} durationInFrames={240}>
        <Scene4Outro />
      </Sequence>
    </div>
  );
};
