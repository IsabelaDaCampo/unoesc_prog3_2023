const { v4 } = require('uuid');

const products = require('../data/products.json');
const { writeDataToFile } = require('../utils');

function findAll(){
  return new Promise((resolve, _reject) => {
    resolve(products);
  });
}

function findById(id){
  return new Promise((resolve, _reject) => {
    const product = products.find(p => p.id === id);
    resolve(product);
  });
}

function create(product){
  return new Promise((resolve, _reject) => {
    const newProduct = {id: v4(), ...product};
    products.push(newProduct);
    writeDataToFile('./data/products.json', products);
    resolve(newProduct);
  });
}


module.exports = {
  findAll,
  findById,
  create
}