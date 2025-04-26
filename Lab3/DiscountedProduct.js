const Product = require('./Product');

class DiscountedProduct extends Product {
  // Private field
  #discount;

  constructor(name, price, quantity, discount) {
    super(name, price, quantity);
    this.#discount = discount;
  }


  getDiscountedPrice() {
    return this.price * (1 - this.#discount);
  }


  display() {
    console.log(`Product: ${this.name}, Original Price: $${this.price}, Discount: ${this.#discount * 100}%, Final Price: $${this.getDiscountedPrice()}, Quantity: ${this.quantity}`);
  }
}


module.exports = DiscountedProduct;
