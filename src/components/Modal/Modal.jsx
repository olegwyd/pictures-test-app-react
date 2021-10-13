import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../store/actions/closeModal';

import './Modal.css';

function Modal() {
  const dispatch = useDispatch();

  const activeImage = useSelector(
    (state) => state.imagesReducer.activeImageData
  );

  const comments = useSelector(
    (state) => state.imagesReducer.activeImageData.comments
  );

  const getDate = (mil) => {
    const d = new Date(mil);
    return d.toLocaleDateString();
  };

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
          <form action="submit">
            <input type="text" className="input" placeholder="Ваше имя" />
            <input
              type="text"
              className="input"
              placeholder="Ваш комментарий"
            />
            <button onClick={(e) => e.preventDefault()}>
              Оставить комментарий
            </button>
          </form>
        </div>

        <div className="comments">
          {comments.map((comment) => {
            return (
              <div>
                <p className="comment-date">{getDate(comment.date)}</p>
                <p className="comment-text">{comment.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Modal;
