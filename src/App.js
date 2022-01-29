/* eslint-disable react/jsx-filename-extension */
import './App.css';
import React, { useEffect, useState } from 'react';
import fichierDatas from './datas/movies.json';
import TopFive from './component/TopFive/TopFive';
import Modal from './component/Modal/Modal';
import Tableau from './component/Tableau/Tableau';
import nettygeData from './outils/nettoyageData';

function App() {
  // state datas

  const [datasAPI, setDatasAPI] = useState([]);

  // simulation import datas dans state via useeffect

  useEffect(() => {
    setDatasAPI(nettygeData(fichierDatas));
  }, []);

  // state pour modal

  const [openModal, setOpenModal] = useState(false);
  const [modalText, setModalText] = useState('');
  const [category, setCategory] = useState('');

  const handelModal = (modalText1, vallcategory) => {
    setOpenModal(!openModal);
    setModalText(modalText1);
    setCategory(vallcategory);
  };

  return (
    <div className="App">
      {openModal && <Modal handelcloseModal={handelModal} msg={modalText} category={category} />}
      <TopFive handelOpenModal={handelModal} datas={datasAPI} />
      <Tableau datas={datasAPI} />

    </div>
  );
}

export default App;
