import axios from "axios";
import { useEffect, useState } from "react";
import styles from "../styling/carticon.module.css"


function CartIcon() {

    const [items, setItems] = useState(0);

    // useEffect TO ALWAYS GET THE NUMBER OF CART ITEMS 
    // ON EVERY RENDER.
    useEffect(() => {
        const updateCart = async () => {
            const url = `http://localhost:8000/cart`;
            try {
                const { data } = await axios.get(url);
                setItems(data.numberOfItems);
            } catch (error) {
                alert("We couldn't update the cart right now.")
                return;
            }
        };

        updateCart();

    }, [])


    return (
        <div className={styles.cart}>
            <p className={styles.cartText}>CART</p>
            <p className={styles.cartNumber}>{items}</p> 
        </div>
    );
}

export default CartIcon;