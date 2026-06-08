import { useLocation, useParams } from "react-router-dom";
import styles from "../styling/addtowaitlist.module.css"
import { useState } from "react";
import { motion } from "framer-motion";
import SizeSelect from "../components/SizeSelect";

function AddToWaitlist({ productName }) {

    const location = useLocation();
    const chosenSize = location.state?.size;

    const [order, setOrder] = useState({
        size: chosenSize, 
        units: 1, 
        email: ''
    })

    const handleChange = (event) => {
        const { name, value } = event.target;
        setOrder(prev => ({
            ...prev, 
            [name]: value
        }))
    };

    const processPayment = () => {
        const url = "https://flutterwave.com/pay/alligator_varsity";
        window.open(url, "_blank", "noopener,noreferrer");
    };

    return (
        <>
            <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className={styles.pageContainer}>
                <br />

                <motion.img 
                animate={{opacity: [0, 1], y: [-20, 0]}} 
                transition={{duration: 0.5}} 
                width={400} 
                loading="lazy"
                src="/images/IMG_9578.JPG" />
                <h2>{productName}</h2>
                 
                <motion.h2 
                animate={{ y: [20, 0] }}
                transition={{ duration: 0.5 }}><b>Alligator Varsity Jacket from Shartinga Mirari</b></motion.h2>

                <div className={styles.form}>

                    {/* <label>How many would you like?<br /> 
                        <input 
                        name='units'
                        value={order.units}
                        className={styles.unitsField}
                        type="number" 
                        required 
                        onChange={handleChange} />
                    </label>
                    <br /> */}

                    <label><i>We'll notify you about your order via email: </i><br />
                        <input 
                        name='email'
                        value={order.email}
                        className={styles.formField}
                        type="email" 
                        placeholder="person@example.com" 
                        required 
                        onChange={handleChange} />
                    </label>
                    <br />

                    <button 
                    className={styles.button}
                    onClick={processPayment}>Place Order</button>
                    <br />
                    <br />
                </div>
            </motion.div>
        </>
    )
};

export default AddToWaitlist;