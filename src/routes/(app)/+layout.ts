import type { LayoutLoad } from "./$types"
import { alerts_init } from "$lib/stores/alerts"

export const load: LayoutLoad = async ({ data }) => {
  return {
    token: data.token,
    alerts: alerts_init([]),
    user_container: {
      user: null
    }
  }
}
