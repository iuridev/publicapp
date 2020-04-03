const connection = require('../database/connection')
const crypto = require('crypto');

module.exports = {
  async index(request, response){
    const company = await connection('company').select('*');
    
    return response.json(company);
  },

  async create(request, response){
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
  }


};