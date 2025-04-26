class Product {
    // Private fields
    #name;
    #price;
    #quantity;
  
    constructor(name, price, quantity) {
      this.#name = name;
      this.#price = price;
      this.#quantity = quantity;
    }
  
    // Getters
    get name() {
      return this.#name;
    }
  
    get price() {
      return this.#price;
    }
  
    get quantity() {
      return this.#quantity;
    }
  
    // Setters
    set quantity(newQuantity) {
      if (newQuantity >= 0) {
        this.#quantity = newQuantity;
      } else {
        console.log('Quantity cannot be negative.');
      }
    }
  
   
    getTotalValue() {
      return this.#price * this.#quantity;
    }
  
  
    display() {
      console.log(`Product: ${this.#name}, Price: $${this.#price}, Quantity: ${this.#quantity}`);
    }
  }
  

  module.exports = Product;