In programming, arrays or collections are a fundamental data structure used to store and manipulate a collection of values. They are used extensively in many programming languages, and their simplicity and versatility make them a powerful tool. In this unit, we will explore arrays and their variants.

## What Will You Learn

- Understand what collections/arrays are and how they work
- Learn about different types of collections, including, arrays, lists, stacks, queues, and linked lists
- Explore the difference between lists and arrays
- Understand how arrays are stored in memory
- Learn about multi-dimensional arrays and their applications

## Arrays

An array is a data structure used to store a **collection of values** of the same type. The values in an array are indexed and can be accessed using their index. Arrays are useful for storing and manipulating large amounts of data in a program.

## Types of Arrays

There are several different types of arrays used in programming:

- **Arrays:** Arrays are fixed-sized collections that can contain a static number of items. However in some languages that abstract away the other types, such as JavaScript, they are simply called arrays but are actually represented as Vecs internally.
- **Lists or Vecs**: Lists are similar to arrays but can be resized dynamically. They are useful for situations where the size of the collection of data is not known in advance.
- **Stacks**: Stacks are a type of list where the last element added is the first one to be removed. This is commonly referred to as a "last in, first out" (LIFO) data structure.
- **Queues**: Queues are a type of list where the first element added is the first one to be removed. This is commonly referred to as a "first in, first out" (FIFO) data structure.
- **Linked Lists**: Linked lists are similar to lists, but the elements in a linked list are not stored in contiguous memory locations. Instead, each element has a reference to the next element in the list.

## Arrays in Memory

As fixed arrays are generally a collection of values of the same type (which we will call `T`), and fixed length, the size of an array is the `sizeof(T) * length`

If the type `T` is a 64 bit unsigned integer (`u64`) then each number will occupy 8 bytes of memory. If the array length is `4`, then the array size will be `8 bytes * 4 = 32 bytes`

### Indexing

The first item in an array starts at `0` and the last item in the array starts at `length - 1`

:::error
**Common pitfalls**

A very common problem even programmers face is the off-by-one problem.

This can be demonstrated by asking someone, if you have a fence with 10 posts, with each post separated by a meter, how long is the fence?

Most people would answer 10 meters, but the answer is actually 9 meters.

:::

### Growable Arrays

When growable arrays, often called `List`s or `Vec`s need to grow, they simply cannot just keep adding items at the end of the last item, as this will overwrite memory from other parts of the program, instead the array must be resized into a larger block of memory,

When an array needs to be resized, the computer must allocate a new block of memory that is large enough to hold the new array. This can be an expensive operation in terms of memory usage and access times.

Because this is an expensive operation, and potentially needs to happen a very large number of times, Vecs will generally always **double in size and capacity each time**, leaving spare capacity to insert items in the future.

## Multi-Dimensional Arrays

Multi-dimensional arrays, or arrays inside of an array are arrays that have more than one dimension or depth. They are commonly used to represent matrices and other types of complex data structures. In a two-dimensional array, for example, each element is indexed using two indices, which correspond to its row and column positions in the matrix.

## When to use collections

1. When you need to store a collection of values that have a specific order.
2. When you need to access elements in the collection by their index.
3. When you need to efficiently append elements to the end of the collection.
4. When you need to efficiently remove elements from the end of the collection.
5. When you need to efficiently access a range of elements in the collection.
6. When you need to efficiently sort the elements in the collection.

## Use cases for Collections

Collections are a fundamental data structure in computer programming, and they have a wide range of general use cases. Here are some of the most common use cases for arrays:

1. Storing a collection of related data: Arrays are often used to store a collection of related data, such as a list of names or ages. Each element in the array represents a single piece of data, and the entire array represents the collection.
2. Accessing data by index: Arrays provide efficient access to elements by index, which makes them ideal for use cases where you need to access elements quickly based on their position in the array.
3. Sorting and searching data: Arrays are often used for sorting and searching algorithms, such as binary search or bubble sort. Sorting and searching algorithms require efficient access to elements by index, which arrays provide.
4. Implementing data structures: Many other data structures, such as stacks, queues, and hash tables, are implemented using arrays as their underlying data storage mechanism.
5. Managing memory: Arrays are often used to manage memory in programs, such as allocating and deallocating memory for dynamic arrays or managing memory blocks in low-level programming languages.
6. Interfacing with external systems: Arrays are a common data format used for interfacing with external systems, such as sending and receiving data over a network or reading and writing data to a file.

## Terminology

Often, especially in languages that abstract away all the array types into a single “array” type, the word list and array are used interchangeably, but in lower level languages, a Vec/List or array will refer to different types of collections of values.

Generally Arrays are static, and can’t grow in size, whereas lists or Vecs are more advanced versions that support the ability to grow in size.