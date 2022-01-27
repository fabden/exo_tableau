import './TopFive.css';
import React from 'react';
import getUniqueValeur from '../../tools/getUniqueVal';

function TopFive({ handelOpenModal, datas }) {
  // fonction top 5 film
  const top5Film = (data) => {
    const triFromDif = data.sort((a, b) => (b.nb_diffusion - a.nb_diffusion)).slice(0, 5).map((e) => (e.nom));
    return triFromDif;
  };

  // fonction top 5  film meilleur ratio

  const top5MeilleurRatio = (data) => {
    const calRatio = data.map((e) => {
      const cRatio = e.nb_premiere_partie / e.nb_diffusion;
      return {
        ...e, ratio: cRatio,
      };
    }).sort((a, b) => (b.ratio - a.ratio)).slice(0, 5).map((e) => (e.nom));

    return calRatio;
  };

  // fonction top 5 des realisateurs avec la meilleur moyenne de diffusion

  const top5Realisateur = (data) => {
    const uniqueUser = data.map((item) => {
      const diviseItem = item.realisateur.split('/');
      return diviseItem;
    }).flat().filter(getUniqueValeur);

    const addMoyendifusionRealisateur = uniqueUser.map((user) => {
      const recupRealisaeurPM = data.filter((item) => item.realisateur.includes(user));
      const AdditionMoyenneDiffusion = recupRealisaeurPM.reduce((a, b) => (a + b.moyenne_diffusion_par_an), 0);
      return {
        realisateur: user,
        additionMoyenne: AdditionMoyenneDiffusion,
      };
    });

    const moyennefilmRealisateur = addMoyendifusionRealisateur.map((e) => {
      const moyenne = e.additionMoyenne / datas.length;
      return {
        realisateur: e.realisateur,
        moyenne,
      };
    });

    const top5realisateurs = moyennefilmRealisateur.sort((a, b) => (b.moyenne - a.moyenne)).slice(0, 5).map((e) => (e.realisateur));

    return top5realisateurs;
  };

  return (

    <div className="root">
      <div className="item1">
        textx descrition
      </div>
      <div className="item2">
        <button onClick={() => handelOpenModal(top5Film(datas))}>top 5 film</button>
      </div>
      <div className="item3">
        <button onClick={() => handelOpenModal(top5Realisateur(datas))}>top 5 realisateur</button>
      </div>
      <div className="item4">
        <button onClick={() => handelOpenModal(top5MeilleurRatio(datas))}>top 5 pays</button>
      </div>
    </div>

  );
}

export default TopFive;
