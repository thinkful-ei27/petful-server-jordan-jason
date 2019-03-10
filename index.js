'use strict';

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const catQueue = require('./db/catQueue');
const dogQueue = require('./db/dogQueue');

const { PORT, CLIENT_ORIGIN } = require('./config');
const { dbConnect } = require('./db-mongoose');
// const {dbConnect} = require('./db-knex');

const app = express();

app.use(
  morgan(process.env.NODE_ENV === 'production' ? 'common' : 'dev', {
    skip: (req, res) => process.env.NODE_ENV === 'test'
  })
);

app.use(cors({
  origin: CLIENT_ORIGIN
}));

app.get('/api/cat', (req, res, next) => {
  const firstCat = catQueue.peek();
  res.json(firstCat).status(200)
});

app.get('/api/dog', (req, res, next) => {
  const firstDog = dogQueue.peek();
  res.json(firstDog).status(200)
});

app.delete('/api/cat', (req, res, next) => {
  Promise.all([
    catQueue.dequeue(),
    res.sendStatus(204)
  ])
});

app.delete('/api/dog', (req, res, next) => {
  Promise.all([
    dogQueue.dequeue(),
    res.sendStatus(204)
  ])
});

function runServer(port = PORT) {
  const server = app
    .listen(port, () => {
      console.info(`App listening on port ${server.address().port}`);
    })
    .on('error', err => {
      console.error('Express failed to start');
      console.error(err);
    });
}

if (require.main === module) {
  dbConnect();
  runServer();
}

module.exports = { app };
