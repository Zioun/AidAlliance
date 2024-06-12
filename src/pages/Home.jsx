import React from 'react';
import Carousel from '../components/Carousel';
import VolunteerNeedsNow from '../components/VolunteerNeedsNow';
import Team from '../components/Team';
import WhoWeAre from '../components/Services';
import {Helmet} from "react-helmet";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>AidAlliance - Home</title>
            </Helmet>
            <Carousel/>
            <WhoWeAre/>
            <VolunteerNeedsNow/>
            <Team/>
        </div>
    );
};

export default Home;