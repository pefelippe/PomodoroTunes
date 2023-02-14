import React from "react";
import Music from "../components/Music";
type Props = {};

function OverlayScreen({}: Props) {
  const [play, setPlay] = React.useState(false);

  const handleClick = () => {
    setPlay(!play);
  };
  
  return (
    <div className="z-40">
      <Music
        url="https://www.youtube.com/watch?v=skdq458IYRs&ab_channel=StreamStill"
        play={play}
      />
      <button
        className="rounded-full bg-[#fff] p-3 px-10 text-[1.5rem] font-semibold transition-all"
        onClick={() => handleClick()}
      >
        {play ? "Stop" : "Play"}
      </button>
    </div>
  );
}

export default OverlayScreen;
