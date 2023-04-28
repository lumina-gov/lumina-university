## What will you learn

- The difference between parameters and arguments
- Synonyms for functions
- What returning means
- What a function is and how it is structured
- Parameters and outputs
- How calling a function works
- Writing a psuedo code function
- When to use functions
- Methods and how they can be attached to object types

## Introduction to Functions and Methods

Functions and methods are blocks of code that can be reused throughout a program. They are a fundamental building block of programming and allow for code reuse and modularity. Functions are generally used in procedural programming, while methods are used in object-oriented programming.

## Parameters and Arguments

Functions and methods can take inputs through parameters or arguments. These terms are often used interchangeably, but they have slightly different meanings. Parameters are the variables that a function or method expects to receive as input, while arguments are the actual values that are passed in when the function or method is called.

## Synonyms for Functions

Functions can be referred to by different names depending on the programming language or the specific use case. Some common synonyms include procedures, subroutines, and methods.

## Returning

When a function or method is called, it may produce an output that can be used in other parts of the program. This output is called the return value. A function or method can return a single value or multiple values.

## Anatomy of a Function

A function is a block of code that performs a specific task. Functions have:

- a name - a label used to call the function
- a set of parameters - the inputs that the function expects to receive
- a body (or block) - the statements or code that is executed when the function is called
- a return value - the output that the function produces

```jsx
// A function in JavaScript
function functionName(parameter1, parameter2) {
    // function body
    let output = "hello"
    return output; // the return statement
}
```

## Outputs

The output of a function is defined using the return statement. Some functions for example, might contain an infinite loop and never actually return. Some functions might also return nothing or `void` - these are both totally fine and just depend on what you are trying to achieve.

## Calling a Function

Calling a function means to execute the code inside the function. When a function is called, the values of the arguments are passed into the parameters, and the code inside the function is executed. When the function has finished executing, it returns the output, if any, to the calling code.

## Pseudocode functions

```
# Defining a function in pseudo code
function calculate_sum(a, b)
	return a + b

# Calling a function in pseudo code
let a be calculate_sum(5, 10)

# prints 15
print(a)
```

## When to Use Functions

Functions are useful when you need to perform a specific task multiple times in your program. By defining a function once, you can call it multiple times throughout your program without having to rewrite the same code over and over again.

## Methods

Methods are functions that are attached to object types. They are used in object-oriented programming to manipulate the data and behavior of objects. Methods are defined inside classes and can be called on instances of the class.