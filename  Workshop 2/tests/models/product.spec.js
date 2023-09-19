
import { Product } from '../../src/models/product.js';
import { Gender } from '../../src/models/gender.js';
describe('Product', () => {

  describe('name', () => {
  
    it('constructor should throw if no name was passed or the passed value is empty string', () => {
      expect(() => new Product(undefined, 'Test brand', 10, Gender.Men)).toThrow();
    });

    it('constructor should throw if name is too short', () => {
      expect(() => new Product('aa', 'Test brand', 10, Gender.Women)).toThrow();
    });

    it('constructor should throw if name is too long', () => {
      expect(() => new Product('a'.repeat(11), 'Test brand', 10, Gender.Women)).toThrow();
    });

    it('constructor should set name with the correct value', () => {
      const product = new Product('Test name', 'Test brand', 10, Gender.Unisex);

      expect(product.name).toBe('Test name');
    });

    it('should not be able to set the value of name from outside the class', () => {
      const product = new Product('Test name', 'Test brand', 10, Gender.Unisex);

      expect(() => product.name = 'New name').toThrow();
    });
    
  });

  describe('brand', () => {

    it('constructor should throw if no brand was passed or the passed value is empty string', () => {
      expect(() => new Product('Test name', undefined, 10, Gender.Men)).toThrow();
    });

    it('constructor should throw if brand is too short', () => {
      expect(() => new Product('Test name', 'a', 10, Gender.Women)).toThrow();
    });

    it('constructor should throw if brand is too long', () => {
      expect(() => new Product('Test name', 'a'.repeat(11), 10, Gender.Women)).toThrow();
    });

    it('constructor should set brand with the correct value', () => {
      const product = new Product('Test name', 'Test brand', 10, Gender.Unisex);

      expect(product.brand).toBe('Test brand');
    });

    it('should not be able to set the value of brand from outside the class', () => {
      const product = new Product('Test name', 'Test brand', 10, Gender.Unisex);

      expect(() => product.brand = 'New brand').toThrow();
    });

  });

  describe('gender', () => {

    it('should throw if the value of gender is not valid', () => {
      expect(() => new Product('Test name', 'Test brand', 10, 'NonExistingKeyValue')).toThrow();
    });

    it('should set gender to the correct value', () => {
      const product = new Product('Test name', 'Test brand', 10, Gender.Unisex);

      expect(product.gender).toBe(Gender.Unisex);
    });

    it('should not be able to set the value of gender from outside the class', () => {
      const product = new Product('Test name', 'Test brand', 10, Gender.Unisex);

      expect(() => product.gender = Gender.Women).toThrow();
    });

  });

  describe('price', () => {

    it('should throw if the value of price is not valid', () => {
      expect(() => new Product('Test name', 'Test brand', -1, Gender.Unisex)).toThrow();
    });

    it('should set price to the correct value', () => {
      const product = new Product('Test name', 'Test brand', 10, Gender.Unisex);

      expect(product.price).toBe(10);
    });

    it('should not be able to set the value of price from outside the class', () => {
      const product = new Product('Test name', 'Test brand', 10, Gender.Unisex);

      expect(() => product.price = 20).toThrow();
    });

  });
});