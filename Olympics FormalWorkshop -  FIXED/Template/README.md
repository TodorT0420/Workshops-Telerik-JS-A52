<img src="https://webassets.telerikacademy.com/images/default-source/logos/telerik-academy.svg" alt="logo" width="300px" style="margin-top: 20px;"/>

# Olympics

### 1. Description

Olympics is an application for registering and managing olympic players.

<br>

### 2. Project information

- Language and version: **JavaScript ES2020**
- Platform and version: **Node 14.0+**
- Core Packages: **ESLint**, **Jest**

<br>

### 3. Goals

Welcome to the Olympics of workshops!

Most of the functionality is implemented, there are a few models in need of implementation, and there might be some quality code issues with parts of the code. Before starting working familiarize yourself with the code well enough.

The **goal** is to finish the implementation of a few models and refactor the code and make it more scalable, following the principles for good OO design - OOP principles, single responsibility, KISS, DRY, YAGNI, etc.

- Working with classes - writing classes and creating instances of those classes.
- Modeling classes using `fields` (state) and `methods` (behavior).
- Changing the state through getters and setters (remember having both getter and a setter allows to read an write to the property, having only a getter makes the property **readonly** and having only a setter makes the property **writeonly**)
- Protecting the state by encapsulation
- Extracting class constants to static class properties
- Inheriting a base class to reuse its logic
- Lifting repeating logic from similar classes down to the base class
- Applying the principles for good OO design - OOP principles, KISS, DRY, etc.

<br>

### 4. Setup

To get the project up and running, follow these steps:

1. Go inside the `Template` folder.
1. Run `npm install` to restore all dependencies.
1. After that, there are a few scripts you can run:

   - `npm run start` (shorthand: `npm start`) - Runs the `src/main.js` file.
   - `npm run lint` - Runs ESLint

**Note**: Make sure you have Code Lens enabled for JavaScript. You can enable it in user settings (`Ctrl + ,`), type in `codelens` and check all the boxes. Once it's enabled you can track how and where each class, method, field and property is used and referenced and you can easily detect code that is not *yet* used.

<br>

### 5. Project structure

All of the code you will be working with is in the `src` folder. The entry point (the file from which the program is started) is `src/main.js`. There are several folders with different roles:

- `common` - holds shared resources like enums, constants, etc.
- `factories` - holds the `OlympiansFactory` factory responsible for model initialization
- `models` - holds the application models
- `providers` - holds *provider* class like `OlympicsCommittee` which contains all registered olympians and `TaskRunner` which runs all the app tasks - creating boxers or sprinters and listing all registered olympians
- `tasks` - holds individual tasks, each of which is responsible for a single action; tasks are executed by the `TaskRunner` provider

You are allowed to make changes to the `factories`, `models` and `tasks` folders.

There are no unit tests this time around.

<br>

### 6. The `Boxer` model

The `Boxer` model has no implementation. Following the best practices for encapsulation and validation implement the following:

Properties:

- `firstname` - should be a **readonly** string with length in the range `[2 - 20]`
- `lastname` - should be a **readonly** string with length in the range `[2 - 20]`
- `country` - should be a **readonly** string with length in the range `[2 - 20]`
- `category` - should be a valid **readonly** value of the `boxingCategory` enum
- `wins` - should e a **readonly** number in the range `[0 - 100]`
- `losses` - should e a **readonly** number in the range `[0 - 100]`

All property values should be passed to the constructor in the order declared above. Constructor should throw if invalid value was passed for any of the properties.

Methods:

- `print` - should return a string with information about the boxer in the following format (firstname = Anthony, lastname = Joshua, country = UK):
  ```txt
  BOXER: Anthony Joshua from UK
  Category: Heavyweight
  Wins: 19
  Losses: 0
  ```

You will need to figure out what the `additionalInfo()` method is for.

<br>

### 7. The `Sprinter` model

The `Sprinter` model has no implementation. Following the best practices for encapsulation and validation implement the following:

Properties:

- `firstname` - should be a **readonly** string with length in the range `[2 - 20]`
- `lastname` - should be a **readonly** string with length in the range `[2 - 20]`
- `country` - should be a **readonly** string with length in the range `[2 - 20]`
- `personalRecords` - should be a **readonly** `Map` instance

All property values should be passed to the constructor in the order declared above. Constructor should throw if invalid value was passed for any of the properties.

Methods:

- `print` - should return a string with information about the boxer in the following format (firstname = Asaffa, lastname = Powell, country = Jamaica):
  ```txt
  SPRINTER: Asaffa Powell from Jamaica
  PERSONAL RECORDS
  100m: 9.72s
  200m: 19.9s
  ```

You will need to figure out what the `additionalInfo()` method is for.

<br>

### 8. Models constraints

You are allowed to modify, delete and create new model classes and files.

<br>

### 9. The `OlympiansFactory` class

**OlympiansFactory** has some missing implementation. You already know what a factory / factory method is supposed to do - go and finish the implementation.

<br>


### 10. The `CreateBoxerTask` and `CreateSprinterTask` classes

**CreateBoxerTask** and **CreateSprinterTask** have some partial implementation and their implementations complement each other. They have almost all the parts needed to complete their implementations.

<br>

### 11. The `ListOlympiansTask` class

**ListOlympiansTask** has some missing parts as well, you will need to figure out what is missing and how to fix it. Pay close attention to what properties are used and where they are defined (if at all).

You will also need to complete the implementation for the **run** method. You can refer to the expected program output at the end of the documentation.

<br>

### 12. Problems to fix

**Important:** Before you rush into refactoring the code read carefully what every piece of the code does, what is the purpose of each model and how models connect to each other. Familiarize yourself with the code and then continue with fixing the problems.

As of this moment the application is working as intended. Testing code runs with no errors. However, there are several problems you will need to address following the principles for good OO design. When you do that ask yourself the following questions:

- Is there repeating logic?
- Can repeating logic be extracted to a:
  - function/method
  - another file
  - base class
- Is every model in the application put to a use?
- Is every model in the application used to its full potential?
- Can a problem with a complex solution be solved in a simpler manner?

A reminder: you are allowed to modify files in the `factories`, `models` and `tasks` folders only.

<br>

### 13. Testing the Olympics application

The testing code is already in the `main.js` file.

```js
import { TaskRunner } from './providers/task-runner.js';
import { boxingCategory } from './common/boxing-category.enum.js';

const main = () => {
  try {
    const results = [
      TaskRunner.listOlympians(),
      TaskRunner.createBoxer('Wladimir', 'Klitschko', 'Ukraine', boxingCategory.Heavyweight, 64, 5),
      TaskRunner.createBoxer('Anthony', 'Joshua', 'UK', boxingCategory.Heavyweight, 19, 0),
      TaskRunner.listOlympians('firstname'),
      TaskRunner.createSprinter('Usain', 'Bolt', 'Jamaica', new Map([['100', 9.58], ['200', 19.19]])),
      TaskRunner.listOlympians('lastname', 'desc'),
      TaskRunner.createSprinter('Asaffa', 'Powell', 'Jamaica', new Map([['100', 9.72], ['200', 19.9]])),
      TaskRunner.listOlympians(),
    ];

    console.log(results.join('\n\n'));
  } catch (error) {
    console.log(error);
  }
};

main();

```

Sample output text:

```txt

No olympians added!

Boxer created

Boxer created

Sorted by [key: firstname] in [order: asc]
BOXER: Anthony Joshua from UK
Category: Heavyweight
Wins: 19
Losses: 0
BOXER: Wladimir Klitschko from Ukraine    
Category: Heavyweight
Wins: 64
Losses: 5

Sprinter created

Sorted by [key: lastname] in [order: desc]
BOXER: Wladimir Klitschko from Ukraine
Category: Heavyweight
Wins: 64
Losses: 5
BOXER: Anthony Joshua from UK
Category: Heavyweight
Wins: 19
Losses: 0
SPRINTER: Usain Bolt from Jamaica
PERSONAL RECORDS
100m: 9.58s
200m: 19.19s

Sprinter created

Sorted by [key: firstname] in [order: asc]
BOXER: Anthony Joshua from UK
Category: Heavyweight
Wins: 19
Losses: 0
SPRINTER: Asaffa Powell from Jamaica
PERSONAL RECORDS
100m: 9.72s
200m: 19.9s
SPRINTER: Usain Bolt from Jamaica
PERSONAL RECORDS
100m: 9.58s
200m: 19.19s
BOXER: Wladimir Klitschko from Ukraine
Category: Heavyweight
Wins: 64
Losses: 5
```