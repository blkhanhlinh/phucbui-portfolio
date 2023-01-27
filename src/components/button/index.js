import React from 'react';
import PropTypes from 'prop-types';
import styles from './button.module.css';

const Button = ({
  onClick,
  children,
}) => {
  return (
    <button
      type="button"
      className={styles.button}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  pill: PropTypes.bool,
  leftIcon: PropTypes.element,
  rightIcon: PropTypes.element,
  onClick: PropTypes.func
};

export default Button;