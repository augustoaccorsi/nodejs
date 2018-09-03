/*eslint no-unused-vars:0*/
// disable `no-unused-vars` as this is an interface class
'use strict';

/**
 * newsRepository
 *
 * newsRepository serves as an interface class. Although JavaScript
 * doesn't have a native implementation of interfaces, you can still define a
 * class with empty methods.
 */
class NewsRepository {

  /**
   * Get all news.
   * @returns {Promise} resolves to array of news objects
   */
  getAll() { }

  /**
   * Find the news for the given id
   * @returns {Promise} resolves to news object when found or null when not found
   */
  findNewsById(id) { }

  /**
   * Update the news.
   * @returns {Promise} resolves to the updated news object
   */
  updateNews(id, newsObj) { }

  /**
   * Create the news.
   * @returns {Promise} resolves to the created news object
   */
  addNews(newsObj) { }

  /**
   * Delete the news.
   * @returns {Promise} resolves to the number of deleted newss (row count)
   */
  deleteById(id) { }

  /**
   * Delete all newss.
   * @returns {Promise} resolves to the number of deleted newss (row count)
   */
  deleteAll() { }
}

module.exports = NewsRepository;
