In programming, structs and classes are used to define custom data types that can contain multiple values that are associated with a key. They allow you to define your own data structures with custom methods and behaviors. In this unit, we will explore what structs and classes are, how they differ from maps and dictionaries, and some basic concepts of inheritance in classes.

## What Will You Learn

- Understand what structs and classes are and how they work
- Learn how structs and classes differ from maps and dictionaries
- Explore basic concepts of inheritance in classes
- Understand why some programming languages do not use classes

## Structs vs. Classes

Whether you use structs or classes to represent your data, depends on the language that you are using.

Examples of languages that use structs:

- **C**
- **Go**
- **Rust**
- **Swift**

Some languages that use classes:

- **Java**
- **C#**
- **Python**
- **Ruby**
- **JavaScript** (which also has a "prototype inheritance" object system that is similar to classes)

Note that some languages, like C++, allow for both structs and classes. Additionally, some languages have similar concepts to structs and classes, but may use different terminology (for example, in Rust, "structs" are often used in place of "classes").

Some lower-level programming languages, such as Rust, do not use classes. Instead, they use structs and traits to define custom data types with behaviours. Traits are similar to interfaces in other programming languages and allow you to define common behaviour that can be shared by multiple data types, including Structs and Enums.

## Structs/Classes vs. Maps

Here are some situations when you might want to use structs/classes instead of maps:

- When you need to group related data together with functionality or methods.
- When you need to enforce a specific structure or schema for your data.
- When you want to define custom constructors or initialisation methods for your data.
- When you want to make your code more object-oriented and modular.
- When you want to use inheritance to create a hierarchy of related objects.
- When you need to work with a specific library or framework that uses structs/classes (for example, many GUI frameworks use object-oriented programming concepts).
- When you need to pass data between functions or modules in a type-safe and efficient way.

Maps and dictionaries are better suited for situations when you need to store arbitrary key-value pairs, or when you need to work with data that doesn't have a fixed structure or schema. They can also be useful for cases when you need to add or remove keys dynamically at runtime.

## Inheritance in Classes

Inheritance is a concept in object-oriented programming that allows you to define a new class based on an existing class. The new class inherits all of the properties and methods of the existing class, and can add its own properties and methods as well.

Inheritance is often used to create a hierarchy of classes that share common behaviour, called an interface. For example, you might have a base class called `Vehicle` that defines common properties and methods for all vehicles, and then have more specific classes like `Car` or `Truck` that inherit from the "Vehicle" class and add their own properties and methods.

We will go into this deeper in later units.

## Comparing Structs & Classes

Say that we want a user object, which has a method attached to it for logging the users age. Each language might have a different way of representing this.

> A user represented in Rust using a struct

```rust
struct User {
    username: String,
    age: u8,
}

impl User {
    fn new(username: String, age: u8) -> User {
        User {
            username,
            age,
        }
    }

    pub fn print_age(&self) {
        println!("I am {} years old", self.age);
    }
}

// create an instance of the user struct with the new static method
let user = User::new("Albert".to_string(), 22);

// print the user's age
user.print_age() // I am 22 years old
```

> A user represented in Typescript using a class

```typescript
class User {
    private username: string
    private age: number

    constructor(username: string, age: number) {
        this.username = username
        this.age = age
    }

    printAge() {
        console.log(`I am ${this.age} years old`)
    }
}

// create an instance of the user class with the new keyword
let user = new User("Albert", 22);

// print the users age
user.printAge() // I am 22 years old
```