# Iterative Logic

Parent item: https://www.notion.so/Algorithms-and-Logic-47f27522cfcd4decbc1aef8a9b2979fc

Iterative logic is a fundamental concept in programming that involves repeating a set of instructions multiple times. In this unit, we will explore the basics of iterative logic, including the different types of loops and how they are used in programming.

## What Will You Learn

- Understand the basics of iterative logic in programming
- Learn about different types of loops
- Explore how iterative logic can be used to solve problems
- See examples of how to write pseudo code using iterative logic

## Types of Iterative Logic

There are several types of iterative logic used in programming, including `for loops`, `while loops`, and `do-while` loops. Each type of loop has its own syntax and characteristics and varies between language to language, but they all involve repeating a set of instructions until a certain condition is met.

In a `for loop`, the loop executes a fixed number of times, based on a counter variable. In a `while loop`, the loop continues to execute until a certain condition is **no longer true**.

The syntax for each type of loop varies between programming languages, but the basic principles are the same.

Some languages, such as ********Rust******** support the `loop` keyword which will loop a block of code forever unless it is stopped.

## Using Iterative Logic

Iterative logic is used in programming to execute instructions multiple times, often with different inputs or variables. For example, a program that calculates the factorial of a number might use iterative logic to multiply the number by itself repeatedly, decreasing the number by 1 each time until the value reaches 1.

By carefully controlling the number of iterations and the inputs or variables used in each iteration, programmers can create efficient and accurate programs that solve a wide range of problems.

## Writing Pseudo Code with Iterative Logic

Pseudo code is a way of writing out the basic logic of a program in plain language, without worrying about the specific syntax of a programming language. Pseudo code can be a useful tool for planning out the iterative logic of a program before writing the actual code.

To write pseudo code using iterative logic, start by outlining the basic steps of the program. Then, identify which steps will need to be repeated multiple times, and determine the conditions for when the loop should terminate.

For example, this program written in pseudocode will print 10 when it has finished evaluating

```
let total be 10
let current be 1
while current is less than total
	add 1 to current
print current

```

This pseudo code uses a while loop to repeatedly increment the current value until it reaches 10, in which case it will stop executing the loop and go to the next instruction which will print the current variable, which will be 10

## `break`s and `continue`s

When working with loops, it is common to use `break` and `continue` statements to control the flow of the loop.

A `break` statement is used to exit the loop early, regardless of whether or not the loop has finished iterating through all of its elements. This can be useful if you encounter a specific condition that you want to break out of the loop for. For example, if you are searching through a list of numbers and you find the number you are looking for, you can use a `break` statement to exit the loop and stop searching.

On the other hand, a `continue` statement is used to skip over a particular iteration of the loop and move on to the next one. This can be useful if you encounter a specific condition where you don't want to execute the rest of the loop code for that iteration. For example, if you are iterating through a list of numbers and you want to skip over any negative numbers, you can use a `continue` statement to skip over those iterations.

```python
for each item in my_list:
  if item is negative:
    continue   # skip this iteration
  
  if item == 42:
    print("Found the answer!")
    break      # exit the loop early
  
  print(item)
```

In this example, we are iterating through a list called `my_list`. If we encounter a negative number, we use `continue` to skip over that iteration and move on to the next one. If we find the number `42`, we use `break` to exit the loop early and print a message. Otherwise, we print the current item to the console.