# Privacy

## What will you learn?

In this unit, you will learn about the concept of privacy in programming and how it is implemented in different programming languages.

Privacy is an important concept in programming, as it allows you to control who can access and modify certain variables and functions. By controlling access to certain parts of your code, you can improve the security and maintainability of your programs.

## Privacy in Programming

Privacy is often implemented in programming languages through the use of access modifiers, which control the visibility of variables and functions within a program. The three most common access modifiers are `public`, `private`, and `protected`.

- **Public** variables and functions can be accessed by any part of the program.
- **Private** variables and functions can only be accessed within the class or object in which they are defined.
- **Protected** variables and functions can be accessed within the class or object in which they are defined, as well as by any subclass or derived class.

## Examples in Pseudocode

Here is an example of how access modifiers can be used in pseudocode:

```
cpp

```

```
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

## Conclusion

Privacy is an important concept in programming, as it allows you to control who can access and modify certain variables and functions. By using access modifiers like `public`, `private`, and `protected`, you can control the visibility of your code and improve the security and maintainability of your programs.