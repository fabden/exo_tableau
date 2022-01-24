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
console.log(datas)
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

          {datas.map(item=> ( 
               <tr>
            <td>{item.nom}</td>
            <td>{item.realisateur}</td>
            <td>{item.annee_production}</td>
            <td>{item.nationalite}</td>
            <td>{item.derniere_diffusion}</td>
          </tr>))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
