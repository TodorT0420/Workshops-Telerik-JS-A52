import { Task } from './base.task.js';

export class ListOlympiansTask extends Task {
  #defaultKey = 'firstName';
  #defaultOrder = 'asc';
  #orderDirection = {
    asc: 1,
    desc: -1,
  };

  run(key = this.#defaultKey, order = this.#defaultOrder) {
    if (this.committee.olympians.length === 0) {
      return 'No olympians added!';
    }

    const sortOrder = this.#orderDirection[order];
    let sortedOlympians = [];
    if (order === 'asc') {
      sortedOlympians = [...this.committee.olympians].sort((a, b) => a[key] > b[key] ? sortOrder : -sortOrder);
    } else if (order === 'desc') {
      sortedOlympians = [...this.committee.olympians].sort((a, b) => a[key] < b[key] ? sortOrder : -sortOrder);
    }

    const formattedList = sortedOlympians.map(olympian => {
      return olympian.print().trim();
    }).join('\n');

    return `Sorted by [key: ${key}] in [order: ${order}]\n${formattedList}`;
  }
}

