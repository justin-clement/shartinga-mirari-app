import ProductCard from "../components/ProductCard";
import ShartingaHeader from "../components/ShartingaHeader";
import styles from "../styling/explorepage.module.css"
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

import snookerModel from "../assets/pictures/model_at_snooker2.jpg"
import creamGirl from "../assets/pictures/girl_in_cream.jpg"
import hoodieGuy from "../assets/pictures/guy_in_darkgrey_hoodie.jpg"
import ScrollToTop from "../components/ScrollToTop";
import sittingGirl from "../assets/pictures/sitting_girl_aesthetic.jpg"
import hatGuy from "../assets/pictures/guy_in_hat.jpg"

function ExplorePage() {
    const navigate = useNavigate();

    return (
        <>
            <ScrollToTop />
            <div className={styles.pageContainer}>
                <ShartingaHeader />

                {/* LATEST SECTION */}
                <div className={styles.latestSection}>
                    <motion.h2 
                    initial={{opacity: 0}} 
                    animate={{opacity: 1}} 
                    transition={{duration: 2.5}}
                    style={{textAlign: 'center'}}>Our Latest</motion.h2>
                    <p className={styles.subtext}>Discover the newest arrivals and trending looks.</p>
                    <div className={styles.latestDisplay}>
                        <ProductCard src={snookerModel} productName="Summer Brown Two Piece" />
                        <ProductCard src={creamGirl} productName="Summer Cream Two Piece" />
                        <ProductCard src={hoodieGuy} productName="Hoodie de Shartinga" />
                        <ProductCard src={snookerModel} productName="Summer Brown Two Piece" />
                        <ProductCard src={creamGirl} productName="Summer Cream Two Piece" />
                        <ProductCard src={hoodieGuy} productName="Hoodie de Shartinga" />
                    </div>
                </div>
                <hr width={150} />

                {/* CATALOGUE SECTION */}
                <div className={styles.catalogueSection}>
                    <h3 style={{textAlign: 'center'}}>From Our Catalogue</h3>
                    <p className={styles.subtext}>Browse timeless pieces from our full collection.</p>
                    <div className={styles.catalogueDisplay}>
                        <ProductCard src={sittingGirl} productName="Casual Chic + Shoetinga" />
                        <ProductCard src={creamGirl} productName="Summer Cream Two Piece" />
                        <ProductCard src={hoodieGuy} productName="Hoodie de Shartinga" />
                        <ProductCard src={snookerModel} productName="Summer Brown Two Piece" />
                    </div>
                    <br />
                    <Link className={styles.link} style={{textAlign: "center"}}>View More From Us</Link>
                </div>
                <hr width={150} />

                {/* STYLE SECTION */}
                <div className={styles.styleSection}>
                    <h3 style={{textAlign: 'center'}}>Style</h3>
                    <p className={styles.subtext} style={{marginTop: '2px', marginBottom: '10px'}}>See Things From Our Perspective</p>
                    <div className={styles.styleDisplay}>
                        <ProductCard src={hatGuy} productName="URBAN CALM" />
                        <ProductCard src={hoodieGuy} productName="CASUAL" />
                        <ProductCard src={creamGirl} productName="FOR LADIES" />
                        <ProductCard src={snookerModel} productName="FOR GENTS" />
                    </div>
                    <br />
                    <Link className={styles.link} style={{textAlign: "center"}}>View More of Our Styling</Link>
                </div>
                <hr width={150} />

                <div className={styles.styleSection}>
                    <h3 style={{textAlign: 'center'}}>Events</h3>
                    <p className={styles.subtext}>Join us at exclusive shows and pop-ups.</p>
                    <div className="eventsDisplay">
                        <h3>Check Us Out!</h3>
                        <p 
                        style={{
                            color: "grey"
                        }}>This is where you will find news and media from events we're part of.</p>
                    </div>
                </div>
                <p style={{textAlign: "center"}}><Link to="/" className={styles.link}>Back to Home</Link></p>
                <footer className={styles.footer}>
                    <ul>
                        <li><Link className={styles.link} to="/about">About Shartinga</Link></li>
                        <li>Customer Service</li>
                        <li>Privacy Policy</li>
                        <li>Terms & Conditions</li>
                    </ul>
                    <p className={styles.copyright}>© {new Date().getFullYear()} SHARTINGA MIRARI</p>
                </footer>
            </div>
        </>
        
    )
};

export default ExplorePage;