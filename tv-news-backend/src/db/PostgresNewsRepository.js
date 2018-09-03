'use strict';

const NewsRepository = require('./NewsRepository');

/**
 * PostgresAdvertisementRepository
 *
 * PostgresAdvertisementRepository is a PostgreSQL implementation of the
 * `AdvertisementRepository`. It has methods for the typical CRUD operations
 * that execute simple SQL queries and an `initialize` method takes creates
 * the database schema. The constructor expects a *connect* function (see
 * below).
 */
class PostgresNewsRepository extends NewsRepository {

  constructor(sequelize) {
    super();
    this._sequelize = sequelize;
  }

  /**
   * Initialize the database schema from the script in `sql/createTables.sql`.
   * @returns {Promise} resolves when schema was created successfully
   */
  initialize() {
    this._News = this._sequelize.import('./models/news.js');
    return this._sequelize.sync();
  }

  /**
   * Get all advertisements.
   * @returns {Promise} resolves to array of advertisement objects
   */
  getAll() {
    return this._News.findAll();
  }

  /**
   * Find the advertisement for the given id
   * @returns {Promise} resolves to advertisement object when found or null when not found
   */
  findNewsById(id) {
    return this._News.findById(id);
  }

  /**
   * Update the advertisement.
   * @returns {Promise} resolves to the updated advertisement object
   */
  updateNews(id, newsObj) {
    return this._News.findById(id).then(ad => ad.update({title: newsObj.title, version: newsObj.version}));
  }

  /**
   * Create the advertisement.
   * @returns {Promise} resolves to the created advertisement object
   */
  addNews(newsObj) {
    return this._News.create(newsObj);
  }

  /**
   * Delete the advertisement.
   * @returns {Promise} resolves to the number of deleted advertisements (row count)
   */
  deleteById(id) {
    return this._News.destroy({where:{id: id}});
  }

  /**
   * Delete all advertisements.
   * @returns {Promise} resolves to the number of deleted advertisements (row count)
   */
  deleteAll() {
    return this._News.destroy({where:{/*no criteria*/}});
  }
}

module.exports = PostgresNewsRepository;
