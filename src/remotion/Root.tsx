import { Composition, registerRoot } from "remotion";
import { LaunchVideo } from "./LaunchVideo";
import "../index.css";

export const RemotionRoot = () => {
  return (
    <>
      <Composition
        id="HeyTramaLaunchVideo"
        component={LaunchVideo}
        durationInFrames={900}
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
};

registerRoot(RemotionRoot);
