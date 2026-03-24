"use client";

import styles from "./sections.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
         {/* <h2 className="serif" style={{ fontSize: '3rem', color: 'var(--color-primary)' }}>RAABTA</h2> */}
         <p className="gotu">Farooq And Sanober</p>
         <div className={styles.footerLinks}>
            <a href="#">HOME</a>
            <a href="#">EVENTS</a>
            <a href="#">GALLERY</a>
            <a href="#">RSVP</a>
         </div>
         <p className="gotu" style={{ marginTop: '40px', fontSize: '0.9rem', opacity: 0.7 }}>
            © 2026 Wedding. All rights reserved.
         </p>
      </div>
    </footer>
  );
}
