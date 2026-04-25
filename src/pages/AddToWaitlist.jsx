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

    const addCustomertoWaitlist = async () => {
        return;
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
                initial={{opacity: 0}}
                animate={{opacity: 1}} 
                transition={{duration: 0.5}} 
                width={400} 
                loading="lazy"
                src="/images/IMG_9578.JPG" />
                <h2>{productName}</h2>
                {demo && 
                <h2><b>Alligator Varsity Jacket by Shartinga Mirari</b></h2>}

                <div className={styles.form}>
                    <p>When more jacketa are released, your order will be reserved.</p>
                    <label>How many would you like?<br /> 
                        <input 
                        name='units'
                        value={order.units}
                        className={styles.unitsField}
                        type="number" 
                        required 
                        onChange={handleChange} />
                    </label>
                    <br />

                    <label>Email: <br />
                        <input 
                        name='email'
                        value={order.email}
                        className={styles.formField}
                        type="email" 
                        placeholder="Email address" 
                        required 
                        onChange={handleChange} />
                    </label>
                    <br />

                    <button 
                    className={styles.button}
                    onClick={addCustomertoWaitlist}>Join Waitlist</button>
                    <br />
                    <br />
                </div>
            </motion.div>
        </>
    )
};

export default AddToWaitlist;