'use strict';

const PostgresNewsRepository = require('./db/PostgresNewsRepository');

const PORT = process.env.PORT || 3000;
const servicesConfig = require('./../default-services.json');
const postgresConnect = require('./db/postgresConnector')(servicesConfig.postgresql);

const newsRepository = new PostgresNewsRepository(postgresConnect());

const app = require('./app')({
  newsRepository: newsRepository
});

newsRepository.initialize().then(function() {
  app.listen(PORT, function() {
    console.log(`Server started on ${PORT}`);
  });
}).catch(err => {
  console.log(err);
});
