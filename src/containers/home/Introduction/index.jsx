import NameHover from '@/assets/images/name-hover.svg'
import Name from '@/assets/images/name.svg'
import classNames from 'classnames'
import Image from 'next/image'
import styles from './introduction.module.scss'

const Introduction = () => {
  return (
    <section id='intro'>
      <div
        className={classNames(
          styles.intro,
          'flex flex-col md:justify-between md:items-center gap-4 pt-16 md:pt-0'
        )}
      >
        <div className='flex flex-col gap-8'>
          <div className='flex flex-col gap-5'>
            <h2 className='text-base md:text-lg text-dark-gray md:mb-6'>Xin chào, I am</h2>
            <div className={classNames(styles.nameWrapper)}>
              <Image
                src={Name}
                alt='fubbuj'
                className={classNames(styles.name, styles.nameDefault)}
              />
              <Image
                src={NameHover}
                alt='fubbuj hover'
                className={classNames(styles.name, styles.nameHover)}
              />
            </div>
          </div>
          <p className='text-2xs md:text-base text-center text-dark-gray leading-tight'>
            an ordinary graphic designer, based in Vietnam.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Introduction
