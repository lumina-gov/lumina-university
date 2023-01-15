import { env } from "$env/dynamic/private"
import { initializeApp, cert } from "firebase-admin/app"
import { getFirestore, type DocumentData, type FirestoreDataConverter } from "firebase-admin/firestore"
import atob from "atob"
import type { SessionOffer } from "$lib/types/session_offer"
import type { Session } from "$lib/types/session"
import { getAuth } from "firebase-admin/auth"

export const app = initializeApp({
    credential: cert(JSON.parse(atob(env.FIREBASE_SERVICE_ACCOUNT)))
})
export const auth = getAuth(app)

export const db = getFirestore(app)

const converter = <T>() => ({
    toFirestore: (data: T) => data as DocumentData,
    fromFirestore: (snap: FirebaseFirestore.QueryDocumentSnapshot) =>
        snap.data() as T
}) satisfies FirestoreDataConverter<T>

const collection = <T>(collectionPath: string) => db.collection(collectionPath).withConverter(converter<T>())

export const collections = {
    session_offers: collection<SessionOffer>("session-offers"),
    sessions: collection<Session>("sessions"),
}