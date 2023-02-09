import s from './Button.module.css';
import PropTypes from 'prop-types';

const Button = ({ loadMoreBtn }) => {
  return (
    <button type="button" className={s.button} onClick={loadMoreBtn}>
      Load more
    </button>
  );
};

Button.propTypes = {
  loadMoreBtn: PropTypes.func,
};

export default Button;
