import type { Actions } from "./$types"
import { ActionFailure, fail, redirect } from "@sveltejs/kit"
import { getSupabase } from "@supabase/auth-helpers-sveltekit"

type ActionResult = Promise<ActionFailure<{
	error: string;
	values: {
		email: string;
	}
}> | {
	success: true;
	info?: string;
}>

export const actions: Actions = {
	async signin(event): ActionResult {
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
		} else {
			return {
				success: true
			}
		}
	},

	async signup(event): ActionResult {
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
			success: true,
			info: "Check your email."
		}
	},

	async signout(event): ActionResult {
		const { supabaseClient } = await getSupabase(event)
		await supabaseClient.auth.signOut()
		return {
			success: true,
		}
	},
}