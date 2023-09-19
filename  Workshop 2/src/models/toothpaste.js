import { Product } from './product.js';
import { Gender } from './gender.js';

export class Toothpaste extends Product {
  #ingredients;
  /**
  * @param {string} name
  * @param {string} brand
  * @param {number} price
  * @param {Gender} gender
  * @param {string} ingredients
  */
  constructor(name, brand, price, gender, ingredients) {
    super(name, brand, price, gender);

    this.validateIngredients(ingredients);
    this.#ingredients = ingredients;
  }

  get ingredients() {
    return this.#ingredients;
  }

  validateIngredients(value) {
    if (!value) {
      throw new Error('Invalid value');
    }
 }

  additionalInfo() {
    return `#Ingredients: ${this.#ingredients}`;

  }

}
