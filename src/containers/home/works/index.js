import styles from "./works.module.css";
import Image from "next/image";
import { useRef } from "react";
import Arrow from "../../../assets/icons/black-down-arrow.svg"
import classNames from "classnames";
import React from "react";
import ViewArchive from "../../../components/view-archive";
import Slider from "../../../components/slider";

const Works = () => {
    const worksSection = useRef(null);
    const handleClick = (ref) => {
        window.scrollTo({
            top: ref.current.offsetTop,
            behavior: 'smooth'
        })
    }
    return (
        <>
            <div className="justify-center flex mt-2 md:mt-8">
                <Image src={Arrow} alt="scroll to works section" onClick={() => handleClick(worksSection)} className="cursor-pointer" />
            </div>
            <section>
                <div className="mb-8">
                    <div ref={worksSection} className={classNames(styles.slider, "pt-16")}>
                        <Slider />
                    </div>
                    <ViewArchive />
                </div>
            </section>
        </>

    )
}

export default Works;