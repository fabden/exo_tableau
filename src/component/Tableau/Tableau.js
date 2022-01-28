import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import getUniqueValeur from '../../outils/getUniqueVal';
import recherchefiltre from '../../outils/recherchefiltre';
import './Tableau.css';

function Tableau({ datas }) {
  // state input recherche nom films

  const [inputSearchFilms, setinputSearchFilms] = useState('');

  // state input recherhe realisateurs

  const [inputSearchRealisateur, setInputSearchRealisateur] = useState('');

  // state input recherhe nationalite

  const [inputsearchnationalite, setInputSearchNationalite] = useState('');

  // je recupere les donnees filtré en fonction des criteres

  const dataFiltered = recherchefiltre(
    inputSearchFilms,
    inputSearchRealisateur,
    inputsearchnationalite,
    datas,
  );

  return (

    <table>
      <thead>
        <tr>
          <th className="td_20">Nom du film</th>
          <th className="td_20">Réalisateur</th>
          <th>Année de production</th>
          <th>Nationalité </th>
          <th>Dernière diffusion</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="centerelement">
            <input
              autoComplete="off"
              className="inputTable"
              type="text"
              id="search_film"
              placeholder="Recherche film"
              name="search_film"
              value={inputSearchFilms}
              onChange={(e) => (setinputSearchFilms(e.target.value))}
            />
          </td>
          <td className="centerelement">
            <input
              autoComplete="off"
              className="inputTable"
              type="text"
              id="search_realisateur"
              placeholder="Recherche realisateur"
              name="search_realisateur"
              value={inputSearchRealisateur}
              onChange={(e) => (setInputSearchRealisateur(e.target.value))}
            />
          </td>
          <td>{' '}</td>
          <td className="centerelement">
            <select className="inputTable" name="nationalite" id="nationalite-select" value={inputsearchnationalite} onChange={(e) => setInputSearchNationalite(e.target.value)}>
              <option value="">--choisi une nationalié--</option>
              {/* fonction pour recuper les valeurs unique des nationalité */ }
              {dataFiltered.map((item) => item.nationalite)
                .filter(getUniqueValeur)
                .map((item) => (<option key={uuidv4()} value={item}>{item}</option>))}
            </select>
          </td>
          <td className="centerelement">

            {' '}
          </td>
        </tr>

        {dataFiltered.map((item) => (
          <tr key={uuidv4()}>
            <td className="td_20">{item.nom}</td>
            <td className="td_20">{item.realisateur}</td>
            <td className="centerelement">{item.annee_production}</td>
            <td className="centerelement">{item.nationalite}</td>
            <td className="centerelement">{item.derniere_diffusion}</td>
          </tr>
        ))}

      </tbody>
    </table>

  );
}

export default Tableau;

Tableau.propTypes = {
  datas: PropTypes.arrayOf(PropTypes.object).isRequired,
};
