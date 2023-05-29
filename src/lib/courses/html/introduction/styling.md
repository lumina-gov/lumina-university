In this short page, we'll introduce you to the basics of styling in HTML. Styling is crucial to making your web pages visually appealing and user-friendly. While HTML is responsible for the structure and content of a web page, styling is responsible for the appearance, colors, fonts, and overall layout.

To style HTML elements, we use a separate language called **Cascading Style Sheets (CSS)**. CSS allows you to apply styles to your HTML elements, such as changing colors, adjusting font sizes, and modifying the layout. It's an essential skill for web developers and designers, as it helps you create beautiful, responsive, and accessible websites.

## Inline CSS

You can apply basic styling directly to an HTML element using the `style` attribute. This method is called **inline CSS**. Although it's not the recommended way to style your web pages, it's a helpful way to understand how CSS works.

Here's an example of using inline CSS to change the color and font size of a paragraph:

:::renderer
```html
<p style="color: red; font-size: 20px;">
    This is a styled paragraph.
</p>
```
:::

:::warning
Inline CSS can become difficult to manage and maintain as your project grows. It's better to use external stylesheets or internal CSS for larger projects.
:::

## External Stylesheets and Internal CSS

In more complex web projects, it's best to use external stylesheets or internal CSS to manage your styles. External stylesheets are separate CSS files that you link to your HTML document, while internal CSS is placed inside the `<style>` element in the `<head>` of your HTML document.

Both methods help you keep your styles organised and make it easier to maintain and update your web pages.

:::renderer
```css
/* CSS code goes here */
p {
    color: red;
    font-size: 20px;
}
```
```html
<p>
    This is a styled paragraph.
</p>
```
:::

::question{slug="what-is-the-styling-language-for-html" question="What is the styling language for HTML called?"}

## Course on Styling HTML

In a later course, we'll dive deeper into the world of styling with CSS. You'll learn how to:

- Create and link external stylesheets
- Use internal CSS
- Select and target specific HTML elements for styling
- Work with CSS properties and values
- Create responsive designs for different devices and screen sizes
- Explore advanced CSS concepts and techniques

By learning CSS, you'll be able to bring your HTML content to life and create stunning, professional-looking websites.

:::warning
In this course, we won’t be getting into styling of HTML, as a separate course will introduce you to CSS
:::


### CSS Course

We highly recommend completing this course after you have finished this **HTML course**

::course{slug="css"}

