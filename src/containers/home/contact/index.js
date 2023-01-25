import styles from "./contact.module.css";
import Image from "next/image";
import { useRef } from "react";
import classNames from "classnames";
import Illustration1 from "../../../assets/images/self-illustration1.svg";

const Contact = () => {
    return (
        <section className="py-12">
            <div className="flex justify-between">
                <div className="flex flex-col">
                    <p className="text-4xl text-gray leading-tight mb-12">Phuc Bui <br/> &#62; Based in <span className="text-black">Ho Chi Minh city, Vietnam </span> <br/> &#62; Contact me: <span className="text-black hover:underline"><a  href="mailto:fubbuj@gmail.com">fubbuj@gmail.com</a></span> </p>
                    <div className={classNames(styles.links, "flex text-gray text-3xl font-medium")}>
                        <a href="https://fb.com/fubbuj" className="mr-12">Facebook</a>
                        <a href="https://instagram.com/fubbuj" className="ml-12">Instagram</a>
                    </div>
                </div>
                <div className="pt-20 px-12">
                    <Image src={Illustration1} alt="an illustration of me"/>
                </div>
            </div>
        </section>
    )
}

export default Contact;