"use client";

import { motion } from "framer-motion";
import styles from "./sections.module.css";
import Image from "next/image";

interface CoupleCardProps {
  name: string;
  image: string;
  parents: string[];
  role: "groom" | "bride";
  reverse?: boolean;
}

export default function CoupleCard({ name, image, parents, role, reverse = false }: CoupleCardProps) {
  return (
    <div className={`${styles.coupleCardWrapper} ${reverse ? styles.rowReverse : ''}`}>
      <motion.div
        className={styles.profileImageContainer}
        initial={{ opacity: 0, x: reverse ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <div className={styles.imageMask}>
            <Image 
                src={image} 
                alt={name} 
                width={500} 
                height={600} 
                style={{ objectFit: 'cover' }}
            />
        </div>
      </motion.div>
      
      <motion.div
        className={styles.profileInfo}
        initial={{ opacity: 0, x: reverse ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <span className="serif" style={{ color: 'var(--color-primary)' }}>{role.toUpperCase()}</span>
        <h2 className="serif">{name}</h2>
        <div className={styles.parentsList}>
            <p className="gotu">Our beloved {role === "groom" ? "Son" : "Daughter"} of</p>
            {parents.map((parent, i) => (
                <p key={i} className="serif" style={{ fontSize: '1.4rem' }}>{parent}</p>
            ))}
        </div>
      </motion.div>
    </div>
  );
}
