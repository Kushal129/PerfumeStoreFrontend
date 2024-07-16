import React from 'react';
import Button from '../Shared/Button'; // Ensure Button component is correctly imported

const ProductCard = ({ ProductsData }) => {
  return (
    <div className='mb-10'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 place-items-center'>
        {/* Map through ProductsData to render each product card */}
        {ProductsData.map((data) => (
          <div className='group' key={data.id}>
            <div className='relative'>
              <img
                src={data.img}
                alt='product image'
                className='h-[180px] w-[260px] object-cover rounded-md'
              />
              {/* hover button */}
              <div className='hidden group-hover:flex absolute top-1/2 -translate-y-1/2 left-1/2 
                              -translate-x-1/2 w-full h-full text-center group-hover:backdrop-blur-sm justify-center items-center duration-200'>
                <Button
                  text='Add to cart'
                  bgColor='bg-primary'
                  textColor='text-white'
                  className='text-sm lg:text-base py-2 px-4 rounded-full'
                />
              </div>
            </div>
            <div className='leading-7'>
              <h2 className='font-semibold'>{data.title}</h2>
              <h2 className='font-bold'>₹{data.price}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};  

export default ProductCard;
