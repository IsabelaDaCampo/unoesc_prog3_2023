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

function update(id, product){
  return new Promise((resolve, _reject) => {
    const index = products.findIndex(p => p.id === id);
    products[index] = {id, ...product};
    writeDataToFile('./data/products.json', products);
    resolve(products[index]);
  });
}

function remove(id){
  return new Promise((resolve, _reject) => {
    const index = products.findIndex(p => p.id === id);
    products.splice(index, 1);
    writeDataToFile('./data/products.json', products);
    resolve();
  });
}


module.exports = {
  findAll,
  findById,
  create,
  update,
  remove
}