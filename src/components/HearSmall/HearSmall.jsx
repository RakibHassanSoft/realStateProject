import React from 'react';

const HearSmall = (props) => {
    const {title, dis} = props;
    return (
        <div className='lg:w-1/2 m-auto flex flex-col justify-center items-center mb-10 mt-10'>
            <h1 className='text-3xl lg:text-6xl text-center font-bold text-blue-600 mb-3'>{title}</h1>
            <p className='font-bold text-black text-center'>{dis}</p>
            
        </div>
    );
};

export default HearSmall;
