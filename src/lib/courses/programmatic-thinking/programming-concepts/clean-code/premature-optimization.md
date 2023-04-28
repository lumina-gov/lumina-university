## What Will You Learn

- The dangers of premature optimization
- How to identify and measure performance bottlenecks
- Tools to use to improve performance and find bottlenecks

## Premature Optimization

Premature optimization is the act of trying to optimize your code before it's necessary. This can result in code that's more complicated than it needs to be and can make it harder to maintain and debug. It's essential to avoid premature optimization because it can lead to a waste of time and resources, and often it won't even make a noticeable difference in the performance of your program.

> "Premature optimization is the root of all evil." - Donald Knuth

## The Cost of Optimization

When you try to optimize your code before it's necessary, you're adding complexity to your code. Complexity is the enemy of clean code, and it can make your code harder to read, understand, and maintain. Additionally, optimization can take up a significant amount of time, which could be better spent improving the functionality of your program.

## Focus on Functionality First

It's essential to focus on getting the functionality of your program working correctly first. You can always optimize your code later if you identify a bottleneck or a part of your program that's running slower than it should. By waiting until you need to optimize, you can save time and resources and ensure that your code is clean and easy to maintain.

## Code Readability

Another important aspect of clean code is readability. When you optimize your code prematurely, you're often sacrificing readability for the sake of performance. This can make it more challenging for others to read and understand your code, which can lead to mistakes and errors.

## Tools for Improving Performance

There are several tools you can use to improve the performance of your code. Here are a few examples:

- **Profiling tools**: As mentioned before, profiling tools can help you identify performance bottlenecks and areas of your code that are taking the most time to execute.
- **Compiler flags**: Some compilers offer flags that can be used to optimize the code during compilation. When debugging, the compiler often skips these steps in order to compile faster, but often a program compiled **************************and optimised************************** will give you lots of performance improvements.
- **Caching**: Caching is a technique where you store the result of a computation so that you don't have to perform the computation again. This can greatly improve performance, especially for computationally expensive operations.
- **Parallelism**: Parallelism is the technique of dividing a problem into smaller subproblems that can be solved simultaneously. This can be achieved using threads, processes, or other parallel computing techniques.

:::warning
It’s better to have working, but slow code, than fast but broken code.
:::