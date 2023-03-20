import Image from "next/image";
import styles from "./viewarchive.module.css";
import Link from "next/link";
import ViewArchiveButton from "../../assets/images/view-archive.svg";
import classNames from "classnames";
import React from "react";

export default function ViewArchive() {
    return (
        <>
            <div>
                <Link href="/archive" className={classNames(styles.viewButton)}>
                    <Image src={ViewArchiveButton} alt="view archive"/>  
                </Link>
            </div>
        </>
    )
}