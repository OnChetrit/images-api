import { useSelector } from "react-redux";
import { Image } from "./Image";
import "../../assets/styles/components/ImageList.scss";

export const ImageList = () => {
  const images = useSelector((state) => state.images);
  return (
    <div className="image-list">
      {images.map((image) => {
        return <Image key={image.id} image={image} />;
      })}
    </div>
  );
};
