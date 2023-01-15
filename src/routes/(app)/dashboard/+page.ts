import { graphql } from "$lib/gql"
import { gquery } from "$lib/graphql"
import type { PageLoad } from "./$types"


export const load: PageLoad = async ({ parent }) => {
	const { session } = await parent()
	if (!session) return {}

	const PROFILE_QUERY = graphql(`
	query me($jwt: String!) {
	  me(jwt: $jwt) {
		id
		email
		bio
	  }
	}
	`)

	return {
		profile: gquery(PROFILE_QUERY, {
			jwt: session?.access_token
		})
	}
}