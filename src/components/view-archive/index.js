import Image from "next/image";
import styles from "./viewarchive.module.css";
import Link from "next/link";
import ViewArchiveButton from "../../assets/images/view-archive.svg";
import classNames from "classnames";
import React from "react";

const Button = React.forwardRef(({ onClick, href }, ref) => {
    return (
        <a href={href} onClick={onClick} ref={ref} className={classNames(styles.viewButton)}>                    
            <Image src={ViewArchiveButton} alt="view archive" width={164} height={161} />
        </a>
    )
})

export default function ViewArchive() {
    return (
        <>
            <div>
                <Link href="/archive">
                    <Button />
                </Link>
            </div>
        </>
    )
}