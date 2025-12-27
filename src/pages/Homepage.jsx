import { motion } from "framer-motion";
import ShartingaHeader from "../components/ShartingaHeader";
import styles from "../styling/homepage.module.css";
import FrameCard from "../components/FrameCard";
import { useNavigate, Link } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";

import GroupPhoto from "../assets/pictures/blue_girls_black_guy.jpg"
import tileGirl from "../assets/pictures/girl_against_tiles.jpg"
import guyWalking from "../assets/pictures/guy_in_brown_walking.jpg"


import darkShartinga from "../assets/pictures/shartinga_dark.jpg"
import comp1 from "../assets/pictures/comp_1.jpg"
import comp2 from "../assets/pictures/comp_2.jpg"
import comp3 from "../assets/pictures/comp_3.jpg"
import comp4 from "../assets/pictures/comp_4.jpg"
import comp5 from "../assets/pictures/girl_in_cream.jpg"
import comp6 from "../assets/pictures/guy_in_darkgrey_hoodie.jpg"
import comp7 from "../assets/pictures/girl_in_glasses_closeup.jpg"
import comp8 from "../assets/pictures/cool_guy_art_deco.jpg"


function Homepage() {

    const navigate = useNavigate();

    const goToExplore = () => {
        navigate('/explore')
    };

    const goToEvents = () => {
        navigate('/events')
    };

    return (
        <>
            <ScrollToTop />
            <div className={styles.homepageContainer}>
                <ShartingaHeader />

                {/* Hero Video Section */}
                <section className={styles.heroSection}>
                    <video autoPlay muted loop playsInline className={styles.landingVideo}>
                        <source src="/videos/IMG_8491.mp4" type="video/mp4" />
                        Your browser doesn't support the video tag.
                    </video>

                    {/* Overlay text */}
                    <motion.div
                        className={styles.introMessage}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                    >
                        <h1><i>Cultural. Confident. Set to Inspire.</i></h1>
                        <p><b>SHARTINGA</b></p>
                    </motion.div>
                </section>
                <br />

                {/* Collection Preview */}
                <motion.section
                    className={styles.collectionPreview}
                    initial={{ opacity: 0, y: 50}}
                    whileInView={{ opacity: 1, y: 0}}
                    viewport={{ once: true }}
                    transition={{ duration: 2, ease: "easeOut" }}
                >
                    <img src="/images/IMG_9578.JPG" className={styles.pictureOneHome} alt="Collection Preview" />
                    <div className={styles.collectionPreviewContent}>
                        <h2>View Our Collection</h2>
                        <button
                            className={styles.exploreButton}
                            onClick={goToExplore}
                        >
                            EXPLORE
                        </button>
                    </div>
                </motion.section>

                {/* Brief About Section */}
                <div className={styles.briefAbout}>
                    <div className={styles.briefText}>
                        <h2>Across Worlds, One Vision.</h2>
                        <p>Continually aware of heritage, and with expanded imagination, we move 
                            in rhythm with the future - crafting fashion that's alive, 
                            bold, and visionary.
                        </p>
                    </div>
                    <motion.img src="/images/IMG_9624.JPG"
                    alt="Bold in blues and blacks." 
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 1}} />
                </div>
                <br />

                <div className={styles.complementarySection}>
                    <h2 style={{
                        "fontSize": "35px", 
                        "textAlign": "center" 
                        }}>Complementary Catalogues</h2>

                    <div className={styles.frameDisplay}>
                        <motion.img 
                        src="/images/IMG_9621.JPG"
                        width={400}
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{duration: 1}} />

                        {/* <FrameCard src={darkShartinga} /> */}
                        {/* <FrameCard src={comp1} /> */}
                        {/* <FrameCard src={comp2} /> */}
                        {/* <FrameCard src={comp3} />
                        <FrameCard src={comp4} />
                        <FrameCard src={comp5} />
                        <FrameCard src={comp6} />
                        <FrameCard src={guyWalking} />
                        <FrameCard src={comp7} /> */}
                        {/* <FrameCard src={comp8} /> */}
                    </div>
                </div>
                <br />

                <div onClick={goToEvents} className={styles.eventSection}>
                    <h3 style={{
                        textAlign: 'center', 
                        fontSize: '35px'}}>Events</h3>
                    <Link className={styles.link}
                     to='/events' 
                     style={{
                        color: "white", 
                        textAlign: "center"
                     }}>View our runway collection from FAME 2025.</Link>
                    
                </div>



                {/* Footer */}
                <footer className={styles.footer}>
                    <ul>
                        <li><Link className={styles.link} to="/about">About Shartinga</Link></li>
                        <li>Customer Service</li>
                        <li>Privacy Policy</li>
                        <li>Terms & Conditions</li>
                    </ul>
                    <br />
                    <p>© {new Date().getFullYear()} SHARTINGA MIRARI</p>
                </footer>
            </div>
        </>
        
    );
}

export default Homepage;
