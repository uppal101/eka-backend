exports.up = (knex, Promise) => 
knex.schema.createTable('users', (table) =>{
  table.increments('id')
    .primary();
  table.string('username', 'varchar(20)')
    .notNullable();
  table.string('email', 'varchar(65)')
    .notNullable()
    .unique();
  table.string('hashed_password', 'char(60)')
    .notNullable();
  table.string('first_name', 'varchar(20)')
    .notNullable();
  table.string('last_name', 'varchar(20)')
    .notNullable();
  table.bigInteger('telephone')
    .notNullable();
  table.string('street_address', 'varchar(95)')
    .notNullable();
  table.string('city', 'varchar(20)')
    .notNullable();
  table.string('state', 'varchar(20)')
    .notNullable();
  table.integer('zip')
    .notNullable();
  table.timestamps(true, true);
});

exports.down = (knex, Promise) =>
knex.schema.dropTable('users');