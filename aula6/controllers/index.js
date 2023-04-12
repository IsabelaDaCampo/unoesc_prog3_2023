const http = require('http');
const hostName = '127.0.0.1';
const port = 4000;

const { 
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct
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
  } else if(req.url.match(/\/api\/products\/\w+/) && req.method === 'PUT') {
    const id = req.url.split('/')[3];
    updateProduct(req, res, id);
  } else if(req.url.match(/\/api\/products\/\w+/) && req.method === 'DELETE') {
    const id = req.url.split('/')[3];
    deleteProduct(req, res, id);
  } else if(req.url === '/products' && req.method === 'GET'){
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.end(`
    <html>
      <head>
        <title>Produtos</title>
      </head>
      <body>
        <h1>Produtos</h1>
        <ul>
          ${product.map(prod => `<li>${prod.name}</li>`).join('')}
        </ul>
      </body>
    </html>
  `);
  } 
  else {
    res.end(JSON.stringify({
      message: 'Route not found. Please use the api/products route.'
    }));
  }
});

server.listen(port, hostName, () => {
  console.log(`Server running at http://${hostName}:4000`);
});