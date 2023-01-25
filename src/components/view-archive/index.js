import Image from "next/image";
import styles from "./viewarchives.module.css";
import Link from "next/link"
import ViewArchiveButton from "../../assets/images/view-archive.svg";
import classNames from "classnames";
const ViewArchive = () => {
    return (
        <div className={classNames(styles.viewButton)}>
            <Link href="/archive">
                <button>
                    <Image src={ViewArchiveButton} alt="view archive" width={164} height={161} />
                </button>
            </Link>
        </div>
    )
}

export default ViewArchive;