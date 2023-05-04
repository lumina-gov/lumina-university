As a programmer, you will encounter many problems that you don't know how to solve. Fortunately, there is a wealth of information available online that can help you find a solution. In this unit, you will learn how to use Google effectively to solve programming problems.

## What Will You Learn

- Understand how to use Google effectively to find programming solutions
- Learn how to remove irrelevant information when searching for solutions
- Practice using search queries and keywords to find relevant information

## Removing Irrelevant Information

When you encounter a programming problem, the error message you receive might include irrelevant information such as line numbers or filenames. It's essential to remove this information when searching for a solution. Instead, focus on the error code and any relevant keywords.

For example, suppose you receive the following error message:

```
FileNotFoundError: [Errno 2] No such file or directory: 'myfile.txt'
```

When searching for a solution, focus on the error code (`FileNotFoundError`) and relevant keywords (`No such file or directory`, `Python`).

Exclude irrelevant information such as the file name, line numbers and other information that are specific to your project, as this will not help you find relevant results.

## Good and Bad Searches

When searching for programming solutions, it's important to use the right search queries and keywords. Here are some examples of good and bad searches:

| Good Searches | Bad Searches |
| --- | --- |
| "Python FileNotFoundError No such file or directory" | "my Python code isn't working!" |
| "Java NullPointerException" | "my Java code has an error" |
| "JavaScript Uncaught TypeError" | "JavaScript error" |

Note that the good searches include specific error codes and relevant keywords. The bad searches are too general and don't provide enough information.

## Exercise

Given the following error, what would be a good search query to find a solution?

```
module.js:340
    throw err;
          ^
Error: Cannot find module 'express'
    at Function.Module._resolveFilename (module.js:338:15)
    at Function.Module._load (module.js:280:25)
    at Module.require (module.js:364:17)
    at require (module.js:380:17)
    at Object.<anonymous> (C:\ChatServer\Server\server.js:6:9)
    at Object.<anonymous> (C:\ChatServer\Server\server.js:25:4)
    at Module._compile (module.js:456:26)
    at Object.Module._extensions..js (module.js:474:10)
    at Module.load (module.js:356:32)
    at Function.Module._load (module.js:312:12)
```

::question{slug="good-search" question="What would be a good search query to find a solution to the above error?" context="Error is: `Error: Cannot find module 'express'`, user should search something along those lines"}

::question{slug="good-search-answer" question="Now search Google for an answer to this error. What is the first solution you find?" context="User searches: `Error: Cannot find module 'express'`, correct answer would be to run `npm install express` but any answer that solves the problem is acceptable"}

## Conclusion

Google is a powerful tool that can help you find solutions to programming problems. By removing irrelevant information when searching for solutions, using specific search queries and keywords, and focusing on error codes and relevant information, you can become a more efficient and effective problem solver. Remember, the key to successful Google searches is specificity and relevancy.