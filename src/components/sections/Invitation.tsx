"use client";

import { motion } from "framer-motion";
import styles from "./sections.module.css";

export default function Invitation() {
  return (
    <section className={styles.inviteSectionFullBleed}>
      <motion.div
        className={styles.inviteTextContainer}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <span className={styles.bismillahArabicLarge}>بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ</span>
        <p className={styles.bismillahEnglish}>Bismillahir Rahmanir Raheem</p>

        <div className={styles.familyNames}>
          <p className={styles.heavenlyBlessings}>WITH THE BLESSINGS OF ALLAH (SWT)</p>
          <p className={styles.familyName}> Mr. Syed  Mohammed Rafi & Mrs. Syed Noor Jahan</p>
          <span className={styles.ampersandSeperator}>&</span>
          <p className={styles.familyName}>Mr.Shaik Khader valli & Mrs. Shaik Akthar begum</p>
        </div>

        <div className={styles.inviteMain}>
           <h3 className={styles.inviteTitle}>INVITE</h3>
           <p className={styles.inviteSub}>You to join us in the wedding celebrations of</p>
        </div>
        
        <div className={styles.coupleNames}>
          <h2 className={styles.hugeName}>FAROOQ</h2>
          <span className={styles.withText}>WITH</span>
          <h2 className={styles.hugeName}>SANOBER</h2>
        </div>
        
        <div className={styles.saveTheDateStrip}>
          <p className={styles.stdLabel}>SAVE THE DATE</p>
          <div className={styles.dateDisplay}>
            05 APRIL 2026
          </div>
        </div>
      </motion.div>
    </section>
  );
}
