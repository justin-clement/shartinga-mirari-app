import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { collection, doc, onSnapshot, orderBy, query, updateDoc } from "firebase/firestore";
import { auth, db } from "../../firebase";
import styles from "../styling/admin.module.css";

function AdminDashboard() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [adminUser, setAdminUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        navigate("/admin");
        return;
      }

      const tokenResult = await user.getIdTokenResult(true);
      if (!tokenResult.claims.admin) {
        await signOut(auth);
        navigate("/admin");
        return;
      }

      setAdminUser(user);
    });
    return unsubscribeAuth;
  }, [navigate]);

  useEffect(() => {
    const waitlistQuery = query(collection(db, "waitlist"), orderBy("createdAt", "desc"));
    const unsubscribeOrders = onSnapshot(
      waitlistQuery,
      (snapshot) => {
        setOrders(snapshot.docs.map((docSnapshot) => ({ id: docSnapshot.id, ...docSnapshot.data() })));
        setLoading(false);
      },
      (snapshotError) => {
        setError("Unable to load orders from Firestore.");
        setLoading(false);
      }
    );
    return unsubscribeOrders;
  }, []);

  const handleSignOut = async () => {
    await signOut(auth);
    navigate("/admin");
  };

  const toggleStatus = async (order) => {
    const nextStatus = order.status === "processed" ? "pending" : "processed";
    await updateDoc(doc(db, "waitlist", order.id), { status: nextStatus });
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.adminToolbar}>
        <div>
          <h1 className={styles.pageTitle}>Shartinga Waitlist Orders</h1>
          <p className={styles.leadText}>
            {adminUser ? `Signed in as ${adminUser.email}` : "Loading admin session..."}
          </p>
        </div>

        <button className={styles.orderButton} onClick={handleSignOut}>
          Sign out
        </button>
      </div>

      <div className={styles.dashboardCard}>
        {loading && <p className={styles.noteText}>Loading orders…</p>}
        {error && <p className={styles.errorText}>{error}</p>}
        {!loading && orders.length === 0 && <p className={styles.noteText}>No waitlist orders yet.</p>}

        <div className={styles.orderGrid}>
          {orders.map((order) => (
            <div key={order.id} className={styles.orderCard}>
              <div className={styles.orderHeader}>
                <div>
                  <p className={styles.orderTitle}>{order.customer_name || "Unnamed customer"}</p>
                  <p className={styles.noteText}>{order.email}</p>
                </div>
                <span
                  className={`${styles.statusBadge} ${
                    order.status === "processed" ? styles.statusProcessed : styles.statusPending
                  }`}
                >
                  {order.status || "pending"}
                </span>
              </div>

              <ul className={styles.detailsList}>
                <li>
                  <strong>Item</strong>
                  <span>{order.item}</span>
                </li>
                <li>
                  <strong>Size</strong>
                  <span>{order.size}</span>
                </li>
                <li>
                  <strong>Created</strong>
                  <span>{order.createdAt?.toDate?.()?.toLocaleString() ?? "-"}</span>
                </li>
              </ul>

              <div className={styles.orderRow}>
                <button className={styles.orderButton} onClick={() => toggleStatus(order)}>
                  Mark {order.status === "processed" ? "Pending" : "Processed"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
