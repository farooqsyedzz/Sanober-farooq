"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styles from "./sections.module.css";

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });

useEffect(() => {
  const targetDate = new Date(2026, 3, 5, 12, 0, 0).getTime(); 
  // Month is 0-based → 3 = April

  const interval = setInterval(() => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance <= 0) {
      clearInterval(interval);
      setTimeLeft({ days: 0, hours: 0, mins: 0, secs: 0 });
      return;
    }

    setTimeLeft({
      days: Math.floor(distance / (1000 * 60 * 60 * 24)),
      hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      mins: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
      secs: Math.floor((distance % (1000 * 60)) / 1000),
    });
  }, 1000);

  return () => clearInterval(interval);
}, []);

  // Generate stars for background
  const stars = Array.from({ length: 50 }).map((_, i) => ({
    id: i,
    top: Math.random() * 100,
    left: Math.random() * 100,
    size: Math.random() * 2 + 1,
  }));

  return (
    <section className={styles.countdownSectionNew}>
      {/* Star background */}
      <div className={styles.starfield}>
        {stars.map((star) => (
          <div
            key={star.id}
            className={styles.star}
            style={{
              top: `${star.top}%`,
              left: `${star.left}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
            }}
          />
        ))}
      </div>

      {/* Palace image background */}
      <div className={styles.palaceBackdrop}>
        <img 
          src="https://framerusercontent.com/images/uBiouh876wupNLU2FX6v6If8tHQ.png" 
          alt="Palace" 
          className={styles.palaceImage}
        />
      </div>

      {/* Content overlay */}
      <div className={styles.countdownContent}>
        <motion.h2 
          className={styles.countdownTitle}
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          The countdown begins
        </motion.h2>

        <motion.div 
          className={styles.countdownTimer}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <span className={styles.timerDigit}>
            {String(timeLeft.days).padStart(2, "0")}
          </span>
          <span className={styles.timerSeparator}>:</span>
          <span className={styles.timerDigit}>
            {String(timeLeft.hours).padStart(2, "0")}
          </span>
          <span className={styles.timerSeparator}>:</span>
          <span className={styles.timerDigit}>
            {String(timeLeft.mins).padStart(2, "0")}
          </span>
          <span className={styles.timerSeparator}>:</span>
          <span className={styles.timerDigit}>
            {String(timeLeft.secs).padStart(2, "0")}
          </span>
        </motion.div>

        <motion.p 
          className={styles.countdownDescription}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Our families are excited that you are able to join us in celebrating what we hope will be one of the happiest days of our lives.
        </motion.p>

        {/* <motion.p 
          className={styles.countdownCopyright}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          © Missing Piece 2025
        </motion.p> */}

        {/* Pause button */}
        {/* <motion.button 
          className={styles.pauseBtn}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          ⏸
        </motion.button> */}
      </div>
    </section>
  );
}
