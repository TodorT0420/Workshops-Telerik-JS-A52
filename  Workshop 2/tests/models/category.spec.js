import { Category } from '../../src/models/category.js';


describe('Category', () => {
  describe("constructor", () => {
    it("should throw if name not valid", () => {
      expect(() => new Category(null)).toThrow();
      expect(() => new Category(undefined)).toThrow();
      expect(() => new Category("x")).toThrow();
      expect(() => new Category("x".repeat(20))).toThrow();
    });
  });

  describe('addProduct', () => {

    it('should throw if no product or invalid value was passed', () => {
      const category = new Category('test');

      expect(() => category.addProduct(null)).toThrow();
      expect(() => category.addProduct(undefined)).toThrow();
    });

    it('should add the product to #products', () => {
      const category = new Category('test');
      const product = { name: 'test-product' };

      category.addProduct(product);

      expect(category.products).toEqual([product]);
    });

  });

  describe('removeProduct', () => {

    it('should throw if no product or invalid value was passed', () => {
      const category = new Category('test');

      expect(() => category.removeProduct(null)).toThrow();
      expect(() => category.removeProduct(undefined)).toThrow();
    });

    it('should throw if the product passed is not in the products array', () => {
      const category = new Category('test');
      const product = { name: 'test-product' };

      category.mockProductsData = [product];

      expect(() => category.removeProduct({ name: 'another-product' })).toThrow();
    });

    it('should correctly remove the product by name', () => {
      const category = new Category('test');
      const product = { name: 'test-product' };

      category.mockProductsData = [product];
      category.removeProduct({ name: 'test-product' });

      expect(category.products).toEqual([]);
    });

  });

});
