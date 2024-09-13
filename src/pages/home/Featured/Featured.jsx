import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import featureImg from '../../../assets/home/featured.jpg';
import './featured.css'

const Feartured = () => {
    return (
        <div className='featured-img bg-fixed text-white my-20'>
            <div className='bg-black/60 pt-10 backdrop-blur-sm'>
            <SectionTitle heading={'Featured Item'} subheading={'Check it out'} />
           
           <div className='md:flex justify-center items-center pb-20 pt-12 px-36'>
               <div>
                   <img src={featureImg} alt="" className='rounded' />
               </div>
               <div className='md:ml-10'>
                   <p>Aug 20,2020</p>
                   <p className='uppercase'>Where can i get some?</p>
                   <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis nisi hic magnam repudiandae voluptas. Voluptates fuga quam error alias ex voluptatem libero doloremque consectetur dolores corporis repellat, eos dolorem perspiciatis suscipit doloribus blanditiis cupiditate nihil optio! Sapiente laborum fugit dicta rem mollitia vel impedit. Tempore eaque officia architecto numquam iusto?</p>
                   <button className='btn text-yellow-100 hover:bg-yellow-900 btn-outline border-0 border-b-2'>Order Now</button>
               </div>
           </div>
            </div>
        </div>
    );
};

export default Feartured;