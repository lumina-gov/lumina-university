# Shadowing
## What will you learn?

In this unit, you will learn about shadowing, which is a concept in programming that occurs when a variable declared within a certain scope has the same name as a variable in an outer scope. You will learn how shadowing works, why it can be useful, and best practices for using it effectively.

## Shadowing

Shadowing occurs when a variable in an inner scope has the same name as a variable in an outer scope. When this happens, the inner variable "shadows" the outer variable, which means that any reference to the variable within the inner scope will refer to the inner variable, not the outer variable.

Here is an example in pseudocode:

```
let x be 10       // outer variable x
if condition {
    let x be 20   // declaring new inner variable x, shadows the outer x
    print(x) // prints 20
}
print(x)     // prints 10, the outer x is still unaffected
if condition {
	set x to equal 20 // this is modifying the outer x, instead of declaring it as a new variable
}
print(x) // prints 20

```

## Why use Shadowing?

Shadowing can be useful in certain situations, such as when you need to reuse a variable name within a certain block of code. It allows you to create a new variable with the same name as a variable in an outer scope without affecting the value of the outer variable.

For example, let's say you have a variable `x` that you want to use for a calculation within a certain block of code, but you don't want to affect the value of the outer `x`. You can use shadowing to create a new variable with the same name as `x` within the block of code, perform the calculation, and then discard the inner `x`.

```
scss

```

```
x = 10   // outer variable x
if (condition) {
    x = x + 5   // inner variable x, shadows the outer x
    // perform some calculation with inner x
}
print(x) // prints 10, the outer x is still unaffected

```

## Best Practices

While shadowing can be useful in certain situations, it can also make code harder to read and understand if used excessively. Here are some best practices to keep in mind when using shadowing:

- Use descriptive variable names to avoid naming conflicts
- Limit the use of shadowing to small, localised blocks of code
- Comment your code to make the use of shadowing clear to other developers

By following these best practices, you can use shadowing effectively while keeping your code readable and maintainable.