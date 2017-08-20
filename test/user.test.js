'use strict';

process.env.NODE_ENV = 'test';


const assert = require('chai').assert;
const request = require('supertest');
const { suite, test } = require('mocha');
const knex = require('../knex');
const app = require('../app');



  // `before` runs once before all tests in a describe
  before((done) => {
    knex.migrate.rollback()
    .then(function(){
      return knex.migrate.latest()
    })
    .then(() => {
      done();
    })
    .catch((err) => {
      done(err);
    });
  });

  // `beforeEach` is run before each test in a describe
  beforeEach((done) => {
    knex.seed.run()
      .then(() => {
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  test('POST /users', (done) => {
    const password = 'arbitrary';

    request(app)
      .post('/users')
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .send({
        username: 'Test',
        email: 'test@gmail.com',
        password: password,
        first_name: 'Quality',
        last_name: 'Assurance',
        telephone: 4002005000,
        street_address:'1 Like ',
        city:'Breaking',
        state:'Code',
        zip:'20050'
      })
      .expect((res) => {
        delete res.body.createdAt;
        delete res.body.updatedAt;
      })
      .expect(200, {
        id: 2,
        username: 'Test',
        email: 'test@gmail.com',
        first_name: 'Quality',
        last_name: 'Assurance',
        telephone: 4002005000,
        street_address:'1 Like ',
        city:'Breaking',
        state:'Code',
        zip:'20050'
      })
      .expect('Content-Type', /json/)
      .end(done);
  });


