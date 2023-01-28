import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import Hamburger from "../../assets/icons/hamburger.svg"
import Button from "../button";
import styles from "./navbar.module.css";

const navItems = [
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
    <div className={classNames(`absolute top-0 left-0 w-screen bg-white transition-transform ${openMenu ? "-translate-y-0" : "-translate-y-full"} duration-300 ease-in-out filter`)}>
      <div className={styles.menuContainer} ref={menuContainerRef}>
        <ul className={menuItems} ref={menuRef}>
          {menuItems?.map((item) => {
            const { id, name, path } = item;
            return (
              <li key={id} className={styles.menuItem}>
                <Link href={path}>{name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  )
}

const Navbar = () => {
  const route = useRouter();
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <header className="bg-transparent top-0 right-0 left-0 z-10 max-md:py-7 w-full text-sm items-center justify-between">
      <nav>
        <MobileNav navItems={navItems} openMenu={openMenu} setOpenMenu={setOpenMenu} />
        <div className="bg-transparent">
          <ul className={classNames(styles.list, styles.collaspse, "hidden md:flex")}>
            <li
              className={classNames(styles.listItem, {
                [styles.active]: route.pathname === "/about",
              })}
            >
              <Link href="/about" onClick={() => setOpenMenu(!openMenu)}>
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