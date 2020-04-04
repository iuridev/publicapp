// retorna os produtos de uma empresa expecifica
const connection = require('../database/connection')

module.exports = {
  async index(request, response){
    //usar query, são enviados pela url após o ?
    const {page = 1} = request.query;
    const company_id = request.headers.authorization;
    const product = await connection('product')
    .where('company_id', company_id)
    .limit(5)
    .offset((page - 1)*5)
    .select('*');

    return response.json(product);
  }
}