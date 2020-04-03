
exports.up = function(knex) {
  return knex.schema.createTable('company', function(table){
    table.string('id').primary();
    table.string('name').notNullable();
    table.string('cnpj').notNullable();
    table.integer('fone').notNullable();
    table.integer('whatsapp').notNullable();
    table.string('email').notNullable();
    table.string('password').notNullable();

  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('company');
};
