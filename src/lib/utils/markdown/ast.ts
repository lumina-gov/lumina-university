import { directiveFromMarkdown } from "mdast-util-directive"
import { fromMarkdown } from "mdast-util-from-markdown"
import type { Root } from "mdast-util-from-markdown/lib"
import { gfmTableFromMarkdown } from "mdast-util-gfm-table"
import { directive } from "micromark-extension-directive"
import { gfmTable } from "micromark-extension-gfm-table"

export function generate_ast(markdown: string): Root {
    return fromMarkdown(markdown, {
        extensions: [
            gfmTable,
            directive()
        ],
        mdastExtensions: [
            directiveFromMarkdown,
            gfmTableFromMarkdown
        ]
    })
}
