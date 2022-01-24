/* eslint-disable react/jsx-filename-extension */

import './App.css';
import React, { useEffect, useState } from 'react';
import fichierDatas from './data/movies.json'

function App() {

//state datas

const [datas, setdatas] = useState([])

//import datas dans state via useeffect

useEffect(() => {
  setdatas(fichierDatas)
 },[]);

  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>Nom du film</th>
            <th>Réalisateur</th>
            <th>Année de production</th>
            <th>Nationalité </th>
            <th>Dernière diffusion</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>The table body</td>
            <td>with two columns</td>
            <td>The table body</td>
            <td>with two columns</td>
            <td>with two columns</td>
          </tr>

        </tbody>
      </table>
    </div>
  );
}

export default App;
