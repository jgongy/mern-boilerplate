"use strict"

import express = require('express');
import mongoose = require('mongoose');
import path = require('path');

import * as constants from './definitions/constants';

const app = express();
app.use(express.static(path.join(__dirname, 'dist')));

import { swaggerRouter } from './endpoints/swagger/swagger';
app.use('/swagger', swaggerRouter );

import { testRouter } from './endpoints/test/test';
app.use('/test', testRouter);

async function initServer() {
  const MONGODB_URI = process.env.MONGODB_URI
                      || 'mongodb://127.0.0.1:27017/'
                         + constants._mongoDatabaseName;
  console.log('Mongoose successfully connected to MongoDB.');

  const PORT = process.env.PORT || constants._portNum;
  app.listen(PORT, function() {
    console.log('Listening at http://127.0.0.1:' + PORT
                + ' exporting the directory ' + __dirname + '/path.');
  });
}
initServer();
