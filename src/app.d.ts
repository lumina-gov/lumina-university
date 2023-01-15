import type { AlertsStore } from "$lib/stores/alerts"
<<<<<<< HEAD

=======
// import type { FirebaseApp } from "firebase/app"
// import type { Auth } from "firebase/auth"
>>>>>>> 7b0227f202f4d524aee3ab1b078847615bd2b423
declare global {
    // See https://kit.svelte.dev/docs/types#app
    // for information about these interfaces
    // and what to do when importing types
    declare namespace App {
        // interface Locals {}
        interface PageData {
            alerts: AlertsStore
<<<<<<< HEAD
            session: import("@supabase/supabase-js").Session | null
=======
            // firebase: {
            //     auth: Auth,
            //     app: FirebaseApp
            // }
>>>>>>> 7b0227f202f4d524aee3ab1b078847615bd2b423
        }

        interface Supabase {
            Database: import("./DatabaseDefinitions").Database
            SchemaName: "public"
          }

        interface Error {
            message: string
            code: string
            suberror?: Error
        }

        // interface Platform {}
    }
}
