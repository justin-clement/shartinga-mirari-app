import ShartingaHeader from "../components/ShartingaHeader"
import styles from '../styling/aboutshartinga.module.css'
import photo1 from '../assets/pictures/guy_in_hat2.jpg'
import threeGees from '../assets/pictures/three_guys_lobby.jpg'
import chessGirls from '../assets/pictures/two_girls_chess.jpg'
import { motion } from 'framer-motion'
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
                        <p><i>Shartinga</i>, coined from street slang in Port Harcourt, was once an 
                        exaggerated way of saying "nice shirt". But over time, it came to stand for more. 
                        Fashion. Identity. Confidence. Culture.
                        </p>                    
                        <p>
                            The word <i>Mirari</i> - Latin for "to wonder at" - redefined our vision. 
                            Together, <i>Shartinga Mirari</i> also means wondering at nice clothes. 
                            Inspiring wonder by fashion. 
                            We believe in celebrating culture, inspiring real confidence, and creating pieces 
                            that make you feel alive.
                        </p>
                        <p>We view clothing as expression, fabric as discovery, and style as power. 
                            Rooted in Africa, reaching for the stars, <i>Shartinga Mirari</i> is Afrofuturism 
                            in motion: where identity and fashion meet to shape tomorrow.
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
                            transition={{ duration: 1.3 }}>A Journey Through Motion.</motion.h2>
                            <p>Our path has carried us across continents, weaving new textures into our story. 
                                From the Garden City to the buzzing rhythms of London, each place leaves its mark - 
                                shaping taste, refining style, expanding vision.
                            </p>
                            <p>We are the sum of these journeys. Rooted in Africa, inspired by the world, 
                                we persist with our craft: quality that transcends borders and time.
                            </p>
                            <p>Shartinga Mirari isn't just movement through space - it's motion toward 
                                the future.
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
                        transition={{ duration: 1.3 }}>Core.</motion.h2>
                        <p>The scar in our emblem is no flaw, but a symbol of resilience. 
                            An outward sign of inner strength. It carries the memory of our journey, 
                            the trials we've faced, the challenges we've overcome. 
                            It is a reminder that through it all, we endure. We rise.
                            Standing alive, awoken, strong.
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