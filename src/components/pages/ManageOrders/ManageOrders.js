import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const ManageOrders = () => {
    const {user} = useAuth()
    const [ordersInfo, setOrdersInfo] = useState([]);
    useEffect(() => {
        fetch(`https://infinite-river-40471.herokuapp.com/orders`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setOrdersInfo(data);
            });
    }, []);

    const info = ordersInfo.find( orderInfo => orderInfo.data.email === user.email)
    console.log(info);
    return (
        <div>
            <div className='container mx-auto py-12'>
                <h2 className='text-3xl text-center mb-4'>Booking Details</h2>
                <div className='flex w-2/3 mx-auto bg-primary items-center p-8 rounded-md'>
                    <div className='w-2/3'>
                        <h2 className='text-xl text-white font-bold'>
                            Booker Name: {info?.data.name}
                        </h2>
                        <h2 className='text-xl text-white font-bold'>
                            Booker Email Address: {info?.data.email}
                        </h2>
                        <h2 className='text-xl text-white font-bold'>
                            Booker Contact Number: {info?.data.mobileNumber}
                        </h2>
                        <h2 className='text-xl text-white font-bold'>
                            Total Member: {info?.data.person}
                        </h2>
                        <h2 className='text-xl text-white font-bold'>
                            Total Day: {info?.data.day}
                        </h2>
                    </div>
                    <div className='w-1/3'>
                        <img src={info?.img} alt='' />
                        <h2 className='text-4xl py-4'>{info?.offer}</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageOrders;