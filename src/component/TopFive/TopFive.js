import './TopFive.css'; 
import React from 'react';

function TopFive() {

  const handelclick =()=>{
    alert('dfdfdfdfdf')
  }

  return (

    <div className='root'>
      <div className='item1'>
        textx descrition
      </div>
      <div className='item2'>
        <button onClick={handelclick}>top 5 film</button>
      </div>
      <div className='item3'>
      <button>top 5 realisateur</button>
      </div>
      <div className='item4'>
      <button>top 5 pays</button>
      </div>
    </div>

  );
}

export default TopFive;
