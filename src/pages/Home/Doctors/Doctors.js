import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import doc1 from '../../../images/doctor/doctor1.jpg';
import doc2 from '../../../images/doctor/doctor2.jpg';
import doc3 from '../../../images/doctor/doctor3.jpg';
import doc4 from '../../../images/doctor/doctor4.jpg';

const Doctors = () => {
    const dentists = [
        { name: 'Dr. Shihabur', role: 'Dental Surgeon', description: 'Helping patients achieve good dental health & beautiful smile is a privilege & responsibility', img: doc1 },
        { name: 'Dr. Emma Beckett', role: 'Dentist', description: 'Helping patients achieve good dental health & beautiful smile is a privilege & responsibility', img: doc2 },
        { name: 'Dr. Farhana', role: '', description: 'Helping patients achieve good dental health & beautiful smile is a privilege & responsibility', img: doc3 },
        { name: 'Dr. Tamanna', role: 'Dental Surgeon', description: 'Helping patients achieve good dental health & beautiful smile is a privilege & responsibility', img: doc4 }
    ]
    return (
        <div className='container my-5'>
            <h2 className='section-title'>Meet Our Doctors</h2>
            <Row xs={1} md={4} className="g-4 shadow px-2 py-3">
                {
                    dentists.map(dentist => {
                        return (
                            <Col >
                                <Card className='add text-white'>
                                    <img className='img-fluid' src={dentist.img} alt="" />
                                    <div className='p-3'>
                                        <h4>{dentist.name}</h4>
                                        <p>{dentist.description}</p>
                                        <Link to='/appointment'>
                                            <button className="btn btn-primary bg-danger">Get Service</button>
                                        </Link>
                                    </div>
                                </Card>

                            </Col>
                        )
                    })
                }
            </Row>
        </div>
    );
};

export default Doctors;