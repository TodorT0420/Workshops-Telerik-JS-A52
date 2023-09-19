import { boxingCategory } from '../common/boxing-category.enum.js';
import { Athletes } from './athletes.js';

export class Boxer extends Athletes {
  #category;
  #win;
  #losses

  static #MIN_WINS_COUNT = 0;
  static #MAX_WINS_COUNT = 100;
  static #MIN_LOSSES_COUNT = 0;
  static #MAX_LOSSES_COUNT = 100;

  constructor(firstName, lastName, country, category, win, losses) {
    super(firstName, lastName, country);

    this.validateCategory(category);
    this.validateWins(win);
    this.validateLosses(losses);

    this.#category = category;
    this.#win = win;
    this.#losses = losses;
  }

  get category() {
    return this.#category;
  }

  get win() {
    return this.#win;
  }

  get losses() {
    return this.#losses;
  }

  validateCategory(value) {
    if (!Object.keys(boxingCategory).some(key => boxingCategory[key] === value)) {
      throw new Error(`Invalid category type value ${value}!`);
    }
  }

  validateWins(value) {
    if (typeof value !== 'number') {
      throw new Error('Invalid type of value!');
    }
    if (value < Boxer.#MIN_WINS_COUNT && value > Boxer.#MAX_WINS_COUNT) {
      throw new Error(`Invalid wins value ${value}!`);
    }
  }

  validateLosses(value) {
    if (typeof value !== 'number') {
      throw new Error('Invalid type of value!');
    }
    if (value < Boxer.#MIN_LOSSES_COUNT && value > Boxer.#MAX_LOSSES_COUNT) {
      throw new Error(`Invalid losses value ${value}!`);
    }
  }

  additionalInfo() {
    return `BOXER: ${this.firstName} ${this.lastName} from ${this.country}\nCategory: ${boxingCategory[this.#category]}\nWin: ${this.#win}\nLosses: ${this.#losses}`;
  }
}