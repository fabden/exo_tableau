/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import React from 'react';
import './Modal.css';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

function Modal({ handelcloseModal, msg, category }) {
  return (
    <div
      className="ModalBackground"
      onClick={() => handelcloseModal()}
    >
      <div className="ModalContainer">
        <h2 className="ModalHeader">
          { `Le TOP 5 des  ${category}`}
        </h2>
        {msg.map((e) => (<h4 key={uuidv4()} className="ModalBody">{e}</h4>))}

      </div>
    </div>

  );
}

export default Modal;

Modal.propTypes = {
  handelcloseModal: PropTypes.func.isRequired,
  msg: PropTypes.arrayOf(PropTypes.string).isRequired,
  category: PropTypes.string.isRequired,
};
