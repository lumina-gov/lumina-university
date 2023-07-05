## What will you learn?

In this unit, you will learn about closures and nested functions. You will understand the scope of variables within these functions and how they can be used effectively in programming.

## Closures

A closure is a function that retains access to variables from its enclosing lexical scope, even when the function is executed outside that scope. This means that a closure can access variables defined in the parent function, even after the parent function has returned.

Here's an example of a closure in `JavaScript`:

```javascript
function outerFunction() {
  let outerVariable = 10

  function innerFunction() {
    console.log(outerVariable)
  }

  return innerFunction
}

let closure = outerFunction()
closure() // Output: 10
```

In the example above, `innerFunction` is a closure, because it retains access to the `outerVariable` defined in `outerFunction`. When `outerFunction` is called, it returns `innerFunction`, which is then assigned to the variable `closure`. When `closure` is called, it logs the value of `outerVariable`, which is 10.

Closures are useful because they can be used to create private variables and functions. Since variables defined inside a function are not accessible from outside the function, we can use closures to create a private scope for those variables.

:::warning
Not all languages support closures, or if they do, careful management needs to ensure that the variables defined in the `outerFunction` have not been deleted or dropped from memory when the `innerFunction` is called.
:::

Certain languages, such as Rust use different syntax to define closures from functions, since functions in Rust can not access the parent scope. This is done to ensure memory safety and ensures the issues described above are detected by the code compiler.

```javascript
function apply_to_each(numbers_array, closure) {
  let new_numbers_array = []
  for (let number of numbers_array) {
    // push the result of closure(number) into new_numbers_array
    new_numbers_array.push(closure(number))
  }
  return new_numbers_array
}
let numbers_array = [1, 2, 3, 4, 5]
let unknown_1 = apply_to_each(numbers_array, (x) => x + 1)
let unknown_2 = apply_to_each(numbers_array, (x) => x * 2)
```
::question{slug="closure-function-challenge" question="given the following code, what will be the two outputs?" context="function apply_to_each(numbers_array, closure) {  let new_numbers_array = []  for (let number of numbers_array) {    let new_number = closure(number) // apply closure to number    new_numbers_array.push(new_number) // add it to new numbers array  }  return new_numbers_array}let numbers_array = [1, 2, 3, 4, 5]let unknown_1 = apply_to_each(numbers_array, (x) => x + 1)let unknown_2 = apply_to_each(numbers_array, (x) => x * 2)"}