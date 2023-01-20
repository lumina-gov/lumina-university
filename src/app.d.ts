import type { AlertsStore } from "$lib/stores/alerts"
import type { GraphClient } from "$lib/stores/graphql"
import type { UserStore } from "$lib/stores/user_store"
declare global {
    // See https://kit.svelte.dev/docs/types#app
    // for information about these interfaces
    // and what to do when importing types
    declare namespace App {
        // interface Locals {}
        interface PageData {
            alerts: AlertsStore,
            user_store: UserStore,
            graph: GraphClient
        }

        interface Error {
            message: string
            code: string
            suberror?: Error
        }

        // interface Platform {}
    }
}
