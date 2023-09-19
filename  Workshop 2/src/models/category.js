import { Product } from "./product.js";

export class Category {
  static #minNameLength = 2;
  static #maxNameLength = 15;
  #name;
  #products;

  /**
  * @param {string} name
  */
  constructor(name) {
    if (!name || name.length < Category.#minNameLength || name.length > Category.#maxNameLength) {
      throw new Error(`Product name length must be between ${Category.#minNameLength} and ${Category.#maxNameLength}`);
    }

    this.#name = name;
    this.#products = [];
  }

  /**
  * @type {Product[]}
  */
  get products() {
    return this.#products.slice();
  }

  /**
    * @type {string}
    */
  get name() {
    return this.#name;
  }

  /**
  * @param {Product} product
  */
  addProduct(product) {
    if (!product) {
      throw new Error('Product to add is not valid!');
    }

    this.#products.push(product);
  }

  /**
  * @param {Product} product
  */
  removeProduct(product) {
    if (!product) {
      throw new Error('Product to remove is not valid!');
    }

    const productFound = this.#products.find(p => p.name === product.name);

    if (!productFound) {
      throw new Error(`No product with name ${product.name} found!`);
    }

    this.#products.splice(this.#products.indexOf(productFound), 1);
  }

  print() {
    const result = [`#Category: ${this.#name}`];

    if (this.#products.length === 0) {
      result.push(` #No product in this category`);

      return result.join("\n");
    }

    this.#products.sort((product1, product2) => product1.brand === product2.brand ? (product2.price - product1.price) : product1.brand.localeCompare(product2.brand))
      .forEach(product => {
        result.push(product.print());
      });

    return result.join("\n");
  }

  // Do not remove this. It is used for the tests.
  set mockProductsData(value) {
    this.#products = value;
  }
}
