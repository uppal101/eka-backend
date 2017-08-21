module.exports = {
  
  development: {
    client: 'pg',
    connection: 'postgres://localhost/eka_dev',
    migrations: {
      tableName: 'knex_migrations'
    }
  },
  
  test: {
    client: 'pg',
    connection: 'postgres://localhost/eka_test',
    migrations: {
      tableName: 'knex_migrations'
    }
  },
  
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};