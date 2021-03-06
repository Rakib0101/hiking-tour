import React from "react";
import { Link } from "react-router-dom";
import FooterTop from "../FooterTop/FooterTop";

const Footer = () => {
    return (
        <div className='bg-black'>
            <FooterTop></FooterTop>
            <hr className='h-2 text-white' />
            <div className='container mx-auto py-4'>
                <div className=' text-lg flex text-white flex-col md:flex-row justify-between'>
                    <div className='text-center md:text-left'>
                        <p>All rights are reserverd</p>
                    </div>
                    <nav>
                        <ul className='flex flex-col md:flex-row text-center md:text-left'>
                            <li className='px-2 hover:text-green-600'>
                                <Link to='/'>Terms and Services</Link>
                            </li>
                            <li className='px-2 hover:text-green-600'>
                                <Link to='/'>Privacy Policy</Link>
                            </li>
                            <li className='px-2 hover:text-green-600'>
                                <Link to='/'>Cockies</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div>
                    <p className='text-center text-lg text-gray-700 font-semibold'>
                        Design Inspiration From Themeforest{" "}
                        <a
                            className='text-red-500'
                            href='https://travelerwp.com/'
                            rel='noopener noreferrer'
                            target='_blank'
                        >
                            {" "}
                            Traveler WP{" "}
                        </a>
                        WordPress Theme
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
