import React from 'react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import slide1 from '../../assets/home/slide1.jpg'
import slide2 from '../../assets/home/slide2.jpg'
import slide3 from '../../assets/home/slide3.jpg'
import slide4 from '../../assets/home/slide4.jpg'
import slide5 from '../../assets/home/slide5.jpg'
import SectionTitle from '../../components/SectionTitle/SectionTitle';

const Category = () => {
    return (
        <>
        <SectionTitle heading={'Order Online'} subheading={'From 11.00am to 10.00pm'}/>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                // centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-10"
            >
                <SwiperSlide>
                    <img src={slide1} alt="" />
                    <h3 className='[text-shadow:_0_2px_4px_rgb(000_000_000_/_0.9)] text-white -mt-16 text-center text-xl md:text-2xl uppercase leading-snug font-cinzel'>Salad</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="" />
                    <h3 className='[text-shadow:_0_2px_4px_rgb(000_000_000_/_0.9)] text-white -mt-16 text-center text-xl md:text-2xl uppercase leading-snug font-cinzel'>Pizzas</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="" />
                    <h3 className='[text-shadow:_0_2px_4px_rgb(000_000_000_/_0.9)] text-white -mt-16 text-center text-xl md:text-2xl uppercase leading-snug font-cinzel'>Soups</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="" />
                    <h3 className='[text-shadow:_0_2px_4px_rgb(000_000_000_/_0.9)] text-white -mt-16 text-center text-xl md:text-2xl uppercase leading-snug font-cinzel'>Deserts</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} alt="" />
                    <h3 className='[text-shadow:_0_2px_4px_rgb(000_000_000_/_0.9)] text-white -mt-16 text-center text-xl md:text-2xl uppercase leading-snug font-cinzel'>Salads</h3>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default Category;