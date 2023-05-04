- Understand how computers use bits to represent data
- Learn the basics of binary code and Boolean logic
- Explore how bits can be used to represent complex data types

## Bits and Binary Code

A bit is the smallest unit of data that can be stored or manipulated in a digital computer. It can have a value of either `0` or `1`. Computers use bits to represent all types of data, including numbers, text, images, and videos.

In binary code, each digit can have a value of 0 or 1, which corresponds to the two possible states of an electronic switch. By combining multiple bits, we can represent larger possibilities and more complex data types. More about this in later sections.

:::note
**Memory Layout of Booleans**

Because CPUs generally address memory as bytes, a boolean will typically occupy 1 byte (or 8 bits) instead of a single bit.
:::
## Boolean Logic

Boolean logic is a type of logic that deals with true/false or yes/no decisions. It's named after George Boole, who developed the concept in the mid-19th century. In programming, boolean values are represented using the keywords `true` and `false`. They are used to make decisions in a program and control the flow of execution.

Boolean operators such as `AND`, `OR`, and `NOT` can be used to combine multiple boolean values and perform more complex operations.

### Examples using Boolean values in logic

Boolean values can be used to make decisions in a program and control the flow of execution. For example, you can use them to check if a condition is true or false, and then execute different code depending on the result.

Here is an example of a program that checks if a number is even or odd:

```python
number = 5

if number % 2 == 0:
    print("The number is even")
else:
    print("The number is odd")
```

### When to use booleans in data structures

Some examples of objects that might include booleans in their fields/attributes are:

- A user object that has a field for whether or not the user is an admin
- Weather data that has a field for whether or not it is raining
- Social media posts that have a field for whether or not they are public

::question{slug="boolean-question" question="Provide an example of a programming scenario where using boolean values in a data structure would be appropriate."}