import { ApplicationData } from '../core/applicationData.js';
import { try_parse_float, try_parse_int, validateParamsCount } from './validationHelpers.js';

export class CreateCreamCommand {
    #params;
    #appData;

    /**
    * @param {string[]} params
    * @param {ApplicationData} appData
    */
  constructor(params, appData) {
    
    validateParamsCount(params, 5);
    
     

      this.#params = params;
      this.#appData = appData;
    }

    execute() {
      const [name, brand, price, gender, scent] = this.#params;
      this.#appData.createCream(name, brand, try_parse_float(price), gender, scent);

      return `Cream with name ${name} was created!`;
    }
}