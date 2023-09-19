import { ApplicationData } from "../core/applicationData.js";
import { validateParamsCount } from "./validationHelpers.js";

export class AddToCategoryCommand {
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

        category.addProduct(product);

        return `Product ${productName} added to category ${categoryName}!`;
    }
}