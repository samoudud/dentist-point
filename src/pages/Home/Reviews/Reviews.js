import React from 'react';
import './Reviews.css';
import Slider from "react-slick";

const Reviews = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className='review-container mt-5'>
            <div className="container pb-5">
                <h2 className='section-title pt-4'>What Client Says</h2>
                <Slider {...settings}>
                    <div className=' review-card   shadow-lg fs-4 p-4'>
                        <p>Just have to say a very caring Dentist who is excellent in reassuring their patients and gives excellent service, explains what they are doing every step of the way. The best Dentist I have ever seen!</p>
                        <div className='fs-5'>
                            <p>--MR. Rahim</p>
                            <p><i className="fas fa-star orange"></i><i className="fas fa-star orange"></i><i className="fas fa-star orange"></i><i className="fas fa-star orange"></i><i className="fas fa-star orange"></i></p>
                        </div>


                    </div>
                    <div className='review-card   shadow fs-4 p-4'>
                        <p>Dr. Shihabur Rahman and his staff are AMAZING! My daughters and I came in for our first visit and I mentioned that my older daughter had anxiety when it came to dentists. Best Dentist we have ever gone to!</p>
                        <div className='fs-5'>
                            <p>--MR. Karim</p>
                            <p><i className="fas fa-star orange"></i><i className="fas fa-star orange"></i><i className="fas fa-star orange"></i><i className="fas fa-star orange"></i><i className="fas orange fa-star-half-alt"></i></p>
                        </div>

                    </div>
                    <div className='review-card  shadow fs-4 p-4'>
                        <p>Just have to say a very caring Dentist who is excellent in reassuring their patients and gives excellent service, explains what they are doing every step of the way. The best Dentist I have ever seen!</p>
                        <div className='fs-5'>
                            <p>--MS. Karina</p>
                            <p><i className="fas fa-star orange"></i><i className="fas fa-star orange"></i><i className="fas fa-star orange"></i><i className="fas fa-star orange"></i><i className="far orange fa-star"></i></p>
                        </div>
                    </div>
                </Slider >
            </div>
        </div >
    );
};

export default Reviews;