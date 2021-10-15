import React from 'react';

import './Form.css';

function Form() {
  return (
    <>
      <form action="submit">
        <input type="text" className="input" placeholder="Ваше имя" />
        <input type="text" className="input" placeholder="Ваш комментарий" />
        <button onClick={(e) => e.preventDefault()}>
          Оставить комментарий
        </button>
      </form>
    </>
  );
}

export default Form;
