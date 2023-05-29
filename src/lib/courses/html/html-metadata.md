Metadata in HTML is information about a webpage that isn't displayed on the page itself but is in the HTML of the page. It can be information about the page, the author, relevant keywords, and more. Metadata is used by browsers (how to display content), search engines (keywords), and other web services.

HTML metadata is stored in the `<head>` section of the HTML document. Here are the primary HTML elements used to define metadata.

## HTML `<title>` Element

The `<title>` tag defines the title of the document, which is shown in a browser's title bar or a page's tab. It is required in all HTML documents and can only be used in the `<head>` section.

:::renderer
```html
<!DOCTYPE html>
<html>
    <head>
        <title>Page Title</title>
    </head>
    <body>
        <h1>My First Heading</h1>
        <p>My first paragraph.</p>
    </body>
</html>
```
:::

:::note
The `<title>` tag is important for SEO (Search Engine Optimization) as it is often used by search engines to determine the title of listed pages.
:::
:::tip
You should **always** include a `<title>` tag in your HTML document.
:::

## HTML `<meta>` Element

The `<meta>` tag represents metadata that can't be represented by other HTML meta-related elements. There are several attributes available for this tag, but we will focus on `name` and `charset`.

### Charset Attribute

The `charset` attribute is used to specify the character encoding for the HTML document.

```
<head>
  <meta charset="UTF-8">
</head>
```

:::tip
The default character encoding in HTML5 is "UTF-8". It covers almost all of the characters and symbols in the world!
:::

### Name Attribute

The `name` attribute is used in conjunction with the `content` attribute to provide metadata in the form of name-value pairs.

Here's an example of setting the description for a webpage:

```html
<head>
  <meta name="description" content="This is a description of the webpage.">
</head>
```

These metadata pairs can be used by search engines when indexing your web pages.

## HTML `<link>` Element

The `<link>` element is used to link to external stylesheets or other resources. It's also used to specify relationships between the current document and an external resource.

An example of this is linking to an external CSS file:

```html
<head>
  <link rel="stylesheet" href="styles.css">
</head>
```

:::note
The `<link>` tag does not have a closing tag, it is an empty element.
:::

## HTML `<style>` Element

The `<style>` element is used to add CSS styles directly into an HTML document. It should be included inside the `<head>` section.

:::renderer
```html
<style>
    body {
        background-color: grey;
    }
</style>
<!-- the above would be in the <head> section -->
<h1>
    Hello World!
</h1>
```
:::

:::warning
Using the `<style>` tag for large amounts of CSS can make your HTML document messy. It's better to use an external CSS file with the `<link>` element for larger projects.
:::

## HTML `<script>` Element

The `<script>` element is used to embed or reference an external **JavaScript** file.

The `<script>` tag can be placed in the `<head>` section, or the `<body>`, depending on when you want the script to be loaded.

```html
<head>
  <script src="script.js"></script>
</head>
```

## Open Graph Protocol

The Open Graph protocol enables any web page to become a rich object in a social graph, which is used by social media platforms like Facebook and LinkedIn. This is especially useful when sharing links on social media.

Example:

```html
<meta property="og:title" content="My Web Page Title">
<meta property="og:description" content="This is a description of my web page">
<meta property="og:image" content="http://example.com/link-to-image.jpg">
<meta property="og:url" content="http://example.com/my-web-page">
```

:::note
The `og:image` property requires a URL of an image to display when the page is shared on social media.
:::

## Twitter Cards

Twitter Cards work similarly to the Open Graph protocol but are specifically tailored for Twitter. They allow you to attach media experiences to tweets that link to your content.

Example:

```html
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:site" content="@username">
<meta name="twitter:title" content="My Web Page Title">
<meta name="twitter:description" content="This is a description of my web page">
<meta name="twitter:image" content="http://example.com/link-to-image.jpg">
```

:::warning
Ensure that the value of `twitter:card` matches the type of card you want to display. Options include `summary`, `summary_large_image`, `app`, and `player`.
:::

By effectively using HTML metadata, you can enhance your webpage's presence on the web and social media platforms. It's a critical aspect of SEO (Search Engine Optimization) and user engagement.