<script lang="ts">
import { generate_ast } from "$lib/utils/markdown/ast"

$: ast = generate_ast(markdown)

export let markdown: string
</script>
