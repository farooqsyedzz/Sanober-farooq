"use client";

import styles from "./sections.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
         <h2 className={`${styles.footerNames} serif`}>FAROOQ & SANOBER</h2>
         
         <div className={styles.footerLinks}>
            <a href="#hero">HOME</a>
            <a href="#events">EVENTS</a>
            <a href="#gallery">GALLERY</a>
            {/* <a href="#rsvp">RSVP</a> */}
         </div>
         
         <div className={styles.credits}>
            <p>© 2026. Made with ❤️ by <strong>Farooq Syed</strong></p>
         </div>
      </div>
    </footer>
  );
}
