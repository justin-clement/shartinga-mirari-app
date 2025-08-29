import { useEffect, useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import ShartingaHeader from "./ShartingaHeader";
import SizeSelect from "./SizeSelect";
import styles from "../styling/fashionitempage.module.css";
import { Link, useLocation, useParams } from "react-router-dom";

function FashionItemPage({ name }) {

    const location = useLocation();
    const { itemId } = useParams();

    let imageUrl = null;
    let itemName = null;
    
    // GET THE IMAGE SRC AND ITEM NAME FROM THE PASSED STATE.
    if (location.state) {
        imageUrl = location.state.imgUrl;
        itemName = location.state.name;
    };

    // STATE TO HANDLE DISPLAY TEXT FOR 'Add to Shopping List' BUTTON.
    const [add2Cart, setAdd2Cart] = useState(false);

    // STATE TO STORE A USER'S CHOSEN SIZE.
    const [userSize, setUserSize] = useState(null);

    // CALLBACK FUNCTION TO GET A USER'S SIZE FROM SizeSelect
    const fetchSize = (size) => {
        setUserSize(size)
    };

    // FUNCTION TO ADD OR REMOVE ITEM FROM CART.
    const addToCart = async () => {
        setAdd2Cart(!add2Cart);
        try {
            const url = `http://localhost:8000/cart/`;
            const order = {
                item_id: itemId, 
                chosen_size: userSize 
            };

            const { data } = await axios.post(url, order);
            if (data.confirmed) {
                console.log("Order added to shopping list.")
            } else {
                console.log("Order could not be added to shopping list.")
            };
        } catch (error) {
            console.error(`addToCart function could not run succesfully. Here's why: ${error}`)
        };
    }

    // STATE TO EFFICIENTLY HANDLE DETAILS OF THE ITEM.
    const [product, setProduct] = useState({
        name: itemName !== null ? itemName : name,
        description: "",
        sizes: [],
        price: 0
    });


    // useEffect TO FETCH DETAILS OF THE FASHION ITEM.
    useEffect(() => {
        const fetchDetails = async () => {
            let url = `http://localhost:8000/products/${itemId}`;
            try {
                const { data } = await axios.get(url);
                if (data.confirmed) {
                    setProduct({
                        name: data.name,
                        description: data.description,
                        sizes: data.sizes,
                        price: data.price
                    });
                } else {
                    return;
                }
            } catch {
                setProduct({
                    name: itemName !== null ? itemName : name,
                    description: "This is the section for an extended description of the fashion piece. This is where you go into details about the product.",
                    sizes: ["S", "M", "L", "XL"],
                    price: 50000
                });
            }
        };

        fetchDetails();
    }, [itemId, name]);

    return (
        <AnimatePresence>
            <motion.div
                className={styles.overlay}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
            >
                <motion.div
                    className={styles.productPageContainer}
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ x: "100%" }}
                    transition={{ duration: 0.6, ease: [0.25, 0.8, 0.25, 1] }}
                >
                    <ShartingaHeader />
                    <hr width={150} />

                    <div className={styles.pageContent}>
                        <div className={styles.imageSection}>
                            <img src={imageUrl} alt={product.name} className={styles.productImage} />
                        </div>

                        <div className={styles.detailsSection}>
                            <h1 className={styles.productName}>{product.name}</h1>
                            <p className={styles.price}>N{product.price}</p>
                            <SizeSelect sizesArray={product.sizes} onSizeChange={fetchSize} />
                            <div style={{
                                display: "flex",
                                justifyContent: "center"
                            }}>
                                <button className={styles.addToCartButton} 
                                onClick={addToCart}>{add2Cart ? "Added to Shopping List" : "Add to Shopping List"}</button>    
                            </div>
                            

                            <div className={styles.descriptionArea}>
                                <p>{product.description}</p>
                            </div>
                            <br />
                            <Link style={{textAlign: "right"}} className={styles.link} to='/explore'>Back to Explore</Link>
                        </div>
                    </div>

                    <footer className={styles.footer}>
                        <ul>
                            <li><Link className={styles.link} to='/about'>About Shartinga</Link></li>
                            <li>Customer Service</li>
                        </ul>
                        <br />
                        <p style={{textAlign: "center"}}>© {new Date().getFullYear()} SHARTINGA MIRARI</p>
                    </footer>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}

export default FashionItemPage;