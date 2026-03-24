"use client";

import { motion } from "framer-motion";
import styles from "./sections.module.css";
import Image from "next/image";

const galleryImages = [
  "https://framerusercontent.com/images/qHgHJGkX2jaNNoyQgK7oKCf8Kw.jpeg",
  "https://framerusercontent.com/images/fKFg2vQEmI70QHKfOSr54pE7KQ4.jpeg",
  "https://framerusercontent.com/images/vXYo7Ef7EIsZJPtxuKuBSurXF4.jpeg",
  "https://framerusercontent.com/images/qHgHJGkX2jaNNoyQgK7oKCf8Kw.jpeg",
];

export default function Gallery() {
  return (
    <section className={`${styles.gallerySection} section`}>
      <h2 className="serif" style={{ fontSize: '3rem', color: 'var(--color-primary)', marginBottom: '40px' }}>Our Memories</h2>
      
      <div className={styles.galleryGrid}>
        {galleryImages.map((src, i) => (
          <motion.div
            key={i}
            className={styles.galleryFrame}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
          >
            <div className={styles.frameBorder}>
              <div className={styles.galleryImgWrapper}>
                <Image src={src} alt={`Gallery ${i}`} width={400} height={500} style={{ objectFit: 'cover' }} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
