import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css'
import logo from '../../../images/d-logo.png'
import { HashLink } from 'react-router-hash-link';

const Footer = () => {
    return (
        <footer className='footer py-3'>
            <div className='container footer-container ' >
                <div >
                    <NavLink to='/home'><img className='logo' src={logo} alt="" /></NavLink>
                    <p className=''>Dentist Point is on of the best dental service provider in Bangladesh since 2010.</p>
                </div>



                <div>
                    <NavLink as={HashLink} to='/home#services'><span className='text-dark fs-4'>Our Services</span></NavLink>
                    <p className='pt-2'>TOOTH WHITENING</p>
                    <p>TEETH IMPLANTS</p>
                    <p>DENTAL SURGERY</p>
                    <p>ROOT CANAL</p>
                </div>

                <div>
                    <NavLink as={HashLink} to='/'><span className='text-dark fs-4'>Direction</span></NavLink>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.062563681961!2d89.1697798154661!3d23.530252084698365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fee5e028d6172d%3A0xf30437ddb15b1a9c!2sFamily%20Dental%20Care!5e0!3m2!1sen!2sbd!4v1634649447895!5m2!1sen!2sbd" style={{ width: '100%', height: '75%', border: '0', allowfullscreen: "", loading: 'lazy' }} ></iframe>
                </div>
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


            </div>
            <div className='text-center mt-1'>
                <small>Copyright © 2021 dentist-point.com</small>
            </div>
        </footer>
    );
};

export default Footer;