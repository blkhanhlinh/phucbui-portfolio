import styles from "./contact.module.css";
import Image from "next/image";
import classNames from "classnames";
import Taptap from "../../../assets/images/tap-tap.svg";
import Link from "next/link";

const Contact = () => {
    return (
        <section className="h-screen pt-28">
            <h1 className="text-lg md:text-2xl font-bold uppercase pb-20">Contact me</h1>
            <div className="flex flex-row justify-between">
                <div className="grid grid-cols-2 h-fit bg-white justify-self-center infor">
                    <div className="col-span-2 text-xl text-black py-6 px-8">
                        <h3 className="font-bold">Phuc Bui</h3>
                        <p className="font-normal"><span className="text-gray">&#62; Based in </span>Ho Chi Minh city, Vietnam</p>
                        <p className="font-normal"><span className="text-gray">&#62; Contact me: </span><a  href="mailto:fubbuj@gmail.com" className="link-to-mail">fubbuj@gmail.com</a></p>
                    </div>
                    <div className="w-full h-[2px] bg-black col-span-2"></div>
                    <div className="social-link rounded-bl-default border-r-black border-r-2">
                        <Link href="https://instagram.com/fubbuj">Instagram</Link>
                    </div>
                    <div className="social-link rounded-br-default">
                        <Link href="https://fb.com/fubbuj">Facebook</Link>
                    </div>
                </div>
                <div>
                    <Image src={Taptap} alt="Phuc Bui is tapping to contact with client" width={500} height={500}/>
                </div>
            </div>
        </section>
    )
}

export default Contact;