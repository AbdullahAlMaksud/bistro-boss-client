import React from 'react';
import { BiUser, BiUserCircle } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const navMenu = <>
        <li><a>Item 1</a></li>
        <li><a>Item 3</a></li>
    </>
    return (
        <div className="bg-black/70 max-w-screen-xl">
            <section className='w-11/12 mx-auto flex justify-between items-center'>
                <div className="flex items-center justify-start w-52 flex-1 lg:flex-none">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {
                                navMenu
                            }
                        </ul>
                    </div>
                    <Link to={'/'} className='flex gap-2 justify-center items-center py-2 text-white'>
                        <img src='./fav.svg' className="w-12 mb-2" />

                        <div className='flex flex-col justify-center items-center'>
                            <p className='font-cinzel text-xl'>
                                BISTRO BOSS
                            </p>
                            <p className='font-cinzel text-md tracking-[.15rem]'>Restaurant</p>
                        </div>

                    </Link>
                </div>

                <div className="hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 w-full">
                        {
                            navMenu
                        }
                    </ul>
                </div>

                <div className='lg:w-52 flex justify-end'>
                <Link className="bg-gray-400 rounded-full p-1 hover:shadow-lg border hover:border-black">
                    <span className="text-2xl text-white font-black"><BiUser /></span>
                </Link>
                </div>
            </section>
        </div>
    );
};

export default Navbar;