import React from 'react';

const TopA = () => {
    return (
        <div className="w-full text-white bg-cover bg-center bg-blend-multiply" style={{ backgroundImage: "url('https://source.unsplash.com/random/640x480')" }}>
            <div className="container flex flex-col items-center justify-center p-4 py-20 mx-auto md:p-10">
                <h1 className="text-5xl font-semibold leading-none text-center text-gray-800">Get Our Updates</h1>
                <p className="pt-2 pb-8 text-xl text-center text-gray-800 dark:text-gray-50">Find out about events and other news</p>
                <div className="flex flex-row w-full max-w-md">
                    <input type="text" placeholder="example@email.com" className="w-3/5 p-3 rounded-l-lg sm:w-2/3" />
                    <button type="button" className="w-2/5 p-3 font-semibold text-gray-50 rounded-r-lg sm:w-1/3 bg-violet-600">Subscribe</button>
                </div>
            </div>
        </div>
    );
};

export default TopA;
