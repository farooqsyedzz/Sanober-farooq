"use client";

import styles from "./sections.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
         <h2 className={`${styles.footerNames} serif`}>FAROOQ & SANOBER</h2>
         
         <div className={styles.footerLinks}>
            <a href="#">HOME</a>
            <a href="#">EVENTS</a>
            <a href="#">GALLERY</a>
            <a href="#">RSVP</a>
         </div>
         
         <div className={styles.credits}>
            <p>© 2026. Made with ❤️ by <strong>Farooq Syed</strong></p>
         </div>
      </div>
    </footer>
  );
}
