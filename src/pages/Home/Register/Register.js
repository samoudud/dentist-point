import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const { createAccountWithEmail, error, signInWithGoogle } = useAuth();
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [uName, setName] = useState('');


    const handleEmailChange = e => {
        setEmail(e.target.value);
    }
    const handlePassChange = e => {
        setPass(e.target.value);
    }
    const handleNameChange = e => {
        setName(e.target.value);
    }

    const handleRegister = () => {
        createAccountWithEmail(email, pass, uName);
    }


    return (
        <div>
            <section className="vh-100 form-bg" >
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                            <div className="card bg-transparent shadow-lg" style={{ borderRadius: '1rem' }} >
                                <div className="card-body p-5 text-center">

                                    <h3 className="mb-5">Register</h3>
                                    <div className="form-outline mb-4">
                                        <input onBlur={handleNameChange} type="text" id="name" placeholder='your name' className="form-control form-control-lg" required />
                                    </div>

                                    <div className="form-outline mb-4">
                                        <input onBlur={handleEmailChange} type="email" id="email" placeholder='your email' className="form-control form-control-lg" required />
                                    </div>

                                    <div className="form-outline mb-4">
                                        <input onBlur={handlePassChange} type="password" id="password" placeholder='your password' className="form-control form-control-lg" required />
                                    </div>
                                    {
                                        error && <p className='text-danger'>{error}</p>
                                    }

                                    <button onClick={handleRegister} className="btn btn-primary btn-lg btn-block" type="submit">Register</button>

                                    <hr className="my-4" />
                                    <p>Already have an account? <Link to='/login'>Login</Link></p>

                                    <button onClick={signInWithGoogle} className="btn btn-lg btn-block btn-primary" style={{ backgroundColor: '#dd4b39' }} type="submit"><i className="fab fa-google me-2"></i> Sign in with google</button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Register;