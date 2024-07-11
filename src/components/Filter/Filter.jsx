import React from 'react';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';



const Filter = (props) => {
    useEffect(() => {
        // Initialize AOS when component mounts
        AOS.init({
            duration: 1000, // Default duration for all animations
            easing: 'ease-in-out', // Default easing for all animations
            once: true // Only run animations once
        });
    }, []);

    const { setState } = props;
    const {setStatus,setSegment,setArea,setLocation,setMinPrice,setMaxPrice,setClick} =setState;
    const handlSubmit = e => {
        e.preventDefault();
        const status = e.target.status.value;
        const area = e.target.Area.value;
        const Location = e.target.Location.value;
        const Segment = e.target.Segment.value;
        const minPrice = e.target.minPrice.value;
        const maxPrice = e.target.maxPrice.value;
        // console.log(status, area, Location, Segment, minPrice, maxPrice);

    //  const result ={status, area, Location, Segment, minPrice, maxPrice}
     
     setStatus(status);
     setArea(area);
     setLocation(Location);
     setSegment(Segment);
     setMinPrice(minPrice);
     setMaxPrice(maxPrice);
     setClick(true)
    }
    
    
    return (
        <div  data-aos="zoom-out"  className=' flex flex-col justify-center w-11/12 m-auto mb-20'>
            <h1 className='text-6xl w-[30%] text-black m-auto text-center font-bold mt-16 mb-16 font-mono hover:bg-blue-600 hover:text-white hover:rounded-full'>Search here</h1>
            <form action="" onSubmit={handlSubmit}>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4'>

                    <div>
                        <h1 className='text-2xl text-center font-bold border bg-blue-600 text-white rounded-t-xl font-mono'>Status</h1>
                        <select className=" text-center text-blue-600 font-bold select select-bordered select-lg w-full " name='status'>
                            <option >Rent</option>
                            <option >Sale</option>

                        </select>
                    </div>
                    <div>

                        <h1 className='text-2xl text-center font-bold border bg-blue-600 text-white rounded-t-xl font-mono'>Segment</h1>
                        <select className="text-center text-blue-600 font-bold select select-bordered select-lg w-full " name='Segment'>

                            <option value='Vacation'>Vacation</option>
                            <option value='SingleFamily'>Single family</option>
                            <option value='JoinFamily'>Join family</option>
                            <option value='HoseWithOffice'>Hose with office</option>
                            <option value='HouseWithShop'>House with shop</option>
                            <option value='ColdHouse'>Cold House</option>
                        </select>

                    </div>
                    <div>
                        <h1 className='text-2xl text-center font-bold border bg-blue-600 text-white rounded-t-xl font-mono'>Location</h1>
                        <select className="text-center text-blue-600 font-bold select select-bordered select-lg w-full " name='Location'>
                            <option  >California</option>
                            <option>New York</option>
                            <option> Texas</option>
                            <option>lorida</option>
                            <option>Illinois</option>
                            <option>Hawaii</option>
                            <option>Colorado</option>
                            <option>Thailand</option>
                        </select>



                    </div>
                    <div>
                        <h1 className='text-2xl text-center font-bold border bg-blue-600 text-white rounded-t-xl font-mono'>Area</h1>
                        <select className=" text-center text-blue-600 font-bold select select-bordered select-lg w-full " name='Area'>
                            <option>1500</option>
                            <option>2000</option>
                            <option>2500</option>
                            <option>3500</option>
                            <option>5000</option>
                            <option>10000</option>
                            <option>20000</option>
                            <option>50000</option>


                        </select>



                    </div>

                    <div>
                        <h1 className='text-2xl text-center font-bold border bg-blue-600 text-white rounded-t-xl font-mono'>Min</h1>
                        <select className=" text-center text-blue-600 font-bold select select-bordered select-lg w-full" name='minPrice'>
                            <option value="2000">$2,000</option>
                            <option value="5000">$5,000</option>
                            <option value="10000">$10,000</option>
                            <option value="20000">$20,000</option>
                            <option value="50000">$50,000</option>
                            <option value="100000">$100,000</option>
                        </select>

                    </div>
                    <div>
                        <h1 className='text-2xl text-center font-bold border bg-blue-600 text-white rounded-t-xl font-mono'>Max</h1>

                        <select className=" text-center text-blue-600 font-bold select select-bordered select-lg w-full" name='maxPrice'>
                            <option value="50000">$50,000</option>
                            <option value="100000">$100,000</option>
                            <option value="200000">$200,000</option>
                        </select>
                    </div>
                    <div className='flex flex-col justify-center '>
                        <h1 className='text-2xl text-center font-mono border bg-blue-600 text-white rounded-t-xl font-bold '>Search</h1>

                        <button type='submit' className=" btn select-lg w-full bg-white text-2xl text-blue-800">
                            Click
                        </button>
                    </div>
                  
                </div>
            </form>

        </div>
    );
};

export default Filter;