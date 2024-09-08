import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import featureImg from '../../../assets/home/featured.jpg';

const Feartured = () => {
    return (
        <div className='featured-img'>
            <SectionTitle heading={'Featured Item'} subheading={'Check it out'} />
           
            <div className='md:flex justify-center items-center py-8 px-16'>
                <div>
                    <img src={featureImg} alt="" />
                </div>
                <div className='md:ml-10'>
                    <p>Aug 20,2020</p>
                    <p className='uppercase'>Where can i get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis nisi hic magnam repudiandae voluptas. Voluptates fuga quam error alias ex voluptatem libero doloremque consectetur dolores corporis repellat, eos dolorem perspiciatis suscipit doloribus blanditiis cupiditate nihil optio! Sapiente laborum fugit dicta rem mollitia vel impedit. Tempore eaque officia architecto numquam iusto?</p>
                    <button className='btn btn-outline'>Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Feartured;