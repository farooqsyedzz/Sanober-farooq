"use client";

import { motion } from "framer-motion";
import styles from "./sections.module.css";

export default function Fountain() {
  return (
    <section className={`${styles.fountainSection} section`}>
      <div className={styles.waterBackground}>
        <img 
          src="https://framerusercontent.com/images/ySQ0SbzHWfVo1ClVjS303cCa9E.png" 
          alt="Water Pool" 
          className={styles.bgFixed}
        />
      </div>
      
      <div className={styles.fountainContent}>
        <motion.div
           initial={{ opacity: 0, scale: 0.8 }}
           whileInView={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <div className={styles.ornamentFrame}>
            <img src="https://framerusercontent.com/images/22xXcSSm9sQYXLb74vUWOaNwXY.png" alt="Ornament" width={150} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
