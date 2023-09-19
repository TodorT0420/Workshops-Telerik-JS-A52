import { OlympiansFactory } from '../factories/olympians.factory.js';
import { OlympicsCommittee } from '../providers/olympics-committee.js';
export class Task {
 #factory = OlympiansFactory;
  #committee = OlympicsCommittee;

  get factory() {
    return this.#factory;
  }

  get committee() {
    return this.#committee;
  }
  run(...parameters) {
    throw new Error('The run method must be implemented in subclasses.');
  }
}