import React from 'react';
import Banner from './Banner';
import Category from './Category';
import PopularMenu from './PopulerMenu/PopularMenu';
import Feartured from './Featured/Featured';
import Testimonials from './Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Banner />
            <div className='w-11/12 mx-auto'>
                <Category />
                <PopularMenu />
            </div>
            <Feartured />
            <div className='w-11/12 mx-auto'>

                <Testimonials />
            </div>
        </div>
    );
};

export default Home;