const initialState = {
  images: [],
  activeImageData: [],
  modalActive: false,
};

const imagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_IMAGES':
      return {
        ...state,
        images: action.payload,
      };
    case 'GET_IMAGE_DATA':
      return {
        ...state,
        activeImageData: action.payload,
        modalActive: true,
      };
    case 'CLOSE_MODAL':
      return {
        ...state,
        modalActive: false,
      };
    default:
      return state;
  }
};

export default imagesReducer;
