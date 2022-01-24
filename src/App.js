/* eslint-disable react/jsx-filename-extension */

import './App.css';
import React, { useEffect, useState } from 'react';
import fichierDatas from './datas/movies.json'

function App() {

//state datas

const [datas, setDatas] = useState([])

//state input recherche nom films

const [input_search_films, setInput_search_films] = useState("")

//state input recherhe realisateurs

const [input_search_realisateur, setInput_search_realisateur] = useState("")

//state input recherhe nationalite

const [input_search_nationalite, setInput_search_nationalite] = useState("")
console.log(input_search_nationalite)
//simulation import datas dans state via useeffect

useEffect(() => {
  setDatas(fichierDatas)
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
            <td>
              <input type="text"   id="search_film"  placeholder="recherche Film"
                  name="search_film" value={input_search_films} onChange={(e)=>(setInput_search_films(e.target.value))}>
              </input>
            </td>
            <td>
              <input type="text"   id="search_realisateur"  placeholder="recherche realisateur"
                  name="search_realisateur" value={input_search_realisateur} onChange={(e)=>(setInput_search_realisateur(e.target.value))}>
              </input>
            </td>
            <td> </td>
            <td>
              <select name="nationalite" id="nationalite-select" value={input_search_nationalite} onChange={(e)=>setInput_search_nationalite(e.target.value)}>
                <option value="">--Please choose an option--</option>
                <option value="dog">Dog</option>
                <option value="cat">Cat</option>
                <option value="hamster">Hamster</option>
                <option value="parrot">Parrot</option>
                <option value="spider">Spider</option>
                <option value="goldfish">Goldfish</option>
              </select>
            </td>
            <td> </td>
          </tr>

          {datas.map((item,index)=> ( 
          <tr key = {index}>
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
