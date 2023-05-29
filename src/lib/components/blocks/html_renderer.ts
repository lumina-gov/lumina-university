
export default function html_renderer (html: string | undefined, css: string | undefined, js: string | undefined) {
    const default_css = `
body {
    margin: 0;
    padding: 10px;
    color: white;
}
`
    if (html?.startsWith("<!DOCTYPE html>")) return html + `<style>${default_css} ${css || ""}</style>` + `<script>${js || ""}</script>`

    return `<!DOCTYPE html>
<html>
    <head>
        <style>${ default_css }</style>
        ${css ? `<style>${css}</style>` : ""}
    </head>
    <body>
        ${html}
        ${js ? `<script>${js}</script>` : ""}
    </body>
</html>`
}