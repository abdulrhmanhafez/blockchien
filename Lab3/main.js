const Product = require('./models/Product');
const DiscountedProduct = require('./models/DiscountedProduct');
const Inventory = require('./models/Inventory');


const product1 = new Product('Laptop', 1200, 10);
const product2 = new Product('Phone', 800, 15);
const product3 = new DiscountedProduct('Tablet', 500, 20, 0.1); // 10% discount


const inventory = new Inventory();


inventory.addProduct(product1);
inventory.addProduct(product2);
inventory.addProduct(product3);

inventory.displayInventory();

inventory.getTotalInventoryValue();


inventory.removeProduct('Phone');


inventory.displayInventory();