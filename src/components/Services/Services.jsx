import React from 'react';
import {
    FaCarSide,
    FaCheckCircle,
    FaWallet,
    FaHeadphonesAlt,
} from "react-icons/fa";

const ServiceData = [
    {
        id: 1,
        icon: <FaCarSide className="text-4xl md:text-5xl text-primary dark:text-brandlightcyan" />,
        title: "Free Shipping",
        description: "Free Shipping On All Orders",
    },
    {
        id: 2,
        icon: <FaCheckCircle className="text-4xl md:text-5xl text-primary dark:text-brandlightcyan" />,
        title: "Safe Money",
        description: "30 Days Money Back Guarantee",
    },
    {
        id: 3,
        icon: <FaWallet className="text-4xl md:text-5xl text-primary dark:text-brandlightcyan" />,
        title: "Secure Payment",
        description: "All Payments Secure",
    },
    {
        id: 4,
        icon: <FaHeadphonesAlt className="text-4xl md:text-5xl text-primary dark:text-brandlightcyan" />,
        title: "Online Support 24/7",
        description: "Technical Support Available 24/7",
    },
];

const Services = () => {
    return (
        <div className='container md:my-20 flex justify-center'>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-4'>
                {ServiceData.map((data) => (
                    <div key={data.id} className='flex flex-col items-center justify-center gap-4'>
                        {data.icon}
                        <div className="text-center">
                            <h1 className='lg:text-xl dark:text-brandWhite font-bold'>{data.title}</h1>
                            <p className='text-brandBlue dark:text-bgcolor text-sm'>{data.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
