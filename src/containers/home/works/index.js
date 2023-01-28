import styles from "./works.module.css";
import Image from "next/image";
import { useRef } from "react";
import Arrow from "../../../assets/icons/black-down-arrow.svg"
import classNames from "classnames";
import React from "react";
import ViewArchive from "../../../components/view-archive";

const Works = () => {
    const worksSection = useRef(null);
    const handleClick = (ref) => {
      window.scrollTo({
        top: ref.current.offsetTop,
        behavior: 'smooth'
      })
    }
    return (
        <section>
            <div className="justify-center flex mt-2 md:mt-8">
                <Image src={Arrow} alt="scroll to works section" onClick={() => handleClick(worksSection)} className="cursor-pointer"/>
            </div>
            <div ref={worksSection} className="flex w-full justify-between text-3xl uppercase pt-6 md:pt-8 mt-4 pb-6 font-medium">
                <h2>&#92;&#92;</h2>
                <h2>some of my works</h2>
                <h2>&#92;&#92;</h2>
            </div>
            <p className={classNames(styles.slider, "w-full h-96 bg-light-black rounded-large")}></p>
            <ViewArchive />
        </section>
    )
}

export default Works;