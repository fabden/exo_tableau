/* eslint-disable react/jsx-filename-extension */
import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TopFive from './component/TopFive/TopFive';
import Modal from './component/Modal/Modal';
import Tableau from './component/Tableau/Tableau';
import nettoygeData from './outils/nettoyageData';

function App() {
  // state datas

  const [datasAPI, setDatasAPI] = useState([]);

  // import datas via api perso

  useEffect(() => {
    axios.get('http://localhost:8080/api/exofilm')
      .then((recupDatasApi) => {
        setDatasAPI(nettoygeData(recupDatasApi.data));
      })
      .catch(() => { console.log('L\'api ne fonctionne pas '); });
  }, []);

  // state pour modal

  const [openModal, setOpenModal] = useState(false);
  const [modalText, setModalText] = useState('');
  const [category, setCategory] = useState('');

  // fonction declenchement modal

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
