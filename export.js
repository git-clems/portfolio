
import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import fs from "node:fs";

import serviceAccount from "./serviceAccountKey.json"
  with { type: "json" };

initializeApp({
  auth: cert(serviceAccount)
});

const db = getFirestore();

async function exportFirestore() {
  const collections = await db.listCollections();
  const result = {};

  for (const collection of collections) {
    console.log(`Exporting: ${collection.id}`);

    const snapshot = await collection.get();

    result[collection.id] = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  }

  fs.writeFileSync(
    "firestore-backup.json",
    JSON.stringify(result, null, 2)
  );

  console.log("Firestore export completed!");
}

exportFirestore().catch(console.error);
