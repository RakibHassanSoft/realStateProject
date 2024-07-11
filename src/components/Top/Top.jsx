import React from 'react';

const Top = () => {
    return (
        <div>
            <div className="hero max-h-screen  m-auto" style={{ backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Here you will get houses</h1>
                        <p className="mb-5">These houese are so comfortable and we are giving you the opportunioty to get this in a affortable price.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Top;