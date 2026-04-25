import { useState } from "react";
import styles from "../styling/collections.module.css";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Collections() {


    const [mainImage, setMainImage] = useState("/images/IMG_0306.PNG")
    const [selectedSize, setSelectedSize] = useState("");

    const [noSize, setNoSize] = useState(false);

    const navigate = useNavigate();

    const goToCheckout = () => {
        if (selectedSize === "") {
            setNoSize(true);
            setTimeout(() => { setNoSize(false) }, 2000)
            return;
        } else {
            navigate("/waitlist", { state: { size: selectedSize } })
        }  
    };

    return (
        <>
            <motion.div 
            animate={{ opacity: [0, 1], x: [50, 0] }}
            transition={{ duration: 0.3 }}
            className={styles.pageContainer}>

                <div className={styles.clothingImages}>
                    <div className={styles.mainImage}>
                        <AnimatePresence>
                            <motion.img 
                            animate={{ opacity: [0, 1] }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1 }}
                            src={mainImage} />
                        </AnimatePresence>
                        
                    </div>
                    <br />

                    <div className={styles.miniImages}>
                        <img onClick={() => { setMainImage("/images/IMG_0306.PNG") }} src="/images/IMG_0306.PNG" />
                        <img onClick={() => { setMainImage("/images/IMG_9578.JPG") }} src="/images/IMG_9578.JPG" />
                        <img onClick={() => { setMainImage("/images/IMG_0310.PNG") }} src="/images/IMG_0310.PNG" />
                    </div>
                </div>

                <div className={styles.clothingDetails}>
                    <h2>SM ALLIGATOR VARSITY JACKET</h2>
                    <p style={{ margin: "0" }}>SM-001</p>

                    <ul className={styles.qualities}>
                        <li>DEEP BLACK AND LUSTROUS CROC MATERIAL</li>
                        <li>RHEINSTONE 'SHARTINGA' EMBELLISHMENT</li>
                        <li>LIMITED EDITION ARTIFACT</li>
                        <li>SIGNATURE ARCHITECTURAL SILHOUETTE</li>
                    </ul>
                    

                    <p>SIZE</p>
                    {/* SIZE SELECT COMPONENT GOES HERE */}
                    <ul className={styles.sizeSelect}>
                        <li 
                        style={{ outline: selectedSize === "S" ? "2px solid green" : "" }}
                        onClick={() => { setSelectedSize("S") }}>S</li>
                        <li 
                        style={{ outline: selectedSize === "M" ? "2px solid green" : "" }}
                        onClick={() => { setSelectedSize("M") }}>M</li>
                        <li 
                        style={{ outline: selectedSize === "L" ? "2px solid green" : "" }}
                        onClick={() => { setSelectedSize("L") }}>L</li>
                        <li 
                        style={{ outline: selectedSize === "XL" ? "2px solid green" : "" }}
                        onClick={() => { setSelectedSize("XL") }}>XL</li>
                    </ul>
                    

                    <p className={styles.price}>£114</p>
                    
                    <div style={{
                        display: "flex", 
                        justifyContent: "center"
                    }}>
                        <button 
                        onClick={goToCheckout}
                        className={styles.acquireButton}>ACQUIRE</button>
                    </div>
                    {noSize && <p>You haven't chosen a size yet.</p>}
                    
                    <br />

                    <details>
                        <summary>FABRIC & CARE</summary>
                        <p></p>
                    </details>

                    <details>
                        <summary>AUTHENTICITY</summary>
                        <p></p>
                    </details>
                </div>

            </motion.div>
        </>
    )
};

export default Collections;