import Hamburger from '@/assets/icons/hamburger.svg'
import Button from '@/components/Button'
import classNames from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useRef, useState } from 'react'
import Menu from './Menu'
import styles from './navbar.module.scss'

export const menuItems = [
  {
    id: 1,
    name: 'archive',
    path: '/archive',
  },
  {
    id: 2,
    name: 'playground',
    path: '/playground',
  },
]

const Navbar = () => {
  const route = useRouter()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [lastScrollPos, setLastScrollPos] = useState(0)
  const [visible, setVisible] = useState(true)
  const menuRef = useRef()

  return (
    <header
      className={classNames(
        `sticky ${
          visible
            ? 'transition-transform duration-300 ease-in opacity-100'
            : 'transition-transform duration-300 ease-out opacity-0'
        } bg-transparent z-10 max-md:py-8 w-full text-sm items-center justify-between`
      )}
    >
      {isMenuOpen && (
        <Menu
          menuItems={menuItems}
          setIsMenuOpen={() => setIsMenuOpen(!isMenuOpen)}
          menuRef={menuRef}
        />
      )}
      <nav>
        <div className='bg-transparent'>
          <ul className={classNames(styles.list, 'hidden md:flex')}>
            <li
              className={classNames(styles.listItem, {
                [styles.active]: route.pathname === '/about',
              })}
            >
              <Link href='/about'>
                <Button>about</Button>
              </Link>
            </li>
            <li>
              <Link href='/'>@fubbuj</Link>
            </li>
            <li
              className={classNames(styles.listItem, {
                [styles.active]: route.pathname === '/archive',
              })}
            >
              <Link href='/archive'>
                <Button>archive</Button>
              </Link>
            </li>
          </ul>
        </div>
        <div className='md:hidden flex justify-between items-center w-full'>
          <Link href='/' className='text-2xs !tracking-narrow font-bold cursor-pointer font-pixel'>
            PHUC BUI
          </Link>
          <button
            id='hamburger'
            tabIndex={-1}
            className={styles.hamburger}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Image src={Hamburger} alt='hamburger' />
          </button>
        </div>
      </nav>
    </header>
  )
}
export default Navbar
