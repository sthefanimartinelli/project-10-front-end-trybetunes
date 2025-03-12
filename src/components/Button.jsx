import PropTypes from 'prop-types';

function Button({ datatestid, handleLogin, isDisable, children }) {
  return (
    <button
      type="button"
      data-testid={ datatestid }
      onClick={ handleLogin }
      disabled={ isDisable }
    >
      {children}
    </button>
  );
}

export default Button;

Button.propTypes = {
  datatestid: PropTypes.string.isRequired,
  handleLogin: PropTypes.func.isRequired,
  isDisable: PropTypes.bool.isRequired,
  children: PropTypes.string.isRequired,
};
