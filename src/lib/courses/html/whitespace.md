In HTML, **whitespace** refers to any section of a document that contains spaces, tabs, or line breaks. Whitespace is used to make the code easier to read, but it doesn't generally affect how the web page looks in a browser.

:::note
Whitespace characters include spaces (` `), tabs (`\t`), and newlines (`\n`).
:::

## How HTML Handles Whitespace

HTML treats consecutive whitespace characters as a single space. Whether you have one space, ten spaces, or a tab followed by a line break, HTML considers them all the same.

For example, let's say you have the following code:

:::renderer
```html
<p>Hello,           world!</p>
```
:::

Even though there are multiple spaces between "Hello," and "world!", a web browser will display it as "Hello, world!".

Similarly, the code:

:::renderer
```html
<p>Hello,
world!</p>
```
:::

Will also display as "Hello, world!" in a web browser, despite the newline character.

This means you can use whitespace to organize and indent your code without worrying about it affecting the final presentation of your webpage.

:::tip
Use whitespace to keep your HTML code neat and readable. This helps you and others understand the structure of your HTML document.
:::

## Ignoring Whitespace: The `<pre>` Element

There is one exception to how HTML handles whitespace—the `<pre>` element. Text within a `<pre>` tag will keep all of its formatting, including whitespace and line breaks.

For example, the following code:

:::renderer
```html
<pre>
    Hello,
      world!    Hello again!
</pre>
```
:::

This is useful when you want to preserve the original formatting of a block of text, such as when you're displaying code snippets.

:::note
There is a CSS property called `white-space` that can be used to control how whitespace is handled. The default value is `normal`, which means that consecutive whitespace characters are treated as a single space. However, you can change this to `pre` to preserve whitespace.
:::


:::warning
Use the `<pre>` element sparingly. Overusing it can make your content hard to read and is generally not considered good practice.
:::

That wraps up the basics of how HTML handles whitespace. Keep these principles in mind as you work on your HTML documents, and remember to use whitespace to your advantage to keep your code neat and readable.