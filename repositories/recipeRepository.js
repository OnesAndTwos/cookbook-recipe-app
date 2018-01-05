const recipes = require('./data/recipes');

const Fuse = require('fuse.js');

var searchOptions = {
  shouldSort: true,
  threshold: 0.6,
  location: 0,
  distance: 100,
  maxPatternLength: 32,
  minMatchCharLength: 1,
  keys: [
    "title",
    "author.firstName"
  ]
};

var fuse = new Fuse(recipes, searchOptions);

const normalizeImage = thing => {
  thing.image = thing.image || "https://ichef.bbci.co.uk/images/ic/640x360/p0476l29.jpg";
  return thing;
};

module.exports = {

  search: function(search) {
    return fuse.search(search).map(normalizeImage);
  },
  get: function(id) {
    return recipes.find(r => r.id === id);
  }

};