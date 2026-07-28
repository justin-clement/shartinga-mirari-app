import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../../firebase";
import styles from "../styling/admin.module.css";

function AdminLogin() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setLoading(true);

    try {
      const userCredential = await signInWithEmailAndPassword(auth, credentials.email, credentials.password);
      const tokenResult = await userCredential.user.getIdTokenResult();

      if (!tokenResult.claims.admin) {
        await signOut(auth);
        setError("Access denied. This account is not configured as an admin.");
        setLoading(false);
        return;
      }

      navigate("/admin/dashboard");
    } catch (signInError) {
      setError("Login failed. Check your admin credentials and try again.");
      setLoading(false);
    }
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.authCard}>
        <h1 className={styles.pageTitle}>Shartinga Admin Login</h1>
        <p className={styles.leadText}>
          Enter your admin email and password to manage the waitlist and update customer orders.
        </p>

        <form className={styles.form} onSubmit={handleSubmit}>
          <label>
            Admin email
            <input
              className={styles.formField}
              name="email"
              type="email"
              placeholder="admin@shartinga.com"
              value={credentials.email}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Password
            <input
              className={styles.formField}
              name="password"
              type="password"
              placeholder="Enter password"
              value={credentials.password}
              onChange={handleChange}
              required
            />
          </label>

          <button className={styles.button} type="submit" disabled={loading}>
            {loading ? "Signing in..." : "Sign in"}
          </button>

          {error && <p className={styles.errorText}>{error}</p>}
        </form>

        <p className={styles.noteText}>
          Note: Admin accounts must be created in Firebase Auth for the Shartinga project.
        </p>
      </div>
    </div>
  );
}

export default AdminLogin;
