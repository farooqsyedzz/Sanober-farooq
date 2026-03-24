"use client";

import { motion } from "framer-motion";
import styles from "./sections.module.css";

const infoItems = [
  { title: "DRESS CODE", desc: "Traditional / Formal", icon: "https://framerusercontent.com/images/fYRKGxDRZ6jYoWaWFqoL0kvBV2M.png" },
  { title: "PARKING", desc: "Available at the venue", icon: "https://framerusercontent.com/images/a6hem7eXgySxttf4hkfazX1KQg.png" },
  { title: "CHILDREN", desc: "All are welcome", icon: "https://framerusercontent.com/images/ySjcx5lvJ1tclhTZAudrTerk.png" },
];

export default function InfoGrid() {
  return (
    <section className={`${styles.infoSection} section`}>
      <h2 className="serif">Things To Know</h2>
      <div className={styles.infoGrid}>
        {infoItems.map((item, i) => (
          <motion.div 
            key={i} 
            className={styles.infoItem}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
          >
            <div className={styles.infoIconWrapper}>
              <img src={item.icon} alt={item.title} />
            </div>
            <h4 className="serif">{item.title}</h4>
            <p className="gotu">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
