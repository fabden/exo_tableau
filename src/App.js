/* eslint-disable react/jsx-filename-extension */
import './App.css';
import React, { useEffect, useState } from 'react';
import fichierDatas from './datas/movies.json';

import TopFive from './component/TopFive/TopFive';
import Modal from '../src/component/Modal/Modal'
import Tableau from './component/Tableau/Tableau';

function App() {

//state datas

const [datasAPI, setDatasAPI] = useState([])



//simulation import datas dans state via useeffect

useEffect(() => {
  setDatasAPI(fichierDatas);
 },[]);


  return (
    <div className="App">
     {false && <Modal></Modal>} 
      <TopFive></TopFive>
      <Tableau datas={datasAPI}></Tableau>
      
    </div>
  );
}

export default App;
