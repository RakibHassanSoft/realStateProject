// Map.jsx
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Map = () => {
    useEffect(() => {
        // Initialize AOS when component mounts
        AOS.init({
            duration: 800, // Default duration for all animations
            easing: 'ease-in-out', // Default easing for all animations
            once: true // Only run animations once
        });
    }, []);

    const center = [51.505, -0.09]; // Latitude and Longitude of the center of the map

    return (
        <div  data-aos="zoom-in" className='mt-10 mb-10'>
            <div>
               <h1 className='text-4xl text-center m-4 text-blue-500 font-bold font-serif'>Find your location here</h1>
            </div>
            <MapContainer center={center} zoom={13} style={{ height: "400px", width: "100%" }}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={center}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
};

export default Map;
