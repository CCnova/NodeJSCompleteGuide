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
  constructor(title) {
    this.title = title;
  }

  save() {
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
}

module.exports = Product;