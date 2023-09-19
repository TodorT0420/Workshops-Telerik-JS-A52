<img src="https://webassets.telerikacademy.com/images/default-source/logos/telerik-academy.svg" alt="logo" width="300px" style="margin-top: 20px;"/>

# Phonebook

### 1. Description

Phonebook is a simple system for managing phone contacts. It is build with classes and following the principles of **OOP Design**.

<br>

### 2. Project information

- Language and version: **JavaScript ES2020**
- Platform and version: **Node 14.0+**
- Core Packages: **ESLint**

<br>

### 3. Goals

The **goal** is to fully implement two classes - `Contact` and `Phonebook` and validate their **properties** - when they are initialized or changed through methods. To help you cover the business requirements of the classes you are provided with unit tests.

- Working with classes - writing classes and creating instances of those classes.
- Modeling classes using `fields` (state) and `methods` (behavior).
- Changing the state through mutation methods
- Protecting the state by implementing validation of values passed to mutation methods

<br>

### 4. Setup

To get the project up and running, follow these steps:

1. Go inside the `Template` folder.
1. Run `npm install` to restore all dependencies.
1. After that, there are a few scripts you can run:

   - `npm run start` (shorthand: `npm start`) - Runs the `src/main.js` file.
   - `npm run lint` - Lints the code inside the `src` folder using **ESLint**.
   - `npm run test` (shorthand: `npm test` or `npm t`) - Runs the unit tests in the console.
   - `npm run test:browser` - Runs the unit tests in the browser in interactive mode.

<br>

### 5. Project structure

All of the code you will be working with is in the `src` folder. The entry point (the file from which the program is started) is `src/main.js`. You will also notice that there are a couple of files in the `src/models` folder. Classes that hold the state of an application are often called models.

You need to fully implement the two models `Contact` and `Phonebook`. You can find the implementation requirements below. You are also provided with unit tests you can run with

```bash
npm test
```

or if you want to run the tests in interactive mode inside the browser you can type

```bash
npm run test:browser
```

Unit tests will report your progress with the implementation and show you what the expected result of running a single piece of code and how it is different from your implementation. Some of the tests might look as they are passing, but in fact they can show *false positive* when the test expectation is the code to throw if invalid data is passed, but in reality the code throw because there are problems with the implementations.

Use the tests wisely.

<br>

### 6. The `Contact` model

The `Contact` model has a few properties (state) and a few methods (behavior). You need to implement the missing functionalities going through the requirements below and apply the necessary validation.

Properties:

- `name` - cannot be **null**, **undefined** or an **empty string**, it should be a string with length in the range 3-25 symbols, including those numbers
- `phone` - cannot be **null**, **undefined** or an **empty string**, it should be a string in the format "0xxx-xxx-xxx" or 0xxx xxx xxx" where "x" is any digit; think of a way to implement the validation - there are several ways; one of the more advanced options is using regular expressions for JavaScript
- `history` - should be initialized as an empty array, it will hold all `call` and `message` logs

When you create a new instance of the `Contact` class, `name` and `phone` will be passed the constructor and the values of the parameters should be validated before properties are initialized.

Methods:

- `setPhone(phone)` - validates the passed `phone` is matching the format `0xxx-xxx-xxx` or `0xxx xxx xxx` and set the value of the `phone` property. Should throw an error if `phone` is not in the correct format. This is a mutating method, it should be used for validating and setting the value of `phone`.
- `call()` - should log a call in the `history` array. The log (just a string) should match the following format `[M/D/YYYY h:mm:ss A]Call: Duration: {seconds} sec.` where `seconds` is a random whole number between 1 and 150, example: `[7/30/2022 5:23:35 PM]Call: Duration: 111 sec.`
- `message(msg)` - should log a message in the `history` array. `msg` should be validated - cannot be **null**, **undefined** or an **empty string**. If validation fails it should throw an error. Successful message log has the following format `[M/D/YYYY h:mm:ss A]Message: ({msg}).`, example: `[7/30/2022 5:23:35 PM]Message: (Call me when you're home.).`
- `viewHistoryLog()` - should log on the console `No entries` if no calls or messages were made, and should log on the console all the logs from the *newest* to the *oldest* in the following format (example log):

  ```txt
  Gosho's call log:
  [7/30/2022 5:23:35 PM]Message: (Call me when you're home.).
  [7/30/2022 5:23:35 PM]Call: Duration: 111 sec.
  ```

You can use the `moment` package for easy data formatting.

<br>

### 7. The `Phonebook` model

The `Phonebook` model has one property (state) and a few methods (behavior). You need to implement the missing functionalities going through the requirements below and apply the necessary validation.

Properties:

- `contacts` - should be initialized as an empty array in the constructor. It will hold all contacts added to the phonebook.

Methods:

- `addContact(contact)` - should validate the passed contact and throw if it's invalid - **null** or **undefined**. It should throw if the contact has already been added. Finally, if all validation succeeds, it should add the contact to the `contacts` array
- `removeContact(name)` - should validate the passed name and throw if it's invalid - **null**, **undefined** or **empty string**. It should throw if the contact doesn't exist in the `contacts` array. Finally, if all validation succeeds, it should remove the contact from the `contacts` array
- `updateContact(name, phone)` - should throw if the passed name is **null**, **undefined** or **empty string**. It should throw if there is no contact with the name `name` in the `contacts` array. Finally it should update the found contact's phone with `phone` (think about what is needed to validate the `phone` format)
- `listAllContacts()` - should return `No contacts.` if the contacts array is empty. If there are added contacts, it should return a string in the following format (example):

  ```txt
  All contacts:
    Pesho: [0111-123-123]
    Steven: [0123-456-789]
  ```

- `search(partialName)` - should return an array of all contacts with property `name` containing as a substring the passed `partialName` value. Searching is case sensitive

<br>

### 8. Testing the `Contact` and the `Phonebook` classes

You can paste the following sample code inside the `main.js` file. Running this code should produce the output shown below, minus the exact dates:

```js
import { Contact } from './models/contact.js';
import { Phonebook } from './models/phonebook.js';

const testContactModel = () => {
  console.log('\n\n- Testing Contact Model -\n');

  const contact1 = new Contact('Pesho', '0111-123-123');
  const contact2 = new Contact('Gosho', '0222-321-321');
  const contact3 = new Contact('Steven', '0333-213-213');

  contact1.call();
  contact2.call();

  contact1.message('Pesho vdigni go toq telefon');
  contact1.call();
  contact1.call();

  contact1.viewHistoryLog();
  contact2.viewHistoryLog();
  contact3.viewHistoryLog();
};

const testPhonebookModel = () => {
  console.log('\n\n- Testing Phonebook Model -\n');

  const contact1 = new Contact('Pesho', '0111-123-123');
  const contact2 = new Contact('Gosho', '0222-321-321');
  const contact3 = new Contact('Steven', '0333-213-213');

  const phonebook = new Phonebook();

  console.log(
    phonebook.listAllContacts(),
  );
  phonebook.addContact(contact1);
  phonebook.addContact(contact2);
  phonebook.addContact(contact3);
  phonebook.removeContact('Gosho');
  phonebook.updateContact('Steven', '0123-456-789');
  console.log(
    phonebook.listAllContacts(),
  );
  console.log(
    phonebook.search('sh'),
  );

};

testContactModel();
testPhonebookModel();
```

Sample output text:

```text
- Testing Contact Model -

Pesho's call log:
[7/30/2020 5:23:35 PM]Call: Duration: 111 sec.
[7/30/2020 5:23:35 PM]Call: Duration: 104 sec.
[7/30/2020 5:23:35 PM]Message: (Pesho vdigni go toq telefon).
[7/30/2020 5:23:35 PM]Call: Duration: 97 sec.
Gosho's call log:
[7/30/2020 5:23:35 PM]Call: Duration: 49 sec.
Steven's call log:
No entries


- Testing Phonebook Model -

No contacts.
All contacts:
  Pesho: [0111-123-123]
  Steven: [0123-456-789]
[ Contact { name: 'Pesho', phone: '0111-123-123', history: [] } ]
```