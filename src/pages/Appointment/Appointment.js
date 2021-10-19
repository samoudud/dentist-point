import React from 'react';

const Appointment = () => {
    return (
        <section className=" form-bg" >
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card bg-transparent shadow-lg" style={{ borderRadius: '1rem' }} >
                            <div className="card-body p-5 text-center">

                                <h3 className="mb-5">Book Your Appointment</h3>
                                <div className="form-outline mb-4">
                                    <input type="name" id="text" placeholder='your name' className="form-control form-control-lg" />
                                </div>

                                <div className="form-outline mb-4">
                                    <input type="email" id="email" placeholder='your email' className="form-control form-control-lg" />
                                </div>

                                <div className="form-outline mb-4">
                                    <input type="text" id="number" placeholder='your phone number' className="form-control form-control-lg" />
                                </div>
                                <div className="form-outline mb-4">
                                    <input type="date" id="date" placeholder='appointment date' className="form-control form-control-lg" />
                                </div>
                                <div className="form-outline mb-4">
                                    <input type="time" id="time" placeholder='appointment time' className="form-control form-control-lg" />
                                </div>

                                <select className="form-select mb-4" >
                                    <option >Select Service</option>
                                    <option >TOOTH WHITENING</option>
                                    <option >TEETH IMPLANTS</option>
                                    <option >DENTAL SURGERY</option>
                                    <option >ROOT CANAL</option>
                                    <option >TOOTH INVISALIGN</option>
                                </select>
                                <button className="btn btn-primary btn-lg btn-block" type="submit">Book</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Appointment;
