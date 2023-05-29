Links are one of the most powerful features of the web, allowing us to navigate from one web page to another with just a click. In HTML, we create links using the `<a>` element, also known as the **anchor** element.

With it, you can turn almost any element on your webpage into a link that points to another page on your website, an external website, a file, or even another location on the same page.

## Syntax

Here's the basic syntax of an anchor element:

```html
<a href="URL">Clickable Text</a>
```

In this example, `href` is an attribute that specifies the destination of the link, and "Clickable Text" is the text that will be displayed as a link on your webpage.

Here's an example of an anchor tag in action:

:::renderer
```html
<a href="https://www.example.com">Visit Example.com</a>
```
:::

When this HTML is rendered by a web browser, it will display the text "Visit Example.com" as a clickable link that leads to `https://www.example.com`.

## Types of URLs in Anchor Elements

URLs used in anchor elements can be categorized into three main types: absolute URLs, relative URLs, and root-relative URLs. Understanding these types is critical when creating links in your HTML documents.

### Absolute URLs

An absolute URL provides the full path to the resource that is being linked. This includes the protocol (`http://` or `https://`), domain name, and the specific file or page location. Absolute URLs are most commonly used when linking to external websites.

Here's an example of an absolute URL:

```html
<a href="https://www.example.com/about.html">About Us</a>
```

In this example, clicking the "About Us" link will take the user to the "about.html" page on the [`www.example.com`](http://www.example.com/) website.

### Relative URLs

A relative URL provides the path to the resource relative to the current page or the current directory. This type of URL is most commonly used when linking to pages or resources within the same website.

Say we are on a page such as `/services/service1` we can use relative URLs to link to another page on your website.

Here's an example of a relative URL:

```html
<a href="../about.html">About Us</a>
```

In this example, clicking the "About Us" link will take the user to the "about.html" page in the parent directory of the current page.

### Root-Relative URLs

A root-relative URL provides the path to the resource relative to the root of the website. This type of URL starts with a forward slash (`/`) and is useful when your website's files are organized in multiple directories.

Here's an example of a root-relative URL:

```html
<a href="/about.html">About Us</a>
```

In this example, clicking the "About Us" link will take the user to the "about.html" page located at the root directory of the website, **regardless of the current page's location** in the directory structure.

:::tip
It is recommended to use Root **Relative URLs** over **Relative URLs** because moving files and directories around can cause relative URLs to become broken if they no longer link to valid pages.
:::

## Linking to a Specific Part of a Page

The anchor element can also be used to create bookmarks within a page. By adding an `id` attribute to an element, you can link directly to that spot on the page:

```html
<a href="#section1">Go to Section 1</a>

... some content ...

<h2 id="section1">Section 1</h2>
```

In this example, clicking on **Go to Section 1** will take you directly to the heading **Section 1** on the same page.

:::note
The `<a>` tag can also include other attributes like `target` and `download`. We'll cover these in more detail in the 'Attributes' section.
:::

That wraps up our introduction to the anchor/link element in HTML. As you explore further, you'll find that the `<a>` tag is one of the most frequently used elements in web development. It's a key part of creating navigable and user-friendly websites.