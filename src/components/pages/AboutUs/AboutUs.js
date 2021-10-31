import React from 'react';
import story from '../../../img/about_1.jpg'
import mission from "../../../img/about_2.png";
import StatisticsSection from '../../singleComponents/StatisticsSection/StatisticsSection'
    
const AboutUs = () => {
    return (
        <div>
            <div className='container mx-auto'>
                <h2 className='my-8 text-4xl pl-4 md:pl-0'>About Us</h2>
                <div className='flex flex-col md:flex-row mb-12'>
                    <div className='md:w-1/2 md:mr-4 mb-4 md:mb-0 mx-4 md:mx-0 p-8 glass-effect'>
                        <img src={story} alt='' />
                        <h2 className="text-2xl font-semibold py-4 text-blue-500">Our story</h2>
                        <p>
                            Nam dapibus nisl vitae elit fringilla rutrum. Aenean
                            sollicitudin, erat a elementum rutrum, neque sem
                            pretium metus, quis mollis nisl nunc et massa. Nam
                            dapibus nisl vitae elit fringilla rutrum. Aenean
                            sollicitudin, erat a elementum rutrum, neque sem
                            pretium metus, quis mollis nisl nunc et massa.
                        </p>
                    </div>
                    <div className='md:w-1/2 mx-4 md:mx-0 md:ml-4 p-8 glass-effect'>
                        <img src={mission} alt='' />
                        <h2 className="text-2xl font-semibold py-4 text-blue-500">Our Mission</h2>
                        <p>
                            Nam dapibus nisl vitae elit fringilla rutrum. Aenean
                            sollicitudin, erat a elementum rutrum, neque sem
                            pretium metus, quis mollis nisl nunc et massa. Nam
                            dapibus nisl vitae elit fringilla rutrum. Aenean
                            sollicitudin, erat a elementum rutrum, neque sem
                            pretium metus, quis mollis nisl nunc et massa.
                        </p>
                    </div>
                </div>
                <StatisticsSection></StatisticsSection>
            </div>
        </div>
    );
};

export default AboutUs;