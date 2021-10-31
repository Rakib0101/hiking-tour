import React from "react";
import { FaArrowRight, FaFacebook, FaInstagram, FaPhoneAlt, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const FooterTop = () => {
    
    return (
        <div>
            <div className='container py-12 mx-auto'>
                <div className='flex md:flex-row flex-col'>
                    <div className='text-white w-full px-4 md:w-2/6'>
                        <div className='text-white'>
                            <h2 className='text-2xl font-bold'>HikingTour</h2>
                            <p className='py-4'>
                                From the iconic to the unexpected, the city of
                                San Francisco never ceases to surprise.
                                Kick-start your effortlessly delivered Northern
                                California holiday in the cosmopolitan hills of
                                'The City'. Join your Travel Director and fellow
                                travellers for a Welcome Reception at your
                                hotel.Welcome Reception
                            </p>
                            <button className='font-semibold flex items-center hover:text-gray-700'>
                                Booking Now <FaArrowRight />
                            </button>
                        </div>
                    </div>
                    <div className='text-white w-full px-4 md:w-1/6'>
                        <div className='text-white'>
                            <h2 className='text-2xl font-bold pb-4'>Support</h2>
                            <ul>
                                <li className=' py-2 text-lg'>
                                    <Link
                                        to='/'
                                        className='hover:text-green-600'
                                    >
                                        Direct Contact
                                    </Link>
                                </li>
                                <li className=' py-2 text-lg'>
                                    <Link
                                        to='/'
                                        className='hover:text-green-600'
                                    >
                                        Customer Support
                                    </Link>
                                </li>
                                <li className=' py-2 text-lg'>
                                    <Link
                                        to='/'
                                        className='hover:text-green-600'
                                    >
                                        Helpline
                                    </Link>
                                </li>
                                <li className=' py-2 text-lg'>
                                    <Link
                                        to='/'
                                        className='hover:text-green-600'
                                    >
                                        Emargency Call
                                    </Link>
                                </li>
                                <li className=' py-2 text-lg'>
                                    <Link
                                        to='/'
                                        className='hover:text-green-600'
                                    >
                                        Financial Support
                                    </Link>
                                </li>
                                <li className=' py-2 text-lg'>
                                    <Link
                                        to='/'
                                        className='hover:text-green-600'
                                    >
                                        Bank Loan
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='text-white px-4 w-full md:w-1/6'>
                        <div className='text-white'>
                            <h2 className='text-2xl font-bold pb-4'>
                                Important Links
                            </h2>
                            <ul>
                                <li className=' py-2 text-lg'>
                                    <Link
                                        to='/'
                                        className='hover:text-green-600'
                                    >
                                        About Us
                                    </Link>
                                </li>
                                <li className=' py-2 text-lg'>
                                    <Link
                                        to='/'
                                        className='hover:text-green-600'
                                    >
                                        Services
                                    </Link>
                                </li>
                                <li className=' py-2 text-lg'>
                                    <Link
                                        to='/'
                                        className='hover:text-green-600'
                                    >
                                        Offers
                                    </Link>
                                </li>
                                <li className=' py-2 text-lg'>
                                    <Link
                                        to='/'
                                        className='hover:text-green-600'
                                    >
                                        Contact
                                    </Link>
                                </li>
                                <li className=' py-2 text-lg'>
                                    <Link
                                        to='/'
                                        className='hover:text-green-600'
                                    >
                                        Login
                                    </Link>
                                </li>
                                <li className=' py-2 text-lg'>
                                    <Link
                                        to='/'
                                        className='hover:text-green-600'
                                    >
                                        Sign Up
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='bg-white rounded-lg w-5/6 mx-auto md:w-2/6 p-8'>
                        <div className='text-center'>
                            <h2 className='text-2xl'>Quick Contacts</h2>
                            <p>
                                If you have any questions or need help, feel
                                free to contact with our team.
                            </p>
                            <h2 className='text-4xl py-4 flex items-center'>
                                <FaPhoneAlt /> +88 01929 032 016
                            </h2>
                            <p>
                                2307 Beverley Rd Brooklyn, New York 11226 United
                                States.
                            </p>
                            <div className='flex flex-col md:flex-row'>
                                <div className='md:w-2/3 w-full'>
                                    <button className='flex items-center'>
                                        <FaArrowRight /> Get Directions
                                    </button>
                                </div>
                                <div className='md:w-1/3 w-full flex'>
                                    <span className='px-1'>
                                        <FaFacebook />
                                    </span>
                                    <span className='px-1'>
                                        <FaTwitter />
                                    </span>
                                    <span className='px-1'>
                                        <FaInstagram />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FooterTop;
