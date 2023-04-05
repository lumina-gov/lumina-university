In programming, numbers are a fundamental data type. They are used to perform mathematical calculations, store values, and represent quantities. In this unit, we will explore how numbers are represented in a computer program and the different types of numbers used in programming.

## What Will You Learn

- Understand how numbers are built using bits
- Learn the different types of numbers used in programming
- Explore why different number types are used in programming
- Understand the difference between numbers and text
- Learn when to use numbers in a program

## How Numbers are Built Using Bits

All numbers in a computer are ultimately represented using bits. Each bit can have a value of either 0 or 1, which corresponds to the two possible states of an electronic switch. By combining multiple bits, we can represent larger numbers.

### Counting in Binary

Binary is a number system that uses only two digits, 0 and 1. In binary, each digit represents a power of 2.

In the same way as counting in decimal, when you reach the number 9, adding one onto that means that you carry over a 1 to the left, and start back at zero.

Because binary only has 2 possibilities, it means that you carry over from 1, by moving it left, and if there is already a 1 there, you carry it over again.

Note

For example, in decimal:
09 + 01 = 10

And in binary:
01 + 01 = 10 (3 in decimal)

Here is an example of counting from 0 to 15 in binary (a total of 16 possibilities):

| Decimal (base 10) | Binary (base 2) | Hexadecimal (base 16) |
| --- | --- | --- |
| 0 | 0000 | 0 |
| 1 | 0001 | 1 |
| 2 | 0010 | 2 |
| 3 | 0011 | 3 |
| 4 | 0100 | 4 |
| 5 | 0101 | 5 |
| 6 | 0110 | 6 |
| 7 | 0111 | 7 |
| 8 | 1000 | 8 |
| 9 | 1001 | 9 |
| 10 | 1010 | A |
| 11 | 1011 | B |
| 12 | 1100 | C |
| 13 | 1101 | D |
| 14 | 1110 | E |
| 15 | 1111 | F |

A byte, contains 8 bits, so allows for a total of 256 possibilities or 2^8 possibilities. 

Hexadecimal (base 16) is also a very commonly used way of representing numbers for computers, because 16 is divisible by two, all the way down.

Note

The word hexadecimal comes from the words: hex meaning six and decimal meaning ten

## Different Number Types

In programming, there are several different types of numbers that can be used to represent different types of values. The most common types include:

- **Integers**: Integers are whole numbers that can be positive, negative, or zero. They are typically represented using a fixed number of bits, such as 8, 16, 32, or 64 bits.
- **Unsigned Integers**: Unsigned integers are similar to integers, but they can only be positive or zero. They are typically represented using the same number of bits as integers.
- **Floats**: Floats are used to represent numbers with a fractional component, such as 3.14159. They are represented using a fixed number of bits, such as 32 or 64 bits.
- **Decimals**: Decimals are used to represent decimal numbers with a high level of precision. They are represented using a variable number of bits, depending on the precision required. CPUs generally don’t deal with these numbers directly and instead software is used to simulate these numbers with arbitrary precision. They are often slower for this reason and are generally only used when high integrity between decimal operations is needed such as for financial calculations.

## Why Different Number Types are Used

Different number types are used in programming to represent different types of values and optimize the use of memory. For example, using an integer to represent a small value can be wasteful if the integer requires 32 bits. Using an 8-bit unsigned integer instead can save memory.

Floats are often used when you need numbers that contain a decimal point, but suffer from accuracy issues and rounding issues after a certain point.

## Numbers and Text are Different

It's important to note that a number and text that contains a number are two different things. In programming, text that contains a number is represented as a string, not a number. Attempting to perform mathematical operations on a string will often result in an error in many languages, or result in unexpected behaviour

~error Pitfall: When dealing with user inputs from any text-based inputs, be sure to convert the string (or text) into an actual number

## Colors in Hexadecimal

Colors in computers are represented using RGB, often in the hexadecimal format. RGB stands for Red, Green, Blue, which can be combined to create all the colors using [additive color](https://en.wikipedia.org/wiki/Additive_color).

Colors are generally represented using either 16 bit color, or 24 bit color. 16 bit color supports up to 65,536 possibilities of colors, and are used more for older displays that support fewer colors, and 24-bit is used generally for more modern displays and supports up to 16.7m colors.

If you’ve ever used graphics design software, you will almost certainly have come across the formats for representing colors.

16 bit colors are represented by using 3 hexadecimal digits (0 to 9 to A to F), the first digit represents the color red, the second represents the color green and the third represents the color blue, like so `#RGB` The colors are often prefixed with a hash `#` symbol.

The colors white, grey and black, would be `#FFF`, `#000`, `#888` respectively, and the colors red, green and blue would be `#F00`, `#0F0`, `#00F` respectively.

24-bit color is represented in a similar way, except using 2 hexadecimal digits instead of 1, for example, red would be `#FF0000` and green would be `#00FF00`.

![An example of how colors, or absence of can be combined to create all the colors.](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ef40ff3b-a22a-41f0-99fb-5b000f9b5b8d/Untitled.png)

An example of how colors, or absence of can be combined to create all the colors.

## When to Use Numbers

Numbers are used in programming whenever a calculation or quantity needs to be represented. They can be used for mathematical calculations, counting, indexing, and many other purposes.