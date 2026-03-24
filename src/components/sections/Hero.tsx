"use client";

import { motion } from "framer-motion";
import styles from "./sections.module.css";

export default function Hero() {
  return (
    <section className={styles.heroTransparent}>
      {/* Hero Content - Centered */}
      <motion.div
        className={styles.heroContentV2}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <span className={styles.bismillah}>Bismillahir Rahmanir Raheem</span>
        <div className={styles.namesContainer}>
          <h1 className={styles.largeName}>FAROOQ</h1>
          <div className={styles.wedsRow}>
             <span className={styles.midWeds}>WEDS</span>
          </div>
          <h1 className={styles.largeName}>SANOBER</h1>
        </div>
        <p className={styles.tagline}>JOIN US ON OUR SPECIAL DAY</p>
      </motion.div>
    </section>
  );
}
