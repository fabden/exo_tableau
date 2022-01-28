import './TopFive.css';
import React from 'react';

import top5Films from '../../outils/Top5Films';
import top5MeilleurRatio from '../../outils/Top5MeilleurRatio';
import top5Realisateur from '../../outils/Top5Realisateur';

function TopFive({ handelOpenModal, datas }) {
  return (
    <div className="root">
      <div className="description">
        <h1>Exercise pour BATEAM SOLUTION</h1>
      </div>
      <div className="topfive">
        <div className="topFiveTitre">
          <h2>TOP 5 </h2>
        </div>
        <div className="topFivebutton">
          <div className="item1">
            <button type="button" className="buttonTop5" onClick={() => handelOpenModal(top5Films(datas), 'films les plus diffusés')}>Films</button>
          </div>
          <div className="item2">
            <button type="button" className="buttonTop5" onClick={() => handelOpenModal(top5MeilleurRatio(datas), 'films avec le meilleur ratio')}>Films ratio</button>
          </div>
          <div className="item3">
            <button type="button" className="buttonTop5" onClick={() => handelOpenModal(top5Realisateur(datas), 'réalisateurs avec la meilleur moyenne de diffusion')}>Realisateurs</button>
          </div>
        </div>
      </div>
    </div>

  );
}
export default TopFive;
