'use strict';

const express = require('express');

module.exports = function (config) {
  const app = express();

  app.get('/', function (req, res, next) {
    res.status(200).send('get is working');
  });

  app.get('/news/:index', function (req, res, next) {
    const name = req.params.name;
    res.status(200).send(`should get news number ${index}!`);
  });

  app.use('/api/v1/news', require('./controllers/news')({
    newsRepository: config.newsRepository
  }));

  return app;
};
