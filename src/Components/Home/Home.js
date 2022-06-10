import React from 'react';
import Banner from './Banner';
import ContactMe from './ContactMe';
import MeCard from './MeCard';
import Projects from './Projects';
import Skills from './Skills';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Skills></Skills>
            <MeCard ></MeCard>
            <Projects></Projects>
            <ContactMe></ContactMe>
        </div>
    );
};

export default Home;