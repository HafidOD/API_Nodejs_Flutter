// const express = require('express');
// const app = express();

const app = require('express')();

// middlewares
const morgan = require('morgan');
const cors = require('cors');

// Initializations 
app.use(morgan('dev'));
app.use(cors());

// Routes
app.use(require('./routes/usersRoutes'));

module.exports = app;