import ImageGalleryItem from '../imageGalleryItem/ImageGalleryItem';
import s from './ImageGallery.module.css';
import PropTypes from 'prop-types';

const ImageGallery = ({ images, showModal }) => {
  const onItemClick = image => {
    showModal(image);
  };

  return (
    <ul className={s.imageGallery}>
      {images.map(image => (
        <ImageGalleryItem
          key={image.id}
          imageItem={image}
          onItemClick={onItemClick}
        />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.array,
  showModal: PropTypes.func,
};

export default ImageGallery;
