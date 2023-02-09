import s from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ imageItem, onItemClick }) => {
  const onImageClick = () => {
    onItemClick(imageItem);
  };

  return (
    <li className={s.galleryItem} onClick={onImageClick}>
      <img
        src={imageItem.webformatURL}
        alt={imageItem.tags}
        className={s.imageGalleryItem}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string,
  tags: PropTypes.string,
  onItemClick: PropTypes.func,
};

export default ImageGalleryItem;
