import Image from "next/image";
import styles from "./introduction.module.css";
import Avatar from "../../../assets/images/home-illustration.svg";
import Name from "../../../assets/images/name.svg";
import classNames from "classnames";

const Introduction = () => {
  return (
    <section id="intro">
      <div className={classNames(styles.intro, "flex flex-col md:flex-row-reverse md:justify-between md:items-center gap-4 pt-16 md:pt-0")}>
        <div className={classNames(styles.ava)}>
          <Image src={Avatar} alt="self-illustration" className="h-44 w-auto sm:h-64 md:h-[420px] float-right"/>
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-5">
            <h2 className="text-2xl md:text-3xl text-dark-gray md:mb-6">
              Xin chào, I am
            </h2>
            <Image src={Name} alt="fubbuj" className={classNames(styles.name)}/>
            <h1 className="text-[22px] md:text-5xl text-light-gray text-right">
              a.k.a @fubbuj
            </h1>
          </div>
        <div className="flex self-end">
          <p className="text-base md:text-2xl text-right text-dark-gray md:w-[530px]">I'm currently a <strong>senior graphic design student</strong> at Van Lang University, Vietnam.</p>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
