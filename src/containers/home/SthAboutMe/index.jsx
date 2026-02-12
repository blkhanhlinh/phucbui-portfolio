import Avatar from '@/assets/images/hi-illustration.svg'
import classNames from 'classnames'
import Image from 'next/image'
import styles from './sthAboutMe.module.scss'

const SthAboutMe = () => {
  return (
    <section>
      <div className={classNames(styles.ava)}>
        <Image src={Avatar} alt='self-illustration' className='h-44 w-auto sm:h-64 md:h-[420px]' />
      </div>
    </section>
  )
}

export default SthAboutMe
