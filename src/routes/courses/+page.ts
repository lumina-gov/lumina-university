import type { PageLoad } from "./$types"
import { graphql } from "$lib/gql"
import { gquery } from "$lib/graphql"
import { error } from "@sveltejs/kit"

export const load: PageLoad = async () => {
  const COURSES_QUERY = graphql(`
    query getCourses {
      courses {
        id
        name
        createdAt
        slug
        units {
          createdAt
          name
          id
          slug
        }
      }
    }
  `)

  // After changing or creating a query, do `npm run codegen` to validate it. There will be an error if you don't.
  // In essence, this ensures that your queries are always correctly formed,
  // based on the GraphQL schema of your endpoint. It also deduces the
  // correct return type for `response`, so +page.svelte is typechecked properly.

  const response = await gquery(COURSES_QUERY, {})
  return {
    courses: response.data!.courses,
  }
}
