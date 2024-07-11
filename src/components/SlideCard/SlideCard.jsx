import React from 'react';

const SlideCard = ({d}) => {
    const {price ,estate_title ,image,location}= d;
    return (
        <div className="card m-4 p-4  bg-white text-black shadow-xl">
            <figure className=" flex flex-col relative">
                
                <img
                    className="transition-transform duration-300 ease-out transform hover:scale-125  h-[19rem]"
                    src={image}
                    alt="Shoes"
                />
                 {/* <div className='grid grid-cols-4 h-10 items-center relative border w-full bg-opacity-50 bg-white -top-80'>

                 </div> */}
              
            </figure>
            
            <div className="mt-5 flex  justify-between ">
                <div className='flex flex-col'>
                   <h1 className='text-2xl font-sans'>{estate_title}</h1>
                   <h1 className='text-xl font-mono'>{location}</h1>
                </div>
                <div className='flex flex-col'>
                   <h1 className='text-3xl font-bold'>${price/1000}K</h1>
                   <h1 className='text-white p-2 text-center text-2xl bg-blue-500 rounded-r-xl'>Sold</h1>
                </div>
            </div>
            <div className='flex justify-center'>
              <button className='btn  text-white bg-blue-500' disabled>View Property</button>
            </div>
        </div>
    );
};

export default SlideCard;
