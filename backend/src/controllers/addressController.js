const connection = require('../database/connection')

module.exports = {
  async index(request, response){
    const address = await connection('address').select('*');
    return response.json(address)
  },

  async create(request, response){
    const {street, number, neighborhood, city, uf, cep} = request.body;
    const company_id = request.headers.authorization; // <-- chave estrangeira

    const [id] = await connection('address').insert({
      street,
      number,
      neighborhood,
      city,
      uf,
      cep,
      company_id,
    });
    return response.json({id});    
  }
  
};