import React from 'react';
import { Link } from 'react-router-dom';

const Add = () => {
    return (
        <div className='add shadow'>
            <div className=' text-white py-4'>
                <h4>Interested?</h4>
                <h2>CONTACT US AND SCHEDULE YOUR VISIT</h2>
                <Link to='/appointment'>
                    <button className="btn btn-primary shadow bg-white text-dark">Get Service</button>
                </Link>
            </div>
        </div>
    );
};

export default Add;