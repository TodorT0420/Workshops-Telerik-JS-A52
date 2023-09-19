
import { ApplicationData } from "../core/applicationData.js";
import { try_parse_float, try_parse_int, validateParamsCount } from "./validationHelpers.js";

export class CreateToothpasteCommand {
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
      const [name, brand, price, gender, ingredients] = this.#params;
      this.#appData.createToothpaste(name, brand, try_parse_float(price), gender, ingredients);
     
      return `Toothpaste with name ${name} was created!`;
    }
}