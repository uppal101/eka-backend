const express= require('express');
const PORT = process.env.PORT || 3000;
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const usersRoute = require('./routes/users');

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const whitelist = ['http://localhost:3001/signup1',  'http://localhost:3001/signup2', 'http://localhost:3001/signup3']

const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

app.post('/users', cors(corsOptions), function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for a whitelisted domain.'})
})



app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'build')));

app.use('/api', usersRoute);

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});

module.exports = app;