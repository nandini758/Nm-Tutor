import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";

import { Autoplay, Navigation } from "swiper/modules";

const CardSlider = ({ images }) => {
    return (
        <div className='relative'>
            <Swiper
                spaceBetween={10}
                slidesPerView={1}
                speed={700}
                loop={true}
                navigation={{
                    nextEl: `.next`,
                    prevEl: `.prev`,
                }}
                autoplay={{
                    delay: 1000,
                }}
                modules={[Autoplay, Navigation]}
                breakpoints={{
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                }}
            >
                {images.map((itm, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <div className="relative w-full">
                                <img
                                    src={itm}
                                    alt="image"
                                    className="object-cover"
                                />
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>

            <div className="mt-4 absolute top-4 flex justify-between gap-4 w-full max-w-[1100]">
                <div
                    className={`active:scale-50 duration-300 cursor-pointer prev z-10`}
                >
                    <svg className='' width="11" height="19" viewBox="0 0 11 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.16 0.155273C8.96 0.155273 8.76416 0.196939 8.5725 0.280273C8.38083 0.363607 8.22667 0.463606 8.11 0.580273L0.709998 8.08027C0.443331 8.34694 0.309998 8.72611 0.309998 9.21777C0.309998 9.70944 0.443331 10.0886 0.709998 10.3553L8.11 18.3803C8.29333 18.5636 8.46416 18.6969 8.6225 18.7803C8.78083 18.8636 8.96 18.9053 9.16 18.9053C9.64333 18.9053 10.0267 18.7636 10.31 18.4803C10.46 18.3303 10.585 18.1511 10.685 17.9428C10.785 17.7344 10.835 17.5303 10.835 17.3303C10.835 16.8469 10.66 16.4719 10.31 16.2053L3.96 9.20527L10.31 2.65527C10.5767 2.38861 10.71 2.07194 10.71 1.70527C10.71 1.22194 10.5767 0.846939 10.31 0.580273C10.0933 0.413607 9.90166 0.301107 9.735 0.242773C9.56833 0.184441 9.37667 0.155273 9.16 0.155273Z" fill="#EEEEEE" fill-opacity="0.9" />
                    </svg>

                </div>
                <div
                    className={`active:scale-50 duration-300 cursor-pointer next z-10`}
                ><svg className='rotate-[180deg] ' width="11" height="19" viewBox="0 0 11 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.16 0.155273C8.96 0.155273 8.76416 0.196939 8.5725 0.280273C8.38083 0.363607 8.22667 0.463606 8.11 0.580273L0.709998 8.08027C0.443331 8.34694 0.309998 8.72611 0.309998 9.21777C0.309998 9.70944 0.443331 10.0886 0.709998 10.3553L8.11 18.3803C8.29333 18.5636 8.46416 18.6969 8.6225 18.7803C8.78083 18.8636 8.96 18.9053 9.16 18.9053C9.64333 18.9053 10.0267 18.7636 10.31 18.4803C10.46 18.3303 10.585 18.1511 10.685 17.9428C10.785 17.7344 10.835 17.5303 10.835 17.3303C10.835 16.8469 10.66 16.4719 10.31 16.2053L3.96 9.20527L10.31 2.65527C10.5767 2.38861 10.71 2.07194 10.71 1.70527C10.71 1.22194 10.5767 0.846939 10.31 0.580273C10.0933 0.413607 9.90166 0.301107 9.735 0.242773C9.56833 0.184441 9.37667 0.155273 9.16 0.155273Z" fill="#EEEEEE" fill-opacity="0.9" />
                    </svg>

                </div>
            </div>
        </div>
    )
}

export default CardSlider