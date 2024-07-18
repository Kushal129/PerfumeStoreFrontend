import React from 'react';
import brand1 from '../../assets/images/logos/brand1.png';
import brand2 from '../../assets/images/logos/brand2.png';
import brand3 from '../../assets/images/logos/brand3.png';
import brand4 from '../../assets/images/logos/brand4.png';
import brand5 from '../../assets/images/logos/brand5.png';
import brand6 from '../../assets/images/logos/brand6.png';

const Partners = () => {
    return (
        <div data-aos="zoom-out" className='py-8 mt-20 md:block bg-gray-200 dark:bg-primary '>
            <div className='container '>
                <div className="grid grid-cols-6 gap-3 place-items-center opacity-50">
                    <img src={brand1} alt="Brands" className='w-[80px] dark:invert' />
                    <img src={brand2} alt="Brands" className='w-[80px] dark:invert' />
                    <img src={brand3} alt="Brands" className='w-[80px] dark:invert' />
                    <img src={brand4} alt="Brands" className='w-[80px] dark:invert' />
                    <img src={brand5} alt="Brands" className='w-[80px] dark:invert' />
                    <img src={brand6} alt="Brands" className='w-[80px] dark:invert' />
                </div>
            </div>
        </div>
    );
};

export default Partners;
