import { getImages } from "../services/images.services";

export const setImages = (page, catagory) => {
  return async (dispatch) => {
    const result = await getImages(page, catagory);
    const { images, totalImages } = result;
    dispatch({
      type: "SET_IMAGES",
      payload: { images, totalImages },
    });
  };
};

export const setImage = (image, showModal) => {
  return (dispatch) => {
    dispatch({
      type: "SET_IMAGE",
      payload: { image, showModal },
    });
  };
};

export const changePage = (page) => {
  return (dispatch, getState) => {
    const { totalImages } = getState();
    const pagesCount = Math.ceil(totalImages / 9);
    if (page < 1 || page > pagesCount) return;
    dispatch({
      type: "CHANGE_PAGE",
      page,
    });
  };
};

export const changeCatagory = (catagory) => {
  return (dispatch) => {
    dispatch({
      type: "CHANGE_CATAGORY",
      payload: { catagory, page: 1 },
    });
  };
};
