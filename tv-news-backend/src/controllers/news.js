'use strict';

const bodyParser = require('body-parser');
const express = require('express');

module.exports = function(options) {

  const newsRepository = options.newsRepository;
  const router = express.Router();

  router.get('/', function getAllNews(req, res, next) {
    newsRepository.getAll()
    .then(news => {
      res.status(200).json(news);
    });
  });

  router.get('/:id', function getAdById(req, res, next) {
    const id = parseInt(req.params.id, 10);
    newsRepository.findNewsById(id)
      .then(news => {
        res.status(200).json(news);
      });
  });

  router.put('/:id', function updateAd(req, res, next) {
    res.status(405).send();
  });

  router.post('/', bodyParser.json(), function createAd(req, res, next) {
    newsRepository.addNews(req.body)
      .then(news => {
        const id = advertisement.id;
        res.status(201)
          .location(id)
          .json(news);
      });
  });

  router.delete('/', function deleteAllAds(req, res, next) {
    res.status(405).send();
  });

  router.delete('/:id', function deleteAd(req, res, next) {
    res.status(405).send();
  });

  return router;
};
