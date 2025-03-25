import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { section } from 'framer-motion/client';
const Experience = () => {

    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

    return (
        <section id='experience' className="py-20 text-amber-50 text-center h-screen flex flex-col justify-center items-center">
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, ease: "easeOut" }}

                className="font-bold text-3xl md:text-4xl lg:text-7xl leading-relaxed mb-4"
            >

                Experience
            </motion.div>




            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                className="w-full max-w-2xl h-full sm:m-4 md:m-4 p-4">

                <SwiperSlide>
                    <img src="IMG_0670.JPG" alt="Slide 1" className="w-full h-auto rounded-lg " />
                    <div className="absolute bottom-4 left-4 right-4 bg-black/30  text-white text-lg p-2 rounded-md">
                        Summer Training (AI) at Indian Institute of Information & Technology Allahabad,India
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="IMG_0997.JPG" alt="Slide 2" className="w-full h-auto rounded-lg" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src="IMG_20250218_173256.jpg" alt="Slide 3" className="w-full h-auto rounded-lg" />
                    <div className="absolute bottom-4 left-4 right-4 bg-black/30  text-white text-lg p-2 rounded-md">
                        International Generative A.I Workshop at Indian Institute of Information & Technology Allahabad,India
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="IMG_20250218_172946.jpg" alt="Slide 4" className="w-full h-auto rounded-lg" />
                    <div className="absolute bottom-4 left-4 right-4 bg-black/30  text-white text-lg p-2 rounded-md">
                        International Generative A.I Workshop at Indian Institute of Information & Technology Allahabad,India
                    </div>
                </SwiperSlide>


            </Swiper>
        </section>
    )
}

export default Experience
