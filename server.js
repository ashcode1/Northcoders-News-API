/* eslint-disable no-console */
if (!process.env.NODE_ENV) process.env.NODE_ENV = 'dev';
if (process.env.NODE_ENV !== 'production') 
require('dotenv').config({
  path: `./.${process.env.NODE_ENV}.env`
});

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
mongoose.Promise = Promise;

const app = express();
const router = require('./routes/api');

mongoose.connect(process.env.DB_URI, {useMongoClient: true})
  .then(() => console.log(`successfully connected to ${process.env.NODE_ENV} database`))
  .catch(err => console.log('connection to MongoDB failed', err));

app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.json());
app.use('/api', router);

module.exports = app;