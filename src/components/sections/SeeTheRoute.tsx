"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import styles from "./sections.module.css";

export default function SeeTheRoute() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax for the car - moves slightly up as we scroll down
  const carY = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={containerRef} className={styles.routeSection}>
      <div className={styles.routeBgPattern}>
        {/* <img 
          src="https://framerusercontent.com/images/3vpFOuN5tHb2JuYqzoPGPaRcA.png" 
          alt="Pattern" 
          className={styles.fullPattern}
        /> */}
      </div>

      <div className={styles.routeContent}>
        <motion.h2 
          className={styles.routeTitle}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          SEE THE ROUTE
        </motion.h2>
        
        <motion.p 
          className={styles.routeSubtext}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Click to open the map
        </motion.p>

        {/* Pulsating Circle Button */}
        <a 
          href="https://www.google.com/maps/dir//RLT+Convention+A%2Fc,+Kadapa,+Ganagapeta,+Cuddaram,+Andhra+Pradesh+516002/@14.4958307,78.8269379,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bb371ac622cae35:0xcd4b0940ba98075f!2m2!1d78.8306359!2d14.4866486?entry=ttu&g_ep=EgoyMDI2MDMxOC4xIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: 'none' }}
        >
          <motion.div 
            className={styles.pulsateCircle}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [1, 0.6, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className={styles.innerCircle} />
          </motion.div>
        </a>
      </div>

      {/* Parallax Car */}
      <motion.div 
        className={styles.pCarContainer}
        style={{ y: carY }}
      >
        <img 
          src="https://framerusercontent.com/images/T1dORVl8kMLXNd7ShMJWzCpoHtM.png" 
          alt="Vintage Car" 
          className={styles.vintageCar}
        />
      </motion.div>
    </section>
  );
}
