/* eslint-disable max-len */

// eslint-disable-next-line no-unused-vars
import moment from 'moment';

export class Contact {
  static HISTORY_LOG_LENGTH_CHECK = 0;
  static MIN_SECONDS = 1;
  static MAX_SECONDS = 150
  static NAME_MIN_LENGTH = 3;
  static NAME_MAX_LENGTH = 25;
  name;
  phone;
  history;

  constructor(name, phone) {
    this.validateName(name);
    this.validatePhone(phone);

    this.name = name;
    this.phone = phone;
    this.history = [];

  }
  setPhone(phone) {
    this.validatePhone(phone);
    this.phone = phone;
  }
  validateName(name) {
    if (!name || typeof name !== 'string' || name.length < Contact.NAME_MIN_LENGTH || name.length > Contact.NAME_MAX_LENGTH) {
      throw new Error('Invalid name!');
    }
  }
  validatePhone(phone) {
    if (typeof phone !== 'string') {
      throw new Error('Phone number must be a string!');
    }
    const phoneRegex = /^0\d{3}-\d{3}-\d{3}$/;

    if (!phoneRegex.test(phone)) {
      throw new Error('Invalid phone format!');
    }

  }

  call() {
    const seconds = Math.floor(Math.random() * Contact.MAX_SECONDS) + Contact.MIN_SECONDS;

    const dateNow = new Date();
    const formattedDate = `${dateNow.getMonth() + 1}/${dateNow.getDate()}/${dateNow.getFullYear()} ${dateNow.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true })}`;
    const callsLog = `[${formattedDate}]Call: Duration: ${seconds} sec.`;
    this.history.push(callsLog);
  }

  //

  message(msg) {
    if (!msg || typeof msg !== 'string' || msg === '') {
      throw new Error('invalid message!');
    }
    const now = new Date();
    const formattedDate = `${now.getMonth() + 1}/${now.getDate()}/${now.getFullYear()} ${now.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true })}`;

    const logMessage = `[${formattedDate}]Message: (${msg}).`;
    this.history.push(logMessage);

  }

  viewHistoryLog() {
    if (this.history.length <= Contact.HISTORY_LOG_LENGTH_CHECK) {
      console.log('No entries');
      return;
    }
    let logOutput = `${this.name}'s call log:\n`;

    for (let i = this.history.length - 1; i >= 0; i--) {
      logOutput += this.history[i] + '\n';
    }

    console.log(logOutput.trim());
  }

};
