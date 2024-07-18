import React from 'react';

const Heading = ({ title, subtitle }) => {
  return (
    <div className='text-center mb-10 max-w-[600px] mx-auto space-y-2'>
      <h1 className='text-3xl font-bold lg:text-4xl  text-primary  dark:text-brandWhite'>{title}</h1>
      <p className='text-xs text-primary  dark:text-brandWhite'>{subtitle}</p>
    </div>
  );
};

export default Heading;
