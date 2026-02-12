import classNames from 'classnames'
import PropTypes from 'prop-types'
import styles from './button.module.scss'

const Button = ({ onClick, children, className }) => {
  return (
    <button type='button' className={classNames(styles.button, className)} onClick={onClick}>
      {children}
    </button>
  )
}

Button.propTypes = {
  pill: PropTypes.bool,
  leftIcon: PropTypes.element,
  rightIcon: PropTypes.element,
  onClick: PropTypes.func,
  className: PropTypes.string,
}

export default Button
