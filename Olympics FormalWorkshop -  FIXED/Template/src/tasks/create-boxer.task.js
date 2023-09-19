import { Task } from './base.task.js';

export class CreateBoxerTask extends Task {
  run(firstName, lastName, country, category, wins, losses) {
    const boxer = this.factory.createBoxer(firstName, lastName, country, category, wins, losses);
    this.committee.olympians.push(boxer);

    return 'Boxer created';
  }
}
