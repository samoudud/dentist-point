import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Doctor = (props) => {
    const { img, name, description } = props.dentist;
    return (
        <Col >
            <Card className='add text-white'>
                <img className='img-fluid' src={img} alt="" />
                <div className='p-3'>
                    <h4>{name}</h4>
                    <p>{description}</p>
                    <Link to='/appointment'>
                        <button className="btn btn-primary bg-danger">Get Service</button>
                    </Link>
                </div>
            </Card>

        </Col>
    );
};

export default Doctor;