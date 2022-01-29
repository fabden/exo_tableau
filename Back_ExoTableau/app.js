// Imports
const express = require('express');
const film = require('./Controleurs/CtrlFilm');

// import midelware

const app = express();

// autorisation cors

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  next();
});

// Analyse les corps de requête entrants dans le middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/api/exofilm', film.recupTousFilms);

// export
module.exports = app;
