import type { Actions } from "./$types"
import { fail, redirect } from "@sveltejs/kit"
import { getSupabase } from "@supabase/auth-helpers-sveltekit"

export const actions: Actions = {
	signin: async event => {
		const { request, cookies, url } = event
		const { session, supabaseClient } = await getSupabase(event)
		const formData = await request.formData()

		const email = formData.get("email") as string
		const password = formData.get("password") as string

		const { error } = await supabaseClient.auth.signInWithPassword({
			email,
			password,
		})

		if (error) {
			return fail(500, {
				error: error.message,
				values: {
					email,
				},
			})
		}
	},

	signup: async event => {
		const { request, cookies, url } = event
		const { session, supabaseClient } = await getSupabase(event)
		const formData = await request.formData()

		const email = formData.get("email") as string
		const password = formData.get("password") as string

		const { error, data: { user } } = await supabaseClient.auth.signUp({
			email,
			password,
			options: {
				emailRedirectTo: "/profile"
			}
		})

		if (error) {
			return fail(500, {
				error: error.message,
				values: {
					email,
				},
			})
		}
		return {
			info: "Confirm your email"
		}
	},

	signout: async event => {
		const { supabaseClient } = await getSupabase(event)
		await supabaseClient.auth.signOut()
	},
}