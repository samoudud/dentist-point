import React from 'react';
import Banner from '../Banner/Banner';
import Doctors from '../Doctors/Doctors';
import OverView from '../OverView/OverView';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <OverView></OverView>
            <Services></Services>
            <Doctors></Doctors>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;