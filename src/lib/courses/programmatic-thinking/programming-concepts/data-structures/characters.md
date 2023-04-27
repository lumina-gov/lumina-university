In programming, a character is a single symbol, such as a letter, number, or special character. Characters are a fundamental data type in many programming languages and are used extensively in many applications. In this unit, we will explore what characters are and how they are used in programming.

## What Will You Learn

- Understand what characters are and how they work
- Learn about different character encoding systems, including ASCII and UTF-8
- Learn about the ASCII table and how it is used
- Learn about UTF-8 character encoding and how it works
- Learn how emojis are represented in UTF-8

## Characters

A character is a single symbol used to represent text. Characters can be letters, numbers, or special characters. Characters are a fundamental data type in many programming languages and are used extensively in many applications.

## Character Encoding Systems

Character encoding is the process of assigning a unique numerical value to each character in a character set. There are several different character encoding systems in use today, including:

- **ASCII**: The American Standard Code for Information Interchange (ASCII) is a widely-used character encoding system that assigns a unique numerical value to each character in the English alphabet, as well as numbers and some special characters.
- **UTF-8**: The Unicode Transformation Format (UTF-8) is a variable-length character encoding system that can represent all possible characters in the Unicode standard.

## ASCII Table

The ASCII table is a chart that lists all of the characters and their corresponding numerical values in the ASCII character encoding system. Here is an example of an ASCII table:

| Decimal | Hex | Character |
| --- | --- | --- |
| 32 | 20 | (space) |
| 33 | 21 | ! |
| 34 | 22 | " |
| 35 | 23 | # |
| 36 | 24 | $ |
| 37 | 25 | % |
| 38 | 26 | & |
| 39 | 27 | ' |
| ... | ... | ... |
| 65 | 41 | A |
| 66 | 42 | B |
| ... | ... | ... |
| 97 | 61 | a |
| 98 | 62 | b |
| ... | ... | ... |
| 127 | 7F | DEL |

The ASCII table lists each character in the English alphabet, along with its decimal and hexadecimal values. Some characters in `ASCII` are considered **control characters**, such as `DEL` which can work like a backspace, but I won’t get into this in detail because it’s not something you generally need to concern yourself with.

## UTF-8 Character Encoding

UTF-8 is a widely-used character encoding system that can represent all possible characters in the Unicode standard. In UTF-8, each character is represented by a sequence of one or more 8-bit values, known as code units. The actual number of code units used to represent a character depends on the character itself and its position in the Unicode code space.

## Emojis in UTF-8

Emojis are graphical symbols used to represent emotions, objects, and other concepts. Emojis are represented in UTF-8 just like any other character in the Unicode standard. However, because emojis are more complex than most other characters, they require multiple code units to represent.

For example, the "grinning face with smiling eyes" emoji (😊) is represented in UTF-8 by the code units `0xF0`, `0x9F`, `0x98`, and `0x8A`. Together, they represent a single character, the "grinning face with smiling eyes" emoji.

~warning {

It’s easy to become overwhelmed by all the different types of character encodings, but generally languages will abstract this away for you, meaning you rarely have to think too much about how characters are represented

}