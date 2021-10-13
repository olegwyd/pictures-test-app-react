export const fetchImageData = (id) => (dispatch) => {
  fetch(`https://boiling-refuge-66454.herokuapp.com/images/${id}`)
    .then((response) => response.json())
    .then((response) => dispatch(getImageData(response)));
};

export const getImageData = (image) => ({
  type: 'GET_IMAGE_DATA',
  payload: image,
});
