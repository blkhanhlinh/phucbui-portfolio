import React, { useRef } from "react";
import Image from "next/image";
import classNames from "classnames";
import styles from "./slider.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Lazy, Autoplay, Navigation } from "swiper";
import "swiper/swiper.min.css";
import "swiper/css/effect-creative";
import "swiper/css/navigation";
import "swiper/css/lazy";

import { EffectCreative } from "swiper";

export const projects = [
    {
        id: 1,
        name: "Calendar Design / Mixigaming",
        type: "School's project",
        image: "/images/calendar-design.png",
    },
    {
        id: 2,
        name: "UI/UX Research / Domino's Pizza",
        type: "School's project",
        image: "/images/uiux.png",
    },
    {
        id: 3,
        name: "Magazine Design / Chuyen Nha Fan",
        type: "School's project",
        image: "/images/uiux.png",
    }
];

const Slider = () => {
    const navigationNextRef = useRef();
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                lazy={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Lazy, Autoplay, Navigation, EffectCreative]}
                loop={true}
                grabCursor={true}
                effect={"creative"}
                creativeEffect={{
                    prev: {
                        shadow: false,
                        translate: [0, 0, -400],
                    },
                    next: {
                        translate: ["100%", 0, 0],
                    },
                }}
                onBeforeInit={(swiper) => {
                    swiper.params.navigation.nextEl = navigationNextRef.current;
                }}
                className={classNames(styles.swiper, styles.works)}
            >
                {projects.map((project) => (
                    <SwiperSlide key={project.id} className="rounded-large border-2 border-black">
                        <figure>
                            <Image src={project.image} alt={project.name} layout="fill" objectFit="cover" className={classNames(styles.image)}/>
                            <figcaption className={classNames(styles.slideContent, styles.overlay, "border-2 border-black")}>
                                <h3>{project.name}</h3>
                                <p>{project.type}</p>
                            </figcaption>
                        </figure>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}

export default Slider;