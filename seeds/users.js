exports.seed = function (knex, Promise) {
  return knex('users').del()
    .then(() => knex('users').insert([
    {
      id: 1,
      username: 'sanjeet.uppal92',
      email: 'sanjeet.uppal92@gmail.com',
      hashed_password: '784A2DB6F951CCC47E486960E515548A099FC8A54CF6169BE4885F8271936E36',
      first_name: 'Sanjeet',
      last_name: 'Uppal',
      telephone: 9492928867,
      street_address: '2332 Fulton St',
      city: 'San Francisco',
      state: 'CA',
      zip: 94118
    }
  ]))
  .then(() => knex.raw('SELECT setval(\'users_id_seq\', (SELECT MAX(id) FROM users))'))
};