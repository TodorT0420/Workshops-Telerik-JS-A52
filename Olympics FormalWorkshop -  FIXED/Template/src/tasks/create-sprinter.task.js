
import { Task } from './base.task.js';

export class CreateSprinterTask extends Task {
  run(firstName, lastName, country, personalRecord) {
    const sprinter = this.factory.createSprinter(firstName, lastName, country, personalRecord);
    this.committee.olympians.push(sprinter);

    return 'Sprinter created';
  }
}
