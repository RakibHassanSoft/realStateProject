import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';



const Card = ({d}) => {

    useEffect(() => {
        // Initialize AOS when component mounts
        AOS.init({
            duration: 800, // Default duration for all animations
            easing: 'ease-in-out', // Default easing for all animations
            once: true // Only run animations once
        });
    }, []);


    const {estate_title,id,image,price,status,location,area} = d;
    // console.log(d)
    return (
       
        <div data-aos="fade-up" className="transition ease-in-out delay-0 duration-100 hover:-translate-y-5 card  p-[.1rem]  bg-white text-black shadow-xl rounded-none">
            <figure className=" flex flex-col relative">
                
                <img
                    className="transition-transform duration-300 ease-out transform hover:scale-125  h-[19rem]"
                    style={{ widht: '928px', height: '448px' }}
                    src={image}
                    alt="Shoes"
                />
                 {/* <div className='grid grid-cols-4 h-10 items-center relative border w-full bg-opacity-50 bg-white -top-80'>

                 </div> */}
                <div className='grid grid-cols-4 h-10 items-center relative border w-full bg-opacity-50 bg-white font-serif'>
                  <div className='border text-center h-full flex justify-center items-center  '>
                            <h1 >{area} Sq Ft</h1>
                  </div>
                  <div className='border text-center h-full flex justify-center items-center'>
                            <h1>${price}</h1>
                  </div >
                  <div className='border text-center h-full flex justify-center items-center'>
                            <h1>{status}</h1>
                  </div >
                  <div className='border text-center h-full flex justify-center items-center'>
                            <h1>4</h1>
                  </div>
                </div>
            </figure>
            
            <div className="mt-5 flex  justify-between ">
                <div className='flex flex-col'>
                   <h1 className='text-2xl font-mono'>{estate_title}</h1>
                   <h1 className='text-2xl font-thin ml-1'>{location}</h1>
                </div>
                <div className='flex flex-col'>
                   <h1 className='text-3xl font-bold mr-1 text-blue-500'>${price/1000}K</h1>
                   <h1 className='bg-blue-600 rounded-r-2xl text-white p-1 pr-2 text-center'>For {status}</h1>
                </div>
            </div>
            <div className='flex justify-center'>
             <Link className='btn shadow-green-300 bg-blue-400 hover:bg-blue-600 hover:text-white mb-4 text-white' to={`/properties/${id}`}>View Property</Link>
            </div>
        </div>
    );
};

export default Card;
