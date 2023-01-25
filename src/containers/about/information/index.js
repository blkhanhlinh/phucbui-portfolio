import classNames from "classnames";
import React from "react";
import styles from "./information.module.css";
const Information = () => {
    return (
        <section>
            <div className={classNames(styles.para, "grid grid-cols-2 -top-6 gap-x-40 gap-y-14 pb-24")}>
                <div>
                    <h1 className="text-4xl uppercase font-bold">&#92;&#92; education</h1>
                    <p className="text-2xl">- Currently a senior graphic design student at Van Lang University.</p>
                </div>
                <div>
                    <h1 className="text-4xl uppercase font-bold">&#92;&#92; looking for</h1>
                    <p className="text-2xl">- A job as a graphic designer in an agency or company.</p>
                    <p className="text-2xl">- Freelance jobs.</p>
                </div>
                <div className={classNames(styles.largetext)}>
                    <p className="font-bold">&#92;&#92; Phuc Bui <span className="font-light text-3xl text-neutral-gray">a.k.a @fubbuj</span></p>
                    <p>Ho Chi Minh city, Vietnam</p>
                    <div className={classNames(styles.links, "flex text-gray text-3xl font-medium")}>
                        <a href="https://fb.com/fubbuj" className="mr-12">Facebook</a>
                        <a href="https://instagram.com/fubbuj" className="ml-12">Instagram</a>
                    </div>
                </div>
                <div className={classNames(styles.mail, "text-darker-white -z-10 p-10 relative")}>
                    <p className={(classNames(styles.largetext))}>&#62; Contact me:</p>
                    <a className="text-6xl" href="mailto:fubbuj@gmail.com">fubbuj@gmail.com</a>
                </div>
            </div>
        </section>
    )
}
export default Information;