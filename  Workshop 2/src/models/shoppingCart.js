import { Product } from "./product.js";
import { try_parse_float } from "../commands/validationHelpers.js";
import { try_parse_int } from "../commands/validationHelpers.js";

export class ShoppingCart {

  /**
  * @type {Product[]}
  */
  #productList;

  constructor() {
    this.#productList = [];
  }

  /**
  * @type {Product[]}
  */
  get productList() {
    return this.#productList.slice();
  }

  /**
  * @param {Product} product
  */
  addProduct(product) {
    if (!product) {
      throw new Error('Invalid product!');
    }

    this.#productList.push(product);
  }

  /**
  * @param {Product} product
  */
  removeProduct(product) {
    if (!product) {
      throw new Error('Invalid product');
    }
    const productFound = this.#productList.find(p => p.name === product.name);

    if (productFound) {
      this.#productList.splice(this.#productList.indexOf(productFound), 1);
    } else {
      throw new Error('Product cannot be found!');
    }
  }

  /**
  * @param {Product} product
  *
  * @returns {boolean}
  */
  containsProduct(product) {
    if (!product) {
      throw new Error('Invalid product!');
    }

    return this.#productList.some(p => p.name === product.name);
  }

  /**
  * @returns {number}
  */
  totalPrice() {
    return  this.#productList.reduce((sum, p) => sum + p.price, 0);
  }   
}