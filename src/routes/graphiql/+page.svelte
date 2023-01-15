<script lang="ts">
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { PUBLIC_GRAPH_ENDPOINT } from "$env/static/public"
import { onMount } from "svelte"

let container: HTMLDivElement
onMount(() => {
    const root = ReactDOM.createRoot(container)
    root.render(
        React.createElement(GraphiQL, {
            fetcher: GraphiQL.createFetcher({
                url: PUBLIC_GRAPH_ENDPOINT,
            }),
            defaultEditorToolsVisibility: true,
        })
    )
})
</script>

<svelte:head>
    <script
        crossorigin
        src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
    <script
        crossorigin
        src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
    <script
        crossorigin
        src="https://unpkg.com/graphiql/graphiql.min.js"></script>
    <link
        href="https://unpkg.com/graphiql/graphiql.min.css"
        rel="stylesheet" />
</svelte:head>

<div
    bind:this={ container }
    style:height="100%"/>
