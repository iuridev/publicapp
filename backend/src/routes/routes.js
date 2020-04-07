const express = require('express');
const routes = express.Router();
const connection = require('../database/connection');

//controllers
const companyController = require('../controllers/companyController');
const addressController = require('../controllers/addressController');
const productController = require('../controllers/productController');
const profileProducts = require('../controllers/profileProducts');



routes.get('/', (request, response) => {
  return response.status(200).send('Backend Public!');
})

//get
routes.get('/company', companyController.index); //lista empresas
routes.get('/address', addressController.index);//listar todos os endereços
routes.get('/product', productController.index);//listar todos os endereços
routes.get('/listProfileProduct', profileProducts.index);//listar todos os endereços


//post
routes.post('/company', companyController.create); // cadastrar empresa
routes.post('/address', addressController.create); // cadastrar endereço
routes.post('/product', productController.create); // cadastrar produto

//delete
routes.delete('/product/:id', productController.delete); // Deletar produto
routes.delete('/address/:id', addressController.delete); // Deletar endereço

module.exports = routes;

//