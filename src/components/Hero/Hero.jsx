import React from 'react';
import Slider from "react-slick";
import Img1 from "../../assets/images/Perfume_img/pr1.png"
import Img2 from "../../assets/images/Perfume_img/pr2.png"
import Img3 from "../../assets/images/Perfume_img/pr3.png"
import Img4 from "../../assets/images/Perfume_img/at1.png"
import Img5 from "../../assets/images/Perfume_img/at2.png"
import Img6 from "../../assets/images/Perfume_img/at3.png"

import Button from '../Shared/Button';


const HeroSlider = [
    {
        id: 1,
        img: Img2,
        subtitle: "By HK-Fragrance",
        title: "New Product",
        title2: "Perfumes",
        description: "Explore a selection of new and best perfumes that exude elegance and allure. Discover good fragrances crafted to enchant and captivate, perfect for any occasion"
    },
    {
        id: 2,
        img: Img4,
        subtitle: "By HK-Fragrance",
        title: "New Product",
        title2: "Attars",
        description: "Indulge in new and best attars that offer a rich and lasting aroma. Experience good fragrances that evoke tradition and sophistication, ideal for those seeking a unique olfactory journey."
    },
    // {
    //     id: 3,
    //     img: Img3,
    //     subtitle: "",
    //     title: "",
    //     title2: "Product Name",
    //     description: "lorem32"
    // },
    // {
    //     id: 4,
    //     img: Img4,
    //     subtitle: "Attar",
    //     title: "Img4 Product",
    //     title2: "Product Name",
    //     description: "lorem32"
    // },
    // {
    //     id: 5,
    //     img: Img5,
    //     subtitle: "Attar",
    //     title: "Img5 Product",
    //     title2: "Product Name",
    //     description: "lorem32"
    // },
    // {
    //     id: 6,
    //     img: Img6,
    //     subtitle: "Attar",
    //     title: "Img6 Product",
    //     title2: "Product Name",
    //     description: "lorem32"
    // },
]

const Hero = () => {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        autoplaySpeed: 2000,
        cssEase: "ease-in-out",
        pauseOnHover: false,
        pauseOnFocus: true,
    };
    return (
        <div className='container'>
            <div className='overflow-hidden rounded-3xl min-h-[550px]
                sm:min-h-[650px] hero-bg-color flex justify-center items-center'>
                <div className='container pb-8 sm:pb-0'>
                    {/* Hero Section  */}
                    <Slider {...settings}>
                        {HeroSlider.map((data) => (
                            <div key={data.id}>
                                <div className='grid grid-cols-1 sm:grid-cols-2'>
                                    {/* text content section  */}
                                    <div className='flex flex-col justify-center gap-4 
                                        sm:pl-3 pt-12 sm:pt-0 text-center
                                        sm:text-left order-2 sm:order-1 relative z-10'>
                                        <h1 className='text-2xl sm:text-6xl lg:text-2xl font-bold' >{data.subtitle}</h1>
                                        <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold'>{data.title}</h1>
                                        <h1 className='text-7xl uppercase text-bgdark/80 dark:text-brandlightcyan
                                        sm:text-[80px] md:text-[100px] xl:text-[150px] font-bold'>{data.title2}</h1>
                                        <p className='text-sm font-semibold '>{data.description}</p>
                                        <div>
                                            <Button text="Shop By Category"
                                                bgColor="bg-primary"
                                                textColor="text-brandWhite"
                                            />
                                        </div>
                                    </div>
                                    {/* Img section  */}
                                    <div className='order-1 sm:order-2'>
                                        <div>
                                            <img
                                                src={data.img}
                                                alt={data.title}
                                                className='w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] cursor-pointer transform 
                                                transition-transform duration-300
                                                hover:scale-105 sm:hover:scale-110 object-contain mx-auto 
                                                drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)] relative z-40'
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Hero
