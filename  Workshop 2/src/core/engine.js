import { ShoppingCart } from '../models/shoppingCart.js';
import { CommandFactory } from './commandFactory.js';

export class Engine {
  #commandFactory;

  /**
  * @description An instance of CommandFactory is
  * @param {CommandFactory} commandFactory
  */
  constructor(commandFactory) {
    this.#commandFactory = commandFactory;
  }

  /**
  * @param {string[]} commands
  *
  * @returns {string[]}
  */
  run(commands) {
    const output = [];
    commands.forEach(commandLine => {
      try {
        const command = this.#commandFactory.create(commandLine);
        const result = command.execute();
        output.push(result);
      } catch (error) {
        output.push(error.message);
      }
    });
    return output.join("\n");
  }
}