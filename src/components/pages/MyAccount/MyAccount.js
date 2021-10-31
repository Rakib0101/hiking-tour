import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";


const MyAccount = () => {
    const { user } = useAuth();
    console.log(user);
    return (
        <div className='bg-primary'>
            <div className='container mx-auto py-12'>
                <div className='grid md:grid-cols-5 grid-cols-1 gap-8'>
                    <div className='md:col-span-1 glass-effect mx-4 md:mx-0 rounded-xl'>
                        <div className='shaddow px-4 py-8'>
                            {user.photoURL ? (
                                <img
                                    className='w-24 mx-auto h-24 rounded-full'
                                    src={user.photoURL}
                                    alt=''
                                />
                            ) : (
                                <span className='mx-auto text-6xl'></span>
                            )}
                            <h2 className='text-center text-2xl my-4'>
                                {user.displayName}
                            </h2>
                            <h2 className='text-center my-4'>{user.email}</h2>
                            <div className="text-center">
                                <button className="glass-effect px-4 py-2">
                                    <Link to="my-booking">My Booking</Link>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='md:col-span-4 glass-effect mx-4 md:mx-0 px-12 py-6 rounded-xl'>
                        <h2 className='text-4xl py-4 my-4'>My Profile</h2>

                        <hr />
                        <div className='flex flex-col md:flex-row'>
                            <div className='md:w-1/4'>
                                <img
                                    className='w-40 h-40 my-2 mx-auto rounded-full'
                                    src={user.photoURL}
                                    alt=''
                                />
                                <div className='text-center mt-8'>
                                    <button className='glass-effect px-4 py-2 text-2xl text-black rounded'>
                                        Edit Profile
                                    </button>
                                </div>
                            </div>
                            <div className='md:w-3/4 mx-4 md:mx-0'>
                                <h2 className='md:text-2xl font-semibold'>
                                    Full Name
                                </h2>
                                <h2 className='md:text-3xl'>
                                    {user.displayName}
                                </h2>
                                <h2 className='md:text-2xl font-semibold'>
                                    Email Address
                                </h2>
                                <h2 className='md:text-3xl'>{user.email}</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyAccount;
