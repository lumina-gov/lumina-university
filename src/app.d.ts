import type { AlertsStore } from "$lib/stores/alerts"
import type { FirebaseApp } from "firebase/app"
import type { Auth } from "firebase/auth"
declare global {
    // See https://kit.svelte.dev/docs/types#app
    // for information about these interfaces
    // and what to do when importing types
    declare namespace App {
        // interface Locals {}
        interface PageData {
            alerts: AlertsStore
            firebase: {
                auth: Auth,
                app: FirebaseApp
            }
        }
        // interface Platform {}
    }
}
