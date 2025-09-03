import { motion } from "framer-motion";
import ShartingaHeader from "../components/ShartingaHeader";
import styles from "../styling/homepage.module.css";
import FrameCard from "../components/FrameCard";
import { useNavigate, Link } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";

import GroupPhoto from "../assets/pictures/group_stairs_photo.jpg"
import guyAndGirl from "../assets/pictures/guy_and_girl_outside.jpg"
import tripleThreat from "../assets/pictures/three_guys_lobby.jpg"
import twoGirlsBlur from "../assets/pictures/two_girls_blurfocus.jpg"
import guyWalking from "../assets/pictures/guy_in_brown_walking.jpg"
import girlBrown from "../assets/pictures/girl_in_brown.jpg"


function Homepage() {

    const navigate = useNavigate();
    const goToExplore = () => {
        navigate('/explore')
    };

    return (
        <>
            <ScrollToTop />
            <div className={styles.homepageContainer}>
                <ShartingaHeader />
                <hr />

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
                    <img src={guyAndGirl} className={styles.pictureOneHome} alt="Collection Preview" />
                    <div className={styles.collectionPreviewContent}>
                        <h2>View Our Latest Collection</h2>
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
                    <motion.img src={GroupPhoto}
                    alt="Five models on a staircase" 
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 1}} />
                </div>
                <br />

                <div >
                    <h2 style={{
                        "fontSize": "35px", 
                        "textAlign": "center" 
                        }}>Our Other Collections</h2>
                    <div className={styles.frameDisplay}>
                        <FrameCard src={tripleThreat} caption="WIDA YA EYES" />
                        <FrameCard src={twoGirlsBlur} caption="FOCUS" />
                        <FrameCard src={girlBrown} caption="URBAN MELODRAMA" />
                        <FrameCard src={guyWalking} caption="WHO GOES?" />
                    </div>
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
