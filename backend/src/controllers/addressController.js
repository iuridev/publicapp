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
  },
  
  async delete(request, response){
    //usar parametro de rota params
    const {id} = request.params;
    const company_id = request.headers.authorization; // <-- id company

    const product = await connection('address')
    .where('id',id)
    .select('company_id')
    .first();

    if(product.company_id != company_id){
      return response.status(401).json({error: 'Operação não permitida.'});
    }

    await connection('address').where('id', id).delete();

    return response.status(204).send();
  }
};