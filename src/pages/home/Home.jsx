import React from 'react';
import Banner from './Banner';
import Category from './Category';
import PopularMenu from './PopulerMenu/PopularMenu';
import Feartured from './Featured/Featured';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Category/>
            <PopularMenu/>
            <Feartured></Feartured>
        </div>
    );
};

export default Home;