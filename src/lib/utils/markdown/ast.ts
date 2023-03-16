import { directiveFromMarkdown } from "mdast-util-directive"
import { fromMarkdown } from "mdast-util-from-markdown"
import type { Root } from "mdast-util-from-markdown/lib"
import { directive } from "micromark-extension-directive"

export function generate_ast(markdown: string): Root {
    return fromMarkdown(markdown, {
        extensions: [
            directive()
        ],
        mdastExtensions: [
            directiveFromMarkdown
        ]
    })
}
