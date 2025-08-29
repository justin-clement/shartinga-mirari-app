import ShartingaHeader from "../components/ShartingaHeader"
import styles from '../styling/aboutshartinga.module.css'
import photo1 from '../assets/pictures/guy_in_hat2.jpg'
import threeGees from '../assets/pictures/three_guys_lobby.jpg'
import chessGirls from '../assets/pictures/two_girls_chess.jpg'
import { motion, scale } from 'framer-motion'
import { useNavigate } from "react-router-dom"
import ScrollToTop from "../components/ScrollToTop"


function AboutShartinga() {

    const navigate = useNavigate();

    const goHome = () => {
        navigate('/')
    }

    return (
        <>
            <ScrollToTop />
                <div>
                <ShartingaHeader />

                <div className={styles.containerOne}>
                    <motion.img className={styles.imageOne} 
                    src={threeGees}
                    initial={{ opacity: 0, scale: 1.3 }} 
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{duration: 1.1}} />
                    <motion.div className={styles.bioStatement} 
                        initial={{ opacity: 0, y: 20 }} 
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }} 
                        transition={{ duration: 1.3 }}>
                        <motion.h2 
                        initial={{ opacity: 0, y: 20 }} 
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }} 
                        transition={{ duration: 1.3 }}>Born in the Garden City.</motion.h2>
                        <p>The word, <i>Shartinga</i>, coined by a friend, began as casual slang 
                            in Port Harcourt, Nigeria. Originally referencing a "nice shirt", our meaning 
                            has deepened over time to redefine fashion and 
                            culture. We wanted to speak to identity and style, and also, confidence. 
                            Eventually, <i>Mirari</i> was added to our name, a Latin word with the meaning, "to 
                            wonder at". Together, Shartinga Mirari stands redefined: Fashion Wonder. 
                        </p>
                    </motion.div>
                </div>
                <br />

                <div>
                    <div className={styles.containerTwo}>
                        <motion.img className={styles.imageOne} 
                        src={photo1}
                        initial={{ opacity: 0, scale: 1.2 }} 
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{duration: 1.1}} />
                        <motion.div className={styles.bioStatement} 
                            initial={{ opacity: 0, y: 20 }} 
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }} 
                            transition={{ duration: 1.3 }}>
                            <motion.h2 
                            initial={{ opacity: 0, y: 20 }} 
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }} 
                            transition={{ duration: 1.3 }}>With a Touch of Europe.</motion.h2>
                            <p>Motion is described as changing position over time, and we did change position. 
                                Change continents. We are the sum total of our experiences and our 
                                time in the seaside city of Brighton, England has left its imprint on our tastes and style. 
                            </p>
                            <p>Home or abroad, we persist with our quality. 
                            </p>
                        </motion.div>
                    </div>
                </div>
                <br />

                <div className={styles.containerThree}>
                    <motion.img className={styles.imageThree} 
                    src={chessGirls}
                    initial={{ opacity: 0, y: 20 }} 
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{duration: 1.1}} />
                    <motion.div className={styles.bioStatement} 
                        initial={{ opacity: 0, y: 20 }} 
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }} 
                        transition={{ duration: 1.3 }}>
                        <motion.h2 
                        initial={{ opacity: 0, y: 20 }} 
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }} 
                        transition={{ duration: 1.3 }}>Who We Are.</motion.h2>
                        <p>The scratch in our emblem is no flaw, but a symbol of 
                            resilience, an outward sign of inward strength. It's a 
                            reminder of our experiences, and that despite the trials 
                            or challenges that have come our way, here we stand. Alive. Strong. 
                        </p>
                    </motion.div>
                </div>
                <br />

                <div style={{
                    display: "flex", 
                    justifyContent: "center"
                }}>
                    <button className={styles.homeButton} 
                    onClick={goHome}>HOMEPAGE</button>
                </div>
                <br />

                <p style={{textAlign: "center"}}>© 2025 SHARTINGA MIRARI</p>
            </div>
        </>
    )
};

export default AboutShartinga;