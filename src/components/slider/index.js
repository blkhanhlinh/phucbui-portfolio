import React, { useEffect, useState } from "react";
import Image from "next/image";
import classNames from "classnames";
import styles from "./slider.module.css"
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export const data = [
    {
        id: 1,
        name: "Visual lyrical music video",
        brand: "Song name: 120 Degrees",
        type: "Type: Team project",
        image: "/images/uiux.png",
        link: "/works/visual-lyrical-music-video",
    },
    {
        id: 2,
        name: "Calendar Design Project",
        brand: "Brand: Mixigaming",
        type: "Type: Personal project,",
        type2: "school project.",
        image: "/images/calendar-design.png",
        link: "/works/calendar-design",
    },
    {
        id: 3,
        name: "Magazine Design Project",
        brand: "Topic: Marvel's movies, fan",
        type: "Type: Personal project,",
        type2: "school project.",
        image: "/images/uiux.png",
        link: "/works/magazine-design-project",
    }
];

gsap.registerPlugin(ScrollTrigger);

const Slider = () => {
    useEffect(() => {
        const sections = gsap.utils.toArray(".panel");

        gsap.to(sections, {
            xPercent: -100 * (sections.length - 1),
            ease: "none",
            scrollTrigger: {
                trigger: ".container",
                pin: true,
                invalidateOnRefresh: true,
                anticipatePin: 1,
                scrub: 1.23,
                end: () => "+=" + document.querySelector(".container").offsetWidth
            }
        });
    }, []);
    
    return (
        <div className={classNames(styles.slider, "container")}>
            {data.map((project, index) => {
                const { id, image, name } = project;
                return (
                    <article key={id} className="panel">
                        <Image src={image} alt={name} width={380} height={283.92}/>
                        <h3 className="text-2xl font-bold"></h3>
                    </article>
                )
            })}
        </div>
    )
}

export default Slider;