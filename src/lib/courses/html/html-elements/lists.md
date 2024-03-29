HTML provides a way to create ordered and unordered lists using various tags. Lists are essential elements of HTML and can be used for many purposes, such as enumerating steps in a process, presenting a list of items, or creating navigational menus.

## Unordered Lists

An **unordered list**, also known as a bullet list, starts with the `<ul>` tag. Each item in the list is marked with the `<li>` (list item) tag.

Here is an example of an unordered list:

:::renderer
```html
<ul>
  <li>Apple</li>
  <li>Banana</li>
  <li>Cherry</li>
</ul>
```
:::

## Ordered Lists

An **ordered list** starts with the `<ol>` tag and also uses the `<li>` tag for each item. The main difference between ordered and unordered lists is that ordered lists display items with numbers.

Here is an example of an ordered list:

:::renderer
```html
<ol>
  <li>Wake up</li>
  <li>Brush teeth</li>
  <li>Have breakfast</li>
</ol>
```
:::

:::tip
The numbers in an ordered list are automatically generated by the browser.
:::

## Nested Lists

You can also create nested lists, which are lists within lists. This is often used for complex site navigation menus.

Here is an example of a nested list:

:::renderer
```html
<ul>
  <li>Fruits
    <ul>
      <li>Apple</li>
      <li>Banana</li>
      <li>Cherry</li>
    </ul>
  </li>
  <li>Vegetables
    <ul>
      <li>Carrot</li>
      <li>Broccoli</li>
      <li>Spinach</li>
    </ul>
  </li>
</ul>
```
:::


:::warning
Remember to properly close each `<li>` tag before starting a new one. Not doing so can result in incorrect rendering of your lists.
:::

:::note
In addition to `<ul>` and `<ol>`, there is also the `<dl>` tag, used to create description lists. But it's less common and has a slightly more complex structure.
:::

By understanding and using HTML lists effectively, you can greatly enhance the structure and navigation of your websites.