import classNames from 'classnames'
import React from 'react'
import styles from './expertise.module.scss'
const Expertise = () => {
  return (
    <section className='relative -top-24'>
      <div className='h-96 rounded-large bg-light-black'>
        <div className={classNames(styles.para, 'mx-28 py-16')}>
          <p className='text-light-neutral-gray text-2xl'>My area of expertise</p>
          <p className='text-darker-white text-4xl'>
            graphic design, branding, website design, print design, illustration, typography,
            photography.
          </p>
          <p className='text-light-neutral-gray text-2xl'>Self-learning skills</p>
          <p className='text-darker-white text-4xl'>3d modeling, video editing, motion graphics.</p>
        </div>
      </div>
    </section>
  )
}
export default Expertise
