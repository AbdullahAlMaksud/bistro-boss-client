import React, { useEffect, useState } from 'react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import { Navigation } from 'swiper/modules';

import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const Testimonials = () => {

    const [reviews, setReviews] = useState([]);
    // const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetch('./reviews.json')
            .then(res => res.json())
            .then(data => {
                // setLoading(true)
                setReviews(data)
                // setLoading(false)
            })
    }, [])

    // if (loading) return <div className='h-20 flex items-center justify-center'><span className='loading loading-lg loading-infinity'></span></div>

    return (
        <section className='my-20'>
            <SectionTitle heading={'Testimonials'} subheading={'What Our Client Say'} />

            <div>
                <Swiper navigation={true} modules={[Navigation]} className='mySwiper'>
{/* <p>{reviews?.length}</p> */}
                    {
                        reviews?.map(review =><SwiperSlide key={review._id}>
                            <div>
                                <p>{review?.details}</p>
                                <h3 className='text-xl text-orange-400'>{review?.name}</h3>
                            </div>
                        </SwiperSlide>
                        )
                    }

                </Swiper>
            </div>
        </section>
    );
};

export default Testimonials;