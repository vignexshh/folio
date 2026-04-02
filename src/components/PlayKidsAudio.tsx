"use client";

import { useRef, useState } from "react";
import { Button } from "./ui/button";

export default function PlayKidsAudio() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <>
      <Button variant="outline"

        onClick={() => {
          const audio = audioRef.current;
    
          if (!audio) return;

          if (!audio.paused) {
            audio.pause();
            audio.currentTime = audio.currentTime; // reset to start
            setIsPlaying(false)
          } else {
            audio.currentTime = audio.currentTime; // ensure starts from beginning
            audio.play().then(() => setIsPlaying(true)).catch(() => {});
          }
        }}
      >
        {isPlaying ? "🔊" : "🔇" }
      </Button>
      <audio ref={audioRef} src="/audio/Kids.mp3" preload="auto" />
    </>
  );
}