'use strict';

const fetch      = require('node-fetch');
const cheerio    = require('cheerio');
const baseURL    = require('./url').base;
const categories = require('./category');

function devchat() {
}

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

module.exports = {
  getPodCasts
};
