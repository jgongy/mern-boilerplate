"use strict"

import express = require('express');
import mongoose = require('mongoose');
import path = require('path');

const app = express();
app.use(express.static(path.join(__dirname, 'dist')));

import { swaggerRouter } from './endpoints/swagger/swagger';
app.use('/swagger', swaggerRouter );

import { testRouter } from './endpoints/test/test';
app.use('/test', testRouter);

async function initServer() {
  const MONGODB_NAME = 'boilerplate';
  await mongoose.connect('mongodb://127.0.0.1:27017/' + MONGODB_NAME);
  console.log('Mongoose successfully connected to MongoDB.');

  const PORT_NUM = 8080;
  app.listen(PORT_NUM, function() {
    console.log('Listening at http://127.0.0.1:' + PORT_NUM
                + ' exporting the directory ' + __dirname + '.');
  });
}
initServer();
