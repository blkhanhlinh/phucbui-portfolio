import Navbar from "../navbar";
import Footer from "../footer";
import React from 'react';
import styles from './layout.module.css';
import classNames from "classnames";

const Layout = (props) => {
  return (
    <div className="min-h-screen mx-5 md:mx-16">
        <Navbar />
        <div className={styles.container}>
          <div className={styles.main}>{props.children}</div>
        </div>
        <Footer />
    </div>
  )
}

export default Layout;