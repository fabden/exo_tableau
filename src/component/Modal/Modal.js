/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import React from 'react';
import './Modal.css';

function Modal({ handelcloseModal, msg, category }) {
  return (
    <div
      className="ModalBackground"
      onClick={() => handelcloseModal()}
    >
      <div className="ModalContainer">
        <div className="ModalHeader">Le top 5 des {category}</div>
        {msg.map((e,index) => (<div key={index} className="ModalBody">{e}</div>))}
        <div className="ModalFooter">footer</div>
      </div>
    </div>

  );
}

export default Modal;
