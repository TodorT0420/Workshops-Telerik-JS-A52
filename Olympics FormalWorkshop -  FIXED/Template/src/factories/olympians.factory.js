import { Boxer } from '../models/boxer.model.js';
import { Sprinter } from '../models/sprinter.model.js';

export class OlympiansFactory {
  static createBoxer(firstName, lastName, country, category, wins, losses) {
    return new Boxer(firstName, lastName, country, category, wins, losses);
  }

  static createSprinter(firstName, lastName, country, personalRecord) {
    return new Sprinter(firstName, lastName, country, personalRecord);
  }
}
