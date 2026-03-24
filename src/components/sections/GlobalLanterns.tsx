"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import styles from "./sections.module.css";

export default function GlobalLanterns() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const lanterns = Array.from({ length: 60 }).map((_, i) => {
    const baseSize = Math.random() * (160 - 40) + 40;
    const finalSize = isMobile ? baseSize * 0.5 : baseSize;
    
    return {
      id: i,
      size: finalSize,
      x: `${Math.random() * 100}%`,
      y: Math.random() * 4800, // Stop lanterns before 'See the Route' section (starts ~5400)
      duration: Math.random() * (12 - 7) + 7,
      delay: Math.random() * 6,
    };
  });

  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 1 }}>
      {lanterns.map((lan) => (
        <motion.div
          key={lan.id}
          className={styles.lantern}
          style={{ left: lan.x, top: lan.y }}
          animate={{
            y: [0, -80, 0],
            x: [0, 25, 0],
            rotate: [0, 20, 0],
          }}
          transition={{
            duration: lan.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: lan.delay,
          }}
        >
          <img 
            src="https://framerusercontent.com/images/DdFrH1xuj9wKnCb1V2cCwhyUujQ.png" 
            alt="Lantern" 
            width={lan.size} 
            style={{ opacity: 0.8 }}
          />
        </motion.div>
      ))}
    </div>
  );
}
