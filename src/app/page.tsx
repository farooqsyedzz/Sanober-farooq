import Hero from "@/components/sections/Hero";
import Quote from "@/components/sections/Quote";
import Invitation from "@/components/sections/Invitation";
import CoupleCard from "@/components/sections/CoupleCard";
import Events from "@/components/sections/Events";
import SeeTheRoute from "@/components/sections/SeeTheRoute";
import Story from "@/components/sections/Story";
import Gallery from "@/components/sections/Gallery";
import RSVP from "@/components/sections/RSVP";
import InfoGrid from "@/components/sections/InfoGrid";
import Countdown from "@/components/sections/Countdown";
import GlobalLanterns from "@/components/sections/GlobalLanterns";
import Footer from "@/components/sections/Footer";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      {/* Primary 5.8k tall background container */}
      <div className={styles.parallaxContainer}>
        <div className={styles.tallBackground}>
          <img 
            src="https://framerusercontent.com/images/uBiouh876wupNLU2FX6v6If8tHQ.png" 
            alt="Main Path" 
            className={styles.bgImage}
          />
        </div>
        
        {/* Global Lanterns (shared across first sections) */}
        <GlobalLanterns />
        
        {/* Absolutely positioned components based on analysis */}
        <div className={styles.contentLayer}>
          <div className={styles.heroPosition}>
            <Hero />
          </div>
          
          <div className={styles.quotePosition}>
            <Quote />
          </div>
          
          <div className={styles.invitationPosition}>
            <Invitation />
          </div>
          
          <div className={styles.eventsPosition}>
            <Events />
          </div>

          {/* New "See the Route" section */}
          <div className={styles.routePosition}>
             <SeeTheRoute />
          </div>
        </div>
      </div>

      {/* The following sections start naturally after the 5.8k parallax container */}
      <div style={{ background: '#fff' }}>
        <section className="section" style={{ background: 'white' }}>
          <CoupleCard 
            role="groom"
            name="SYED FAROOQ"
            image="https://framerusercontent.com/images/fKFg2vQEmI70QHKfOSr54pE7KQ4.jpeg"
            parents={["Mr. Syed Mohammed Rafi", "Mrs. Syed Noor Jahan"]}
          />
        </section>
        
        <section className="section" style={{ background: '#f8f8f8', marginTop: 0 }}>
          <CoupleCard 
            role="bride"
            name="SHAIK SANOBER"
            image="https://framerusercontent.com/images/vXYo7Ef7EIsZJPtxuKuBSurXF4.jpeg"
            parents={["Mr. Shaik Khader valli", "Mrs. Shaik Akthar begum"]}
            reverse
          />
        </section>

        <Story />
        <Gallery />
        {/* <RSVP /> */}
        {/* <InfoGrid /> */}
        <Countdown />
        <Footer />
      </div>
    </main>
  );
}
