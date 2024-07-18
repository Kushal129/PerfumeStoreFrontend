import React from 'react';
import Heading from '../Shared/Heading';

const BlogData = [
    {
      id: 1,
      title: "The Art of Choosing the Perfect Perfume",
      subtitle: "Discover how to select a fragrance that complements your personality.",
      published: "July 16, 2024",
      image: "https://www.myglamm.com/_next/image?url=https%3A%2F%2Ffiles.myglamm.com%2Fsite-images%2F768x432%2FHow-to-choose-right-perfume.jpg&w=828&q=75",
      aosDelay:"0",
    },
    {
      id: 2,
      title: "Attar: The Essence of Tradition",
      subtitle: "Explore the rich history and unique characteristics of traditional attar.",
      published: "July 18, 2024",
      image: "https://img.freepik.com/premium-photo/attar-distillation-showcase-traditional-method-attar-oil-production_977107-166.jpg",
      aosDelay:"200",
    },
    {
      id: 3,
      title: "Fragrance Notes: Understanding the Layers",
      subtitle: "Learn about the different fragrance notes and how they create a lasting impression.",
      published: "July 20, 2024",
      image: "https://setaracosmetics.it/cdn/shop/articles/payramid.png?v=1694458888&width=1100",
      aosDelay:"400",
    },
  ];
  

const Blogs = () => {
  return (
    <div className='my-12'>
      <div className="container">
      <Heading
          title="Recent News"
          subtitle="Explore Our Blogs"
        />

        {/* Blog section  */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
        gap-6 gap-y-8 sm:gap-4 md:gap-7 m-2'>
            {/* blog card  */}
            {
                BlogData.map((data) =>(
                    <div  data-aos="fade-up"
                    data-aos-delay={data.aosDelay} key={data.title} className=' dark:bg-primary rounded-2xl'>
                      {/* img section  */}
                        <div className='overflow-hidden rounded-2xl mb-2'>
                          <img src={data.image} alt=""
                          className='w-full h-[220px] object-cover rounded-2xl hover:scale-105 duration-500' />
                        </div>
                        {/* content section  */}
                        <div className='space-y-2 m-3'>
                          <p className='text-xs dark:text-brandWhite'>{data.published}</p>
                          <p className='font-bold text-brandBlue line-clamp-1'>{data.title}</p>
                          <p className='line-clamp-2 text-sm text-gray-600 dark:text-brandWhite'>{data.subtitle}</p>
                        </div>
                    </div>
                ))}
        </div>
      </div>
    </div>
  );
};  

export default Blogs;
