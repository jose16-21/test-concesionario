
require('dotenv').config();
const express = require('express');

const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
var favicon = require('serve-favicon');
var path = require('path');
const colors = require('colors');
app.use(cors());


if (process.env.NODE_ENV != "test") {
  app.use(morgan('dev'));
}

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
/**
 * Configuracion de swagger
 */
app.use(favicon(path.join(__dirname, 'assets/images', 'favicon.ico')))

/*var whitelist = ['localhost:4200']
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}
app.use(cors(corsOptions));*/
var routes = require('./app/routes/index');
app.use('/', routes);

app.use((req, res, net) => {
  const error = new Error('Not Found');
  error.status(404);
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

module.exports = app;