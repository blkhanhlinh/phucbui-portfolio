import Contact from '@/containers/home/Contact'
import Introduction from '@/containers/home/Introduction'
import SthAboutMe from '@/containers/home/SthAboutMe'
import Works from '@/containers/home/Works'
import styles from './home.module.scss'

function HomePage() {
  return (
    <>
      <Introduction />
      <div className={styles.gradientSection}>
        <SthAboutMe />
        <Works />
        <Contact />
      </div>
    </>
  )
}

export default HomePage
