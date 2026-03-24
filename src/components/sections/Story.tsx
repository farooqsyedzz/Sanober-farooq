"use client";

import { motion } from "framer-motion";
import styles from "./sections.module.css";

export default function Story() {
  return (
    <section className={`${styles.storySection} section`}>
      <div className={styles.storyContent}>
        <motion.div
           initial={{ opacity: 0, x: -100 }}
           whileInView={{ opacity: 1, x: 0 }}
           transition={{ duration: 1.5, ease: "easeOut" }}
           className={styles.carContainer}
        >
          <img 
            src="https://framerusercontent.com/images/CxMq9eNVYFWeipRkOH7L6BF7EV4.png" 
            alt="Vintage Car" 
            className={styles.carImage}
          />
        </motion.div>
        
        <motion.div
           initial={{ opacity: 0, x: 100 }}
           whileInView={{ opacity: 1, x: 0 }}
           transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
           className={styles.storyText}
        >
          <h3 className="serif">THE START OF <br/> OUR FOREVER</h3>
          <p className="gotu">Our journey began as friends, growing into something beautiful that we now celebrate with all of you.</p>
        </motion.div>
      </div>
    </section>
  );
}
