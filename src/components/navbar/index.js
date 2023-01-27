import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import Hamburger from "../../assets/icons/hamburger.svg"
import Button from "../button";
import styles from "./navbar.module.css";

const Navbar = () => {
  const route = useRouter();
  const [openMenu, setOpenMenu] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    setOpenMenu(true);
  }, []);

  return (
    <header className="bg-transparent top-0 right-0 left-0 z-10 max-md:py-7 w-full text-sm items-center justify-between">
      {/* mobile */}
      <div
        tabIndex={-1}
        ref={menuRef}
        className={classNames(styles.menuContainer, "bg-transparent", {
          [styles.open]: openMenu,
        })}
        onBlur={(e) => {
          if (e.relatedTarget?.id != "hamburger") {
            //setMenuOpen(false);
          }
        }}
      >
        <ul className={classNames(styles.list, styles.collaspse, "hidden md:flex")}>
          <li
            className={classNames(styles.listItem, {
              [styles.active]: route.pathname === "/about",
            })}
          >
            <Link href="/about">
              <Button
                className={`${route.pathname === "/about" ? "button-hover" : ""
                  }`}
              >
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
              <Button
                className={`${route.pathname === "/archive" ? "button-hover" : ""
                  }`}
              >
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
          tabIndex={-1}
          id="hamburger"
          onClick={() => {
            setOpenMenu((c) => {
              if (c == false) menuRef.current?.focus();
              return !c;
            })
          }}
          className={classNames(styles.hamburger, "cursor-pointer")}
        >
          <Image
            src={Hamburger}
            alt="hamburger"
          />
        </div>
      </div>
    </header>
  );
};
export default Navbar;