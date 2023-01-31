import React, { useRef } from "react";
import Image from "next/image";
import classNames from "classnames";
import Calendar from "/public/images/calendar-design.png";
import UIUX from "/public/images/uiux.png";
import styles from "./slider.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/navigation";

import { EffectCreative } from "swiper";

const projects = [
    {
        id: 1,
        name: "Calendar Design / Mixigaming",
        type: "School's project",
        image: { Calendar },
    },
    {
        id: 2,
        name: "UI/UX Research / Domino's Pizza",
        type: "School's project",
        image: { UIUX },
    },
    {
        id: 3,
        name: "Magazine Design / Chuyen Nha Fan",
        type: "School's project",
        image: { Calendar },
    }
];

const Slider = () => {
    const navigationNextRef = useRef();
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay, Navigation, EffectCreative]}
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
                <SwiperSlide>
                    <div className={classNames(styles.container)}>
                        <Image src={Calendar} alt="Calendar Design / Mixigaming" className={styles.image} />
                        <div className={classNames(styles.slideContent)}>
                            <h3>Calendar Design / Mixigaming</h3>
                            <p>School's project</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={classNames(styles.container)}>
                        <Image src={UIUX} alt="UI/UX Research / Domino's Pizza" className={styles.image} />
                        <div className={classNames(styles.slideContent)}>
                            <h3>UI/UX Research / Domino's Pizza</h3>
                            <p>School's project</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={classNames(styles.container)}>
                        <Image src={UIUX} alt="Magazine Design / Chuyen Nha Fan" className={styles.image} />
                        <div className={classNames(styles.slideContent)}>
                            <h3>Magazine Design / Chuyen Nha Fan</h3>
                            <p>School's project</p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}

export default Slider;