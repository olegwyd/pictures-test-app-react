export const fetchImages = () => (dispatch) => {
  fetch('https://boiling-refuge-66454.herokuapp.com/images')
    .then((response) => response.json())
    .then((response) => dispatch(getImages(response)));
};

export const getImages = (images) => ({
  type: 'GET_IMAGES',
  payload: images,
});
