
exports.up = function(knex) {
  return knex.schema.createTable('product', function(table){
    table.increments('id').primary();
    table.string('name').notNullable();
    table.decimal('price').notNullable();
    table.string('description').notNullable();
    table.string('photo').nullable();  /// <-- aprender como faz upload de imagem
    table.string('weight').notNullable();
    table.string('provider').notNullable();
    table.integer('amount').notNullable();


    //relacionamento
    table.integer('company_id').notNullable();
    table.foreign('company_id').references('id').inTable('company');
  })
};

exports.down = function(knex) {
  
};
//