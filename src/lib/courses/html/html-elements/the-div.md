The `<div>` tag in HTML stands for **division**. It's a generic container for flow content, often used as a layout tool. The `<div>` tag provides no special meaning itself, but it can be useful when
there's no other more semantically appropriate element that suits your
needs, or when you need to style sections of your HTML document.

## Understanding the `<div>` Element

The `<div>` element is a block-level element, which means it starts on a new line and takes up the full width available by default. It is often used to group other elements together for styling purposes with CSS or for applying JavaScript functionalities.

Here's a simple example of a `<div>` element:

```html
<div>
  <h1>Welcome to My Website</h1>
  <p>This is the first paragraph of my website.</p>
</div>
```

In this example, the `<div>` element contains a heading and a paragraph. You can group any number of elements together inside a `<div>` element.

## When to Use `<div>`

The `<div>` element is essentially a **fallback** option. You should use it when there's no other HTML element that better represents the content. If there's a more semantically appropriate tag that could be used, like `<nav>` for navigation links or `<article>` for a self-contained piece of content, then those should be used instead.

:::warning
While `<div>` tags are useful for structuring content and styles, overuse can lead to a digital disease called **divitis**, a situation where your HTML code is cluttered with unnecessary `<div>` elements. Always aim for semantic clarity in your HTML documents.
:::

::question{slug="avoid-divitis" question="Why is it important to avoid divitis?"}

## Styling `<div>`

The `<div>` element can be styled with CSS. You can change the color, size, position, and other visual styles of a `<div>` to create unique layouts and designs for your website. This will be covered more extensively in the CSS course.

To wrap it up, the `<div>` element is a powerful tool in HTML. It provides flexibility and control over the structure and appearance of your web pages, but it should be used thoughtfully and sparingly to maintain the semantic integrity of your HTML documents.

Classes can be applied to all elements with the `class` attribute, which we will get into in later stages