import { Task } from '../tasks/base.task.js';
import { CreateBoxerTask } from '../tasks/create-boxer.task.js';
import { CreateSprinterTask } from '../tasks/create-sprinter.task.js';
import { ListOlympiansTask } from '../tasks/list-olympians.task.js';

export class TaskRunner extends Task {
  static #createBoxerTask = new CreateBoxerTask();
  static #createSprinterTask = new CreateSprinterTask();
  static #listOlympiansTask = new ListOlympiansTask();

  static createBoxer(firstName, lastName, country, category, wins, losses) {
    return TaskRunner.#createBoxerTask.run(firstName, lastName, country, category, wins, losses);
  }

  static createSprinter(firstName, lastName, country, personalRecords) {
    return TaskRunner.#createSprinterTask.run(firstName, lastName, country, personalRecords);
  }

  static listOlympians(key, order) {
    return TaskRunner.#listOlympiansTask.run(key, order);
  }
}
