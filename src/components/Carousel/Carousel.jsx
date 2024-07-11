import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Carousel = () => {
    useEffect(() => {
        // Initialize AOS when component mounts
        AOS.init({
            duration: 1000, // Default duration for all animations
            easing: 'ease-in-out', // Default easing for all animations
            once: true // Only run animations once
        });
    }, []);

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="grid grid-cols-1 gap-24">
                <div className="card" data-aos="fade-up">
                    <h3>This element fades up</h3>
                </div>
                <div className="card" data-aos="zoom-out">
                    <h3>This element zooms out</h3>
                </div>
                <div className="card" data-aos="flip-left">
                    <h3>This element flips left</h3>
                </div>
                <div className="card" data-aos="fade-down">
                    <h3>This element fades down</h3>
                </div>
                <div className="card" data-aos="fade-right">
                    <h3>This element fades right</h3>
                </div>
                <div className="card" data-aos="zoom-in">
                    <h3>This element zooms in</h3>
                </div>
                <div className="card" data-aos="flip-up">
                    <h3>This element flips up</h3>
                </div>
                <div className="card" data-aos="fade-left">
                    <h3>This element fades left</h3>
                </div>
                <div className="card" data-aos="zoom-out-up">
                    <h3>This element zooms out up</h3>
                </div>
                <div className="card" data-aos="fade-zoom-in">
                    <h3>This element fades and zooms in</h3>
                </div>
                {/* Add more cards with different AOS effects */}
            </div>
        </div>
    );
};

export default Carousel;
