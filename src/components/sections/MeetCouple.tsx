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
          We are both truly grateful to Allah (SWT) that you will be joining us to celebrate this blessed day of our Nikah. The love and duas shown to us by so many people since our Nikah has been incredibly moving and has touched us deeply. We would like to take this opportunity to thank everyone most sincerely for their kindness and prayers. We are truly looking forward to seeing you at the wedding functions, Insha’Allah.
        </motion.p>

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
