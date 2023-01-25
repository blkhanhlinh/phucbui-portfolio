import classNames from "classnames";
import styles from "./introduction.module.css";
import Image from "next/image";
import Avatar from "../../../assets/images/self-illustration.svg";
import Illustration from "../../../assets/images/self-illustration1.svg";

const Introduction = () => {
    return (
        <section className={classNames(styles.section, "py-8 md:py-16")}>
            <div className="flex justify-between">
                <p className="font-medium text-6xl w-8/12 leading-tight">Xin chào,
                    <br />I&#39;m Phuc Bui a.ka fubbuj. I&#39;m currently a senior graphic design student at Van Lang University, Vietnam.
                </p>
                <Image src={Avatar} alt="an illustration of me"/>
            </div>
            <div className={classNames(styles.overlap, styles.detail, "bg-light-black text-white")}>
                <div className={classNames(styles.image, "pt-20 px-9 sticky -z-10")}>
                    <Image src={Illustration} width={662} height={628} alt="an illustration of me"/>
                </div>
                <div className="text-right text-3xl leading-snug w-8/12 flex right-0 absolute z-10 px-16 py-32">
                    <p>I&#39;ve always wanted to create visual and graphic content, and becoming a full-time graphic designer is my career goal. In order to grow better at what I do, I&#39;m always trying to broaden my knowledge and skills by self-learning and learning from other people.</p>
                </div>
            </div>
        </section>
    )
}

export default Introduction;