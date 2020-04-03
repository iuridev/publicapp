
exports.up = function(knex) {
  return knex.schema.createTable('address', function(table){
    table.increments('id').primary();
    table.string('street').notNullable();
    table.integer('number').nullable();
    table.string('neighborhood').notNullable();
    table.string('city').notNullable();
    table.string('cep').notNullable();

    //relacionamento
    table.string('company_id').notNullable();
    table.foreign('company_id').references('id').inTable('company');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('address'); 
};
