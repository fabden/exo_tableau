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

//state pour modal 

const [openModal, setOpenModal] = useState(false)
const [modalText, setModalText] = useState("toto")

const handelModal = (modalText)=>{
  setOpenModal(!openModal)
}


  return (
    <div className="App">
     {openModal && <Modal handelcloseModal={handelModal} msg={modalText}></Modal>} 
      <TopFive handelOpenModal={handelModal} datas={datasAPI}></TopFive>
      <Tableau datas={datasAPI} ></Tableau>
      
    </div>
  );
}

export default App;
