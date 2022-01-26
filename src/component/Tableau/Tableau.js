import React, {useState } from 'react';
import getUniqueValeur from '../../tools/getUniqueVal';
import './Tableau.css';

function Tableau({datas}) {


//state input recherche nom films

const [input_search_films, setInput_search_films] = useState("")

//state input recherhe realisateurs

const [input_search_realisateur, setInput_search_realisateur] = useState("")

//state input recherhe nationalite

const [input_search_nationalite, setInput_search_nationalite] = useState("")


// fonction filtre generique pour les recherches 

const searchFilter = (film, realisateur, nationalite)=>{
    return  datas.filter((item)=>( item.nom.toUpperCase().includes(film.toUpperCase()) && item.realisateur.toUpperCase().includes(realisateur.toUpperCase()) &&  item.nationalite.toUpperCase().includes(nationalite.toUpperCase()) ))
   }
//je recupere les donnee filtré avec la constante dataFiltered
   const dataFiltered = searchFilter(input_search_films,input_search_realisateur,input_search_nationalite)
   

  return (

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
      <td className='centerelement'>
        <input type="text"   id="search_film"  placeholder="recherche Film"
            name="search_film" value={input_search_films} onChange={(e)=>(setInput_search_films(e.target.value))}>
        </input>
      </td>
      <td className='centerelement'>
        <input type="text"   id="search_realisateur"  placeholder="recherche realisateur"
            name="search_realisateur" value={input_search_realisateur} onChange={(e)=>(setInput_search_realisateur(e.target.value))}>
        </input>
      </td >
      <td> </td>
      <td className='centerelement'>
        <select name="nationalite" id="nationalite-select" value={input_search_nationalite} onChange={(e)=>setInput_search_nationalite(e.target.value)}>
          <option value="">--choisi une nationalié--</option>
          {/*fonction pour recuper les valeurs unique des nationalité */  }
            {dataFiltered.map((item)=>item.nationalite).filter(getUniqueValeur).map((item,index)=>(<option key={index} value={item}>{item}</option>))}
        </select>
      </td>
      <td className='centerelement'><button>up</button> </td>
    </tr>

    {dataFiltered.map((item,index)=> ( 
    <tr key = {index}>
      <td className='td_20'>{item.nom}</td>
      <td className='td_20'>{item.realisateur}</td>
      <td className='centerelement'>{item.annee_production}</td>
      <td className='centerelement'>{item.nationalite}</td>
      <td className='centerelement'>{item.derniere_diffusion}</td>
    </tr>))}

  </tbody>
</table>

  )}

export default Tableau;
