import type { SvelteComponentTyped } from "svelte"

export type Props<T> = T extends SvelteComponentTyped<infer P, Record<string, unknown>, Record<string, unknown>> ? P : never;
export type Prop<T, K extends keyof Props<T>> = Props<T>[K];


export type PartialRecord<K extends string | number | symbol, T> = { [P in K]?: T; };