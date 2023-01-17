import type { PageLoad } from "./$types"
import { graphql } from "$lib/gql"
import { gquery } from "$lib/graphql"
import { error } from "@sveltejs/kit"

export const load: PageLoad = async ({ params }) => {
  const COURSE_SLUG_QUERY = graphql(`
    query courseBySlug($slug: String!) {
      courseBySlug(slug: $slug) {
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

  const response = await gquery(COURSE_SLUG_QUERY,  {
    slug: params.course
  })
  console.log(response)
  return {
    course: response.data!.courseBySlug!,
    course_slug: params.course
  }
}
