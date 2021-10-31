import React from 'react';
import useServices from '../../../hooks/useServices';
import ServiceCard from '../ServiceCard/ServiceCard';

const ServiceSection = () => {
    const [services] = useServices()
    return (
        <div className='bg-primary'>
            <div className='container mx-auto py-12'>
                <h2 className='text-center text-4xl pb-8 text-white'>
                    Services
                </h2>
                <div className='grid grid-cols-3 gap-8'>
                    {services.map((service) => (
                        <ServiceCard
                            key={service._id}
                            service={service}
                        ></ServiceCard>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServiceSection;