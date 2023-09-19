
import { Product } from '../../src/models/product.js';
import { Toothpaste } from '../../src/models/toothpaste.js';
import { Gender } from '../../src/models/gender.js';

describe('Toothpaste', () => {

  describe('class', () => {

    it('should extend Product', () => {
      expect(Toothpaste.prototype).toBeInstanceOf(Product);
    });

  });

  describe('ingredients', () => {

    it('constructor should throw if no ingredients was passed or the passed value is empty string', () => {
      expect(() => new Toothpaste('Test name', 'Test brand', 10, Gender.Men, undefined)).toThrow();
      expect(() => new Toothpaste('Test name', 'Test brand', 10, Gender.Men, '')).toThrow();
    });

    it('constructor should set ingredients with the correct value', () => {
      const toothpaste = new Toothpaste('Test name', 'Test brand', 10, Gender.Unisex, 'sodium');

      expect(toothpaste.ingredients).toBe('sodium');
    });

    it('should not be able to set the value of ingredients from outside the class', () => {
      const toothpaste = new Toothpaste('Test name', 'Test brand', 10, Gender.Unisex, 'sodium');

      expect(() => toothpaste.ingredients = 'Xenon').toThrow();
    });

  });

  describe('print', () => {

    it('should override Product\'s additionalInfo method', () => {
      expect(Toothpaste.prototype.additionalInfo).toBeInstanceOf(Function);
    });

    it('should return the correct string', () => {
      const toothpaste = new Toothpaste('Test name', 'Test brand', 10, Gender.Unisex, 'Carbon');

      const result = toothpaste.print();

      expect(result).toContain('Ingredients: Carbon');
    });
    it('should call additionalInfo once', () => {
      const toothpaste = new Toothpaste('Test name', 'Test brand', 10, Gender.Unisex, 'Carbon');

      jest.spyOn(toothpaste, 'additionalInfo');

      const result = toothpaste.print();

      expect(toothpaste.additionalInfo).toHaveBeenCalledTimes(1);
    });
  });

});