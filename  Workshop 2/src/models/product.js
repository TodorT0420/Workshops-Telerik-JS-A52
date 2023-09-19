
import { Gender } from './gender.js';

export class Product {

  static #NAME_AND_BRAND_SCENT_MIN = 3;
  static #NAME_AND_BRAND_SCENT_MAX = 15;
  static #minNameLength = 3;
  static #maxNameLength = 10;
  static #minBrandLength = 2;
  static #maxBrandLength = 10;
  static #minPrice = 0;
  #name;
  #brand;
  #price;
  #gender;

  /**
  * @param {string} name
  * @param {string} brand
  * @param {number} price
  * @param {Gender} gender
  */
  constructor(name, brand, price, gender) {

    this.validateName(name);
    this.validateBrand(brand);
    this.validateGender(gender);
    this.validatePrice(price);

    this.#name = name;
    this.#brand = brand;
    this.#price = price;
    this.#gender = gender;
  }
  validateName(value) {
    if (!value) {
      throw new Error('Invalid name!');
    }
    
    if (value.length < Product.#minNameLength || value.length > Product.#maxNameLength) {
      throw new Error(`Product name length must be between ${Product.#minNameLength} and ${Product.#maxNameLength}`);
    }

  }
  
  validateBrand(value) {
    if (!value) {
      throw new Error('Invalid brand!');
    }

    if (value.length < Product.#minBrandLength || value.length > Product.#maxBrandLength) {
      throw new Error(`Product brand length must be between ${Product.#minBrandLength} and ${Product.#maxBrandLength}`);
    }
  }

  validateGender(value) {
    if (!Object.keys(Gender).some(key => Gender[key] === value)) { 
      // if (!Gender.hasOwnProperty(gender)) {
      throw new Error(`Invalid gender type value ${value}!`);
    }

  }

  validatePrice(value) {
    if (value < Product.#minPrice) {
      throw new Error(`Product price must be greater than ${Product.#minPrice}`);
    }
  }

  /**
  * @type {string}
  */
  get name() {
    return this.#name;
  }

  /**
  * @type {string}
  */
  get brand() {
    return this.#brand;
  }

  /**
  * @type {number}
  */
  get price() {
    return this.#price;
  }

  /**
  * @type {Gender}
  */
  get gender() {
    return this.#gender;
  }

  /**
  * @return {string}
  */
  print() {
    const productInfo = [
      `#${this.#name} ${this.#brand}\n` +
      ` #Price: $${this.#price}\n` +
      ` #Gender: ${Gender[this.#gender]}\n`+
      ` ${this.additionalInfo()}\n`+
      ' ===',
    ];

    return productInfo.join('');
  }

  /**
  * @abstract
  *
  * @return {string}
  */
  additionalInfo() {

  }
}
