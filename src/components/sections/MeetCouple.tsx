"use client";

import { motion } from "framer-motion";
import styles from "./sections.module.css";
import CoupleCard from "./CoupleCard";

export default function MeetCouple() {
  return (
    <section className={styles.meetCoupleSection}>
      <div className={styles.meetCoupleContent}>
        <motion.h2 
            className={`${styles.meetCoupleTitle} serif`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
        >
          MEET THE BRIDE AND GROOM
        </motion.h2>
        
        <motion.p 
            className={styles.meetCoupleDesc}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
        >
We are truly grateful to Allah (SWT) that you will be joining us to celebrate this blessed occasion of our Nikah. Your presence and prayers mean a lot to us, and we sincerely thank you for your kindness. We look forward to celebrating together at the wedding functions, Insha’Allah.        </motion.p>

        <div className={styles.coupleCardsRow}>
          <CoupleCard 
            role="groom"
            name="SYED FAROOQ"
            profession="B.Tech Software Engineer"
            image="/images/groom.png"
            parents={["Mr. Syed Mohammed Rafi", "Mrs. Syed NoorJahan"]}
          />
          
          <CoupleCard 
            role="bride"
            name="SHAIK SANOBER"
            profession="B.Tech"
            image="/images/bride.png"
            parents={["Mr. Shaik Khader valli", "Mrs. Shaik Akthar begum"]}
            reverse
          />
        </div>
      </div>
    </section>
  );
}
