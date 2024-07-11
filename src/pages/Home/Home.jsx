import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Hero from '../../components/Hero/Hero';
import Login from '../../components/Login/Login';
import SignIn from '../../components/SignIn/SignIn';
import Contract from '../../components/Contract/Contract';
import Card from '../../components/Card/Card';
import PageNotFound from '../PageNotFound/PageNotFound';
import Carousel from '../../components/Carousel/Carousel';
import Cards from '../../components/Cards/Cards';
import Filter from '../../components/Filter/Filter';
import MultiCarousel from '../../components/MultiCarosal/MultiCarosal';
import Details from '../../components/Details/Details';
// import Loading from '../../components/Loading/Loading';
import { useLoaderData } from "react-router-dom";
import HearSmall from '../../components/HearSmall/HearSmall';
import Pricing from '../../components/Pricing/Pricing';
import Team from '../../components/Team/Team';
import Comment from '../../components/Commnt/Comment';
import TotalView from '../../components/TotalView/TotalView';
import WorkStategy from '../../components/WorkStategy/WorkStategy';
import Map from '../../components/Map/Map';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Home = () => {




    const data = useLoaderData();
    // console.log(data)
    const title = "Our service category"
    const dis = "Here you will be able to see many kind of residential area. Here you can choose your single-family housing, townhouses,senior living communities, etc . We will give you the best place in affortable prices"

    return (
        <div  >
            <div data-aos="fade-up">
                <Hero></Hero>

            </div>

            <div className='bg-green-50  rounded-xl w-11/12 m-auto mt-10 pt-3' data-aos="zoom-out">

                <HearSmall title={title} dis={dis}></HearSmall>
                <Cards data={data}></Cards>

            </div>
            <div data-aos="fade-right">

                <MultiCarousel></MultiCarousel>
            </div>
            <div data-aos="fade-up">

                <Team></Team>
            </div>
            <div data-aos="zoom-in">

                <WorkStategy></WorkStategy>
            </div>

            <div data-aos="zoom-out">

                <Pricing></Pricing>
            </div>
            <div data-aos="fade-left">

                <Contract></Contract>
            </div>
            <div data-aos="fade-right">

                <Comment></Comment>
            </div>

  <Map></Map>









        </div>
    );
};

export default Home;