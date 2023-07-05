## What will you learn

- What code smells are
- How to identify code smells in your code
- Common types of code smells and how to fix them

## Introduction

Just like how bad odors can indicate poor hygiene, bad code smells can indicate poor code quality. These code smells are characteristics of code that may indicate deeper problems within the codebase. In this unit, we will learn about what code smells are, how to identify them, and common types of code smells.

## What are Code Smells?

Code smells are characteristics of code that may indicate deeper problems within the codebase. They are indicators of problems in the design or implementation of a codebase that can lead to issues in the future. Identifying and fixing code smells is important to maintain code quality and ensure maintainability over time.

### Long Methods

Long methods are often a sign that there is too much logic and complexity within a single function. If a method is too long, it can be difficult to read and understand.

:::warning
Long methods can lead to maintenance problems and can make code harder to test.
:::

```python
# Long method example
def process_student_data(students):
    results = []

    for student in students:
        total_score = 0
        passed_all_subjects = True

        for subject in student["subjects"]:
            score = subject["score"]
            total_score += score

            if score < 50:
                passed_all_subjects = False

        average = total_score / len(student["subjects"])

        if passed_all_subjects and average >= 60:
            status = "pass"
        else:
            status = "fail"

        results.append({"name": student["name"], "average": average, "status": status})

    return results

```
This method is difficult to read and understand, as it contains both grade calculation and student status determination logic.

```python
# Refactored method example
def calculate_average(subjects):
    total_score = sum([subject["score"] for subject in subjects])
    return total_score / len(subjects)


def passed_all_subjects(subjects):
    return all([subject["score"] >= 50 for subject in subjects])


def determine_status(average, all_subjects_passed):
    if all_subjects_passed and average >= 60:
        return "pass"
    else:
        return "fail"


def process_student_data(students):
    results = []

    for student in students:
        average = calculate_average(student["subjects"])
        all_subjects_passed = passed_all_subjects(student["subjects"])
        status = determine_status(average, all_subjects_passed)

        results.append({"name": student["name"], "average": average, "status": status})

    return results
```

By extracting the logic into smaller, more focused methods, we've made the code easier to read and understand. Each method has a clear responsibility and can be reused elsewhere in the codebase if needed. The process_student_data function is now more focused, simply orchestrating the different steps of the process by calling the extracted methods.

### Duplicated Code

Duplicated code is another code smell that can make it difficult to maintain your code. Duplicated code can occur when developers copy and paste code instead of creating reusable functions.

:::warning
Duplicated code can lead to maintenance problems, as well as make it difficult to track down and fix bugs.
:::

### Un-Descriptive Code

Code should be descriptive and easy to understand. If variable names are unclear or methods are not properly named, it can be difficult for other developers to understand what the code does.

:::warning
Un-descriptive code can lead to maintenance problems, as well as make it difficult for other developers to read and understand your code.
:::

### Overly Complex Code

Code should be easy to read and understand. If the code is too complex, it can be difficult to understand and maintain.

:::warning
Overly complex code can lead to maintenance problems and make it difficult to understand the code.
:::
### Complex Conditional Logic

Complex conditional logic can make code difficult to read and understand. To fix this, you can simplify the conditional logic by using boolean logic or breaking the conditionals down into smaller, more manageable pieces.

:::warning
Nesting of logic can lead to maintenance problems and make it difficult to understand the flow of the code.
:::

### Example of Bad and Complex, Deeply Nested Conditional Logic

```rust
fn classify_age_and_activity(age: u32, active: bool) -> String {
    if age >= 0 && age <= 120 {
        if active {
            if age < 18 {
                "young and active".to_string()
            } else if age < 65 {
                "adult and active".to_string()
            } else {
                "senior and active".to_string()
            }
        } else {
            if age < 18 {
                "young and inactive".to_string()
            } else if age < 65 {
                "adult and inactive".to_string()
            } else {
                "senior and inactive".to_string()
            }
        }
    } else {
        panic!("invalid age");
    }
}
```

### How to Write It More Cleanly

Here's how we can rewrite the above code to be cleaner and more readable:

```rust
fn classify_age_and_activity(age: u32, active: bool) -> String {
    let age_group = match age {
        age if age > 120 => panic!("invalid age"), // this might change if we live longer
        0..=17 => "young",
        18..=64 => "adult",
        _ => "senior",
    };

    let activity_status = if active { "active" } else { "inactive" };

    format!("{} and {}", age_group, activity_status)
}
```

By combining the guard clauses using the `&&`  **and** boolean operator, we can simplify the code even further while still making sure that all conditions are met before applying the discount. This makes the code easier to read and reduces the number of lines of code, making it easier to maintain.

### Unused Variables or Functions

Unused variables or functions can indicate that the code is no longer necessary or that there are dead code paths in the codebase. To fix this, you can remove the unused variables or functions to simplify the code and make it easier to maintain.

:::tip
Linters and IDE tools can help make this process easier.
:::

### Bad Formatting

Code should be properly formatted and indented. If the code is not formatted properly, it can be difficult to read and understand.

You should also ensure that the code is formatted consistently. For example, if you are using tabs for indentation, you should use tabs throughout the codebase. If you are using spaces for indentation, you should use spaces throughout the codebase.

:::tip
Clean code as you are writing it, not at the end. By keeping code properly formatted at all times, it will make it easier to spot bugs and issues.
:::