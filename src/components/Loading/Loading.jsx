import React from 'react';

const loading = () => {
    return (
        <div className='w-24  flex justify-center'>
            <div className="w-16 h-16 border-4 rounded-full animate-ping dark:border-green-600 ">
            <div className="w-12 h-12border-4 rounded-full animate-ping dark:border-green-600 ">
            </div>
            </div>
        </div>
    );
};

export default loading;