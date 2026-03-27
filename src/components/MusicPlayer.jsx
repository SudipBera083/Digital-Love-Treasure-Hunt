// src/components/MusicPlayer.jsx
import { useState, useEffect, useRef } from "react";

export default function MusicPlayer() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    audioRef.current.volume = 0.2;
    audioRef.current.play().catch(() => {});
  }, []);

  return (
    <>
      <audio ref={audioRef} loop src="/music.mp3" />

      <button
        onClick={() => {
          if (playing) audioRef.current.pause();
          else audioRef.current.play();
          setPlaying(!playing);
        }}
        className="fixed bottom-5 right-5 bg-primary p-3 rounded-full"
      >
        {playing ? "🔊" : "🔇"}
      </button>
    </>
  );
}