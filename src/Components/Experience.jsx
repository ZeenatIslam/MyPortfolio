import React from 'react'
import { Swiper ,SwiperSlide} from 'swiper/react'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { section } from 'framer-motion/client';
const Experience = () => {
    return (
        <section className='h-screen w-full'>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                className="w-full max-w-lg">

                <SwiperSlide>
                    <img src=""alt="Slide 1" className="w-full h-auto rounded-lg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="" alt="Slide 2" className="w-full h-auto rounded-lg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="" alt="Slide 3" className="w-full h-auto rounded-lg" />
                </SwiperSlide>


            </Swiper>
        </section>
    )
}

export default Experience
