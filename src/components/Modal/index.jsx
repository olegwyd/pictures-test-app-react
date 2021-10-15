import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { closeModal } from '../../store/actions/closeModal';
import Form from '../Form';
import Comments from '../Comments';
import './Modal.css';

function Modal() {
  const dispatch = useDispatch();

  const activeImage = useSelector(
    (state) => state.imagesReducer.activeImageData
  );

  return (
    <div className="modal">
      <div className="modal__content">
        <div onClick={() => dispatch(closeModal())} className="close">
          X
        </div>
        <div className="image-form">
          <img
            src={activeImage.url}
            className="modal__image"
            alt={activeImage.url}
          />
          <Form />
        </div>
        <Comments />
      </div>
    </div>
  );
}

export default Modal;
