import { Contact } from './models/contact.js';
import { Phonebook } from './models/phonebook.js';

const testContactModel = () => {
  console.log('\n\n- Testing Contact Model -\n');

  const contact1 = new Contact('Pesho', '0111-123-123');
  const contact2 = new Contact('Gosho', '0222-321-321');
  const contact3 = new Contact('Steven', '0333-213-213');

  contact1.call();
  contact2.call();

  contact1.message('Pesho vdigni go toq telefon');
  contact1.call();
  contact1.call();

  contact1.viewHistoryLog();
  contact2.viewHistoryLog();
  contact3.viewHistoryLog();
};

const testPhonebookModel = () => {
  console.log('\n\n- Testing Phonebook Model -\n');

  const contact1 = new Contact('Pesho', '0111-123-123');
  const contact2 = new Contact('Gosho', '0222-321-321');
  const contact3 = new Contact('Steven', '0333-213-213');

  const phonebook = new Phonebook();

  console.log(
    phonebook.listAllContacts(),
  );
  phonebook.addContact(contact1);
  phonebook.addContact(contact2);
  phonebook.addContact(contact3);
  phonebook.removeContact('Gosho');
  phonebook.updateContact('Steven', '0123-456-789');
  console.log(
    phonebook.listAllContacts(),
  );
  console.log(
    phonebook.search('sh'),
  );

};

testContactModel();
testPhonebookModel();
