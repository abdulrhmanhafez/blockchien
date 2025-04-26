class Inventory {
    // Private field
    #products;
  
    constructor() {
      this.#products = [];
    }
  
   
    addProduct(product) {
      this.#products.push(product);
      console.log(`Product "${product.name}" added to inventory.`);
    }

    removeProduct(productName) {
      this.#products = this.#products.filter(product => product.name !== productName);
      console.log(`Product "${productName}" removed from inventory.`);
    }
  
    displayInventory() {
      console.log('Current Inventory:');
      this.#products.forEach(product => product.display());
    }
  
    getTotalInventoryValue() {
      const totalValue = this.#products.reduce((sum, product) => sum + product.getTotalValue(), 0);
      console.log(`Total Inventory Value: $${totalValue}`);
    }
  }
  

  module.exports = Inventory;