import { ApplicationData } from "../core/applicationData.js";
import { try_parse_float, try_parse_int } from "./validationHelpers.js";

export class TotalPriceCommand {
    #appData;

    /**
    * @param {ApplicationData} appData
    */
    constructor(appData) {
     
        this.#appData = appData;
    }

    execute() {
       
        const price = this.#appData.shoppingCart.totalPrice().toFixed(2);
       
        return (price > 0.0) ? `$${price} total price currently in the shopping cart!` : "No product in shopping cart!";
    }
}