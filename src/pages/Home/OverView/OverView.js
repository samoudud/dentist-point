import React from 'react';
import './OverView.css'

const OverView = () => {
    return (
        <div className='container overview-container'>
            <div className='overview   shadow text-dark'>
                <div className='text-center border-r '>
                    <p><i className="fas fa-ambulance fs-1 text-dark"></i></p>
                    <h4>Emergency Help</h4>
                    <p></p>
                </div>
                <div className='text-center border-r '>
                    <p><i className="fas fa-door-open fs-1 text-dark"></i></p>
                    <h4>24/7 Opened</h4>
                </div>
                <div className='text-center border-r '>
                    <p><i className="fas fa-trophy fs-1 text-dark"></i></p>
                    <h4>Professional Staff</h4>
                </div>
                <div className='text-center '>
                    <p><i className="fas fa-dollar-sign fs-1 text-dark"></i></p>
                    <h4>Fair Prices</h4>
                </div>
            </div>

        </div>
    );
};

export default OverView;