## What will you learn

In this unit, you will learn about recursive logic, including:

- What is recursion?
- How recursion works?
- When to use recursion?
- Advantages and disadvantages of recursion
- Examples of recursive algorithms

## Introduction

In programming, recursion is a technique used to solve complex problems by breaking them down into smaller and simpler sub-problems. Recursion involves defining a function that calls itself repeatedly until a base case is reached.

## How Recursion Works

Recursion works by repeatedly breaking down a problem into smaller sub-problems until the base case is reached. The base case is a scenario where the solution is already known or can be easily determined.

Recursion works by calling the function within itself. Each time the function is called, it works on a smaller sub-problem. The recursion continues until the base case is reached. Once the base case is reached, the function stops calling itself and returns the solution.

## When to Use Recursion

Recursion is useful in solving problems that can be broken down into smaller sub-problems, especially when the solution to the problem depends on the solution to its sub-problems.

## Advantages of Recursion

- Recursion makes code more readable and easier to maintain
- Recursion can solve problems that are difficult to solve iteratively

:::warning

Recursion can cause stack overflow errors if the depth of the recursion is too large.

We will explain the "call stack" in more detail later
:::

## Examples of Recursive Algorithms

- Binary search algorithm
- Factorial calculation
- Fibonacci sequence calculation

## Pseudocode using recursion

```jsx
function fib(n)
    if (n < 2)
        return n
    return fib(n-1) + fib(n-2)

let result = fib(10)
print(result) // Output: 55
```

In this example, the `fib` function takes a single argument, `n`, which represents the index of the desired Fibonacci number in the sequence. The function first checks if `n` is less than 2, in which case it returns `n` as the result (since the first two numbers in the sequence are both 1). If `n` is greater than or equal to 2, the function returns the sum of the previous two Fibonacci numbers by calling `fib(n-1)` and `fib(n-2)` recursively.
