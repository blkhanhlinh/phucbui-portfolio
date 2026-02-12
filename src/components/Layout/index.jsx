import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { spaceGrotesk } from '@/pages/_app'
import styles from './layout.module.scss'

const Layout = (props) => {
  return (
    <div className={`min-h-screen px-6 md:px-16 ${spaceGrotesk.className}`}>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.main}>{props.children}</div>
      </div>
      <Footer />
    </div>
  )
}

export default Layout
