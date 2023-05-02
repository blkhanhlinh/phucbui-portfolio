import classNames from "classnames";
import styles from "./introduction.module.css";
import Image from "next/image";
import TaptapAbout from "../../../assets/images/tap-tap-about.svg"
import HiAbout from "../../../assets/images/hi-about.svg"

const Introduction = () => {
    return (
        <section className={classNames(styles.section, "py-8 md:py-20")}>
            <div className="flex justify-between">
                <p className="font-medium text-3xl w-8/12 leading-tight">Xin chào,
                    <br />I&#39;m Phuc Bui a.ka fubbuj. I&#39;m currently a senior graphic design student at Van Lang University, Vietnam.
                </p>
                <Image src={HiAbout} alt="an illustration of me"/>
            </div>
            <div className={classNames(styles.overlap, styles.detail, "bg-light-black text-white")}>
                <div className="pt-20 px-9 sticky -z-10">
                    <Image src={TaptapAbout} width={662} height={628} alt="an illustration of me"/>
                </div>
                <div className="text-right text-lg leading-snug w-8/12 flex right-0 absolute z-10 px-16 py-32">
                    <p>I'm passionate about creating engaging visual and graphic content, and becoming a full-time graphic designer is my career goal. I'm constantly seeking out opportunities to expand my knowledge and skills. It's my way of staying sharp and engaged.</p>
                </div>
            </div>
        </section>
    )
}

export default Introduction;