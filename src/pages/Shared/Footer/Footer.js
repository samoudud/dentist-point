import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css'
import logo from '../../../images/d-logo.png'
import { HashLink } from 'react-router-hash-link';

const Footer = () => {
    return (
        <footer className='footer py-3'>
            <div className='container footer-container align-items-center' >
                <div>
                    <NavLink as={HashLink} to='/'><span className='text-dark fs-4'>Contact Us</span></NavLink>
                    <p className='pt-2'><i className="fas fa-phone pe-2"></i> +8801732348009</p>
                    <p><i className="fas fa-envelope pe-2"></i>info@dentist-point.com</p>
                    <p><i className="fas fa-map-marked-alt pe-2"></i>Dentist Tower (Ground Floor,Kotchandpur-7330, Jhenaidah, Bangladesh</p>
                    <i className="fab fa-facebook fs-2 me-3"></i>
                    <i className="fab fa-twitter fs-2 me-3"></i>
                    <i className="fab fa-linkedin fs-2 me-3"></i>
                    <i className="fab fa-instagram fs-2 me-3"></i>

                </div>


                <div>
                    <NavLink as={HashLink} to='/home#services'><span className='text-dark fs-4'>Our Services</span></NavLink>
                    <p className='pt-2'>TOOTH WHITENING</p>
                    <p>TEETH IMPLANTS</p>
                    <p>DENTAL SURGERY</p>
                    <p>ROOT CANAL</p>
                </div>
                <div >
                    <NavLink to='/home'><img className='logo' src={logo} alt="" /></NavLink>
                    <p className=''>Dentist Point is on of the best dental service provider in Bangladesh since 2010.</p>
                </div>


            </div>
            <div className='text-center mt-1'>
                <small>Copyright © 2021 dentist-point.com</small>
            </div>
        </footer>
    );
};

export default Footer;