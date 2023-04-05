# Identifying Code Smells

Notes: • Long methods
• Duplicated Code
• Un-descriptive code
• Too much nesting of logic, extraction of logic, and inversion
• Overly complex
- Bad formatting
Parent item: https://www.notion.so/Clean-Code-84517a024d7f493788507ff5cfb92f81

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

~warning Long methods can lead to maintenance problems and can make code harder to test.

```jsx
// Long method example
function calculateTotalPrice(products) {
  let totalPrice = 0;

  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    const productPrice = getProductPrice(product);

    if (product.isDiscounted) {
      productPrice = applyDiscount(productPrice, product.discountPercentage);
    }

    if (product.isTaxable) {
      const productTax = calculateProductTax(productPrice, product.taxRate);
      productPrice += productTax;
    }

    if (product.requiresShipping) {
      const productShippingCost = calculateShippingCost(product);
      productPrice += productShippingCost;
    }

    totalPrice += productPrice;
  }

  if (isPromoCodeApplied()) {
    totalPrice = applyPromoCode(totalPrice);
  }

  if (isGiftCardApplied()) {
    totalPrice = applyGiftCard(totalPrice);
  }

  return totalPrice;
}

```

This method has a lot of different responsibilities: it calculates the price of each product, applies discounts, taxes, shipping costs, and then applies promo codes and gift cards. It's also quite long and can be difficult to read and understand.

```jsx
// Refactored method example
function calculateProductPrice(product) {
  let productPrice = getProductPrice(product);

  if (product.isDiscounted) {
    productPrice = applyDiscount(productPrice, product.discountPercentage);
  }

  if (product.isTaxable) {
    const productTax = calculateProductTax(productPrice, product.taxRate);
    productPrice += productTax;
  }

  if (product.requiresShipping) {
    const productShippingCost = calculateShippingCost(product);
    productPrice += productShippingCost;
  }

  return productPrice;
}

function calculateTotalPrice(products) {
  let totalPrice = 0;

  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    const productPrice = calculateProductPrice(product);
    totalPrice += productPrice;
  }

  if (isPromoCodeApplied()) {
    totalPrice = applyPromoCode(totalPrice);
  }

  if (isGiftCardApplied()) {
    totalPrice = applyGiftCard(totalPrice);
  }

  return totalPrice;
}
```

By extracting the logic into smaller, more focused methods, we've made the code easier to read and understand. Each method has a clear responsibility and can be reused elsewhere in the codebase if needed. Additionally, the `calculateTotalPrice` method is now much shorter and easier to read, with a clear focus on calculating the total price rather than handling all the different responsibilities of the original method

### Duplicated Code

Duplicated code is another code smell that can make it difficult to maintain your code. Duplicated code can occur when developers copy and paste code instead of creating reusable functions.

~warning Duplicated code can lead to maintenance problems, as well as make it difficult to track down and fix bugs.

### Un-Descriptive Code

Code should be descriptive and easy to understand. If variable names are unclear or methods are not properly named, it can be difficult for other developers to understand what the code does.

~warning Un-descriptive code can lead to maintenance problems, as well as make it difficult for other developers to read and understand your code.

### Overly Complex Code

Code should be easy to read and understand. If the code is too complex, it can be difficult to understand and maintain.

~warning Overly complex code can lead to maintenance problems and make it difficult to understand the code.

### Complex Conditional Logic

Complex conditional logic can make code difficult to read and understand. To fix this, you can simplify the conditional logic by using boolean logic or breaking the conditionals down into smaller, more manageable pieces.

~warning Nesting of logic can lead to maintenance problems and make it difficult to understand the flow of the code.

### Example of Bad and Complex, Deeply Nested Conditional Logic

```jsx
if customer.status == "gold":
    if customer.age > 25:
        if customer.balance > 1000:
            if customer.last_purchase_date > 6 months ago:
                # customer is eligible for a discount
                discount_amount = 50
            else:
                discount_amount = 0
        else:
            discount_amount = 0
    else:
        discount_amount = 0
else:
    discount_amount = 0

```

### How to Write It More Cleanly

Here's how we can rewrite the above code to be cleaner and more readable:

```jsx
if customer.status == "gold" && 
   customer.age > 25 && 
   customer.balance > 1000 && 
   customer.last_purchase_date > 6 months ago:
    discount_amount = 50
else:
    discount_amount = 0
```

By combining the guard clauses using the `&&`  **and** boolean operator, we can simplify the code even further while still making sure that all conditions are met before applying the discount. This makes the code easier to read and reduces the number of lines of code, making it easier to maintain.

### Unused Variables or Functions

Unused variables or functions can indicate that the code is no longer necessary or that there are dead code paths in the codebase. To fix this, you can remove the unused variables or functions to simplify the code and make it easier to maintain.

Success

Linters and IDE tools can help make this process easier.

### Bad Formatting

Code should be properly formatted and indented. If the code is not formatted properly, it can be difficult to read and understand.

~success Clean code as you are writing it, not at the end. By keeping code properly formatted at all times, it will make it easier to spot bugs and issues.