import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { id, name, img, description } = service;
    return (
        <Col >

            <Card className='h-100'>
                <img className='img-fluid' src={img} alt="" />
                <div className='p-3'>
                    <h4>{name}</h4>
                    <p>{description.slice(0, 150)}...</p>
                    <Link to={`/services/${id}`}>
                        <button className="btn btn-primary">See Details</button>
                    </Link>
                </div>
            </Card>

        </Col>
    );
};

export default Service;