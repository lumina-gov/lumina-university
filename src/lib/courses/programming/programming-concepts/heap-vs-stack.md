## What will you learn

- The difference between heap and stack memory allocation
- The pros and cons of using heap or stack
- How languages handle memory allocation
- When and where to use heap and stack memory

## Introduction

In computer programming, memory allocation refers to the process of reserving a portion of the computer's memory for use by a program. There are two main types of memory allocation: heap and stack. Understanding the difference between the two is crucial in writing efficient and safe code.

Note

Many higher level languages like JavaScript, Java and Python which usually manage memory for you by means of automatic garbage collection will handle and automate lots of these concerns for you, but they are still useful to understand as a developer.

## Stack Memory Allocation

Stack memory is allocated at compile-time and is a contiguous block of memory. It is used to store variables that have a limited lifespan, such as local variables and function arguments. Stack memory allocation follows a Last-In-First-Out (LIFO) structure.

### Pros of stack memory allocation

- Very fast allocation and deallocation, since the memory addresses are determined at compile-time.
- The LIFO (last-in-first-out) structure allows for easy memory management, as the memory is automatically freed when the function that uses it exits.

### Cons of stack memory allocation

- The amount of memory allocated is fixed at compile-time and cannot be changed during runtime.
- Stack memory is limited and can quickly be exhausted when dealing with large or complex data structures.
- Stack memory is not accessible outside of the current function's scope.

## Heap Memory Allocation

Heap memory is allocated at runtime and is not organized in a specific order. It is used to store variables that have a longer lifespan, such as dynamically allocated memory and global variables.

### Pros of heap memory allocation

- Allows for dynamic memory allocation, which means that memory can be allocated and deallocated during runtime.
- Heap memory is not limited and can be expanded or reduced as needed.
- Heap memory can be accessed from any part of the program.

### Cons of heap memory allocation

- Memory allocation and deallocation are slower compared to stack memory, as the memory addresses are determined at runtime.
- Memory fragmentation can occur when memory is constantly being allocated and deallocated, leading to inefficient use of memory.
- Memory leaks can occur when the allocated memory is not properly deallocated, leading to unnecessary memory usage.

## How languages handle memory allocation

Different programming languages handle memory allocation differently. Some languages, such as C and C++, allow for direct control of memory allocation through functions such as `malloc` and `free`. Other languages, such as Java, JavaScript, and Python, handle memory allocation through **automatic garbage collection**.

## Rust's Approach to Memory Allocation

Rust is a systems programming language that provides safe memory management through its ownership and borrowing system. Rust ensures that memory is properly allocated and deallocated by enforcing strict ownership rules. These rules allow Rust to prevent common memory errors such as null pointer dereferencing and memory leaks.

Memory safety issues account for around 80% of bugs, in a survey conducted by Microsoft.

## Functions and Stack

In computer science, the call stack is a data structure used by a program to keep track of function calls. Each time a function is called, a new frame is added to the top of the call stack. This frame stores the arguments and local variables of the function, along with the return address, which tells the program where to continue executing once the function call is complete.

When a function returns, its frame is removed from the top of the stack, and control returns to the previous function that called it. This continues until the stack is empty, at which point the program terminates.

The call stack is essential to how functions work in programming. It allows functions to be called recursively, with each new call creating a new frame on top of the stack. It also ensures that local variables are scoped to their respective functions, preventing naming conflicts between different functions.

Languages like Rust make use of a concept called ownership, which allows the program to manage memory more efficiently by ensuring that each piece of memory has a unique owner. This ownership model is used to prevent memory leaks and data races, making Rust a popular choice for systems programming.