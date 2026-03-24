"use client";

import { motion } from "framer-motion";
import styles from "./sections.module.css";
import { MessageCircle } from "lucide-react";

export default function RSVP() {
  return (
    <section className={`${styles.rsvpSection} section`}>
      <motion.div
        className={styles.rsvpCard}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <span className="serif" style={{ color: 'var(--color-primary)' }}>R.S.V.P</span>
        <h2 className="serif" style={{ fontSize: '2.5rem', margin: '20px 0' }}>WE HOPE TO SEE YOU THERE!</h2>
        <p className="gotu">Kindly respond by August 10, 2026</p>
        
        <a href="https://wa.me/911234567890" target="_blank" rel="noopener noreferrer" className={styles.whatsappBtn}>
          <MessageCircle size={20} />
          <span>RSVP VIA WHATSAPP</span>
        </a>
      </motion.div>
    </section>
  );
}
