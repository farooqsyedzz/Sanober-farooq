"use client";

import { motion } from "framer-motion";
import styles from "./sections.module.css";

export default function Quote() {
  return (
    <section className={styles.quoteSectionTransparent}>
      <div className={styles.quoteContentContainer}>
        {/* Spacer for the pavilion illustration which is baked into the background */}
        <div className={styles.pavilionSpacer} />

        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 1.5, delay: 0.3 }}
           className={styles.quoteBox}
        >
          <h2 className={styles.quoteTealText}>
            "And we created you in pairs."
          </h2>
          <p className={styles.quoteSourceText}>Quran 78:8</p>
        </motion.div>
      </div>
    </section>
  );
}
