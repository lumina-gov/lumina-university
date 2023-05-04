In programming, a **reference** or **pointer** is a way to refer to a specific location in memory. References are used to access and manipulate data stored in memory, and they are a fundamental concept in many programming languages. In this unit, we will explore how references work and how they are used in programming.

## What Will You Learn

- Understand what references & pointers are and how they work
- Learn how to use references to manipulate data
- Explore the difference between references and values
- Understand how references are used in functions and objects

## What are References?

A reference is a way to refer to a specific location in memory. When you create a variable in a program, the computer sets aside a specific location in memory to store that variable's value. A reference allows you to access that location in memory and manipulate the data stored there.

:::note
A reference is essentially just an integer/number that points to a specific address in a computer’s memory.
:::

## Difference Between References and Values

It's important to understand the difference between references and values. A value is the actual data stored in memory, such as a number, string, or object. A reference, on the other hand, is a way to refer to the location in memory where that value is stored.

::question{slug="reference-question" question="What is the difference between a reference and a value?"}
## References in Functions and Objects

References are commonly used in functions and objects. In a function, you can pass references to variables as arguments. This allows the function to manipulate the original data stored in memory, rather than creating a copy of the data.

In an object-oriented program, objects are often created as references to a specific location in memory. This allows multiple objects to reference the same data, which can save memory and make programs more efficient.

## Memory Layout of References

The size of a reference in a program will depend on what type of processor the program was compiled for. For example, a 64 bit processor will use 64 bit numbers for references in it’s program.

## References are to move cheaper than values

Passing references to functions is generally cheaper than passing values because it doesn't require copying or moving the data. This can make programs more efficient and save memory and time.

The exception to this rule is when the data is small enough to fit in a register. In this case, passing values may be more efficient than passing references. This includes primitive types such as integers, floats, and booleans.