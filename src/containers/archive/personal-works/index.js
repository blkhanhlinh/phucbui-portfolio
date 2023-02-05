import react from "react";
import styles from "./personal-works.module.css";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import ProjectGrid from "../../../components/project-grid";

export const projects = [
    {
        id: 1,
        name: "Trust The Process",
        type: "Poster, 3d typography",
        src: "/images/trust-the-process.jpg",
    },
    {
        id: 2,
        name: "Trust The Process",
        type: "Poster, 3d typography",
        src: "/images/trust-the-process.jpg",
    },
    {
        id: 3,
        name: "Trust The Process",
        type: "Poster, 3d typography",
        src: "/images/trust-the-process.jpg",
    },
    {
        id: 4,
        name: "Trust The Process",
        type: "Poster, 3d typography",
        src: "/images/trust-the-process.jpg",
    },
];

const PersonalWorks = () => {
    return (
        <>
            <section>
                <div className="flex justify-between py-24">
                    <div className="flex flex-col justify-between">
                        <h1 className="text-4xl uppercase font-bold">
                            Personal<br/>Works
                        </h1>
                        <Link href="/archive/personal-works" className="underline cursor-pointer text-xl">see more &#62;&#62;</Link>
                    </div>
                    <ProjectGrid projects={projects} />
                </div>
            </section>
        </>
    );
}

export default PersonalWorks;