import { combineReducers } from 'redux';

import imagesReducer from './images';

const rootReducer = combineReducers({
  imagesReducer,
});

export default rootReducer;
