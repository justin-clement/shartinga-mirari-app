import fs from "fs";
import path from "path";
import admin from "firebase-admin";

const keyPath = path.resolve("./serviceAccountKey.json");
if (!fs.existsSync(keyPath)) {
  console.error("Missing serviceAccountKey.json in the project root.");
  console.error("Download a Firebase service account JSON key and save it as serviceAccountKey.json.");
  process.exit(1);
}

const serviceAccount = JSON.parse(fs.readFileSync(keyPath, "utf8"));
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const uid = process.argv[2];
if (!uid) {
  console.error("Usage: node scripts/set-admin-claim.js <USER_UID>");
  process.exit(1);
}

try {
  await admin.auth().setCustomUserClaims(uid, { admin: true });
  console.log(`Admin claim successfully set for user: ${uid}`);
  console.log("The admin user should sign out and sign back in to refresh their token.");
} catch (error) {
  console.error("Failed to set admin claim:", error);
  process.exit(1);
}
