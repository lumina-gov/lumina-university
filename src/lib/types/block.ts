import type { Directive } from "mdast-util-directive/lib"
import type { Content } from "mdast-util-from-markdown/lib"

export type Block = Content | Directive
