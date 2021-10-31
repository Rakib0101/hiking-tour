import React from 'react';
import { FaEnvelope, FaFacebookF, FaInstagram, FaPhoneAlt, FaTwitter } from "react-icons/fa";
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const TopHeader = () => {
    const { user, logOut } = useAuth()
    return (
        <div>
            <div className='flex items-center justify-between'>
                <div className='hidden md:flex md:w-2/5'>
                    <div className='mr-2'>
                        <h2 className='flex items-center'>
                            <FaPhoneAlt />
                            <p className='pl-2'>+88 01929 032 016</p>
                        </h2>
                    </div>
                    <div>
                        <h2 className='flex items-center'>
                            <FaEnvelope />
                            <p className='pl-2'>rakib.01jan@gmail.com</p>
                        </h2>
                    </div>
                </div>
                <div className='md:w-1/5 md:block hidden overflow-hidden'>
                    <h2 className='text-2xl text-center'>
                        <Link to='/'>HikingTour</Link>
                    </h2>
                </div>
                <div className='flex md:w-2/5 justify-end items-center'>
                    <div className='md:flex hidden'>
                        <h2 className='px-2'>
                            <FaFacebookF />
                        </h2>
                        <h2 className='px-2'>
                            <FaTwitter />
                        </h2>
                        <h2 className='px-2'>
                            <FaInstagram />
                        </h2>
                    </div>
                    {user?.email || user?.displayName ? (
                        <div>
                            <button onClick={logOut}>Logout</button>
                        </div>
                    ) : (
                        <div className='flex'>
                            <button className='pl-4'>
                                <Link to='/login'>Login</Link>
                            </button>
                            <button className='pl-4'>
                                <Link to='/sign-up'>Sign Up</Link>
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TopHeader;