import ViewArchiveButton from '@/assets/images/view-archive.svg'
import classNames from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import styles from './viewarchive.module.scss'

const ViewArchive = () => {
  return (
    <Link href='/archive' className={classNames(styles.viewButton, '!tracking-narrow')}>
      <Image src={ViewArchiveButton} alt='view archive' />
    </Link>
  )
}

export default ViewArchive
