import { ApplicationData } from "../core/applicationData.js";
import { validateParamsCount } from "./validationHelpers.js";

export class AddToShoppingCartCommand {
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
        
        this.#appData.shoppingCart.addProduct(product);

        return `Product ${productName} was added to the shopping cart!`;
    }
}