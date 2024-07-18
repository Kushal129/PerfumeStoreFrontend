import React from 'react';
import Img1 from "../../assets/images/Perfume_img/pr1.png";
import Img2 from "../../assets/images/Perfume_img/pr2.png";
import Img3 from "../../assets/images/Perfume_img/pr3.png";
import Button from '../Shared/Button';

const Category = () => {
    return (
        <div className='py-8'>
            <div className='container mx-auto'>
                <div className='grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6 gap-2 m-2'>
                    {/* First Card Component */}
                    <div className='bg-gradient-to-br from-primarycat/90 to-primary/90 dark:from-brandWhite/90 dark:to-bgdark/90 text-brandWhite rounded-3xl h-[320px] flex flex-col justify-between p-5 relative'>
                        <div>
                            <p className='text-xl mb-[2px] text-brandBlue'>Indulge </p>
                            <p className='text-3xl font-semibold mb-[2px]'>With </p>
                            <p className='text-3xl lg:text-5xl sm:text-[20px] font-bold opacity-40 mb-2'>HACOSTE WHITE</p>
                        </div>
                        <div className='mt-3 lg:mt-3'>
                            <Button
                                text="Browse"
                                bgColor="bg-transparent"
                                textColor="text-brandPurplelight"
                                border="border-brandPurplelight"
                                className="text-sm lg:text-base"
                            />
                        </div>
                        <img
                            src={Img1}
                            className='absolute -bottom-5 -right-[50px] lg:-right-[50px] h-full object-contain p-5 lg:w-[230px] transition-transform duration-500 hover:scale-110'
                        />
                    </div>

                    {/* Second Card Component */}
                    <div className='bg-gradient-to-br from-primarygcat2/90 to-heading/90 dark:from-brandWhite/90 dark:to-bgdark/90 text-brandWhite rounded-3xl h-[320px] flex flex-col justify-between p-5 relative'>
                        <div>
                            <p className='text-xl mb-[2px] text-heading'>Indulge </p>
                            <p className='text-3xl font-semibold mb-[2px]'>With </p>
                            <p className='text-4xl xl:text-5xl font-bold opacity-40 mb-2'>SEA ROSE</p>
                        </div>
                        <div className='mt-3 lg:mt-3'>
                            <Button
                                text="Browse"
                                bgColor="bg-transparent"
                                textColor="text-brandlightcyan"
                                border="border-brandlightcyan"
                                className="text-sm lg:text-base"
                            />
                        </div>
                        <img
                            src={Img2}
                            className='absolute -bottom-5 -right-[50px] lg:-right-[50px] h-full object-contain p-5 lg:w-[230px] transition-transform duration-600 hover:scale-110'
                        />
                    </div>

                    {/* Third Card Component (Spanning Two Columns) */}
                    <div className='bg-gradient-to-br from-primarycat/90 to-primary/90 dark:from-brandWhite/90 dark:to-bgdark/90 text-brandWhite rounded-3xl h-[320px] flex flex-col justify-between p-5 relative col-span-2'>
                        <div>
                            <p className='text-xl mb-[2px] text-brandBlue'>Indulge </p>
                            <p className='text-3xl font-semibold mb-[2px]'>With </p>
                            <p className='text-4xl xl:text-5xl font-bold opacity-40 mb-2'>H.AVANTUS</p>
                        </div>
                        <div className='mt-3 lg:mt-3'>
                            <Button
                                text="Browse"
                                bgColor="bg-transparent"
                                textColor="text-brandPurplelight"
                                border="border-brandPurplelight"
                                className="text-sm lg:text-base"
                            />
                        </div>
                        <img
                            src={Img3}
                            className='absolute bottom-0 right-0 h-full object-contain p-5 lg:w-[320px] w-[220px] transition-transform duration-700 hover:scale-110'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;
