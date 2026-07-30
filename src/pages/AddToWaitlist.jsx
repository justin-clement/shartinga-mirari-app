import { useLocation } from "react-router-dom";
import styles from "../pages/styling/addtowaitlist.module.css";
import { useState } from "react";
import { motion } from "framer-motion";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import SizeSelect from "../components/SizeSelect";

function AddToWaitlist({ productName }) {
  const location = useLocation();
  const chosenSize = location.state?.size ?? "M";

  const [order, setOrder] = useState({
    customer_name: "",
    item: productName || "Alligator Varsity Jacket",
    size: chosenSize,
    email: "",
  });

  const [status, setStatus] = useState({ loading: false, message: "", error: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setOrder((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus({ loading: true, message: "", error: "" });

    if (!order.customer_name || !order.email) {
      setStatus({ loading: false, message: "", error: "Please enter your name and email." });
      return;
    }

    try {
      await addDoc(collection(db, "waitlist"), {
        ...order,
        createdAt: serverTimestamp(),
        status: "pending",
      });

      setStatus({ loading: false, message: "Your request was added to the waitlist.", error: "" });
      setOrder((prev) => ({ ...prev, customer_name: "", email: "" }));
    } catch (error) {
      console.error(error);
      setStatus({ loading: false, message: "", error: "Unable to save your order. Please try again." });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className={styles.pageContainer}
    >
      <motion.img
        animate={{ opacity: [0, 1], y: [-20, 0] }}
        transition={{ duration: 0.5 }}
        width={400}
        loading="lazy"
        src="/images/IMG_9578.JPG"
        alt="Shartinga Varsity Jacket"
      />

      <motion.h2 animate={{ y: [20, 0] }} transition={{ duration: 0.5 }}>
        <b>{order.item} from Shartinga Mirari</b>
      </motion.h2>

      <form className={styles.form} onSubmit={handleSubmit}>
        <label>
          Your Name<br />
          <input
            name="customer_name"
            value={order.customer_name}
            className={styles.formField}
            type="text"
            placeholder="Your name"
            required
            onChange={handleChange}
          />
        </label>

        <label>
          Email<br />
          <input
            name="email"
            value={order.email}
            className={styles.formField}
            type="email"
            placeholder="person@example.com"
            required
            onChange={handleChange}
          />
        </label>

        <button className={styles.button} type="submit" disabled={status.loading}>
          {status.loading ? "Saving…" : "Add to Waitlist"}
        </button>

        {status.error && <p className={styles.errorText}>{status.error}</p>}
        {status.message && <p className={styles.successText}>{status.message}</p>}
      </form>
    </motion.div>
  );
}

export default AddToWaitlist;
