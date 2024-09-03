import React from 'react';
import Banner from './Banner';
import Category from './Category';
import PopularMenu from './PopulerMenu/PopularMenu';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Category/>
            <PopularMenu/>
        </div>
    );
};

export default Home;