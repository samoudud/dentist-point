import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';

const Login = () => {
    const { signInWithGoogle, signInWithEmail, error } = useAuth();
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleLogin = () => {
        signInWithEmail(email, pass);
    }

    const handleEmailChange = e => {
        setEmail(e.target.value);
    }
    const handlePassChange = e => {
        setPass(e.target.value);
    }


    return (
        <section className="vh-100" >
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card shadow-2-strong" style={{ borderRadius: '1rem' }} >
                            <div className="card-body p-5 text-center">

                                <h3 className="mb-5">Sign in</h3>

                                <div className="form-outline mb-4">
                                    <input onBlur={handleEmailChange} type="email" id="email" placeholder='your email' className="form-control form-control-lg" />
                                </div>

                                <div className="form-outline mb-4">
                                    <input onBlur={handlePassChange} type="password" id="password" placeholder='your password' className="form-control form-control-lg" />
                                </div>
                                {
                                    error && <p className='text-danger'>{error}</p>
                                }


                                <button onClick={handleLogin} className="btn btn-primary btn-lg btn-block" type="submit">Login</button>

                                <hr className="my-4" />
                                <p>New to Dentist Point? <Link to='/register'>Register</Link></p>

                                <button onClick={signInWithGoogle} className="btn btn-lg btn-block btn-primary" style={{ backgroundColor: '#dd4b39' }} type="submit"><i className="fab fa-google me-2"></i> Sign in with google</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;