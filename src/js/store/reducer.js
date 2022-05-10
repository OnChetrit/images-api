const initialState = {
  images: [],
  catagory: "cars",
  page: 1,
  totalImages: 0,
  selectedImage: null,
  showModal: false,
};

export const imagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_IMAGES":
      return {
        ...state,
        images: action.payload.images,
        totalImages: action.payload.totalImages,
      };
    case "SET_IMAGE":
      return {
        ...state,
        selectedImage: action.payload.image,
        showModal: action.payload.showModal,
      };
    case "CHANGE_CATAGORY":
      return {
        ...state,
        catagory: action.payload.catagory,
        page: action.payload.page,
      };
    case "CHANGE_PAGE":
      return {
        ...state,
        page: action.page,
      };
    default:
      return state;
  }
};
