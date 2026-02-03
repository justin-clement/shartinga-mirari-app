import styles from "../styling/framecard.module.css"
import { motion } from "framer-motion";

function FrameCard({ src, caption, buttonText, buttonFunction }) {

    return (
        <motion.div 
        initial={{ x: 30 }} 
        whileInView={{ x: 0 }} 
        transition={{ duration: 0.8 }}
        className={styles.frame}>
            <img 
            loading="lazy"
            src={src} 
            className={styles.image} />
            <br />
            <p className={styles.caption}>{caption}</p>
            <button 
            onClick={buttonFunction}
            className={styles.button}>{buttonText}</button>
        </motion.div>
    )
};

export default FrameCard;