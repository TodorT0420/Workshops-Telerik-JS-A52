import { Product } from './product.js';
import { Usage } from './usage.js';
import { Gender } from './gender.js';

export class Shampoo extends Product {
  static #MIN_MILLILITERS = 0;
  #milliliters;
  #usage;

  /**
  * @param {string} name
  * @param {string} brand
  * @param {number} price
  * @param {Gender} gender
  * @param {number} milliliters
  * @param {Usage} usage
  */
  constructor(name, brand, price, gender, milliliters, usage) {
    super(name, brand, price, gender);

    this.validateMilliliters(milliliters);
    this.validateUsage(usage);
   
    this.#milliliters = milliliters;
    this.#usage = usage;

  }

  get milliliters() {
    return this.#milliliters;
  }

  get usage() {
    return this.#usage;
  }

  validateMilliliters(value) {
    
    if (value < Shampoo.#MIN_MILLILITERS) {
      throw new Error(`Not valid milliliters ${value}!`);
    }
  }
  validateUsage(value) {
    if (!Object.keys(Usage).some(key => Usage[key] === value)) {
      // if (!Gender.hasOwnProperty(gender)) {
      throw new Error(`Invalid gender type value ${value}!`);
    }
  }
    additionalInfo() {
      return `#Milliliters: ${this.#milliliters}\n` +
        ` #Usage: ${this.#usage}`;
    }

  
}