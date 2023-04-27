# Local / Block Scope

# Local/Block Scope

In programming, scope refers to the visibility and accessibility of variables in your code. Local/block scope refers to variables that are only accessible within a specific function or code block.

## What Will You Learn

- Understand what local/block scope is
- Learn about the advantages and disadvantages of using local variables
- Understand how to declare and use local variables in your code

## Local Variables

Local variables are variables that are declared within a function or code block and are only accessible within that function or block. Here is an example of a local variable in pseudocode:

```
function main()
    local_variable = 10
    print(local_variable)
```

In this example, `local_variable` is only accessible from within the `main` function because it is a local variable.

## Advantages of Local Variables

Local variables can be useful because they limit the visibility and accessibility of your variables, making your code more modular and easier to understand. They also prevent naming conflicts and can help you avoid bugs caused by accidentally modifying a variable in one part of your code when you meant to modify it somewhere else.

However, local variables also have some disadvantages:

- **Limited accessibility**: Local variables can only be accessed from within the function or block where they are declared, which can make it harder to share data between different parts of your code.
- **Memory management**: Local variables are usually stored on the stack, which means that they are often automatically created and destroyed as you enter and exit functions or code blocks. This can sometimes lead to issues with memory management, especially if you have a lot of recursive functions or deep code blocks.

Note

It’s useful to note that variables are generally always only accessible after they have been defined, in other words, you can’t use a variable before it has been declared and initialised.

## Declaring and Using Local Variables

You can declare a local variable in your code by simply assigning a value to a variable within a function or code block. Here is an example of declaring and using a local variable in pseudocode:

```
lua

```

```
function main():
    local_variable = 10
    print(local_variable)

```

In this example, we declare a local variable called `local_variable` and assign it the value of `10`. We then print the value of `local_variable` to the console.

## Conclusion

In conclusion, local/block scope refers to variables that are only accessible within a specific function or code block. Local variables can be useful for limiting the visibility and accessibility of your variables, making your code more modular and easier to understand.