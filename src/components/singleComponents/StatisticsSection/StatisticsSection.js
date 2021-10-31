import React from 'react';
import earth from '../../../img/ico_eath.svg';
import umbrella from '../../../img/ico_insurance.svg';
import piggy from "../../../img/ico_piggy-bank.svg";


const StatisticsSection = () => {
    return (
        <div>
            <div className='container mx-auto py-8'>
                <div className='grid grid-cols-3'>
                    <div className='flex'>
                        <div className='w-1/4'>
                            <img src={earth} alt='' />
                        </div>
                        <div className='w-3/4'>
                            <h2 className="text-3xl font-semibold">20,000+ properties</h2>
                            <h3>
                                Morbi semper fames lobortis ac hac penatibus
                            </h3>
                        </div>
                    </div>
                    <div className='flex'>
                        <div className='w-1/4'>
                            <img src={umbrella} alt='' />
                        </div>
                        <div className='w-3/4'>
                            <h2 className="text-3xl font-semibold">Trust & Safety</h2>
                            <h3>
                                Morbi semper fames lobortis ac hac penatibus
                            </h3>
                        </div>
                    </div>
                    <div className='flex'>
                        <div className='w-1/4'>
                            <img src={piggy} alt='' />
                        </div>
                        <div className='w-3/4'>
                            <h2 className="text-3xl font-semibold">Best Price Guarantee</h2>
                            <h3>
                                Morbi semper fames lobortis ac hac penatibus
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StatisticsSection;