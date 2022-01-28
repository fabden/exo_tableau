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
        <h2 className="ModalHeader">
          Le TOP 5 des {category}
        </h2>
        {msg.map((e, index) => (<h4 key={index} className="ModalBody">{e}</h4>))}

      </div>
    </div>

  );
}

export default Modal;
