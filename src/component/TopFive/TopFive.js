import './TopFive.css'; 
import React, { useState } from 'react';

function TopFive({handelOpenModal}) {


//state statistique film 

const [statFilm, setStatFilm] = useState("")

   


  return (

    <div className='root'>
      <div className='item1'>
        textx descrition
      </div>
      <div className='item2'>
        <button onClick={()=>handelOpenModal()}>top 5 film</button>
      </div>
      <div className='item3'>      
      <button onClick={()=>handelOpenModal()}>top 5 realisateur</button>
      </div>
      <div className='item4'>
      <button onClick={()=>handelOpenModal()}>top 5 pays</button>
      </div>
    </div>

  );
}

export default TopFive;
