Welcome to the unit on HTML attributes! Attributes are a crucial aspect of HTML, providing extra information about an HTML element. They are always specified in the start tag and usually come in name/value pairs like `name="value"`. They can modify the default functionality of an element, alter its appearance, or provide additional data.

## Understanding HTML Attributes

Let's consider the HTML anchor tag (`<a>`) as an example. In its basic form, this tag creates a hyperlink:

```html
<a>Click me!</a>
```

However, without an attribute specifying where this link should lead, it doesn't do much. This is where the `href` attribute comes in:

```html
<a href="https://www.example.com">Visit Example.com!</a>
```

In this case, `href` is an attribute name and `"https://www.example.com"` is its value. Now, when you click on "Visit Example.com!", it will take you to the website specified in the `href` attribute.

:::note
An HTML element can have more than one attribute. Just remember to separate them with spaces.
:::

## Using Multiple Attributes in HTML

In HTML, it's common to use multiple attributes within a single element. These attributes help us further define or refine the element's behavior, appearance, or other characteristics. Let's explore how to use multiple attributes effectively.

When using multiple attributes, they are included within the opening tag of an HTML element and are separated by spaces. The order of the attributes does not matter. Here's an example using an `<img>` tag:

```html
<img src="image.jpg" alt="A beautiful sunset" width="500" height="300">
```

In the above example, the `src` attribute points to the image file, the `alt` attribute provides alternative text, and the `width` and `height` attributes set the dimensions of the image.

## Boolean Attributes

Boolean attributes are special because they only require the attribute name to activate. The presence of a boolean attribute on an element represents the true value, and the absence represents the false value.

For example, the `disabled` attribute is a boolean attribute:

:::renderer
```html
<button disabled>Click me!</button>
<button>Clickable</button>
```
:::

In this case, the `disabled` attribute makes the button unclickable.