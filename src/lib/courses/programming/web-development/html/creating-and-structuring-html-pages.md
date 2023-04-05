## Creating an HTML Document

To create an HTML document, you simply need to use a text editor and save your file with the .html extension. All HTML files should start with a doctype declaration, which specifies the version of HTML being used.

After the doctype declaration, the HTML document is enclosed in the html tag, which has an opening tag `<html>`and a closing tag `</html>`. This is where all the content of the HTML document will be placed.

## Basic Structure of an HTML Page

HTML pages have a basic structure that consists of two main parts: the `head` and the `body`. The head section contains information about the document, such as the page `title`, the tab icon, and other things that are not generally displayed to the user in the website window.

Here is an example of a basic HTML page structure:

```html
<!DOCTYPE html>
<html>
<head>
  <title>My Page Title</title>
</head>
<body>
  <h1>Welcome to my page</h1>
  <p>This is a paragraph of text.</p>
</body>
</html>
```

In this example, the title element in the head section sets the title that appears in the browser's title bar.

## Adding a Favicon to Your HTML Document

A favicon, short for "favorite icon," is the small icon that appears next to a website's name in the browser tab and bookmark bar. Adding a favicon to your HTML document can give your website a more polished and professional look.

To add a favicon to your HTML document, follow these steps:

1. Create an image file that is 32x32 pixels or larger in size, and save it in a common image format such as PNG, JPEG, or GIF. This will be your favicon image.
2. Save the favicon image in the root directory of your website, alongside your HTML files. Name the file "favicon.ico".
3. In the `<head>` section of your HTML document, add the following code into it’s children (it can be before or after the title element, but before the closing `</head>` tag):
4. `<link rel="icon" type="image/x-icon" href="favicon.ico">`
    
    This tells the browser to use the `favicon.ico` file as the website's favicon.
    
5. Save your HTML document, and open it in a web browser. You should see your new favicon appear in the browser tab and bookmark bar!

info

Note that the favicon file name should be "favicon.ico" and should be saved in the root directory of your website. Also, it's recommended to provide different sizes of the favicon to ensure proper rendering on different devices. You can use a tool like [RealFaviconGenerator](https://realfavicongenerator.net/) to generate the different sizes and formats automatically