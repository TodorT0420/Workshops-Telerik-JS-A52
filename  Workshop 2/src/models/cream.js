import { Fragrance } from "./fragrance.js";
import { Product } from "./product.js";
import { Gender } from "./gender.js";

export class Cream extends Product {
    static #NAME_AND_BRAND_SCENT_MIN = 3;
    static #NAME_AND_BRAND_SCENT_MAX = 15;
    #scent;
      /**
  * @param {string} name
  * @param {string} brand
  * @param {number} price
  * @param {Gender} gender
  * @param {Fragrance} scent
  */
    
    
    constructor(name, brand, price, gender, scent) {
        super(name, brand, price, gender);
        this.validateName(name);
        this.validateBrand(brand);
        
        this.#scent = scent;
      
    }
    validateName(value) {
        if (!value) {
          throw new Error('Invalid name!');
        }
        
        if (value.length < Cream.#NAME_AND_BRAND_SCENT_MIN || value.length > Cream.#NAME_AND_BRAND_SCENT_MAX) {
          throw new Error(`Product name length must be between ${Cream.#NAME_AND_BRAND_SCENT_MIN} and ${Cream.#NAME_AND_BRAND_SCENT_MAX}`);
        }
    
      }
      
      validateBrand(value) {
        if (!value) {
          throw new Error('Invalid brand!');
        }
    
        if (value.length < Cream.#NAME_AND_BRAND_SCENT_MIN || value.length > Cream.#NAME_AND_BRAND_SCENT_MAX) {
          throw new Error(`Product brand length must be between ${Cream.#NAME_AND_BRAND_SCENT_MIN} and ${Cream.#NAME_AND_BRAND_SCENT_MAX}`);
        }
      }

    
    get scent() {
        return this.#scent;
    }

    additionalInfo() {
        return `#Scent: ${this.#scent}`;
    }

}