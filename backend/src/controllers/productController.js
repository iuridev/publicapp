const connection = require('../database/connection')

module.exports = {
  async index(request, response){
    const item = await connection('product').select('*');
    
    return response.json(item);
  },

  async create(request, response){
    const {name, price, description, weight, provider, amount} = request.body;
    const company_id = request.headers.authorization; // <-- chave estrangeira
    const photo = null; //ainda não sei trabalhar com imgs

    const item = await connection('product').insert({
      name,
      price,
      description,
      photo,
      weight,
      provider,
      amount,
      company_id,
    });
    return response.json(item)    
  }
};