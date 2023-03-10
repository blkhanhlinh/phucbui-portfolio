import Image from "next/image";
import Link from "next/link";
import styles from "./introduction.module.css";
import Avatar from "../../../assets/images/home-illustration.svg";
import Name from "../../../assets/images/name.svg";
import Note from "../../../assets/images/anillustrationofme.svg";
import classNames from "classnames";

const Introduction = () => {
  return (
    <section>
      <div
        className={classNames(styles.introContainer, "flex flex-col md:flex-row justify-between py-8 md:py-16")}
      >
        <div>
          <h2 className="text-3xl md:text-3xl text-dark-gray mb-6 ">Xin chào, I am</h2>
          <Image src={Name} alt="fubbuj" className={classNames(styles.name)}/>
          <h1 className="text-4xl text-light-gray mb-16 mt-4 text-right">
            a.k.a @fubbuj
          </h1>
          <p className="text-xl text-dark-gray text-right">
            I&apos;m currently a <b>senior graphic design student</b>
            <br />
            at Van Lang University, Vietnam
          </p>
        </div>
        <div className={classNames(styles.flexright, "flex gap-1 items-start max-md:float-right")}>
          <Image src={Note} alt="note" className={classNames(styles.note)} />
          <Image src={Avatar} alt="self-illustration" className={classNames(styles.ava, "h-full md:w-full max-sm:w-56")} />
        </div>
      </div>
    </section>
  );
};

export default Introduction;
