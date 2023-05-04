In programming, a set is a data structure used to store a collection of unique values. Sets are a fundamental data structure in many programming languages and are used extensively in many applications. In this unit, we will explore what sets are and how they are used in programming.

## What Will You Learn

- Understand what sets are and how they work
- Learn how to define and use sets in programming
- Explore how to manipulate and compare set values
- Learn about the advantages of using sets in programming
- When to use sets, and example use cases

## Sets

A set is a collection of **unique values.** In programming, sets are used to store a collection of values and perform operations on those values, such as finding the intersection or union of two sets. Sets are a fundamental data structure in many programming languages and are used extensively in many applications.

## When to use sets

Sets and arrays are both useful data structures, but they have different strengths and weaknesses. Here are some examples of when to use sets and when to use arrays:

1. When you need to store a collection of unique values and prevent duplicates.
2. When you need to perform set operations such as finding the intersection, union, or difference of two sets.
3. When you need to check if a specific value is present in a collection.
4. When you need to store a collection of values that don't have a specific order.
5. When you need to efficiently check if two collections have any common elements.
6. When you need to efficiently remove elements from a collection.
7. When you need to merge two sets and remove duplicates.

## Advantages of Using Sets

Using sets in programming has several advantages:

- **Uniqueness**: Sets ensure that each value in the set is unique, preventing duplicates.
- **Efficiency**: Sets provide efficient operations for finding the intersection, union, or difference of two sets.
- **Ease of Use**: Sets make it easy to store and manipulate a collection of related values.

## Example use cases of sets

1. A program that needs to store a collection of unique email addresses.
2. A program that needs to find the common interests between two people.
3. A program that needs to find the mutual friends between two people.
4. A program that needs to check if a certain element exists in a large collection of elements.
5. A program that needs to store a collection of unique tags for blog posts.
6. A program that needs to keep track of the unique IP addresses that access a web server.

::question{slug="set-use-case" question="Can you come up with a unique example of when you would use a set?" context="Determine whether a set would be an appropriate and preferred data structure for the user's answer"}

## Examples of sets in programming

```rust
// Create a new empty set
let mut set = HashSet::new();

// Add values to the set
set.insert(1);
set.insert(2);

// Check if a value is in the set
println!("{}", set.contains(&1)); // true
println!("{}", set.contains(&3)); // false
```

```js
// Create a new empty set
const set = new Set();

// Add values to the set
set.add(1);
set.add(2);

// Check if a value is in the set
console.log(set.has(1)); // true
console.log(set.has(3)); // false
```