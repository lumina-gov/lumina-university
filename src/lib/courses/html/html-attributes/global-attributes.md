HTML attributes provide extra information about an element that you don't want to appear in the actual content. In this unit, we'll focus on **universal attributes** or global attributes — attributes that can be used with any HTML element.

## What are Global Attributes?

Global attributes are attributes that can be applied to any HTML element, regardless of its type. They're called "universal" because they are universally applicable across all elements.

Here are some of the most commonly used universal attributes:

1. **id**
2. **class**
3. **style**
4. **title**

Let's take a closer look at each of these.

### id Attribute

The `id` attribute provides a unique identifier for an element on the page. Each `id` value must be unique within the HTML document.

:::renderer
```css
#intro {
  background-color: green;
}
```
```html
<p id="intro">This is an introductory paragraph.</p>
<p>This is a normal paragraph</p>
```
:::

:::error
Remember, `id` values must be unique. No two elements on the same page should have the same `id`.
:::

### class Attribute

The `class` attribute is used to specify one or more class names for an element. Unlike `id`, the same `class` can be used on multiple elements.

:::renderer
```css
.highlight {
  background-color: red;
}
```
```html
<p class="highlight">This is a highlighted paragraph.</p>
<p class="highlight">This is another highlighted paragraph.</p>
<p>This is a normal paragraph.</p>
```
:::
### style Attribute

The `style` attribute is used to apply inline CSS styles to an HTML element.

:::renderer
```html
<p style="color:blue;">This is a blue paragraph.</p>
```
:::

:::error
While it's possible to style HTML using the `style` attribute, it's generally considered bad practice. It's usually better to use external or internal CSS.
:::

### title Attribute

The `title` attribute is used to provide additional information about an element. The information is displayed as a tooltip when you hover over the element.

:::renderer
```html
<h1 title="I'm a tooltip">Hover over me for a few seconds to see the tooltip.</h1>
```
:::

## Why Use Global Attributes?

Global attributes are a powerful tool in HTML. They allow you to assign specific properties to elements, style elements, and provide extra information. By understanding and using these attributes effectively, you can create more interactive, dynamic, and accessible web pages.

:::tip
Remember to use universal attributes to enhance the functionality and accessibility of your web pages. These attributes provide a way to fine-tune the behavior of your HTML elements and make your pages more user-friendly.
:::

In the following units, you'll learn about more specific types of attributes that apply to certain HTML elements. Keep exploring!