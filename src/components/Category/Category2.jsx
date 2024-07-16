import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Img1 from "../../assets/images/Perfume_img/at1.png"
import Img2 from "../../assets/images/Perfume_img/at2.png"
import Img3 from "../../assets/images/Perfume_img/at3.png"
import Button from '../Shared/Button';

const Category2 = () => {
    const [ref1, inView1] = useInView();
    const [ref2, inView2] = useInView();
    const [ref3, inView3] = useInView();

    return (
        <div className='py-8'>
            <div className='container mx-auto'>
                <div className='grid grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-8 m-2'>
                    {/* First Card Component (Spanning Two Columns) */}
                    <motion.div
                        ref={ref1}
                        className='bg-gradient-to-br from-primarygcat2/90 to-heading/90 dark:from-brandWhite/90 dark:to-bgdark/90 text-brandWhite rounded-3xl h-[320px] flex flex-col justify-between p-5 relative col-span-2'
                        initial={{ opacity: 0, y: 50 }}
                        animate={inView1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div>
                            <p className='text-xl mb-[2px] text-heading'>Indulge </p>
                            <p className='text-3xl font-semibold mb-[2px]'>With </p>
                            <p className='text-4xl lg:text-5xl sm:text-[20px] font-bold opacity-40 mb-2'>Floral Attar</p>
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
                        <motion.img
                            src={Img1}
                            className='absolute bottom-0 right-0 h-full object-contain p-5 lg:w-[370px]'
                            initial={{ opacity: 0, x: 50 }}
                            animate={inView1 ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                            transition={{ duration: 0.5 }}
                            whileHover={{ scale: 1.1 }}
                        />
                    </motion.div>

                    {/* Second Card Component */}
                    <motion.div
                        ref={ref2}
                        className='bg-gradient-to-br from-primarycat/90 to-primary/90 dark:from-brandWhite/90 dark:to-bgdark/90 text-brandWhite  rounded-3xl h-[320px] flex flex-col justify-between p-5 relative'
                        initial={{ opacity: 0, y: 50 }}
                        animate={inView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div>
                            <p className='text-xl mb-[2px] text-brandBlue'>Indulge </p>
                            <p className='text-3xl font-semibold mb-[2px]'>With </p>
                            <p className='text-4xl xl:text-5xl font-bold opacity-40 mb-2'>Woody Attar</p>
                        </div>
                        <div className='mt-3 lg:mt-3'>
                            <Button
                                text="Browse"
                                bbgColor="bg-transparent"
                                textColor="text-brandPurplelight"
                                border="border-brandPurplelight"
                                className="text-sm lg:text-base"
                            />
                        </div>
                        <motion.img
                            src={Img2}
                            className='absolute bottom-0 right-0 h-full object-contain p-5 lg:w-[270px] lg:-right-7'
                            initial={{ opacity: 0, x: 50 }}
                            animate={inView2 ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                            transition={{ duration: 0.6 }}
                            whileHover={{ scale: 1.1 }}
                        />
                    </motion.div>

                    {/* Third Card Component */}
                    <motion.div
                        ref={ref3}
                        className='bg-gradient-to-br from-primarygcat2/90 to-heading/90 dark:from-brandWhite/90 dark:to-bgdark/90 text-brandWhite  rounded-3xl h-[320px] flex flex-col justify-between p-5 relative'
                        initial={{ opacity: 0, y: 50 }}
                        animate={inView3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                        transition={{ duration: 0.7 }}
                    >
                        <div>
                            <p className='text-xl mb-[2px] text-heading'>Indulge </p>
                            <p className='text-3xl font-semibold mb-[2px]'>With </p>
                            <p className='text-4xl xl:text-5xl font-bold opacity-40 mb-2'>Musk Attar</p>
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
                        <motion.img
                            src={Img3}
                            className='absolute bottom-0 right-0 h-full object-contain p-5 lg:w-[270px] lg:-right-4'
                            initial={{ opacity: 0, x: 50 }}
                            animate={inView3 ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                            transition={{ duration: 0.7 }}
                            whileHover={{ scale: 1.1 }}
                        />
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Category2;