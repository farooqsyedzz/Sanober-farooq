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
Every blessed journey begins with the will of Allah. What was written for us brought our families together in a beautiful way. As we step into a new chapter of our lives, we seek Allah’s guidance and celebrate a bond built on respect, faith, and togetherness          </p>
        </motion.div>

        <motion.div
           className={styles.storyImageFrame}
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1.5, delay: 0.3 }}
        >
           <Image 
             src="https://images.unsplash.com/photo-1519741497674-611481863552?w=500&h=700&fit=crop" 
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
            "Hand in hand, with hearts united for the sake of Allah."
        </motion.div>
      </div>
    </section>
  );
}
