const express = require('express');
const routes = express.Router();
const connection = require('../database/connection');

//controllers
const companyController = require('../controllers/companyController');
const addressController = require('../controllers/addressController');


routes.get('/', (request, response) => {
  return response.status(200).send('Backend Public!');
})

//get
routes.get('/listCompany', companyController.index); //lista empresas

//post
routes.post('/company', companyController.create); // cadastrar empresa
routes.post('/address', addressController.create); // cadastrar endereço

module.exports = routes;

//