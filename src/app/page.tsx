import Hero from "@/components/sections/Hero";
import Quote from "@/components/sections/Quote";
import Invitation from "@/components/sections/Invitation";
import MeetCouple from "@/components/sections/MeetCouple";
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

          <div className={styles.routePosition}>
             <SeeTheRoute />
          </div>
        </div>
      </div>

      <MeetCouple />

      <div style={{ background: '#fff' }}>
        <Story />
        {/* <Gallery /> */}
        <Countdown />
        <Footer />
      </div>
    </main>
  );
}
