<img src="https://webassets.telerikacademy.com/images/default-source/logos/telerik-academy.svg" alt="logo" width="300px" style="margin-top: 20px;"/>

## OOP Workshop - Cosmetics shop 2

### Description

You are given a software system for managing a cosmetics shop. The system already has a working Engine. You do not have to touch anything in it. Just use it.

There should be two types of products for now, Shampoos and Toothpastes.

- Each Shampoo has **name, brand, price, gender, milliliters, usage**.
- Each Toothpaste has **name, brand, price, gender, ingredients**.

There are also Categories and Shopping Carts.

- Categories have a **name and a list of products**.
- Shopping Cart has a **list of products**.

### Task

Your task is to **design an object-oriented class hierarchy** to model the cosmetics shop, **using the best practices for object-oriented design** (OOD) and **object-oriented programming** (OOP). Encapsulate correctly all attributes and use validation whenever needed.


#### 1. Shampoo class

- Implements Shampoo
- Has a name, brand, price, gender, milliliters, and usage type
- The name’s length should be between 3 and 10 symbols.
- The brand name’s length should be between 2 and 10 symbols.
- The price cannot be negative.
- Gender type can be one of **"Men"**, **"Women"** or **"Unisex"**.
- Milliliters cannot be negative.
- Usage type can be one of **"EveryDay"** or **"Medical"**.

#### 2. ToothPaste class

- Implements Toothpaste.
- Has name, brand, price, gender, and ingredients.
- The name’s length should be between 3 and 10 symbols.
- The brand name’s length should be between 2 and 10 symbols.
- The price cannot be negative.
- Gender type can be one of **"Men"**, **"Women"** or **"Unisex"**.

#### 3. ApplicationData class

- Stores all the application's data.
- Handles creation of new objects.
- Used to find already existing objects.


### Constraints

- Look into the example below to get better understanding of the printing format.
- All floating-point numbers should be printed rounded to two decimal places.


### Additional notes

- To simplify your work you are given an already built execution engine that executes a sequence of commands (see `main.js`)
- If you decide to create and use new classes you are allowed to do so.
- When you start working on a missing implementation, make sure to delete the `throw new Error("Not implemented!");` line.

### Unit Tests

You are given unit tests to keep track of your progress.

## Step by step guide

> *Hint*: You don't need to modify most of the functionality but of course you could try to understand how it works.

> *Hint*: Run the Unit tests whenever you finish a task.

##### Implement the classes for shampoo and toothpaste

- Look at the **models** folder and think about how to reuse functionality from Product class.
- When implementing a constructor, consider passing some of the fields to the `super` constructor.
- Make sure validations are correct.

##### Implement `CreateShampooCommand` and `CreateToothpasteCommand`.

- In the `execute` method, extract and parse the input parameters, and after that use them to create the Shampoo/Toothpaste.

> *Hint*: Look at `CreateCategoryCommand` if you get stuck.

##### Implement the unfinished methods in the `ApplicationData` class.

- This is where the creation of the objects should be.
- Add the newly created object to the list.

5. Implement the `print()` and `additionalInfo()` methods

**6. ADVANCED TASK**

- Implement new product and its creation in the engine class.
- Cream (name, brand, price, gender, scent)
  - name minimum 3 symbols and maximum 15
  - brand minimum 3 symbols and maximum 15
  - price greater than zero
  - gender (men, women, unisex)
  - scent (lavender, vanilla, rose)
- Implement product creation in the CommandFactory and ApplicationData classes.
  - Just look at the other products
- Test it if it works correctly

### Input example

```none
CreateShampoo MyMan Trashy 10.99 Men 1000 EveryDay
CreateToothpaste White Expensive 10.99 Men calcium,fluorid
CreateCategory Shampoos
CreateCategory Toothpastes
AddToCategory Shampoos MyMan
AddToCategory Toothpastes White
AddToShoppingCart MyMan
AddToShoppingCart White
ShowCategory Shampoos
ShowCategory Toothpastes
TotalPrice
RemoveFromCategory Shampoos MyMan
ShowCategory Shampoos
RemoveFromShoppingCart MyMan
TotalPrice
End
```

### Output Example

```none
Shampoo with name MyMan was created!
Toothpaste with name White was created!
Category with name Shampoos was created!
Category with name Toothpastes was created!
Product MyMan added to category Shampoos!
Product White added to category Toothpastes!
Product MyMan was added to the shopping cart!
Product White was added to the shopping cart!
#Category: Shampoos
#MyMan Trashy
 #Price: $10.99
 #Gender: Men
 #Milliliters: 1000
 #Usage: EveryDay
 ===
#Category: Toothpastes
#White Expensive
 #Price: $10.99
 #Gender: Men
 #Ingredients: calcium,fluorid
 ===
$21.98 total price currently in the shopping cart!
Product MyMan removed from category Shampoos!
#Category: Shampoos
 #No product in this category
Product MyMan was removed from the shopping cart!
$10.99 total price currently in the shopping cart!
```
