Anchor elements in HTML, defined by the `<a>` tag, are used to create hyperlinks on web pages. These links can take you to another part of the same page, a different page on the same site, or a completely different website.

To define how these links behave and where they take us, we use **attributes** inside the `<a>` tag. In this unit, we'll focus on the most commonly used attributes: `href`, `target`, `rel`, and `download`.

:::note
An attribute provides additional information about an HTML element. They are always specified in the start tag and usually come in name/value pairs like: `name="value"`.
:::

## `href` Attribute

The `href` (hypertext reference) attribute specifies the URL (web address) of the page the link goes to. Without the `href` attribute, the `<a>` tag will not function as a link.

Here's an example:

```html
<a href="https://www.example.com">Visit Example.com</a>
```

## `target` Attribute

The `target` attribute specifies where to open the linked document. It has several values, but two are particularly important:

- `_blank`: Opens the linked document in a new window or tab.
- `_self`: Opens the linked document in the same window/tab as it was clicked (this is default).

Example:

:::renderer
```html
<a href="https://www.example.com" target="_blank">Visit Example.com in a new tab</a>
```
:::

:::warning
When using `target="_blank"`, it's best to also include the `rel="noopener"` attribute to avoid potential security risks.
:::

## `rel` Attribute

The `rel` attribute specifies the relationship between the current document and the linked document. It's often used with `target="_blank"` to improve performance and prevent security vulnerabilities.

Here's how to use it:

```html
<a href="https://www.example.com" target="_blank" rel="noopener">Visit Example.com</a>
```

## `download` Attribute

The `download` attribute instructs the browser to download the linked resource rather than navigating to it. This attribute can be used with or without a value. If used without a value, the original filename is used as the download filename.

Example:

```html
<a href="/files/myfile.pdf" download>Download My File</a>
```

:::note
If you give a value to the `download` attribute (like `download="NewFileName"`), that value will be used as the file name for the downloaded file.
:::

:::tip
Remember, using attributes effectively helps your users navigate your website more easily and enhances user experience.
:::