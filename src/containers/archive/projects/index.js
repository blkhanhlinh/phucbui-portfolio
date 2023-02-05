import react from "react";
import styles from "./projects.module.css";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import ProjectGrid from "../../../components/project-grid";
import Strip from "../../../assets/images/strip.svg"

export const projects = [
    {
        id: 1,
        name: "Lyrics Video / 120 Degrees",
        type: "project",
        src: "/images/120-degrees-lyrics-video.png",
    },
    {
        id: 2,
        name: "Lyrics Video / Chuc Em Ngu Ngon",
        type: "project",
        src: "/images/chuc-em-ngu-ngon.png",
    },
    {
        id: 3,
        name: "Calendar Design / Mixigaming",
        type: "School's project",
        src: "/images/calendar-design.png",
    },
    {
        id: 4,
        name: "UI/UX Research / Domino's Pizza",
        type: "School's project",
        src: "/images/uiux.png",
    }
];

const Projects = () => {
    return (
        <>
            <div className="flex justify-between text-4xl uppercase font-bold mt-12 mb-16">
                <h1>&#47;&#47;</h1>
                <h1>archive</h1>
                <h1>&#47;&#47;</h1>
            </div>
            <section>
                <div className="flex justify-between pb-24">
                    <div className="flex flex-col justify-between">
                        <h1 className="text-4xl uppercase font-bold">
                            Projects
                        </h1>
                        <Link href="/archive/projects" className="underline cursor-pointer text-xl">see more &#62;&#62;</Link>
                    </div>
                    <ProjectGrid projects={projects} />
                </div>
                <div>
                    <Image src={Strip} className="w-screen"/>
                </div>
            </section>
        </>
    );
}

export default Projects;