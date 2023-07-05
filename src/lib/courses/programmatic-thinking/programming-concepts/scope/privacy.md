## What will you learn?

In this unit, you will learn about the concept of privacy in programming and how it is implemented in different programming languages.

Privacy is an important concept in programming, as it allows you to control who can access and modify certain variables and functions. By controlling access to certain parts of your code, you can improve the security and maintainability of your programs.

## Privacy in Programming

Privacy is often implemented in programming languages through the use of access modifiers, which control the visibility of variables and functions within a program. The three most common access modifiers are `public`, `private`, and `protected`.

- **Public** variables and functions can be accessed by any part of the program.
- **Private** variables and functions can only be accessed within the class or object in which they are defined.
- **Protected** variables and functions can be accessed within the class or object in which they are defined, as well as by any subclass or derived class.

### Examples in Pseudocode

Here is an example of how access modifiers can be used in pseudocode:

```pseudocode
class Person
    public String name
    private int age
    protected String address

    public setName(String newName)
        name = newName

    private setAge(int newAge)
        age = newAge

    protected void setAddress(String newAddress)
        address = newAddress
```

In this example, the `Person` class has three variables (`name`, `age`, and `address`) and three functions (`setName()`, `setAge()`, and `setAddress()`), each with a different access modifier.

- The `name` variable is declared as `public`, so it can be accessed by any part of the program.
- The `age` variable is declared as `private`, so it can only be accessed within the `Person` class.
- The `address` variable is declared as `protected`, so it can be accessed within the `Person` class and any subclass or derived class.

Similarly, the `setName()` function is declared as `public`, so it can be called by any part of the program. The `setAge()` function is declared as `private`, so it can only be called within the `Person` class. The `setAddress()` function is declared as `protected`, so it can be called within the `Person` class and any subclass or derived class.

### Examples in Rust

In Rust, access modifiers are implemented using the `pub` keyword. For example, we can define a `Person` struct with three fields (`name`, `age`, and `address`), each with a different access modifier:

```rust
pub struct Person {
    pub name: String,
    age: u32,
    address: String,
}

impl Person {
    pub fn new(name: String, age: u32, address: String) -> Person {
        Person {
            name,
            age,
            address,
        }
    }

    pub fn set_name(&mut self, name: String) {
        self.name = name;
    }

    fn set_age(&mut self, age: u32) {
        self.age = age;
    }

    fn set_address(&mut self, address: String) {
        self.address = address;
    }
}
```

### Examples in TypeScript

In TypeScript, access modifiers are implemented using the `public`, `private`, and `protected` keywords. For example, we can define a `Person` class with three fields (`name`, `age`, and `address`), each with a different access modifier:

```typescript
class Person {
    public name: string;
    private age: number;
    protected address: string;

    constructor(name: string, age: number, address: string) {
        this.name = name;
        this.age = age;
        this.address = address;
    }

    public setName(name: string): void {
        this.name = name;
    }

    private setAge(age: number): void {
        this.age = age;
    }

    protected setAddress(address: string): void {
        this.address = address;
    }
}
```

## Why is Privacy in modules important?

Privacy is important in programming because it allows you to control who can access and modify certain variables and functions. By controlling access to certain parts of your code, you can improve the security and maintainability of your programs.


:::tip
When writing libraries, you only want to expose high level APIs to the user. This allows you to change the implementation details without breaking the code of the developer using your code.
:::


## Conclusion

Privacy is an important concept in programming, as it allows you to control who can access and modify certain variables and functions. By using access modifiers like `public`, `private`, and `protected`, you can control the visibility of your code and improve the security and maintainability of your programs.