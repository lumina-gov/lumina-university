In this unit, you will learn:

- The basics of semantic HTML and why it's important for web development
- How to use semantic HTML tags to improve accessibility and search engine optimization (SEO)
- The importance of creating accessible websites for users with disabilities
- Techniques for testing and improving the accessibility of your web pages

## Introduction to Semantic HTML

HTML provides a way for developers to structure and present content on the web. However, not all HTML tags carry the same level of meaning. Some tags are simply used for styling or layout, while others provide important information about the content of a web page. These are known as semantic tags.

Semantic HTML refers to the use of HTML tags that accurately describe the content they contain. This makes it easier for web browsers, search engines, and assistive technologies to understand the structure of a web page and present it to users in a more meaningful way.

## Accessibility and Semantic HTML

Accessible websites are designed to be used by all people, including those with disabilities. When developing a website, it's important to consider the needs of all users and make sure that the content is accessible to everyone.

Semantic HTML can play an important role in making a website more accessible. For example, using heading tags (h1-h6) to structure content makes it easier for screen readers to navigate a web page. Similarly, using the alt attribute on images provides a text alternative for users who are visually impaired.

## Semantic HTML Tags

There are a number of HTML tags that are considered semantic, including:

- `<header>` - defines a header for a document or a section
- `<nav>` - defines a set of navigation links
- `<main>` - defines the main content of a document
- `<section>` - defines a section in a document
- `<article>` - defines an independent piece of content in a document
- `<aside>` - defines content aside from the content it is placed in
- `<footer>` - defines a footer for a document or a section

By using these tags appropriately, you can create a well-structured, semantic HTML document that provides useful information to web browsers, search engines, and assistive technologies.

For example, if we want to create a web page with a header, navigation links, and a main content area, we could use the following HTML:

:::renderer
```html
<header>
    <span>My Website</span>
    <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
    </nav>
</header>
<main>
    <h1>Welcome to My Website</h1>
    <p>This is the first paragraph of my website.</p>
    <p>The links above are for demonstration purposes only.</p>
</main>
```
:::

:::note
You would use CSS to style the header and navigation links.
:::


## Accessibility Testing and Improvement

Testing the accessibility of your web pages is an important part of web development. There are a number of tools available that can help you identify accessibility issues and suggest ways to fix them. For example, the WAVE tool from WebAIM is a popular accessibility testing tool that can highlight issues with contrast, missing alt text, and other accessibility issues.

In addition to using testing tools, there are a number of techniques you can use to improve the accessibility of your web pages. These include:

- Using high-contrast colors for text and background
- Providing text alternatives for non-text content
- Using descriptive link text instead of "click here"
- Providing clear and concise headings for sections of content

By using semantic HTML and following accessibility best practices, you can create web pages that are accessible to all users and provide a better user experience for everyone.