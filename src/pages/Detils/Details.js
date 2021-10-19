import React from 'react';
import './Details.css';
import { Button, Spinner } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useServices from '../../hooks/useServices';


const Details = () => {
    const { serviceId } = useParams();
    const { services, isLoading } = useServices();
    if (isLoading) {
        return <>
            <Spinner animation="border" size="sm" />
            <Spinner animation="border" />
        </>
    }
    // console.log(services)
    const service = services.filter(service => service.id === serviceId);
    const { img, name, description, price } = service[0];
    return (
        <div className=' details-container py-5'>
            <div className='details-card shadow-lg  mx-auto p-3'>
                <div>
                    <img className='img-fluid' src={img} alt="" />
                </div>
                <h4 className='mt-3'>{name}</h4>
                <h5 className='text-primary'>Service fee: ${price}</h5>
                <p>{description}</p>

                <Link to='/appointment'>
                    <Button variant='primary'>Book the service</Button>
                </Link>
            </div>
        </div>
    );
};

export default Details;