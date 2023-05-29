In this unit, we'll explore the basic structure of an HTML document, which serves as a blueprint for building web pages. Understanding this structure is essential for creating organized and functional websites.

## Basic HTML Document Structure

Every HTML document consists of several key components, which are organized into a hierarchical structure. Here's a simple example of an HTML document:

:::renderer
```html
<!DOCTYPE html>
<html>
  <head>
    <title>My First Web Page</title>
  </head>
  <body>
    <h1>Welcome to My Website</h1>
    <p>Hello, world!</p>
  </body>
</html>
```
:::

### `<!DOCTYPE html>`

This declaration should always be the first line of an HTML document. It informs the browser that the document is written in HTML5, the latest version of HTML.

:::tip
Always start your HTML document with `<!DOCTYPE html>` to specify that you're using the latest version of HTML.
:::

### `<html>`

The `<html>` tag is the root element of an HTML document. It wraps around all the content within the document and signifies the beginning and end of the HTML code.

### `<head>`

The `<head>` element is used to store metadata and other information about the web page that isn't displayed directly on the page itself. This includes the title of the web page, links to stylesheets, and other resources.

### `<title>`

The `<title>` tag is a child element of the `<head>` section. It is used to set the title of the web page, which is displayed in the browser's title bar or tab.

### `<body>`

The `<body>` element is where the main content of the web page is placed. This includes text, images, links, multimedia elements, and more. Everything you want to display on the web page should be placed within the `<body>` tags.

## Nesting Tags

HTML tags can be nested within each other to create a more complex structure. This nesting forms a tree-like hierarchy called the **Document Object Model (DOM)**. For example:

:::renderer
```html
<div>
  <ol>
    <li>Nested Elements</li>
    <li>This is an example of nested HTML tags.</li>
  </ol>
</div>
```
:::

In this example, the `<ol>` **ordered list** and `<li>` **list item** tags are nested within the `<div>` tag (which you can't directly see).

:::note
It's important to properly nest HTML tags and close them in the correct order to ensure that the web page is displayed as intended.
:::

## Creating a HTML File

To create an HTML document, you simply need to use a text editor and save your file with the `.html` extension. All HTML files should start with a doctype declaration, which specifies the version of HTML being used.

After the **doctype declaration**, the HTML document is enclosed in the html tag, which has an opening tag `<html>`and a closing tag `</html>`. This is where all the content of the HTML document will be placed.

You can open HTML files in your browser as a test, but generally any real and modern web applications will use another web development framework and language to build websites with.

We will get into these in later courses.

## Indentation and Formatting

To make your HTML code easier to read and maintain, it's a good practice to use proper indentation and formatting. This includes:

- Using consistent indentation levels for nested elements
- Closing tags on the same level as their corresponding opening tags
- Breaking long lines of text or code into multiple lines

:::tip
Proper indentation and formatting make your HTML code more readable and easier to maintain.
:::

## Adding a Favicon to Your HTML Document

A favicon, short for "favorite icon," is the small icon that appears next to a website's name in the browser tab and bookmark bar. Adding a favicon to your HTML document can give your website a more polished and professional look.

To add a favicon to your HTML document, follow these steps:

1. Create an image file that is 32x32 pixels or larger in size, and save it in a common image format such as PNG, JPEG, or GIF. This will be your favicon image.
2. Save the favicon image in the root directory of your website, alongside your HTML files. Name the file "favicon.ico".
3. In the `<head>` section of your HTML document, add the following code into it’s children (it can be before or after the title element, but before the closing `</head>` tag):
4. `<link rel="icon" type="image/x-icon" href="favicon.ico">`
    This tells the browser to use the `favicon.ico` file as the website's favicon.

5. Save your HTML document, and open it in a web browser. You should see your new favicon appear in the browser tab and bookmark bar!