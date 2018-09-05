export const addImgLinkToLocalStorage = (link) => {
  const imageObj = {
    id: (new Date()).getTime(),
    link
  };
  const currentImages = JSON.parse(localStorage.getItem('images'));
  const imagesToSave = (currentImages || []).concat(imageObj);
  localStorage.setItem('images', JSON.stringify(imagesToSave));
};
