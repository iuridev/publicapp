const express = require('express');
const routes = express.Router();
const connection = require('../database/connection')
const crypto = require('crypto');

routes.get('/', (request, response) => {
  return response.status(200).send('Backend Public!')
})

routes.get('/listCompany', async (request, response)=>{
  const company = await connection('company').select('*');
  
  return response.json(company);
})


routes.post('/company', async (request, response)=>{
  const {name, cnpj, fone, whatsapp, email, password} = request.body;
  const id = crypto.randomBytes(4).toString('hex');

  await connection('company').insert({
    id,
    name,
    cnpj,
    fone,
    whatsapp,
    email,
    password
  })

  return response.json({id});

});

module.exports = routes

//