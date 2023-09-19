import { CreateCategoryCommand } from "../commands/createCategory.js";
import { AddToCategoryCommand } from "../commands/addToCategory.js";
import { RemoveFromCategoryCommand } from "../commands/removeFromCategory.js";
import { ShowCategoryCommand } from "../commands/showCategory.js";
import { CreateShampooCommand } from "../commands/createShampoo.js";
import { CreateToothpasteCommand } from "../commands/createToothpaste.js";
import { AddToShoppingCartCommand } from "../commands/addToShoppingCart.js";
import { RemoveFromShoppingCartCommand } from "../commands/removeFromShoppingCart.js";
import { TotalPriceCommand } from "../commands/totalPrice.js";
import { ApplicationData } from "./applicationData.js";
import { CreateCreamCommand } from "../commands/createCream.js";
export class CommandFactory {

    #data;

    /**
     * @param {ApplicationData} appData
     */
    constructor(appData) {
        this.#data = appData;
    }

    create(commandLine) {
        const [commandName, ...commandArgs] = commandLine.split(' ');

        switch (commandName.toLowerCase()) {
            case 'createcategory':
                return new CreateCategoryCommand(commandArgs, this.#data);
            case 'createcream':
                return new CreateCreamCommand(commandArgs, this.#data);
            case 'createshampoo':
                return new CreateShampooCommand(commandArgs, this.#data);
            case 'createtoothpaste':
                return new CreateToothpasteCommand(commandArgs, this.#data);
            case 'showcategory':
                return new ShowCategoryCommand(commandArgs, this.#data);
            case 'addtocategory':
                return new AddToCategoryCommand(commandArgs, this.#data);
            case 'removefromcategory':
                return new RemoveFromCategoryCommand(commandArgs, this.#data);
            case "addtoshoppingcart":
                return new AddToShoppingCartCommand(commandArgs, this.#data);
            case "removefromshoppingcart":
                return new RemoveFromShoppingCartCommand(commandArgs, this.#data);
            case 'totalprice':
                return new TotalPriceCommand(this.#data);
            default:
                throw new Error(`Invalid command name: ${commandName}!`);
        }
    }
}
