import React from 'react';
import { useSelector } from 'react-redux';

import './Comments.css';

function Comments() {
  const comments = useSelector(
    (state) => state.imagesReducer.activeImageData.comments
  );

  const getDate = (mil) => {
    const d = new Date(mil);
    return d.toLocaleDateString();
  };

  return (
    <>
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
    </>
  );
}

export default Comments;
