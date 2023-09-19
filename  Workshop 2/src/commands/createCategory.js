import { ApplicationData } from "../core/applicationData.js";
import { validateParamsCount } from "./validationHelpers.js";

export class CreateCategoryCommand {
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
        const [categoryName] = this.#params;

        this.#appData.createCategory(categoryName);

        return `Category with name ${categoryName} was created!`;
    }
}