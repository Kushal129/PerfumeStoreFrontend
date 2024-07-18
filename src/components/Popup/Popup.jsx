import React from 'react';
import { IoCloseOutline } from 'react-icons/io5';
import Button from '../Shared/Button';
import { TbPerfume } from "react-icons/tb";

const Popup = ({ orderPopup, handleOrderPopup }) => {
    return (
        <>
            {
                orderPopup && (
                    <div>
                        <div className='h-screen w-screen fixed top-0 left-0 bg-popupbg z-50 backdrop-blur-sm'>
                            <div className='w-[300px] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-md bg-brandWhite dark:bg-primary duration-200 text-primary dark:text-brandWhite rounded-xl p-2'>
                                {/* Header section  */}
                                <div className='flex items-center justify-between p-3'>
                                    <h1 className='text-2xl flex items-center'>
                                        Order Now <TbPerfume className='ml-2' />
                                    </h1>
                                    <div>
                                        <IoCloseOutline
                                            onClick={handleOrderPopup}
                                            className='text-2xl cursor-pointer hover:text-brandBlue dark:hover:text-brandlightcyan' />
                                    </div>
                                </div>
                                <hr className='mt-2 w-full border-1 border-primary dark:border-brandWhite/60' />
                                {/* Form section  */}
                                <div className='p-3'>
                                    <div className="relative h-11 w-full min-w-[200px] mt-2 mb-2">
                                        <input placeholder="Full Name"
                                            className="peer h-full w-full border-b border-gray-400 dark:border-gray-600 bg-transparent pt-4 pb-1.5 font-sans text-[11px]
                                            font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200
                                            focus:border-gray-600 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 
                                            focus:placeholder:opacity-100 dark:focus:border-brandWhite dark:peer-focus:text-brandWhite" />
                                        <label
                                            className="after:content[''] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full 
                                            select-none !overflow-visible truncate text-[14px] font-normal leading-tight text-gray-500 
                                            transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 
                                            after:border-b-2 after:border-gray-400 after:transition-transform after:duration-300 
                                            peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-gray-500 dark:peer-placeholder-shown:text-gray-400 
                                            peer-focus:text-[14px] peer-focus:leading-tight peer-focus:text-primary peer-focus:after:scale-x-100 peer-focus:after:border-primary
                                            peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-gray-400 
                                            dark:peer-focus:text-brandWhite dark:peer-focus:after:border-brandWhite">Full Name
                                        </label>
                                    </div>

                                    <div className="relative h-11 w-full min-w-[200px] mt-3 mb-3">
                                        <input placeholder="Email" type='email'
                                            className="peer h-full w-full border-b border-gray-400 dark:border-gray-600 bg-transparent pt-4 pb-1.5 font-sans text-[11px]
                                            font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200
                                            focus:border-gray-600 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 
                                            focus:placeholder:opacity-100 dark:focus:border-brandWhite dark:peer-focus:text-brandWhite" />
                                        <label
                                            className="after:content[''] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full 
                                            select-none !overflow-visible truncate text-[14px] font-normal leading-tight text-gray-500 
                                            transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 
                                            after:border-b-2 after:border-gray-400 after:transition-transform after:duration-300 
                                            peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-gray-500 dark:peer-placeholder-shown:text-gray-400 
                                            peer-focus:text-[14px] peer-focus:leading-tight peer-focus:text-primary peer-focus:after:scale-x-100 peer-focus:after:border-primary
                                            peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-gray-400 
                                            dark:peer-focus:text-brandWhite dark:peer-focus:after:border-brandWhite">Email
                                        </label>
                                    </div>

                                    <div className="relative h-11 w-full min-w-[200px] mt-3 mb-5">
                                        <input placeholder="Address" type='text'
                                            className="peer h-full w-full border-b border-gray-400 dark:border-gray-600 bg-transparent pt-4 pb-1.5 font-sans text-[11px]
                                            font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200
                                            focus:border-gray-600 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 
                                            focus:placeholder:opacity-100 dark:focus:border-brandWhite dark:peer-focus:text-brandWhite" />
                                        <label
                                            className="after:content[''] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full 
                                            select-none !overflow-visible truncate text-[14px] font-normal leading-tight text-gray-500 
                                            transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 
                                            after:border-b-2 after:border-gray-400 after:transition-transform after:duration-300 
                                            peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-gray-500 dark:peer-placeholder-shown:text-gray-400 
                                            peer-focus:text-[14px] peer-focus:leading-tight peer-focus:text-primary peer-focus:after:scale-x-100 peer-focus:after:border-primary
                                            peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-gray-400 
                                            dark:peer-focus:text-brandWhite dark:peer-focus:after:border-brandWhite">Address
                                        </label>
                                    </div>

                                    <div className='flex justify-center'>
                                        <Button
                                            text="Order Now"
                                            bgColor={"bg-primary"}
                                            w={"w-md"}
                                            textColor={"text-brandWhite"}
                                            handleClick={handleOrderPopup}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    );
};

export default Popup;
