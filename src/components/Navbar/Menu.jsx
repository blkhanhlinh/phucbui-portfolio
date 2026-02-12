import HamburgerHover from '@/assets/icons/hamburger-hover.svg'

import classNames from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import styles from './navbar.module.scss'

const Menu = ({ menuItems, setIsMenuOpen, menuRef }) => {
  return (
    <div className='absolute top-0 -left-6 w-screen transition-transform duration-300 ease-in-out filter md:hidden'>
      <div className={classNames(styles.menuContainer, 'bg-black px-6')}>
        <div className='flex justify-between pt-7 items-center'>
          <Link
            href='/'
            onClick={setIsMenuOpen}
            className='cursor-pointer font-pixel text-2xs !tracking-narrow font-bold text-white-gray'
          >
            @fubbuj
          </Link>
          <button onClick={setIsMenuOpen} className={styles.hamburger}>
            <Image id='hamburger' src={HamburgerHover} alt='hamburger' />
          </button>
        </div>
        <div className='flex flex-col pb-10 justify-between h-full flex-1'>
          <ul className={styles.menuItems} ref={menuRef}>
            {menuItems?.map((item) => {
              const { id, name, path } = item
              return (
                <li key={id} className='text-2xl font-light block'>
                  <Link className='py-1' href={path} onClick={setIsMenuOpen}>
                    <button className={styles.menuItemButton}>{name}</button>
                  </Link>
                </li>
              )
            })}
          </ul>
          <div className={classNames(styles.menuFooter, 'font-medium')}>
            <div className='flex flex-col gap-3'>
              <div className='flex items-center gap-2 justify-end text-xs'>
                <p className='text-[#303030]'>@fubbuj</p>
                <p className='text-white'>Phuc Bui</p>
              </div>
              <Link
                href='mailto:fubbuj@gmail.com'
                className='underline-offset-[6px] underline pb-1 text-sm'
              >
                dphuc.b12@gmail.com
              </Link>
            </div>
            <p className='text-sm'>Ho Chi Minh City, Vietnam</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu
