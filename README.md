# eka-backend

### To Get Started
1. Please fork and clone this repo.
2. `npm install` Install dependencies
3. `touch .env` Example .env file:
```
HOST= http://localhost:3000
```
4. Create the database locally. From the command line run the following commands:
`
createdb eka_dev  //For running development environment locally
createdb eka_test  //To run all of the tests
`
5. Seed the database. From the command line run the following commands:
`
knex migrate:rollback //Only if dropping the database and reseeding
knex migrate:latest
knex seed:run
`
6. `npm start` To run locally


### Testing

1. `npm test`
