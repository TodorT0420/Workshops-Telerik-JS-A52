import { ApplicationData } from "../core/applicationData.js";
import { validateParamsCount } from "./validationHelpers.js";

export class RemoveFromShoppingCartCommand {
    #params;
    #appData;

    /**
    * @param {Array} params
    * @param {ApplicationData} appData
    */
    constructor(params, appData) {
        validateParamsCount(params, 1);

        this.#params = params;
        this.#appData = appData;
    }

    execute() {
        const [productName] = this.#params;
        const product = this.#appData.findProductByName(productName);
        
        this.#appData.shoppingCart.removeProduct(product);

        return `Product ${productName} was removed from the shopping cart!`;
    }
}