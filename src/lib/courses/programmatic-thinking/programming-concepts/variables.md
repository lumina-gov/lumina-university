Variables are one of the **most fundamental concepts** in programming. They are used to store data that can be referenced and modified throughout your program. In this unit, we will explore what variables are, how they work, and some common pitfalls and useful notes.

## What Will You Learn

- Understand what variables are and how they work
- Learn about the box analogy for variables
- Explore the label analogy for referencing specific values
- Learn about common pitfalls and useful notes for using variables
- See some examples of let variables in TypeScript
- Understand the difference between data and variables

## Variables

A variable is a named storage location in memory that holds a value. The value stored in a variable can be of any data type, including numbers, strings, booleans, and more complex data structures like arrays and objects.

### Other Terminology

- **Variable declaration**: A variable declaration is a statement that creates a new variable with a name and a type. For example, `let x: number;` declares a variable named `x` of type `number`.
- **Variable initialization**: A variable initialization is a statement that assigns a value to a variable. For example, `x = 5;` initializes the variable `x` with the value `5`.
- **Variable assignment**: A variable assignment is a statement that assigns a new value to a variable. For example, `x = 10;` assigns the value `10` to the variable `x`.
- **Variable scope**: A variable scope is the part of a program where a variable is accessible. For example, a variable declared inside a function is only accessible within that function.
- **Parameter or argument**: A parameter or argument is a type of variable and value that is passed to a function or method. For example, `x` is a parameter in the function `add(x, y)`.

## The Box Analogy

One way to think about variables is to imagine a box that can hold a value. When you declare a variable, you are creating a new box with a name and a type. You can then assign a value to the variable by putting it in the box, or you can retrieve the value by looking inside the box.

## The Label Analogy

Another way to think about variables is to imagine labels that can be attached to specific values. When you assign a value to a variable, you are essentially attaching a label to that value. You can then reference the value later by using the variable name.

## Common Pitfalls and Useful Notes

- **Undefined variables**: If you try to use a variable that has not been defined or initialized, your program will throw an error.
- **Variable reassignment**: You can change the value stored in a variable by reassigning it to a new value. However, this can lead to unexpected behavior if you are not careful.
- **Variable naming conventions**: It is important to choose descriptive variable names that accurately reflect the data they store.
- **Variable scope**: Variables are only accessible within the scope in which they are defined. This means that if you define a variable inside a function, it cannot be accessed outside of that function.

## Examples of Let Variables in TypeScript

```typescript
let x: number = 5; // x is a variable of type number with an initial value of 5
let message: string = "Hello, world!"; // message is a variable of type string with an initial value of "Hello, world!"
let isComplete: boolean = false; // isComplete is a variable of type boolean with an initial value of false
```

### Examples of `let` variables in Rust

```rust
let x: i32 = 5; // x is a variable of type i32 with an initial value of 5
let message: &str = "Hello, world!"; // message is a variable of type &str with an initial value of "Hello, world!"
let is_complete: bool = false; // is_complete is a variable of type bool with an initial value of false
```


## Data/Value versus Variables

It's important to understand the difference between data and variables. Data is the information that is stored in a variable, while the variable is the named storage location that holds the data. When you manipulate a variable, you are actually manipulating the data that it stores.

::question{slug="variable-question" question="What is the difference between data and variables?"}