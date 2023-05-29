In HTML, **formatting** refers to the layout and style of text and other elements on a web page. HTML provides various tags to manipulate the presentation of the text. However, remember that most of the modern styling is done using CSS, but HTML still retains several formatting tags for text manipulation.

## Basic Text Formatting Tags

Here are some basic text formatting tags used in HTML:

- `<b>` or `<strong>`: Makes the text **bold**
- `<i>` or `<em>`: Makes the text *italic*
- `<u>`: Adds an underline to the text
- `<s>`: ~~Strikes~~ through the text
- `<sup>`: Creates superscript text
- `<sub>`: Creates subscript text
- `<pre>`: Defines preformatted text
- `<blockquote>`: Defines a section that is quoted from another source

Here are examples of these tags in action:

:::renderer
```html
<b>This is bold text</b> or <strong>This is bold text</strong>
<i>This is italic text</i> or <em>This is italic text</em>
<u>This is underlined text</u>
<s>This is strikethrough text</s>
<sup>This is superscript text</sup>
<sub>This is subscript text</sub>
<pre>
  Text in a pre element
  is displayed in a fixed-width
  font, and it preserves
  both spaces and line breaks
</pre>
<blockquote>
  This is a long quotation taken from another source.
</blockquote>
```
:::

:::note
Modern HTML practices recommend using CSS for text formatting, but knowing these HTML tags is still useful.
:::