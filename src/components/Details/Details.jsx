import React from 'react';
import Map from '../Map/Map';
import { useLoaderData, useParams } from "react-router-dom";
import Top from '../Top/Top';
import { IoPricetagOutline } from "react-icons/io5";
const Details = () => {
    const datas = useLoaderData();
    //    console.log(datas)
    const { userID } = useParams()
    console.log(userID)
    const singleData = datas.find(d => d?.id === Number(userID));
    // console.log(singleData)
    const { estate_title, segment_name, description, price, status, area, location, facilities, image } = singleData;
    //  const {estate_title,location,price, status,description} = singleData;

    return (<div className='mt-24 mb-44 m-auto w-11/12'>
        
        {/* <></> */}
        <div className="font-[sans-serif]  ">
            <div className="p-6 lg:w-11/12 m-auto max-lg:mx-auto ">
                <div className="grid items-start grid-cols-1 lg:grid-cols-5 gap-12 border">
                    <div className="lg:col-span-3 bg-gray-100 w-full lg:sticky top-0 text-center p-8">
                        <img
                            src={image}
                            alt="Product"
                            className=" rounded object-cover"
                        />
                        <hr className="border-white border-2 my-6" />
                        <div className="flex flex-wrap gap-x-12 gap-y-6 justify-center mx-auto">
                            <img
                                src={image}
                                alt="Product1"
                                className="w-24 cursor-pointer"
                            />
                            <img
                                src={image}
                                alt="Product2"
                                className="w-24 cursor-pointer"
                            />
                            <img
                                src={image}
                                alt="Product3"
                                className="w-24 cursor-pointer"
                            />
                            <img
                                src={image}
                                alt="Product4"
                                className="w-24 cursor-pointer"
                            />
                        </div>
                    </div>
                    <div className="lg:col-span-2">
                        <h2 className="text-6xl font-extrabold  text-center text-gray-800">
                            {estate_title}
                        </h2>
                        <div className="flex flex-wrap gap-4 mt-4">
                            <p className="text-gray-800 text-4xl font-bold">{price}</p>
                            <p className="text-gray-400 text-2xl">
                                <strike>{price}</strike>{" "}
                                <span className="text-sm ml-1">Tax included</span>
                            </p>
                        </div>
                        <div className="flex space-x-2 mt-4">
                            <svg
                                className="w-5 fill-gray-800"
                                viewBox="0 0 14 13"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                            </svg>
                            <svg
                                className="w-5 fill-gray-800"
                                viewBox="0 0 14 13"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                            </svg>
                            <svg
                                className="w-5 fill-gray-800"
                                viewBox="0 0 14 13"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                            </svg>
                            <svg
                                className="w-5 fill-gray-800"
                                viewBox="0 0 14 13"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                            </svg>
                            <svg
                                className="w-5 fill-[#CED5D8]"
                                viewBox="0 0 14 13"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                            </svg>
                        </div>
                        <div className="mt-8">
                            <h3 className="text-lg font-bold text-gray-800">Description</h3>
                           <p>
                            {description}
                           </p>
                        </div>
                        <div className="mt-8 max-w-md">
                            <h3 className="text-lg font-bold text-gray-800">Reviews(10)</h3>
                            <div className="space-y-3 mt-4">
                                <div className="flex items-center">
                                    <p className="text-sm text-gray-800 font-bold">5.0</p>
                                    <svg
                                        className="w-5 fill-gray-800 ml-1"
                                        viewBox="0 0 14 13"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                    </svg>
                                    <div className="bg-gray-300 rounded w-full h-2 ml-3">
                                        <div className="w-2/3 h-full rounded bg-gray-800" />
                                    </div>
                                    <p className="text-sm text-gray-800 font-bold ml-3">66%</p>
                                </div>
                                <div className="flex items-center">
                                    <p className="text-sm text-gray-800 font-bold">4.0</p>
                                    <svg
                                        className="w-5 fill-gray-800 ml-1"
                                        viewBox="0 0 14 13"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                    </svg>
                                    <div className="bg-gray-300 rounded w-full h-2 ml-3">
                                        <div className="w-1/3 h-full rounded bg-gray-800" />
                                    </div>
                                    <p className="text-sm text-gray-800 font-bold ml-3">33%</p>
                                </div>
                                <div className="flex items-center">
                                    <p className="text-sm text-gray-800 font-bold">3.0</p>
                                    <svg
                                        className="w-5 fill-gray-800 ml-1"
                                        viewBox="0 0 14 13"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                    </svg>
                                    <div className="bg-gray-300 rounded w-full h-2 ml-3">
                                        <div className="w-1/6 h-full rounded bg-gray-800" />
                                    </div>
                                    <p className="text-sm text-gray-800 font-bold ml-3">16%</p>
                                </div>
                                <div className="flex items-center">
                                    <p className="text-sm text-gray-800 font-bold">2.0</p>
                                    <svg
                                        className="w-5 fill-gray-800 ml-1"
                                        viewBox="0 0 14 13"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                    </svg>
                                    <div className="bg-gray-300 rounded w-full h-2 ml-3">
                                        <div className="w-1/12 h-full rounded bg-gray-800" />
                                    </div>
                                    <p className="text-sm text-gray-800 font-bold ml-3">8%</p>
                                </div>
                                <div className="flex items-center">
                                    <p className="text-sm text-gray-800 font-bold">1.0</p>
                                    <svg
                                        className="w-5 fill-gray-800 ml-1"
                                        viewBox="0 0 14 13"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                    </svg>
                                    <div className="bg-gray-300 rounded w-full h-2 ml-3">
                                        <div className="w-[6%] h-full rounded bg-gray-800" />
                                    </div>
                                    <p className="text-sm text-gray-800 font-bold ml-3">6%</p>
                                </div>
                            </div>
                            <div className="flex items-start mt-8">
                                <img
                                    src="https://readymadeui.com/team-2.webp"
                                    className="w-12 h-12 rounded-full border-2 border-white"
                                />
                                <div className="ml-3">
                                    <h4 className="text-sm font-bold">John Doe</h4>
                                    <div className="flex space-x-1 mt-1">
                                        <svg
                                            className="w-4 fill-gray-800"
                                            viewBox="0 0 14 13"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                        </svg>
                                        <svg
                                            className="w-4 fill-gray-800"
                                            viewBox="0 0 14 13"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                        </svg>
                                        <svg
                                            className="w-4 fill-gray-800"
                                            viewBox="0 0 14 13"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                        </svg>
                                        <svg
                                            className="w-4 fill-[#CED5D8]"
                                            viewBox="0 0 14 13"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                        </svg>
                                        <svg
                                            className="w-4 fill-[#CED5D8]"
                                            viewBox="0 0 14 13"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                        </svg>
                                        <p className="text-xs !ml-2 font-semibold">2 mins ago</p>
                                    </div>
                                    <p className="text-xs mt-4">
                                        The service was amazing. I never had to wait that long for my
                                        food. The staff was friendly and attentive, and the delivery was
                                        impressively prompt.
                                    </p>
                                </div>
                            </div>
                            <button
                                type="button"
                                className="w-full mt-8 px-4 py-2 bg-transparent border-2 border-gray-800 text-gray-800 font-bold rounded"
                            >
                                Read all reviews
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
    );
};

export default Details;






// import React from 'react';
// import Map from '../Map/Map';
// import { useLoaderData, useParams } from "react-router-dom";
// import Top from '../Top/Top';
// import { IoPricetagOutline } from "react-icons/io5";
// const Details = () => {
//     const datas = useLoaderData();
//     //    console.log(datas)
//     const { userID } = useParams()
//     // console.log(userID)
//     const singleData = datas.find(d => d.id === 1);
//     // console.log(singleData)
//     const { estate_title, segment_name, description, price, status, area, location, facilities, image } = singleData;
//     //  const {estate_title,location,price, status,description} = singleData;

//     return (<div className='mt-24 mb-44'>

//         <Top></Top>
//         <div className='m-auto w-11/12 flex justify-between gap-4 mt-24'>

//             <div className='w-full'>
//                 <div className='flex justify-between w-full'>
//                     <div>
//                         {/* here will be title  */}
//                         <h1 className='text-6xl font-bold text-black'>Friuli-Venezia Giulia</h1>
//                         {/* location  */}
//                         <h1 className='text-2xl font-bold font-mono'>568 E 1st Ave, Miami</h1>
//                         <h1 className='text-2xl font-bold font-mono'>segment_name</h1>
//                     </div>
//                     <div className='flex flex-col'>
//                         {/* price  */}
//                         {
//                             status == 'rent' ? (
//                                 <h1 className='text-6xl font-bold text-green-400 mb-3'>$550/Month</h1>
//                             ) : (
//                                 <h1 className='text-6xl font-bold text-green-400 text-center mb-3'>$550</h1>
//                             )
//                         }
//                         {/* status  */}
//                         {
//                             status == 'rent'
//                                 ? (<h1 className='text-3xl bg-blue-500 text-bold rounded-r-[8rem] ml-44 text-center text-white p-3 '>For rent</h1>)
//                                 : (<div className=' flex items-center gap-3 text-3xl bg-blue-500 text-bold rounded-r-[8rem] ml-38 text-center text-white p-3 '> For Sell<IoPricetagOutline /></div>)

//                         }

//                     </div>
//                 </div>
//                 <div className=' m-auto'>
//                     <div className='p-2 border items-center lg:items-start  justify-around flex flex-col md:flex-row lg:flex-row '>
//                         <div className=''>
//                             <img className='w-full' src="../../../public/img/OIP (2).jpeg" alt="" />
//                         </div>
//                         <div className=' flex flex-col md:flex-row lg:flex-row gap-4 justify-between'>
//                             <div>
//                                 <img className='w-full lg:h-[20rem]' src="../../../public/img/OIP (2).jpeg" alt="" />
//                             </div>
//                             <div>
//                                 <img className='w-full lg:h-[22rem]' src="../../../public/img/OIP (2).jpeg" alt="" />
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className='mb-4'>
//                     {/* description  */}
//                     <h1 className='text-3xl text-blue-600 hover:text-green-400  mt-4 mb-4 font-bold'>Description</h1>
//                     <p className='text-black font-serif ml-4'>Khonike - Real Estate Bootstrap 5 Templateipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et lore magna iqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut quipx ea codo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolo.

//                         Khonike - Real Estate Bootstrap 5 Templateis the Best should be the consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore lore gna iqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex eacm emod tempor nt ut labore lore magna iqua. Ut enim ad minim veniamco laboris nisi ut aliqu.

//                         Khonike - Real Estate Bootstrap 5 Templateis the Best should be the consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore lore gna iqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
//                 </div>
//                 <div className='flex w-full '>
//                     <div className='w-1/3 '>
//                         <h1 className='text-3xl text-black font-mono'>facilities</h1>
//                         <div className='border p-6 flex flex-col items-center '>
//                             <p>sdfgsd </p>
//                             <p>sdfgsdf</p>
//                             <p>fgjfg</p>
//                             <p>fghfg</p>
//                         </div>
//                     </div>
//                     <div className='w-full '>
//                         <h1 className='text-3xl text-red-400 font-mono'>Amenities</h1>
//                         <div className='flex border'>
//                             <div className='  w-full p-6  flex flex-col items-center'>
//                                 <p>sdfgsd </p>
//                                 <p>sdfgsdf</p>
//                                 <p>fgjfg</p>
//                                 <p>fghfg</p>
//                             </div>
//                             <div className=' w-full p-6  flex flex-col items-center'>
//                                 <p>sdfgsd </p>
//                                 <p>sdfgsdf</p>
//                                 <p>fgjfg</p>
//                                 <p>fghfg</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 {/* map will be here  */}

//             </div>
//         </div>

//     </div>
//     );
// };

// export default Details;