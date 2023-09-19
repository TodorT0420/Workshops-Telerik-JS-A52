export class Athletes {
  #firstName;
  #lastName;
  #country;

  static #FIRST_NAME_MIN_LENGTH = 2;
  static #FIRST_NAME_MAX_LENGTH = 20;
  static #LAST_NAME_MIN_LENGTH = 2;
  static #LAST_NAME_MAX_LENGTH = 20;
  static #COUNTRY_MIN_LENGTH = 2;
  static #COUNTRY_MAX_LENGTH = 20;

  constructor(firstName, lastName, country) {
    this.validateFirstName(firstName);
    this.validateLastName(lastName);
    this.validateCountry(country);

    this.#firstName = firstName;
    this.#lastName = lastName;
    this.#country = country;
  }

  get firstName() {
    return this.#firstName;
  }

  get lastName() {
    return this.#lastName;
  }

  get country() {
    return this.#country;
  }

  validateFirstName(value) {
    if (!value || typeof value !== 'string' || value === '') {
      throw new Error('Invalid name value!');
    }
    if (value < Athletes.#FIRST_NAME_MIN_LENGTH && value > Athletes.#FIRST_NAME_MAX_LENGTH) {
      throw new Error(`Invalid first name value ${value}!`);
    }
  }

  validateLastName(value) {
    if (!value || typeof value !== 'string' || value === '') {
      throw new Error('Invalid name value!');
    }
    if (value < Athletes.#LAST_NAME_MIN_LENGTH && value > Athletes.#LAST_NAME_MAX_LENGTH) {
      throw new Error(`Invalid last name value ${value}!`);
    }
  }

  validateCountry(value) {
    if (!value || typeof value !== 'string' || value === '') {
      throw new Error('Invalid name value!');
    }
    if (value < Athletes.#COUNTRY_MIN_LENGTH && value > Athletes.#COUNTRY_MAX_LENGTH) {
      throw new Error(`Invalid country value ${value}!`);
    }
  }

  print() {
    return this.additionalInfo();
  }

  additionalInfo() {
    return '';
  }
}