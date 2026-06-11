"use client";
import { useEffect, useRef } from "react";

export default function ThemeAudio() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio("https://us-tuna-sounds-files.voicemod.net/ad876053-67f1-4198-8966-f2201727835a-1679583742287.mp3"); // ✅ Corrected path (No `./` or `src/`)
    audio.loop = true;
    audio.volume = 0.5;
    audioRef.current = audio;

    const playAudio = () => {
      if (audioRef.current) {
        audioRef.current.muted = false; // Ensure it's not muted
        audioRef.current.play().catch((err) => console.warn("Autoplay blocked:", err));
        document.removeEventListener("click", playAudio);
      }
    };

    // Try to play immediately
    audio.play().catch(() => {
      document.addEventListener("click", playAudio); // Play on user interaction
    });

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, []);

  return null; // No UI needed
}
