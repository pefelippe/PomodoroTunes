import React from "react";
import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

type Music = {
  url: string;
  play: boolean;
};

export default function Music({ url, play }: Music) {
  return (
    <div className="hidden">
      <ReactPlayer url={url} playing={play} />
    </div>
  );
}
