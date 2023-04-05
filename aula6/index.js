const http = require('http');
const hostName = '127.0.0.1';
const port = 4000;

const { 
  getProducts,
  getProduct,
  createProduct
} = require('./controllers/productController');

const server = http.createServer((req, res) => {
  const product = require('./data/products.json');
  if(req.url === '/api/products' && req.method === 'GET'){
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    getProducts(req, res);
  } else if(req.url.match(/\/api\/products\/\w+/) && req.method === 'GET'){
    const id = req.url.split('/')[3];
    
    getProduct(req, res, id);
  } else if(req.url === '/api/products' && req.method === 'POST'){
    createProduct(req, res);
  } else {
    res.end(JSON.stringify({
      message: 'Route not found. Please use the api/products route.'
    }));
  }
});

server.listen(port, hostName, () => {
  console.log(`Server running at http://${hostName}:4000`);
});