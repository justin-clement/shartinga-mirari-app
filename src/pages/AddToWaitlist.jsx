import { useParams } from "react-router-dom";
import styles from "../styling/addtowaitlist.module.css"
import { useState } from "react";
import { motion } from "framer-motion";
import SizeSelect from "../components/SizeSelect";

function AddToWaitlist({ productName }) {

    const [demo, setDemo] = useState(true);

    const { productId } = useParams();

    const [chosenSize, setChosenSize] = useState('');

    const [order, setOrder] = useState({
        id: productId, 
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

    const addCustomertoWaitlist = () => {
        return;
    };

    return (
        <>
            <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className={styles.pageContainer}>
                <h1>Waitlist</h1>
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
                <p>When new stock comes out, your order will be reserved.</p>
                

                <div className={styles.form}>
                    <SizeSelect 
                    sizesArray={['S', 'M', 'L', 'XL']} 
                    onSizeChange={setChosenSize}/>
                    <br />

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