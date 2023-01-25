import React from 'react';
import PropTypes from 'prop-types';
import styles from './button.module.css';

const Button = ({
  onClick,
  children,
  leftIcon,
  rightIcon
}) => {
  return (
    <button
      type="button"
      className={styles.button}
      onClick={onClick}
    >
      {leftIcon && <span className={styles.icon}>{leftIcon}</span>}
      {children}
      {rightIcon && <span className={styles.icon}>{rightIcon}</span>}
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