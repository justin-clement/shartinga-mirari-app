import { useState } from "react";
import { motion } from "framer-motion";
import styles from "../styling/fashioncard.module.css";
import { Link } from "react-router-dom";

function FashionCard({ image, caption, link }) {
  const [isScaled, setIsScaled] = useState(false);

  return (
    <Link to={link} className={styles.cardLink}>
      <div className={styles.fashionCard}>
        <div className={styles.imageWrapper}>
          <motion.img
            src={image}
            alt={caption}
            className={styles.fashionCardImage}
            animate={{ scale: isScaled ? 1.07 : 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          />
          <button
            className={styles.frostedButton}
            onMouseEnter={() => setIsScaled(true)}
            onMouseLeave={() => setIsScaled(false)}
            onFocus={() => setIsScaled(true)}
            onBlur={() => setIsScaled(false)}
          >
            Check Out
          </button>
        </div>
        <h2 className={styles.fashionCardCaption}>{caption}</h2>
      </div>
    </Link>
  );
}

export default FashionCard;