## What will you learn

- The concept of namespaces
- How namespaces can help avoid naming conflicts
- The concept of modules
- How modules can help organize code into logical units

## Namespaces

A namespace is a container that holds a set of identifiers (such as variable, function, or class names) to avoid naming conflicts. In other words, namespaces help keep the names of different identifiers separate so that they don't accidentally collide with each other.

Namespaces are typically used in larger projects, where multiple developers are working on different parts of the codebase. By using namespaces, each developer can work on their own set of identifiers without worrying about accidentally using the same name as another developer.

In many programming languages, namespaces are imported into a codebase using a combination of a identifiers and a delimiter (such as a `.` or `::`). For example, in Python, modules are used as namespaces, and the dot notation is used to access identifiers within a module:

```python
import math
print(math.pi)
```

Here, `math` is a module that contains the constant `pi`. By using the dot notation, we can access the `pi` identifier within the `math` module without worrying about naming conflicts with other modules.

## Modules

A module is a self-contained unit of code that can be imported and used in other parts of a program. Modules can contain functions, classes, and other definitions, as well as executable code that is run when the module is imported.

Modules can help organize code into logical units, making it easier to manage and maintain large codebases. They can also be used to share code between different programs or projects.

### Python Example
In many programming languages, modules are implemented using a file-based system. For example, in Python, each module is defined in a separate file with a `.py` extension. To use a module in a program, we simply import it:

```python
import my_module
```

Once a module is imported, we can access the identifiers defined in the module using the dot notation:

```python
import my_module
result = my_module.my_function()
```

Here, `my_module` is a module that defines a function `my_function`. By importing the module and using the dot notation, we can call the `my_function` function within our program.

### Rust Example
In Rust, modules are defined using the `mod` keyword. For example, we can define a module called `my_module` in a file called `my_module.rs`:

```rust
// my_module.rs
// pub keyword makes the module public to the rest of the program
pub fn my_function() {
    println!("Hello, world!");
}
```

We can then import the module into our program using the `use` keyword:

```rust
// main.rs
mod my_module;

fn main() {
    my_module::my_function();
}
```

Here, `my_module` is a module that defines a function `my_function`. By importing the module and using the dot notation, we can call the `my_function` function within our program.

## Conclusion

Namespaces and modules are important concepts in programming that can help keep code organized and avoid naming conflicts. By using namespaces and modules, developers can work on larger projects with greater confidence, knowing that their code is isolated from other parts of the project.