'use strict';

const fetch      = require('node-fetch');
const cheerio    = require('cheerio');
const baseURL    = require('./url').base;
const categories = require('./category');

/**
 *
 */
function devchat() {
}

// [TODO] implement pagenation
/**
 * getPodCasts
 */
function getPodCasts(c) {
  const category = categories[c];

  if (!category) throw new Error('The category is invalid.');

  return fetch(`${baseURL}${category.path}`)
    .then((res) => res.text())
    .then((body) => {
      const $ = cheerio.load(body);

      const episodes = $('.episode-group__item').toArray();

      return episodes.map((e) => {
        const root = $(e);
        const path =
          root.find('.linked-episode__link').attr('href').split('/').slice(-1)[0];
        const episode = root.find('> .episode');

        const num   = episode.find('> .episode__number').text().trim();
        const body  = episode.find('> .episode__body');
        const title = body.find('> h5').text().trim();

        const compact = body.find('> .compact').children(); // Length is 2.

        const [
          publishedDate,
          duration
        ] = compact.eq(0).find('dd').map(function() {
                return $(this).text();
              }).get();

        const panel = []; // [TODO]

        return {
          num,
          path,
          title,
          panel,
          duration,
          publishedDate
        };
      });
    });
}

/**
 * getPodCast
 */
function getPodCast(c, title) {
  const category = categories[c];

  if (!category) throw new Error('The category is invalid.');
  if (!title) throw new Error('The title is invalid.');

  const uri = `${baseURL}${category.path}/${title}`;

  return fetch(uri)
    .then((res) => res.text())
    .then((res) => {
      const $ = cheerio.load(res);

      const src = $('audio > source').attr('src');

      const episode = $('.episode');

      const num   = episode.find('> .episode__number').text().trim();
      const body  = episode.find('> .episode__body');
      const title = body.find('> h5').text().trim();

      const compact = body.find('> .compact').children(); // Length is 2.

      const [
        publishedDate,
        duration
      ] = compact.eq(0).find('dd').map(function() {
              return $(this).text();
            }).get();

      const panel = []; // [TODO]
      const downloadLink = ''; // [TODO]

      return {
        src,
        uri,
        num,
        title,
        panel,
        duration,
        downloadLink,
        publishedDate
      };
    });
}

/**
 * getCategories
 */
function getCategories() {
  return categories;
}

module.exports = {
  devchat,
  getPodCast,
  getPodCasts,
  getCategories
};
