import React from 'react';
import './Modal.css';

function Modal({handelcloseModal,msg}) {
  return (    
    <div className='ModalBackground' onClick={()=>handelcloseModal()}>
        <div className='ModalContainer'>            
           <div className='ModalHeader'>titre</div>
           <div className='ModalBody'>{msg}</div>
           <div className='ModalFooter'>footer</div>           
        </div>     
    </div>  
  
  );
}

export default Modal;
