// import { graphql } from "$lib/gql"
// import { error } from "@sveltejs/kit"
// import { LayoutLoad } from "../$types"

// export const load: LayoutLoad = async ({ parent }) => {
//     const data = parent()
//     const req = await data.graph.gquery(graphql(`
//         query {
//             last_updated_unit {
//                 id
//                 status
//                 user_id
//                 unit_slug
//                 course_slug
//                 updated_at
//             }
//         }
//     `))
    
//     if ( req.error ) {
//         throw error(500, {
//             message: req.error.message,
//             code: "RECENT_COURSE_ERROR"
//         })
//     }
//     return {
//         last_updated_unit: req.data?.last_updated_unit
//     }
// }