import { Contact } from '../../src/models/contact';

describe('Contact', () => {
  describe('constructor', () => {
    it('should throw if falsy name value was passed', () => {
      expect(() => new Contact(undefined, '0123-456-789')).toThrow();
      expect(() => new Contact(null, '0123-456-789')).toThrow();
      expect(() => new Contact('', '0123-456-789')).toThrow();
    });

    it('should throw if name is shorter than 2 letters', () => {
      expect(() => new Contact('a', '0123-456-789')).toThrow();
    });

    it('should throw if name is longer than 25 letters', () => {
      expect(() => new Contact('a'.repeat(26), '0123-456-789')).toThrow();
    });

    it('should throw if the phone number is not in the correct format', () => {
      expect(() => new Contact('Test name', '0123456789')).toThrow();
    });

    it('should set the name to the correct value passed to the constructor', () => {
      const contact = new Contact('Test name', '0123-456-789');
      expect(contact.name).toBe('Test name');
    });

    it('should set the phone to the correct value passed to the constructor', () => {
      const contact = new Contact('Test name', '0123-456-789');
      expect(contact.phone).toBe('0123-456-789');
    });

    it('should set the history to an empty array', () => {
      const contact = new Contact('Test name', '0123-456-789');

      expect(contact.history).toEqual([]);
    });
  });

  describe('setPhone()', () => {
    it('should throw if the phone number is not in the correct format', () => {
      const contact = new Contact('Test name', '0123-456-789');

      expect(() => contact.setPhone('123456789')).toThrow();
    });

    it('should update phone if the phone number is in the correct format', () => {
      const contact = new Contact('Test name', '0123-456-789');
      contact.setPhone('0987-654-321');

      expect(contact.phone).toBe('0987-654-321');
    });
  });

  describe('call()', () => {
    it('should add the correct string to the history array', () => {
      const contact = new Contact('Test name', '0123-456-789');

      contact.call();

      expect(contact.history.length).toBe(1);
      expect(contact.history?.[0]?.toLowerCase()).toContain('call:');
      expect(contact.history?.[0]?.toLowerCase()).toContain('duration:');
    });
  });

  describe('message()', () => {
    it('should throw if the msg passed is not a valid message', () => {
      const contact = new Contact('Test name', '0123-456-789');

      expect(() => contact.message(null)).toThrow();
      expect(() => contact.message(undefined)).toThrow();
      expect(() => contact.message('')).toThrow();
    });

    it('should add the correct string to the history array', () => {
      const contact = new Contact('Test name', '0123-456-789');

      contact.message('test message');

      expect(contact.history.length).toBe(1);
      expect(contact.history?.[0]?.toLowerCase()).toContain('message: (test message)');
    });
  });

  describe('viewHistoryLog()', () => {
    afterEach(() => {
      jest.clearAllMocks();
    });

    it('should return "No entries" if no calls or messages were logged', () => {
      const contact = new Contact('Test name', '0123-456-789');

      let logged = '';
      jest.spyOn(console, 'log').mockImplementation((string) => {
        logged = string;
      });
      contact.viewHistoryLog();

      expect(logged).toContain('No entries');
    });

    it('should return the correct out if any calls or messages were logged', () => {
      const contact = new Contact('Test name', '0123-456-789');
      contact.call();
      contact.message('test');

      let logged = '';

      jest.spyOn(console, 'log').mockImplementation((string) => {
        logged = string;
      });
      contact.viewHistoryLog();

      const [_, message, call] = logged.split('\n');

      expect(message).toContain('Message: (test)');
      expect(call).toContain('Call:');
    });

    it('should display contact\'s name', () => {
      const contact = new Contact('Test name', '0123-456-789');
      contact.call();

      let logged = '';

      jest.spyOn(console, 'log').mockImplementation((string) => {
        logged = string;
      });
      contact.viewHistoryLog();

      const [firstLine] = logged.split('\n');

      expect(firstLine).toContain('Test name');
    });
  });
});
