

export class Phonebook {
  static CONTACTS_LENGTH_CHECK = 0;
  contacts;

  constructor() {
    this.contacts = [];
  }

  addContact(contact) {
    if (contact === null || contact === undefined) {
      throw new Error('Invalid contact!');
    }
    if (this.contacts.some(existingContact => existingContact.name === contact.name)) {
      throw new Error('Contact have been already added!');
    }
    this.contacts.push(contact);
  }

  removeContact(name) {
    if (!name || name === '') {
      throw new Error('Invalid name!');
    }

    const index = this.contacts.findIndex(contact => contact.name === name);

    if (index === -1) {
      throw new Error('Contact doesn\'t exist!');
    }

    this.contacts.splice(index, 1);
  }

  updateContact(name, phone) {
    if (!name || typeof name !== 'string' || name.trim() === '') {
      throw new Error('Invalid name!');
    }

    const contact = this.contacts.find(existingContact => existingContact.name === name);

    if (!contact) {
      throw new Error(`No contact found with the name ${name}.`);
    }

    contact.setPhone(phone);
  }

  listAllContacts() {
    if (this.contacts.length <= Phonebook.CONTACTS_LENGTH_CHECK) {
      return 'No contacts.';
    }

    let contactList = 'All contacts:\n';
    for (const contact of this.contacts) {
      contactList += `  ${contact.name}: [${contact.phone}]\n`;
    }
    return contactList;
  }

  search(partialName) {
    if (!partialName || partialName === '') {
      throw new Error('Invalid value!');
    }
    return this.contacts.filter(contact => contact.name.includes(partialName));
  }
}
