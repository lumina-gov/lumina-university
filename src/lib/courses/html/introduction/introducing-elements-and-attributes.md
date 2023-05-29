In HTML, **elements** and **attributes** are the building blocks that help create and structure the content on a web page. This unit will introduce you to these essential components of HTML and how they work together to create a well-formatted web page.

## HTML Elements

An HTML element is a component of a web page that is defined using a pair of opening and closing **tags**. The content placed between the tags determines the element's purpose and appearance.

Here's an example of an **HTML element**:

:::renderer
```html
<h1>Welcome to My Website</h1>
```
:::

In this example, `<h1>` is the opening tag, and `</h1>` is the closing tag. The content between the opening and closing tags `"Welcome to My Website"` is what will be displayed on the web page.

### Common HTML Elements

Some common HTML elements you'll use when creating a web page include:

- `<p>`: Paragraph
- `<h1>`, `<h2>`, `<h3>`, `<h4>`, `<h5>`, `<h6>`: Headings (from largest to smallest)
- `<a>`: Anchor (for creating hyperlinks)
- `<img>`: Image
- `<ul>`: Unordered list
- `<ol>`: Ordered list
- `<li>`: List item (used within `<ul>` or `<ol>`)
- `<table>`: Table
- `<tr>`: Table row
- `<td>`: Table cell

:::note
There are many more HTML elements available to structure and format your web page. As you progress in learning HTML, you'll discover more elements and their specific use cases.
:::

## Terminology

When learning HTML, it's essential to understand some key terminology to help you better comprehend the concepts and communicate with other web developers. This section will introduce you to some common terms used when working with HTML.

### Element

An **element** is a component of a web page that is defined using a pair of opening and closing **tags**.
 Elements are the building blocks of an HTML document and define the
structure and content of a web page. Examples include paragraphs (`<p>`), headings (`<h1>` to `<h6>`), lists (`<ul>`, `<ol>`), and images (`<img>`).

### Tag

A **tag** is a keyword enclosed in angle brackets (`<` and `>`). Tags are used to define HTML elements and specify how the content should be displayed or structured. Tags usually come in pairs—an opening tag and a closing tag (e.g., `<p>` and `</p>`). Some elements, known as self-closing elements, do not require a closing tag, such as `<img>` and `<br>`.

::question{slug="closing-vs-opening" question="What is the difference between an opening tag and a closing tag?"}

### Attribute

An **attribute** is additional information added to an HTML element to define its properties or modify its behavior. Attributes are included within the opening tag of an element and consist of a name-value pair, separated by an equals sign (`=`). Examples of common attributes include `href`, `src`, `alt`, `class`, `id`, and `style`.

Attributes are **Key Value** pairs, also called **Name Value** pairs.

### Nesting

**Nesting** refers to the practice of placing one HTML element inside another. Proper nesting is essential to create well-structured and valid HTML documents. For example, a list element (`<ul>` or `<ol>`) should have `<li>` elements nested inside it to create a list:

```html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```

:::warning
Incorrect nesting can cause problems with the rendering and appearance of your web page. Always ensure that your HTML elements are correctly nested.
:::

### Child Content

A **Child**, or **Children** refers to the content nested within the **tags** of an **element**. With Children, you can nest and create more complex HTML structures needed to create more advanced websites.

### Self-closing Element

A **self-closing element** is an HTML element that does not require a closing tag. These elements typically do not have any content between the opening and closing tags. Examples include `<img>`, `<br>`, and `<input>`.

:::note
When using self-closing elements, you can add a forward slash (`/`) before the closing angle bracket (`>`) to make it clear that the element is self-closing, for example, `<img src="image.jpg" alt="An image" />`. However, this is optional in HTML5.
:::