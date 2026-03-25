"use client";

import { motion } from "framer-motion";
import styles from "./sections.module.css";

const events = [
  { title: "Shukrana", date: "Apr 04, 2026", time: "09:00 PM", location: "RLT Convention Kadapa" },
  { title: "Nikkah", date: "Apr 05, 2026", time: "11:00 AM", location: "RLT Convention Kadapa" },
  { title: "Valima", date: "Apr 05, 2026", time: "02:00 PM", location: "RLT Convention Kadapa" },
  // { title: "Engagement", date: "Aug 20, 2026", time: "12:00 PM", location: "Crystal Garden" },
  // { title: "Nikah", date: "Aug 20, 2026", time: "08:30 PM", location: "Grand Mosque" },
  // { title: "Walima", date: "Aug 21, 2026", time: "07:00 PM", location: "Regal Banquet" },
];

export default function Events() {
  return (
    <section id="events" className={styles.eventsTransparent} style={{ padding: '200px 0' }}>
      <h2 className="serif" style={{ fontSize: '4.5rem', marginBottom: '100px', color: 'white' }}>Wedding Events</h2>
      
      <div className={styles.eventsGrid}>
        {events.map((ev, i) => (
          <motion.div
            key={i}
            className={styles.eventCardCapsule}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
          >
            {/* Oval Frame Background */}
            <img src="/images/oval_frame_1.png" alt="Card Frame" className={styles.ovalFrame} />
            
            {/* Flower Top Right */}
            <img src="/images/oval_frame_2.png" alt="Flower Top" className={styles.flowerTop} />
            
            {/* Flower Bottom Left */}
            <img src="/images/oval_frame_3.png" alt="Flower Bottom" className={styles.flowerBottom} />
            
            {/* Content */}
            <div className={styles.eventContent}>
              <h3 className="serif">{ev.title}</h3>
              <p className="gotu">{ev.date}</p>
              <p className="gotu">{ev.time}</p>
              <p className="gotu" style={{ marginTop: '20px', fontSize: '0.9rem' }}>{ev.location}</p>
              <a 
                href="https://www.google.com/maps/dir//RLT+Convention+A%2Fc,+Kadapa,+Ganagapeta,+Cuddaram,+Andhra+Pradesh+516002/@14.4958307,78.8269379,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bb371ac622cae35:0xcd4b0940ba98075f!2m2!1d78.8306359!2d14.4866486?entry=ttu&g_ep=EgoyMDI2MDMxOC4xIKXMDSoASAFQAw%3D%3D" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.routeBtnTeal}
              >
                See the route
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
