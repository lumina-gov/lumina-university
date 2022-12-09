import { env } from "$env/dynamic/private"
import { initializeApp, cert } from "firebase-admin/app"
import { getFirestore } from "firebase-admin/firestore"
import atob from "atob"

export const app = initializeApp({
    credential: cert(JSON.parse(atob(env.FIREBASE_SERVICE_ACCOUNT)))
})

export const db = getFirestore(app)