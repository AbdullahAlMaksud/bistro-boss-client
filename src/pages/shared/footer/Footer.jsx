import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="flex flex-col font-inter">
            <div className='flex flex-col md:flex-row justify-between'>
                <aside className='bg-[#1F2937] w-full text-white px-10 py-10 flex flex-col justify-center items-center'>
                    <div className='flex flex-col justify-center items-center'>
                        <img src='./fav.svg' className="w-14 mb-2" />

                        <p className='font-cinzel text-3xl'>
                            BISTRO BOSS
                        </p>
                        <p className='font-cinzel text-2xl tracking-[.25rem]'>Restaurant</p>

                    </div>
                    <div className='text-center pt-2'>
                        <p className='text-2xl mb-5 mt-3'>CONTACT US</p>
                        <p>123 ABS Street, Uni 21, Bangladesh</p>
                        <p>+88 123456789</p>
                        <p>Mon - Fri: 08:00 - 22:00</p>
                        <p>Sat - Sun: 10:00 - 23:00</p>
                    </div>
                </aside>
                <nav className='bg-[#111827] w-full text-white font-inter px-10 py-10 flex flex-col justify-center items-center'>
                    <h6 className="text-2xl font-semibold py-3">Follow Us</h6>
                    <span className='pb-4'>Join us on social media</span>
                    <div className="grid grid-flow-col gap-4">
                        <a><FaFacebook className='text-2xl' /></a>
                        <a><FaInstagram className='text-2xl' /></a>
                        <a><FaTwitter className='text-2xl' /></a>
                    </div>
                </nav>
            </div>
            <div className='flex bg-gray-200 justify-center py-2 text-xs '>
                <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
            </div>
        </footer>
    );
};

export default Footer;