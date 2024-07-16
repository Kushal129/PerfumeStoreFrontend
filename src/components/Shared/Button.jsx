import React from 'react';

const Button = ({ text, bgColor, textColor, hocolor, border, handler = () => {} }) => {
    return (
        <button className={` ${bgColor} ${textColor} border ${border} cursor-pointer hover:bg-${hocolor} hover:scale-105 duration-300 py-2 px-8 rounded-full relative z-10 dark:bg-brandWhite dark:text-primary`}>
            {text}
        </button>
    );
};

export default Button;
