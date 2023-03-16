export const content = import.meta.glob("./**/*.md", { as: "raw" }) as {
    [key: string]: undefined | (() => Promise<string>)
}