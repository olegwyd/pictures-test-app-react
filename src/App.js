import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Modal from './components/Modal/Modal';
import { fetchImages } from './store/actions/images';

import { fetchImageData } from './store/actions/activeImageData';
import './App.css';

function App() {
  const modalActive = useSelector((state) => state.imagesReducer.modalActive);
  const imagesData = useSelector((state) => state.imagesReducer.images);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchImages());
  }, [dispatch]);

  return (
    <div className="App">
      <header>
        <p className="app_header">test app</p>
      </header>
      {!imagesData ? (
        <div>LOADING</div>
      ) : (
        imagesData.map((image) => {
          return (
            <img
              onClick={() => dispatch(fetchImageData(image.id))}
              src={image.url}
              key={image.url}
              className="image"
              alt={`id: ${image.id}`}
            />
          );
        })
      )}
      <div className="hr"></div>
      <p className="footer_years">© 2018-2019</p>
      <div>{modalActive ? <Modal /> : <div></div>}</div>
    </div>
  );
}

export default App;
