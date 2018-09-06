const getImagesFromLocalStorage = () => JSON.parse(localStorage.getItem('images'));

export const addImgLinkToLocalStorage = (link) => {
  const imageObj = {
    id: (new Date()).getTime(),
    link
  };
  const currentImages = getImagesFromLocalStorage();
  const imagesToSave = (currentImages || []).concat(imageObj);
  localStorage.setItem('images', JSON.stringify(imagesToSave));
};

export const deleteImageFromLocalStorage = (image) => {
  const currentImages = getImagesFromLocalStorage();
  const imagesWithoutDeletedOne = currentImages.filter(img => img.id !== image.id);
  localStorage.setItem('images', JSON.stringify(imagesWithoutDeletedOne))
};
