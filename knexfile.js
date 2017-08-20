module.exports = {
  
  development: {
    client: 'pg',
    connection: 'postgres://localhost/eka_dev',
  },
  
  test: {
    client: 'pg',
    connection: 'postgres://localhost/eka_test'
  },
  
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
  }
};