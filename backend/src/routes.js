const express = require('express');
const routes = express.Router();

routes.get('/', (request, response) => {
  return response.status(200).send('Backend Public!')
})

module.exports = routes

//