import { ApplicationData } from "../core/applicationData.js";
import { validateParamsCount } from "./validationHelpers.js";

export class RemoveFromCategoryCommand {
    #params;
    #appData;

    /**
    * @param {Array} params
    * @param {ApplicationData} appData
    */
    constructor(params, appData) {
        validateParamsCount(params, 2);

        this.#params = params;
        this.#appData = appData;
    }

    execute() {
        const [categoryName, productName] = this.#params;
        const category = this.#appData.findCategoryByName(categoryName);
        const product = this.#appData.findProductByName(productName);

        category.removeProduct(product);

        return `Product ${productName} removed from category ${categoryName}!`;
    }
}