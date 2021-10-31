import React from 'react';
import useOffers from '../../../hooks/useOffers';
import OfferCard from '../OfferCard/OfferCard';

const OfferSection = () => {
    const [offers] = useOffers()
    return (
        <div>
            <div className='container mx-auto py-12'>
                <h2 className='text-4xl'>
                    We offer worldwise tour plan recently
                </h2>
                <p className='text-gray-400 py-8'>
                    Make she'd moved divided air. Whose tree that hath own upon
                    them it multiply was blessed
                </p>
                <h2 className="text-2xl mb-4">Hover on image and see the offer details</h2>
                <div className='grid grid-cols-3 gap-8'>
                    {offers.slice(0, 6).map((offer) => (
                        <OfferCard key={offer._id} offer={offer}></OfferCard>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OfferSection;