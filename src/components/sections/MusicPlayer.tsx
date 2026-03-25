"use client";

import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";
import styles from "./sections.module.css";

export default function MusicPlayer() {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (playing) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setPlaying(!playing);
    }
  };

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        // Page is hidden - pause music
        if (audioRef.current && playing) {
          audioRef.current.pause();
          setPlaying(false);
        }
      } else {
        // Page is visible - resume music if it was playing
        if (audioRef.current && playing) {
          audioRef.current.play();
        }
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, [playing]);

  return (
    <div className={styles.musicContainer}>
      <audio 
        ref={audioRef} 
        src="https://framerusercontent.com/assets/7dqA8jlZHij9fuyhj602jarV4eg.mp3" 
        loop
      />
      <button 
        onClick={togglePlay} 
        className={styles.musicBtn}
        aria-label={playing ? "Pause Music" : "Play Music"}
      >
        {playing ? <Volume2 size={24} /> : <VolumeX size={24} />}
      </button>
    </div>
  );
}
