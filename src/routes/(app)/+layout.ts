import type { LayoutLoad } from "./$types"
import { getSupabase } from "@supabase/auth-helpers-sveltekit"
import { alerts_init } from "$lib/stores/alerts"

export const load: LayoutLoad = async event => {
  const { session } = await getSupabase(event)
  return {
    session,
    alerts: alerts_init([]),
  }
}
