import React from 'react';
import Img1 from "../../assets/images/Perfume_img/pr1.png"
import Img2 from "../../assets/images/Perfume_img/pr2.png"
import Img3 from "../../assets/images/Perfume_img/pr3.png"
import Button from '../Shared/Button';

const Category = () => {
    return (
        <div className='py-8'>
            <div className='container'>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
                    {/* first col  */}
                    <div className='py-10 pl-5 bg-gradient-to-br from-primary/90 dark:from-brandWhite dark:to-bgdark/90 to-primary/90 text-brandWhite 
                rounded-3xl relative h-[320px] flex items-end'>
                        <div>
                            <div className='mb-4'>
                                <p className='text-xl mb-[2px] text-brandBlue'>Indulge </p>
                                <p className='text-3xl font-semibold mb-[2px]'>With </p>
                                <p className='text-4xl xl:text-5xl font-bold opacity-40 mb-2' >Floral Attar</p>
                                <Button
                                    text="Browse"
                                    bgColor="bg-brandBlue"
                                    textColor="text-white"
                                />
                            </div>
                        </div>
                        <img
                            src={Img1}
                            className='w-[420px] absolute left-[7.2rem] sm:left-[6.8rem] lg:left-[7rem] lg:bottom-[0px] bottom-0' />
                    </div>

                    {/* second col  */}
                    <div className='py-10 pl-5 bg-gradient-to-br from-heading/95 to-heading/95 dark:from-brandWhite dark:to-bgdark/90  text-brandWhite 
                rounded-3xl relative h-[320px] flex items-end'>
                        <div>
                            <div className='mb-4'>
                                <p className='text-xl mb-[2px] text-primary'>Indulge </p>
                                <p className='text-3xl font-semibold mb-[2px]'>With </p>
                                <p className='text-4xl xl:text-5xl font-bold opacity-40 mb-2' >Woody Attar</p>
                                <Button
                                    text="Browse"
                                    bgColor="bg-primary"
                                    textColor="text-white"
                                />
                            </div>
                        </div>
                        <img
                            src={Img2}
                            className='w-[200px] absolute -right-10 lg:bottom-[-10px] bottom-0' />
                    </div>
                    {/* third col  */}
                    <div className='col-span-2 py-10 pl-5 bg-gradient-to-br from-heading/95 to-heading/95 dark:from-brandWhite dark:to-bgdark/90  text-brandWhite 
                rounded-3xl relative h-[320px] flex items-start'>
                        <div>
                            <div className='mb-4'>
                                <p className='text-xl mb-[2px] text-primary'>Indulge </p>
                                <p className='text-3xl font-semibold mb-[2px]'>With </p>
                                <p className='text-4xl xl:text-5xl font-bold opacity-40 mb-2'>Musk Attar</p>
                                <Button
                                    text="Browse"
                                    bgColor="bg-primary"
                                    textColor="text-white"
                                />
                            </div>
                        </div>
                        <img
                            src={Img3}
                            className='w-[160px] absolute right-[10rem] bottom-0' />
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Category;