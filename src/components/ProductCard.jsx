import styles from "../styling/productcard.module.css"
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";



function ProductCard({ src, productName, productId }) {

    const navigate = useNavigate();

    const productPage = () => {
        navigate(`/product/${productId}`, { state: { imgUrl: src, name: productName } })
    };

    return (
        <div className={styles.displayCard} onClick={productPage}>
            <motion.img src={src} loading="lazy"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.2}} 
             />
            <motion.p 
            initial={{ opacity: 0, y: -15 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1.3 }}><b>{productName}</b></motion.p>
        </div>
    )
}

export default ProductCard;