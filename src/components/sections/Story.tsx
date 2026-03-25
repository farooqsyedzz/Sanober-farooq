"use client";

import { motion } from "framer-motion";
import styles from "./sections.module.css";
import Image from "next/image";

export default function Story() {
  return (
    <section className={styles.storySection}>
      <div className={styles.storyContent}>
        
        <motion.div 
          className={styles.storyText}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <h3 className="serif">A CHAPTER CALLED FOREVER</h3>
          <div className={styles.storyOrnament}></div>
          <p className="gotu">
            Every beautiful journey begins with a simple moment. What started as a cherished bond grew into a promise written by Allah. As we step into a new chapter of our lives, we celebrate a journey filled with love, patience, and understanding—one that was always meant to be.
          </p>
        </motion.div>

        <motion.div
           className={styles.storyImageFrame}
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1.5, delay: 0.3 }}
        >
           <Image 
             src="https://framerusercontent.com/images/qHgHJGkX2jaNNoyQgK7oKCf8Kw.jpeg" 
             alt="Our Story" 
             width={500}
             height={700}
             className={styles.carImage}
             style={{ objectFit: 'cover' }}
           />
        </motion.div>

        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            style={{ fontStyle: 'italic', opacity: 0.6, fontSize: '1rem' }}
        >
            "Hand in hand, heart to heart."
        </motion.div>
      </div>
    </section>
  );
}
