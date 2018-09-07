const getImagesFromLocalStorage = () => JSON.parse(localStorage.getItem('images'));

export const addImgLinkToLocalStorage = (link, state) => {
  const imageObj = {
    id: (new Date()).getTime(),
    link
  };
  const currentImages = getImagesFromLocalStorage();
  const imagesToSave = (currentImages || []).concat(imageObj);
  localStorage.setItem('images', JSON.stringify(imagesToSave));
  updateAppState(state);
};

export const deleteImageFromLocalStorage = (image) => {
  const currentImages = getImagesFromLocalStorage();
  const imagesWithoutDeletedOne = currentImages.filter(img => img.id !== image.id);
  localStorage.setItem('images', JSON.stringify(imagesWithoutDeletedOne))
};

export const getImageFromLocalStorage = (imgLink) => {
  const images = getImagesFromLocalStorage() || [];
  return images.find(img => img.link === imgLink);
};

const updateAppState = (state) => {
  state.setState({
    listOfImages: JSON.parse(localStorage.getItem('images'))
  })
};
