import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

//  Sections 
import Hero from '../components/Home/Hero';
import FeaturedProjects from '../components/Home/Projects';
import Stats from  '../components/Home/Stats';
import Services from '../components/Home/Services';
import Reviews from '../components/Home/Reviews';
import Faqs from '../components/Home/Faqs';
import Cta from '../components/CtaFooter';

const Home = () => {
    return (
        <>
            <Hero />
            <FeaturedProjects />
            <Stats />
            <Services />
            <Reviews />
            <Faqs />
            <Cta />
        </>
    );
};

export default Home;
