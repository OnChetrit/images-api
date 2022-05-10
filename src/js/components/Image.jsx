import { ReactComponent as Comment } from '../../assets/imgs/comment.svg';
import { ReactComponent as Like } from '../../assets/imgs/like.svg';
import Skeleton from 'react-loading-skeleton';
import { useDispatch } from 'react-redux';
import { setImage } from '../store/actions';
import 'react-loading-skeleton/dist/skeleton.css';
import '../../assets/styles/components/Image.scss';
import { ImageLoad } from './ImageLoad';

export const Image = ({ image }) => {
  const dispatch = useDispatch();

  return (
    <div className="image" onClick={() => dispatch(setImage(image, true))}>
      <ImageLoad src={image.webformatURL} />
      <span class="image-overlay">
        <span class="image-likes">
          <Comment />
          {image.comments}
        </span>
        <span class="image-comments">
          <Like />
          {image.likes}
        </span>
      </span>
    </div>
  );
};
