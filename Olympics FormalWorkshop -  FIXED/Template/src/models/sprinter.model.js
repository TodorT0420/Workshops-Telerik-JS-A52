import { Athletes } from './athletes.js';

export class Sprinter extends Athletes{
    #personalRecords;

    constructor(firstName, lastName, country, personalRecords) {
      super(firstName, lastName, country);

      this.validatePersonalRecords(personalRecords);
      this.#personalRecords = personalRecords;
    }

    get personalRecords() {
      return this.#personalRecords;
    }

    validatePersonalRecords(value) {
      if (!(value instanceof Map)) {
        throw new Error(`Invalid instance value ${value}!`);
      }
    }

    additionalInfo() {
      let result = `SPRINTER: ${this.firstName} ${this.lastName} from ${this.country}\nPERSONAL RECORDS\n`;
  
      this.#personalRecords.forEach((time, event) => {
        result += `${event}: ${time}s\n`;
      });
  
      return result;
    }
}