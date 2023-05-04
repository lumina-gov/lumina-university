## Writing Clear and Effective Algorithms

When writing algorithms, it's important to keep them clear and easy to understand. Here are some tips for writing clear and effective algorithms:

- **Start with a clear problem statement**: Before writing any code, make sure you understand the problem you're trying to solve. Write a clear problem statement that outlines the problem and what you're trying to achieve.
- **Break the problem down into smaller steps**: Once you understand the problem, break it down into smaller steps. Each step should be a single task that can be implemented as a statement or block of code.
- **Use descriptive variable names**: Use variable names that clearly describe what they represent. This will make your code easier to read and understand.
- **Convert the pseudo-code to code** Once you are completely clear on what each step in your pseudocode does and how to implement it, you will be clear on what code to start writing to get started.
- **Comment your code**: Add comments to your code to explain what each block or statement is doing. This will make your code easier to understand and maintain.
- **Test your code**: Test your code to make sure it works as expected. Use test cases to verify that your algorithm produces the correct output for a range of inputs.

## Challenge

Write an pseudo-code algorithm that checks if a given string is a palindrome (reads the same backward as forward)

An example of a palindrome is the word `racecar`, when this word is read backward, it still spells racecar. Another example is `rotator`

If the string is a palindrome, return `true`, otherwise return `false`. Assume you have access to a function called `reverse()` that reverses a string.

:::warning
If you are stuck, try searching for "pseudocode string palindrome algorithm" on Google
:::

::question{slug="palindrome" question="Write an pseudocode function which contains an algorithm that checks if a given string is a palindrome" }


:::spoiler
```
function isPalindrome(input_string)
    reverse_string = reverse(input_string)
    ## reverse() is a function that reverses a string
    return input_string == reverse_string
end
```
:::