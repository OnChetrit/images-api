import { useDispatch, useSelector } from 'react-redux';
import { setImage } from '../store/actions';
import { ReactComponent as Close } from '../../assets/imgs/close-round-line.svg';
import user from '../../assets/imgs/user.png';
import '../../assets/styles/pages/ImagePreview.scss';

const details = [
  'views',
  'collections',
  'downloads',
  'comments',
  'likes',
  'tags',
];

export const ImagePreview = () => {
  const image = useSelector((state) => state.selectedImage);
  const dispatch = useDispatch();

  return (
    <div className="image-preview" onClick={(e) => e.stopPropagation()}>
      <div className="close" onClick={() => dispatch(setImage(null, false))}>
        <Close />
      </div>
      <div className="selected-image-preview">
        <img src={image.largeImageURL} alt="selected-img" />
      </div>
      <div className="user">
        <img src={image.userImageURL || user} alt="user-profile" />
        <h3>{image.user}</h3>
      </div>
      <div className="details">
        {details.map((detail) => {
          return (
            <>
              <dt>{detail}</dt>
              <dd>{image[detail]}</dd>
            </>
          );
        })}
      </div>
    </div>
  );
};
