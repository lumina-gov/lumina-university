
In this unit, you will learn about the different types of HTML elements that are used to structure and organize the content of a web pages

## What you will learn

- Types of HTML elements
- Block-level elements
- Inline elements
- Void elements
- Semantic elements

## Void elements

Void elements are those that don't have any content, and instead only have attributes. These elements are typically used to include images, line breaks, or other types of non-text content in a web page. Some common void elements include:

- `<img>`
- `<br>`
- `<hr>`
- `<meta>`
- `<input>`

Void elements are also called self-closing elements, as they don't have a closing tag. For example:

:::renderer
```html
<input placeholder="Enter your name">
```
:::

:::error
Void elements should not have any content between the opening and closing tags. For example, the following code is invalid HTML:

```html
<input type="text"></input>
```
:::

## Semantic elements

Semantic elements are those that have meaning beyond just the formatting of the content. These elements are used to give structure to a web page, and can help search engines and screen readers understand the content of the page. Some common semantic elements include:

- `<header>`
- `<nav>`
- `<section>`
- `<article>`
- `<aside>`
- `<footer>`

By using these different types of HTML elements, you can create a well-structured and organized web page that is easy for both humans and machines to understand.

## List of HTML Elements

| Element | Description |
| --- | --- |
| `<html>` | Represents the root of an HTML document. |
| `<head>` | Contains meta information about the HTML document, such as title, links, and scripts. |
| `<title>` | Defines the title of the document, which is displayed in the browser's title bar or tab. |
| `<body>` | Contains the visible content of the HTML document, such as text, images, and other media. |
| `<header>` | Defines a header section for the document or a section. |
| `<footer>` | Defines a footer section for the document or a section. |
| `<a>` | A hyperlink (called an anchor) that is used to link to another web page |
| `<nav>` | Defines a container for navigation links. |
| `<main>` | Defines the main content of a document or a section. |
| `<section>` | Defines a section in a document. Can be used to group related content together. |
| `<article>` | Defines an article or a piece of self-contained content. Can be used to group blog posts or news articles. |
| `<aside>` | Defines content that is tangentially related to the content around it, such as a sidebar or callout box. |
| `<div>` | Defines a generic container for content. |
| `<p>` | Defines a paragraph. |
| `<ul>` | Defines an unordered list. |
| `<ol>` | Defines an ordered list. |
| `<li>` | Defines a list item. |
| `<img>` | Defines an image. |
| `<form>` | Defines a form for user input. |
| `<input>` | Defines an input field. |
| `<label>` | Defines a label for an input element. |
| `<button>` | Defines a clickable button. |
| `<select>` | Defines a dropdown list. |
| `<option>` | Defines an option in a dropdown list. |
| `<textarea>` | Defines a multiline input field. |
| `<table>` | Defines a table. |
| `<tr>` | Defines a table row. |
| `<td>` | Defines a table cell. |
| `<th>` | Defines a table header cell. |
| `<thead>` | Defines a group of header rows in a table. |
| `<tbody>` | Defines a group of body rows in a table. |
| `<tfoot>` | Defines a group of footer rows in a table. |

It is important to note that this is not an exhaustive list of all HTML elements, but it includes many of the most commonly used ones. Each element has its own unique purpose and attributes that can be used to modify its behavior and appearance. In the following units, we will cover each element in more detail and provide examples of how they can be used in web development.

## Elements that always require attributes

Here's an example table of HTML elements that always have certain required attributes:

| Element | Required Attribute | Purpose |
| --- | --- | --- |
| `a` | `href` | Specifies the URL of the linked page |
| `img` | `src` | Specifies the URL of the image |
| `form` | `action` | Specifies where to send the form-data when a form is submitted |
| `input` | `type` | Specifies the type of input element to display |
| `input` | `name` | Specifies the name of the HTML element |
| `label` | `for` | Specifies which form element a label is bound to |
| `select` | `name` | Specifies the name of the select element |
| `option` | `value` | Specifies the value of an option element |

It's important to note that while these attributes are required for these elements, there may be other optional attributes that can be included as well depending on the specific use case.

Here’s an example of an `a` or also called a **anchor hyperlink** element:

:::renderer
```html
<a href="https://www.example.com">Click here to go to Example.com</a>
```
:::

In this example, the `a` element is used to create a hyperlink. The `href` attribute specifies the URL that the hyperlink should point to. When the user clicks on the link, their web browser will navigate to the URL specified in the `href` attribute. The text `Click here to go to Example.com` is the content of the hyperlink, and will be displayed as underlined blue text by default in most web browsers.