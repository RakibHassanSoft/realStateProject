import React, { useEffect, useState } from 'react';
import Filter from '../../components/Filter/Filter';
import Cards from '../../components/Cards/Cards';
import Top from '../../components/Top/Top';
import {useLoaderData} from "react-router-dom";
import Galary from '../../components/Galary/Galary';
// import Pricing from '../../components/Pricing/Pricing';

const Properties = () => {
    const fdata = useLoaderData();
    // console.log(fdata)
    const [status,setStatus] = useState(0)
    const [segment,setSegment] = useState('')
    const [area,setArea] = useState('')
    const [Location,setLocation] = useState('')
    const [minPrice,setMinPrice] = useState(0)
    const [maxPrice,setMaxPrice] = useState(0)
    const [click,setClick] =useState(false);
     //filtering data
    
     const criteria ={status, area, Location, segment, minPrice, maxPrice}
    //  console.log(criteria)


    //fucntion to filter
    function filterPropertiesByStatusAndArea(properties, status, minArea,minPrice,Location,maxPrice) {
        return properties.filter(property => 
            property.status === status && property.area >= minArea  && property.price >=minPrice && property.price<=maxPrice && property.location.toLowerCase().includes(Location.trim().toLowerCase())
        );
    }
    
    const filteredProperties = filterPropertiesByStatusAndArea(fdata, status, area,minPrice,Location,maxPrice);
    
    // console.log(filteredProperties);
    


    


      const setState = {setStatus,setSegment,setArea,setLocation,setMinPrice,setMaxPrice,setClick}
    return (
        <div>
            <h1></h1>
            <Top></Top>
         <Filter  setState={setState}></Filter>
       {
        click === true
        ? ( <Cards data={filteredProperties}></Cards>)
        :( <Cards data={fdata}></Cards>)

       }
        <Galary></Galary>
        {/* <Pricing></Pricing> */}
        </div>
    );
};

export default Properties;