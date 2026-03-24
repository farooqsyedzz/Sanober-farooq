"use client";

import { useState, useRef } from "react";
import { Volume2, VolumeX, ShoppingCart } from "lucide-react";
import styles from "./sections.module.css";

export default function Controls() {
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

  return (
    <div className={styles.controlsLayer}>
      <audio 
        ref={audioRef} 
        src="https://framerusercontent.com/assets/7dqA8jlZHij9fuyhj602jarV4eg.mp3" 
        loop
      />
      
      {/* "Buy Now" Pill Button */}
      {/* <div className={styles.buyNowPill}>
        <div className={styles.buyNowLeft}>
          <span>Buy Now</span>
        </div>
        <div className={styles.buyNowRight}>
          <span>INR 3999</span>
        </div>
      </div> */}
      
      {/* Simplified Audio Button below */}
      <button 
        onClick={togglePlay} 
        className={styles.audioToggleBtn}
        aria-label={playing ? "Pause Music" : "Play Music"}
      >
        {playing ? <Volume2 size={20} /> : <VolumeX size={20} />}
      </button>
    </div>
  );
}
