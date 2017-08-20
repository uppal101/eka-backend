const express= require('express');
const PORT = process.env.PORT || 3000;
const app = express();
const path = require('path');
const usersRoute = require('./routes/users');

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

app.use(express.static(path.join(__dirname, 'build')));

app.use('/api', usersRoute);

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});

module.exports = app;