Images play a crucial role in making a website visually appealing and interactive. In HTML, we use the `<img>` element to embed images into a web page.

## Syntax

The syntax for adding an image to your webpage using HTML is straightforward:

```html
<img src="url" alt="description">
```

Here, `src` and `alt` are attributes used with the `<img>` tag.

:::note
The `<img>` tag is self-closing, meaning it doesn't need a closing tag.
:::

### src Attribute

The `src` attribute stands for **source** and it specifies the URL (web address) of the image you want to display. This could be an absolute URL (the full address) or a relative URL (a path relative to the current document).

Example:

:::renderer
```html
<img src="https://placehold.co/400x300">
```
:::

### alt Attribute

The `alt` attribute provides an alternate text for an image. This text appears if the image cannot be displayed for any reason (like when the image source is broken, or if the user is using a screen reader).

Example:

```html
<img src="https://example.com/images/pic.jpg" alt="A beautiful landscape">
```

:::tip
Always include the `alt` attribute with a meaningful description. It's a best practice as it improves accessibility for visually impaired users and it's good for SEO.
:::