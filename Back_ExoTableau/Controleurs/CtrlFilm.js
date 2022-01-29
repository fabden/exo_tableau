const datas = require('./datas/movies.json');

///
// consultation film
///

exports.recupTousFilms = (req, res) => {
  res.status(200).json(datas);
};
