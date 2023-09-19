export class OlympicsCommittee {
  static #olympians = [];

  static get olympians() {
    // do not change implementation
    return OlympicsCommittee.#olympians;
  }
}
