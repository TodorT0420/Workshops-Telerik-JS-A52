import { Phonebook } from '../../src/models/phonebook';

describe('Phonebook', () => {
  describe('constructor', () => {
    it('should initialize contacts as an empty array', () => {
      const phonebook = new Phonebook();

      expect(phonebook.contacts).toEqual([]);
    });
  });

  describe('addContact()', () => {
    it('should throw if no contact was passed or contact has invalid value', () => {
      const phonebook = new Phonebook();

      expect(() => phonebook.addContact(undefined)).toThrow();
      expect(() => phonebook.addContact(null)).toThrow();
    });

    it('should throw if the contact has already been added', () => {
      const phonebook = new Phonebook();
      const contact = {
        name: 'test',
        phone: '1234',
      };

      phonebook.contacts = [contact];

      expect(() => phonebook.addContact(contact)).toThrow();
    });

    it('should correctly add the contact to the contacts array', () => {
      const phonebook = new Phonebook();
      const contact = {
        name: 'test',
        phone: '1234',
      };

      phonebook.addContact(contact);

      expect(phonebook.contacts?.length).toBe(1);
      expect(phonebook.contacts?.[0]).toBe(contact);
    });
  });

  describe('removeContact()', () => {
    it('should throw if no contact name was passed or if the passed value is invalid', () => {
      const phonebook = new Phonebook();

      expect(() => phonebook.removeContact(undefined)).toThrow();
      expect(() => phonebook.removeContact(null)).toThrow();
      expect(() => phonebook.removeContact('')).toThrow();
    });

    it('should throw if no contact with the passed name was found', () => {
      const phonebook = new Phonebook();
      phonebook.contacts = [{
        name: 'another',
        phone: '1234',
      }];

      expect(() => phonebook.removeContact('test')).toThrow();
    });

    it('should correctly removed the contact if found by name', () => {
      const phonebook = new Phonebook();
      phonebook.contacts = [{
        name: 'test name',
        phone: '1234',
      }];

      phonebook.removeContact('test name');

      expect(phonebook.contacts?.length).toBe(0);
    });
  });

  describe('updateContact()', () => {
    it('should throw if no contact name was passed or if the passed value is invalid', () => {
      const phonebook = new Phonebook();

      expect(() => phonebook.updateContact(undefined, '5678')).toThrow();
      expect(() => phonebook.updateContact(null, '5678')).toThrow();
      expect(() => phonebook.updateContact('', '5678')).toThrow();
    });

    it('should throw if no contact with the passed name was found', () => {
      const phonebook = new Phonebook();
      phonebook.contacts = [
        {
          name: 'another',
          phone: '1234',
        },
      ];

      expect(() => phonebook.updateContact('test', '5678')).toThrow();
    });

    it('should call setPhone() on the contact passing the new number', () => {
      const phonebook = new Phonebook();
      const contact = {
        name: 'test',
        phone: '1234',
        setPhone() { },
      };

      phonebook.contacts = [contact];

      jest.spyOn(contact, 'setPhone');
      phonebook.updateContact('test', '5678');

      expect(contact.setPhone).toHaveBeenCalledTimes(1);
      expect(contact.setPhone).toHaveBeenCalledWith('5678');
    });
  });

  describe('listAllContacts()', () => {
    it('should return "No contacts." if there are none added', () => {
      const phonebook = new Phonebook();

      expect(phonebook.listAllContacts()).toBe('No contacts.');
    });

    it('should return the correct string where there are some contacts added', () => {
      const phonebook = new Phonebook();
      phonebook.contacts = [
        {
          name: 'abc',
          phone: '123',
        },
        {
          name: 'def',
          phone: '456',
        },
      ];

      const contactList = phonebook.listAllContacts();

      expect(contactList).toContain('All contacts:');
      expect(contactList).toContain('abc: [123]');
      expect(contactList).toContain('def: [456]');
    });
  });

  describe('search()', () => {
    it('should throw if no partialName or invalid value was passed', () => {
      const phonebook = new Phonebook();

      expect(() => phonebook.search(undefined)).toThrow();
      expect(() => phonebook.search(null)).toThrow();
      expect(() => phonebook.search('')).toThrow();
    });

    it('should return all contact with names containing partialName', () => {
      const phonebook = new Phonebook();
      const contact1 = {
        name: 'Test',
        phone: '1234',
      };
      const contact2 = {
        name: 'Jest',
        phone: '1234',
      };
      const contact3 = {
        name: 'Not this one',
        phone: '1234',
      };
      phonebook.contacts = [
        contact1,
        contact2,
        contact3,
      ];

      const contactsFound = phonebook.search('est');

      expect(contactsFound.length).toBe(2);
      expect(contactsFound).toContain(contact1);
      expect(contactsFound).toContain(contact2);
    });
  });
});
