import { motion } from "framer-motion";
import styles from "../styling/homepage.module.css";
import FrameCard from "../components/FrameCard";
import { useNavigate, Link } from "react-router-dom";



function Homepage() {

    const navigate = useNavigate();

    const goToExplore = () => {
        navigate('/explore')
    };

    const goToWaitlist = () => {
        navigate('/waitlist/0001')
    };

    const goToEvents = () => {
        navigate('/events')
    };

    return (
        <>
            <div className={styles.homepageContainer}>
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
                <br />
                <br />
                <br />
                <br />

                
                <div>
                    <h2 
                    style={{
                        fontSize: "40px", 
                        textAlign: "center", 
                    }}>Our Latest Addition</h2>
                    <FrameCard 
                    src="/images/lone_jacket.jpeg" 
                    caption="SHARTINGA MIRARI Alligator Varsity Jacket"
                    buttonText="Join Waitlist" 
                    buttonFunction={goToWaitlist} />
                </div>

                {/* Collection Preview */}
                <motion.section
                    className={styles.collectionPreview}
                    initial={{ opacity: 0, x: 50}}
                    whileInView={{ opacity: 1, x: 0}}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <img 
                    src="/images/IMG_0310.PNG" 
                    className={styles.pictureOneHome} alt="Collection Preview" />
                    <div className={styles.collectionPreviewContent}>
                        <button
                            className={styles.exploreButton}
                            onClick={goToExplore}
                        >
                            <b>TAKE A LOOK</b>
                        </button>
                    </div>
                </motion.section>

                {/* Brief About Section */}
                <div className={styles.briefAbout}>
                    <motion.div 
                    initial={{x: -20, opacity: 0}}
                    whileInView={{x: 0, opacity: 1}}
                    transition={{ duration: 1 }}
                    className={styles.briefText}>
                        <h2>Across Worlds, One Vision.</h2>
                        <p>Continually aware of heritage, and with expanded imagination, we move 
                            in rhythm with the future - crafting fashion that's alive, 
                            bold, and visionary.
                        </p>
                    </motion.div>
                    <motion.img 
                    style={{
                        width: "100vw"
                    }}
                    src="/images/IMG_9624.JPG"
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
                        }}>Shop Now</h2>

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
            </div>
        </>
        
    );
}

export default Homepage;
