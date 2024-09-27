import React, { useEffect, useRef, useState } from "react";
import WaveSurfer from "wavesurfer.js";
import RegionsPlugin from "wavesurfer.js/dist/plugins/regions.js";

const AudioPlayer = ({ audioSrc = "/audio/sample.mp3" }) => {
  const waveformRef = useRef(null);
  const waveSurfer = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const regions = RegionsPlugin.create();

  useEffect(() => {
    if (waveformRef?.current) {
      waveSurfer.current = WaveSurfer.create({
        container: waveformRef.current,
        waveColor: "#CACFFF",
        progressColor: "#505BC5",
        cursorColor: "#d32f2f",
        barWidth: 2,
        barGap: 4,
        responsive: true,
        height: 200,
        preload: "auto",
        plugins: [regions],
        url: audioSrc
      });

      waveSurfer.current.on("decode", () => {
        regions.addRegion({
          start: 30,
          end: 35,
          content: "Closing",
          color: "rgba(236, 120, 120, 0.4)",
          drag: false,
          resize: false
        });
      });

      waveSurfer.current.on("error", (error) => {
        console.error("Error loading audio:", error);
      });
    }

    return () => {
      if (waveSurfer?.current) {
        waveSurfer.current.destroy();
      }
    };
  }, [audioSrc]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
    waveSurfer?.current?.playPause();
  };

  return (
    <div className="w-full p-4 bg-white shadow-md rounded-lg">
      <div ref={waveformRef} className="waveform"></div>
      <div className="mt-4 flex items-center justify-center">
        <button
          onClick={handlePlayPause}
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg focus:outline-none hover:bg-indigo-700"
        >
          {isPlaying ? "Pause" : "Play"}
        </button>
      </div>
    </div>
  );
};

export default AudioPlayer;
