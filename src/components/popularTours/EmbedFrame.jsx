import React from "react";

export default function EmbedFrame({ embed, width = "100%", height = "auto" }) {
  return (
    <div className="relative w-full overflow-hidden pt-[56.25%]">
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src={embed}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}
