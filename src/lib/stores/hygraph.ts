import { PUBLIC_CACHED_READ_HYGRAPH } from "$env/static/public"
import { createClient, type Client, type AnyVariables, type TypedDocumentNode, fetchExchange } from "@urql/core"

export type HygraphClient = ReturnType<typeof init_urql_hygraph>

export const init_urql_hygraph = () => Object.assign(createClient({
    url: PUBLIC_CACHED_READ_HYGRAPH,
    exchanges: [fetchExchange],
    fetch: (url, options = {}) => {
        return fetch(url, options)
    }
}), {
    async gquery<Data = unknown, Variables extends AnyVariables = AnyVariables>(
        this: Client,
        document: TypedDocumentNode<Data, Variables>,
        variables: Variables
    ) {
        const res = await this.query(document, variables).toPromise()

        return res
    },
})