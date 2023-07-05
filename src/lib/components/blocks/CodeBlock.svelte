<script lang="ts">
import type { Code } from "mdast-util-from-markdown/lib"
import CodeEditor from "../CodeEditor.svelte"
export let block: Code

</script>
<CodeEditor
    code={block.value}
    language={block.lang}/>