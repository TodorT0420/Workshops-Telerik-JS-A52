
import { Shampoo } from '../../src/models/shampoo.js';
import { Product } from '../../src/models/product.js';
import { Usage } from '../../src/models/usage.js';
import { Gender } from '../../src/models/gender.js';

describe('Shampoo', () => {

  describe('class', () => {

    it('should extend Product', () => {
      expect(Shampoo.prototype).toBeInstanceOf(Product);
    });

  });

  describe('milliliters', () => {

    it('should throw if the value of milliliters is not valid', () => {
      expect(() => new Shampoo('Test name', 'Test brand', 10, Gender.Unisex, -1, Usage.EveryDay)).toThrow();
    });

    it('should set milliliters to the correct value', () => {
      const shampoo = new Shampoo('Test name', 'Test brand', 10, Gender.Unisex, 20, Usage.EveryDay);

      expect(shampoo.milliliters).toBe(20);
    });

    it('should not be able to set the value of milliliters from outside the class', () => {
      const shampoo = new Shampoo('Test name', 'Test brand', 10, Gender.Unisex, 20, Usage.EveryDay);

      expect(() => shampoo.milliliters = 30).toThrow();
    });

  });


  describe('usage', () => {

    it('should throw if the value of usage is not valid', () => {
      expect(() => new Shampoo('Test name', 'Test brand', 10, Gender.Unisex, 20, 'InvalidKeyValue')).toThrow();
    });

    it('should set usage to the correct value', () => {
      const shampoo = new Shampoo('Test name', 'Test brand', 10, Gender.Unisex, 20, Usage.EveryDay);

      expect(shampoo.usage).toBe(Usage.EveryDay);
    });

    it('should not be able to set the value of usage from outside the class', () => {
      const shampoo = new Shampoo('Test name', 'Test brand', 10, Gender.Unisex, 20, Usage.EveryDay);

      expect(() => shampoo.usage = Usage.Medical).toThrow();
    });

  });

  describe('print', () => {

    it('should override Product\'s additionalInfo method', () => {
      expect(Shampoo.prototype.additionalInfo).toBeInstanceOf(Function);
    });

    it('should return the correct string', () => {
      const shampoo = new Shampoo('Test name', 'Test brand', 10, Gender.Unisex, 20, Usage.EveryDay);

      const result = shampoo.print();

      expect(result).toContain('Milliliters: 20');
      expect(result).toContain('Usage: EveryDay');
    });

    it('should call additionalInfo once', () => {
      const shampoo = new Shampoo('Test name', 'Test brand', 10, Gender.Unisex, 20, Usage.EveryDay);
      
      jest.spyOn(shampoo, 'additionalInfo');

      const result = shampoo.print();

      expect(shampoo.additionalInfo).toHaveBeenCalledTimes(1);
    });
  });
});