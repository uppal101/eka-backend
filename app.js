const express= require('express');
const PORT = process.env.PORT || 3000;
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const usersRoute = require('./routes/users');

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'build')));

app.use('/api', usersRoute);

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});

module.exports = app;