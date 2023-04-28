Programming is all about problem-solving. To become a successful programmer, you need to learn how to approach problems systematically and develop solutions that are both efficient and effective. In this unit, you will learn some techniques for solving problems using programming.

## What Will You Learn

- Understand the problem-solving process
- Learn how to approach problems systematically
- Understand how to write Pseudocode
- Learn how to test and debug your solutions

## The Problem-Solving Process

The problem-solving process is a structured approach to solving problems. Here are the steps:

1. **Understand the problem**: Read the problem statement carefully, and make sure you understand it completely. If the problem is unclear, ask for clarification.
2. **Break it down**: Divide the problem into smaller subproblems, and tackle each one individually. Start with the simplest subproblem, and work your way up.
3. **Visualize the problem**: Draw a diagram, flowchart, or any other visual representation of the problem. This helps you to see the problem from different angles and identify potential solutions.
4. **Write Pseudocode**: Write out the steps of the solution in plain language, without worrying about the specific programming language syntax. This helps you to flesh out the logic of the solution before you start writing code.
5. **Implement the solution**: Write the code to implement your solution.
6. **Test your solution**: After you've written your code, test it with a variety of inputs. Make sure it works correctly in all cases.
7. **Debug your solution**: If your code doesn't work correctly, use debugging techniques to identify and fix the problem.

:::error

Most beginners think they don't understand what code to write, but the real problem is that they don't understand the problem they're trying to solve.

1. Do not try to do it before figuring out what to do
2. Write out the concepts first, then convert to code after.
    1. If you're lost in coding, it's probably because you shouldn't be coding yet
    2. Have you been been stuck on a problem, and you start explaining it to somebody and instantly see holes in the logic you didn't see before?
    3. Most programmers know this feeling.
    4. If you're confused about what you are coding, try to write down your problem or try explain it to someone.
    5. You may come across the term rubber-duck debugging, where it literally involves asking or explaining a problem to a rubber duck and finding the solution
    6. This is because more often than not, your solution lies in the problem itself.
    7. “If you can’t explain something in simple terms, you don’t understand it well enough.” — Richard Feynman

:::
### Rubber Duck Debugging

Rubber duck debugging is a technique where you explain your code to a rubber duck as if it were a person. By talking through the code step-by-step, you may be able to spot errors or see the code in a new way. The rubber duck doesn't actually help you, but the act of explaining the code out loud can often help you find the solution to a problem.

## Comments are code

Comments are code. What do I mean?

Well, why do we use comments? *We all know that comments explain code to other programmers*.

This explains **why we never write them**, because half the time, you don't want to explain the code until you're sure it will work, which may never happen and the other half is because it's their own damn fault if they can't understand my code

**WRONG!**

> Code is there to explain the comments to the computer - **this is important**
>
> Your comments write your algorithm.
>
> How do you know when your algorithm is done?
>
> You look at every line step by step, and confirm:
>
> Oh I could do that, I could do that, Oop better look that one up, hmm... I could break that up into smaller chunks

And **only when you're done** should you start thinking about writing code

## Approaching Problems Systematically

To approach problems systematically, you need to break them down into smaller, more manageable parts. This allows you to focus on one part of the problem at a time and make steady progress. Here are some tips:

- **Identify the inputs and outputs**: Determine what information the program needs to start with (the inputs) and what it needs to produce at the end (the outputs).
- **Use abstraction and generalization**: Focus on the essential parts of the problem and generalize the solution so that it can work for many similar problems, not just one specific case.
- **Use patterns**: Patterns are solutions to common problems. They help you to avoid reinventing the wheel and provide a tried-and-tested solution. You should learn to recognize patterns in the problems you are trying to solve and apply them where appropriate.
- **Think Critically and Logically**: Programming requires logical and critical thinking. You need to analyze problems carefully, identify the root cause of the issue, and come up with a plan to solve it.

## Pseudocode

Pseudocode is a way of expressing the steps of a solution in plain language, without worrying about the specific programming language syntax. Here's an example

```
Get the user's name
Get the user's age
If the user is under 18, print "You are too young to vote"
If the user is 18 or older, print "You are old enough to vote"
```

Pseudocode helps you to flesh out the logic of your solution before you start writing code. Once you have the steps written out, it's much easier to translate them into code.

## Testing and Debugging

Testing and debugging are important parts of the problem-solving process. Here are some tips:

- **Test with a variety of inputs**: Make sure your program works correctly for a wide range of inputs, not just the ones you tested initially. If you expect a number somewhere, make sure you are actually receiving a number and not a piece of text containing a number - there is a difference.
- **Use debugging tools**: Most programming languages come with built-in tools for debugging. Learn how to use them effectively.
- **Debug systematically**: Don't just randomly change code and hope the problem goes away. Instead, use a systematic approach to identify and fix the problem. Here are some steps:
    1. **Reproduce the problem**: Try to reproduce the problem using the same inputs or similar ones.
    2. **Isolate the problem**: Narrow down the problem by identifying the root cause of the issue in code.
    3. **Write a test**: Write a test that fails because of the problem. This test will prevent the problem from happening again in the future.
    4. **Fix the problem**: Once you've identified the root cause of the problem, fix it by changing the code.
    5. **Run the test**: Run the test to make sure the problem has been fixed. If the test fails, repeat the process until it passes.