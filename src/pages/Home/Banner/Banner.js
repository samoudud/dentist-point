import React from 'react';
import './Banner.css'
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className='banner-container'>
            <div className=' container banner-text'>
                <h1>Make Your Smile Beautiful And Be Happy</h1>
                <h4>Anyone who has suffered the pain of toothache will never say an aching tooth is better than taking a little time out for your oral health regularly.</h4>
                <Link to='/appointment'><button className='btn btn-primary py-3 mt-4'>Get an Appointment</button></Link>
            </div>
        </div>
    );
};

export default Banner;