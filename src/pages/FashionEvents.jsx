import styles from "../styling/fashionevents.module.css"
import fameIntroVid from "../assets/videos/fame_vid1.mp4"
import ShartingaHeader from "../components/ShartingaHeader"

import fame1 from "../assets/pictures/fame1.jpg"
import fame2 from "../assets/pictures/fame2.jpg"
import fame3 from "../assets/pictures/fame3.jpg"
import fame4 from "../assets/pictures/fame4.jpg"
import fame5 from "../assets/pictures/fame5.jpg"
import fame6 from "../assets/pictures/fame6.jpg"
import fame7 from "../assets/pictures/fame7.jpg"
import fame8 from "../assets/pictures/fame8.jpg"
import fame9 from "../assets/pictures/fame9.jpg"
import fame10 from "../assets/pictures/fame10.jpg"
import { useNavigate } from "react-router-dom"
import ScrollToTop from "../components/ScrollToTop"


function FashionEvents() {

    const navigate = useNavigate();

    const backHome = () => {
        navigate('/')
    }

    return (
        <>
            <ScrollToTop />
            <ShartingaHeader />
            <hr />
            <div className={styles.pageContainer}>
                
                <h2 style={{textAlign: "center"}}>FAME 2025</h2>
                <div style={{
                    display: "flex", 
                    justifyContent: "center"
                }}>
                    <video width={400} controls>
                        <source src={fameIntroVid} />
                        Your browser can not display the video here.
                    </video>
                </div>
                <br />
                
                <p style={{textAlign: "center"}}>Our stellar collection was on full display 
                    on the FAME 2025 runway, hosted in the garden city of Rivers, Nigeria. 
                </p>
                <br />

                <h2 style={{
                    textAlign: "center"
                }}>FAME 2025 Runway Collection</h2>

                <div className={styles.displayArea}>
                    <img src={fame1} className={styles.fameImage} />
                    <img src={fame2} className={styles.fameImage} />
                    <img src={fame3} className={styles.fameImage} />
                    <img src={fame4} className={styles.fameImage} />
                    <img src={fame5} className={styles.fameImage} />
                    <img src={fame6} className={styles.fameImage} />
                    <img src={fame7} className={styles.fameImage} />
                    <img src={fame8} className={styles.fameImage} />
                    <img src={fame9} className={styles.fameImage} />
                    <img src={fame10} className={styles.fameImage} />
                </div>
                <br />

                <div style={{
                    display: "flex", 
                    justifyContent: "center"
                }}>
                    <button className={styles.homeButton} 
                    onClick={backHome}>Back Home</button>
                </div>
                <br />
                
            </div>
        </>
    )
}

export default FashionEvents;