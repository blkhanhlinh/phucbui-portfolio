import classNames from 'classnames'
import React from 'react'
import styles from './under-construction.module.scss'

const UnderConstruction = () => {
  return <div className={classNames(styles.image, 'fixed scale-110 -z-50')}></div>
}
export default UnderConstruction
