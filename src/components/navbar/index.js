import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import Hamburger from "../../assets/icons/hamburger.svg"
import HamburgerReverse from "../../assets/icons/hamburger-hover.svg"
import Button from "../button";
import styles from "./navbar.module.css";

export const menuItems = [
  {
    id: 1,
    name: "about",
    path: "/about",
  },
  {
    id: 2,
    name: "archive",
    path: "/archive",
  },
];

export const MobileNav = ({ menuItems, openMenu, setOpenMenu }) => {
  const menuRef = useRef(null);
  const menuContainerRef = useRef(null);

  return (
    <div className={classNames(`absolute top-0 -left-5 w-screen bg-white transition-transform ${openMenu ? "-translate-y-0" : "-translate-y-full"} duration-300 ease-in-out filter md:hidden`)}>
      <div className={styles.menuContainer} ref={menuContainerRef}>
        <div className={classNames(styles.menuHeader, "w-screen flex justify-between pt-6 text-4xl font-light")}>
          <div className={classNames(styles.menuTitle, "px-5")}>
            <Link 
              href="/"className={styles.navCenter}
              onClick={() => setOpenMenu(!openMenu)}
            >
              @fubbuj
            </Link>
          </div>
          <div
            id="hamburger"
            tabIndex={-1}
            className={classNames(styles.hamburgerReverse, "cursor-pointer px-5")}
            onClick={() => setOpenMenu(!openMenu)}
          >
            <Image
              src={HamburgerReverse}
              alt="hamburger"
            />
          </div>
        </div>
        <div className="flex flex-col pb-8 ml-auto mr-5">
          <ul className={menuItems} ref={menuRef}>
            {menuItems?.map((item) => {
              const { id, name, path } = item;
              return (
                <li key={id} className="text-2xl font-light block">
                  <Link 
                    className="float-right py-1" href={path}
                    onClick={() => setOpenMenu(!openMenu)}
                  >
                    <Button>{name}</Button>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

const Navbar = () => {
  const route = useRouter();
  const [openMenu, setOpenMenu] = useState(false);
  const [lastScrollPos, setLastScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    if(currentScrollPos > lastScrollPos) {
      setVisible(false);
    } else {
      setVisible(true);
    }
    setLastScrollPos(currentScrollPos);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollPos, visible]);

  return (
    <header className={classNames(`sticky ${visible ? 'top-0 transition-transform duration-300 ease-in -translate-y-0' : '-top-0 transition-transform duration-300 ease-out -translate-y-full'} bg-transparent z-10 max-md:py-7 w-full text-sm items-center justify-between`)}>
      <MobileNav menuItems={menuItems} openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <nav>
        <div className="bg-transparent">
          <ul className={classNames(styles.list, "hidden md:flex")}>
            <li
              className={classNames(styles.listItem, {
                [styles.active]: route.pathname === "/about",
              })}
            >
              <Link href="/about">
                <Button>
                  about
                </Button>
              </Link>
            </li>
            <li>
              <Link href="/" className={styles.navCenter}>@fubbuj</Link>
            </li>
            <li
              className={classNames(styles.listItem, {
                [styles.active]: route.pathname === "/archive",
              })}
            >
              <Link href="/archive">
                <Button>
                  archive
                </Button>
              </Link>
            </li>
          </ul>
        </div>
        <div className="md:hidden flex justify-between items-center w-full">
          <div className={classNames(styles.navCenterMb, "text-sm cursor-pointer")}>
            <Link href="/">@fubbuj</Link>
          </div>
          <div
            id="hamburger"
            tabIndex={-1}
            className={classNames(styles.hamburger, "cursor-pointer")}
            onClick={() => setOpenMenu(!openMenu)}
          >
            <Image
              className="hover:opacity-0"
              src={Hamburger}
              alt="hamburger"
            />
          </div>
        </div>
      </nav>
    </header>
  );

};
export default Navbar;