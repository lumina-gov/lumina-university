# Test-driven development

Parent item: https://www.notion.so/Clean-Code-84517a024d7f493788507ff5cfb92f81

## What you will learn

In this unit, you will learn about Test-Driven Development (TDD), which is a programming technique that emphasizes writing tests before writing code. By following the TDD approach, you will learn how to write code that is testable, maintainable, and easily understood by other developers.

## Test-Driven Development (TDD)

TDD is a process in which you write tests that define the expected behavior of your code before you write the actual code. The process involves writing a failing test, then writing the code that passes the test, and finally refactoring the code to make it cleaner and more maintainable.

The process can be broken down into the following steps:

1. Write a failing test: The first step is to write a test that verifies the expected behavior of the code. The test should fail because there is no code yet to make it pass.
2. Write the code to pass the test: The next step is to write the code that will make the test pass. The code should be as simple as possible to achieve the desired outcome.
3. Refactor the code: Once the test passes, you should refactor the code to make it cleaner and more maintainable. This step involves improving the design of the code without changing its behavior.

## Benefits of TDD

Using TDD can provide several benefits to your development process:

- Increased confidence: With a comprehensive test suite, you can be more confident that your code works as expected.
- Better design: By writing tests before the code, you are forced to think about the design of the code before writing it.
- Faster feedback: With automated tests, you can get feedback on the quality of your code much faster than if you had to manually test it.
- Easier maintenance: Tests act as a safety net for refactoring, ensuring that changes to the code do not break existing functionality.

## TDD Best Practices

Here are some best practices to follow when using TDD:

- Write simple tests: Write tests that verify one specific behavior at a time. Avoid writing tests that try to verify multiple behaviors at once.
- Test edge cases: Make sure to test edge cases, such as inputs at the boundaries of the expected range, to ensure that your code handles them correctly.
- Refactor frequently: Refactor the code frequently to keep it clean and maintainable. Use automated tools to help you with refactoring tasks.
- Keep tests fast: Tests should run quickly so that you can get fast feedback on the quality of your code. Avoid tests that take a long time to run.
- Fail sooner: When writing a test, stop writing the test as soon as it will fail. Don’t add more code into the test until you have ensured that earlier behaviours of the test are passing. Once it is passing, you can continue writing your test.
- Test errors: Don’t write tests that just handle the expected inputs, write tests to ensure that the code actually fails when it is supposed to fail. This additionally helps keep your errors more readable which can help you find issues from bugs earlier.

Warning

Your users are your final layer of bug detection. If you don’t find a bug, then they will, so be sure to avoid that with adequate testing.