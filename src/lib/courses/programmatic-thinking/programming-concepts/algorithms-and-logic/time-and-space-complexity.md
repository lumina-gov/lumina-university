## Introduction

When designing algorithms, it is important to consider both their time and space complexity. Time complexity refers to the amount of time an algorithm takes to complete its task, while space complexity refers to the amount of memory an algorithm requires to complete its task.

In general, an algorithm that takes less time and less space is considered to be more efficient than one that takes more time and more space. However, this trade-off between time and space can be complex, and different algorithms may be more efficient depending on the specific task.

## Analyzing Time Complexity

The time complexity of an algorithm is usually expressed in terms of **big O notation**. This notation provides an upper bound on the amount of time an algorithm will take to complete its task, in terms of the size of the input data.

For example, an algorithm with a time complexity of **O(n)** will take roughly **n operations** to complete its task, where **n is the size of the input data**. An algorithm with a time complexity of **O(n^2)** will take roughly **n^2** operations to complete its task, and so on.

### Heres a table of common Big O notations:
| Big O Notation | Name        | Description |
| ---            | ---         | ---         |
| O(1)           | Constant    | Algorithm's runtime remains the same, no matter the input size. E.g., accessing an array element by index. |
| O(log n)       | Logarithmic | Runtime increases slowly as input size grows. E.g., binary search in a sorted array. |
| O(n)           | Linear      | Runtime increases directly proportional to input size. E.g., searching an unsorted array for a specific value. |
| O(n log n)     | Linearithmic | Runtime increases at a rate between linear and quadratic. E.g., efficient sorting algorithms like merge sort or quicksort. |
| O(n^x)         | Power   | Runtime increases with the power of input size. E.g., nested loops, like common in 3D matrix operations. |
| O(2^n)         | Exponential | Runtime doubles with each additional input element. E.g., solving the traveling salesman problem using brute force. |
| O(n!)          | Factorial   | Runtime grows extremely fast, quickly becoming impractical. E.g., generating all possible permutations of an array. |


## Analyzing Space Complexity

The space complexity of an algorithm is usually expressed in terms of the amount of memory it requires to complete its task. This can be expressed in terms of the size of the input data, as well as any additional memory required by the algorithm.

For example, an algorithm that stores a copy of the input data in memory will have a space complexity of O(n), where n is the size of the input data. An algorithm that creates additional data structures to store intermediate results may have a higher space complexity.

## Comparing Algorithms

When comparing algorithms, it is important to consider both their time and space complexity. In general, an algorithm with lower time and space complexity is more efficient than one with higher complexity.

However, the trade-off between time and space complexity can be complex, and different algorithms may be more efficient depending on the specific task. It is important to analyze the specific requirements of a task and choose an algorithm that meets those requirements in terms of both time and space complexity.

Below we have included the time and space complexities for various data structures and operations a programmer might use, to give you a better idea of what’s going on behind the scenes.

### Map-like data structures

| Data Structure | Insertion Time | Contains Key Time | Delete Time |
| --- | --- | --- | --- |
| Hashmap | O(1) | O(1) | O(1) |
| Btree | O(log n) | O(log n) | O(log n) |

### Array-like data structures

| Data Structure | Remove Front | Remove Back | Insert Front | Insert Back | Contains Item |
| --- | --- | --- | --- | --- | --- |
| HashSet | N/A | N/A | O(1) | O(1) | O(1) |
| Linkedlist | O(1) | O(1) | O(1) | O(1) | O(n) |
| Vec | O(n) | O(1) | O(n) | O(1) | O(n) |
| Doubly-linked-list | O(1) | O(1) | O(1) | O(1) | O(n) |
| VecDeque | O(1) | O(1) | O(1) | O(1) | O(n) |
| Stack | O(1) | O(1) | O(1) | O(1) | O(n) |
| BtreeSet | O(log n) | O(log n) | O(log n) | O(log n) | O(log n) |

### Sorting algorithms

| Sorting Algorithm | Best Case | Average Case | Worst Case | Space Complexity |
| --- | --- | --- | --- | --- |
| Bubble Sort | O(n) | O(n^2) | O(n^2) | O(1) |
| Insertion Sort | O(n) | O(n^2) | O(n^2) | O(1) |
| Merge Sort | O(n log n) | O(n log n) | O(n log n) | O(n) |
| Quick Sort | O(n log n) | O(n log n) | O(n^2) | O(log n) |

```typescript
function printArrayElements(arr: number[]) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
```

```typescript
function printFirstElementOfArray(arr: number[]) {
    console.log(arr[0]);
}
```

::question{slug="bigo-question" question="Given the two functions above, what are their Big O Notations?" context="The first function `printArrayElements` is O(n) and the second function `printFirstElementOfArray` is O(1)"}

