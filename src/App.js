import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Actions } from "./js/components/Actions";
import { ImageList } from "./js/components/ImageList";
import { Modal } from "./js/components/Modal";
import { setImage, setImages } from "./js/store/actions";
import { ImagePreview } from "./js/pages/ImagePreview";
import "./assets/styles/Base.scss";

function App() {
  const page = useSelector((state) => state.page);
  const catagory = useSelector((state) => state.catagory);
  const showModal = useSelector((state) => state.showModal);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setImages(page, catagory));
  }, [catagory, page]);

  return (
    <div
      className="App"
      onClick={() => showModal && dispatch(setImage(null, false))}
    >
      <Actions />
      <ImageList />
      {showModal && (
        <Modal>
          <ImagePreview />
        </Modal>
      )}
    </div>
  );
}

export default App;
