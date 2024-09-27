import React, { useRef } from "react";

const VideoPlayer = ({ src, poster, width = "640", height = "360" }) => {
  const videoRef = useRef(null);

  return (
    <div className="video-player">
      <video
        ref={videoRef}
        width={width}
        height={height}
        controls
        className="rounded-lg shadow-lg"
      >
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoPlayer;
