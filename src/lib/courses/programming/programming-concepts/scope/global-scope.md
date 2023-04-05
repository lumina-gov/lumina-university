# Global Scope

Parent item: https://www.notion.so/Scope-571bf839bc764c0abfdc9733b437014a

In programming, scope refers to the visibility and accessibility of variables in your code. Global scope refers to variables that are accessible from anywhere in your code.

## What Will You Learn

- Understand what global scope is
- Learn about the advantages and disadvantages of using global variables
- Learn about the potential issues that can arise when modifying global variables
- Understand how some programming languages prevent you from modifying global variables

## Global Variables

Global variables are variables that are declared outside of any function or code block and are accessible from anywhere in your code. Here is an example of a global variable in pseudocode:

```
global_variable = 10

function main()
    print(global_variable)
```

In this example, `global_variable` is accessible from within the `main` function because it is a global variable.

## Advantages and Disadvantages of Global Variables

Global variables can be useful because they allow you to share data between different parts of your code. However, they also have some disadvantages:

- **Namespace pollution**: Global variables can clutter up the global namespace, making it harder to understand your code and potentially causing naming conflicts.
- **Concurrency and race conditions**: Modifying global variables from multiple threads or processes can cause concurrency and race conditions, making your code unpredictable and potentially causing bugs.

## Modifying Global Variables

Modifying global variables is generally considered bad practice because it can cause concurrency and race conditions. In some programming languages, such as Rust, modifying global variables is prevented by the language itself.

Rust enforces ownership and borrowing rules that prevent you from modifying global variables from multiple threads or processes. Instead, Rust encourages you to use message passing or other forms of inter-process communication to share data between threads or processes.

## When to use global variables and alternatives

While global variables can be useful for sharing data between different parts of your code, they also have some disadvantages, such as namespace pollution and concurrency issues. As a result, it's generally recommended to avoid using global variables when possible.

Here are some alternatives to using global variables:

1. **Pass variables as parameters**: Instead of using a global variable, pass the variable as a parameter to any functions that need it. This ensures that the variable is only accessible within the scope of the function, reducing the risk of namespace pollution.
2. **Use a singleton**: A singleton is a design pattern where only one instance of an object is created and shared throughout your code. This can be a useful way to share data between different parts of your code without using global variables.
3. **Use a configuration file**: If you need to store configuration data that is accessible from multiple parts of your code, consider using a configuration file instead of a global variable. This ensures that the data is only accessible to the parts of your code that need it.

In general, it's best to use global variables sparingly, and only when there are no good alternatives. If you do need to use a global variable, make sure to carefully consider the potential issues and take steps to minimize the risks, such as ensuring that the variable is only modified in a controlled way.

## Conclusion

In conclusion, global scope refers to variables that are accessible from anywhere in your code. While global variables can be useful for sharing data between different parts of your code, they also have some disadvantages, such as namespace pollution and concurrency issues. In some programming languages, such as Rust, modifying global variables is prevented by the language itself to avoid these issues.