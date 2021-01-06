const fs = require('fs');
const path = require('path');

const filePath = path.join(
  path.dirname(require.main.filename),
  'data',
  'products.json'
);

const getProductsFromFile = (callBack) => {
  fs.readFile(filePath, (err, fileContent) => {
    err ?
      callBack([]) :
      callBack(JSON.parse(fileContent));
  });
}

class Product {
  constructor(title, imageUrl, description, price) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    this.id = Math.random().toString();

    getProductsFromFile((products) => {
      products.push(this);
      fs.writeFile(filePath, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }

  static fetchAll(callBack) {
    getProductsFromFile(callBack);
  }

  static findById(id, callBack) {
    getProductsFromFile((products) => {
      const product = products.find(product => product.id === id);

      callBack(product);
    });
  }
}

module.exports = Product;