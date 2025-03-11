import PropTypes from "prop-types";

const Button = ({ datatestid, handleLogin, isDisable, children }) => {
  return (
    <button
      type="button"
      data-testid={datatestid}
      onClick={handleLogin}
      disabled={isDisable}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  datatestid: PropTypes.string.isRequired,
  handleLogin: PropTypes.func.isRequired,
  isDisable: PropTypes.bool.isRequired,
  children: PropTypes.string.isRequired,
};
