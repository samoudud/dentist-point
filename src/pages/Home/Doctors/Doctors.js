import React from 'react';
import { Row } from 'react-bootstrap';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const dentists = [
        { name: 'Dr. Shihabur', role: 'Dental Surgeon', description: 'Helping patients achieve good dental health & beautiful smile is a privilege & responsibility', img: 'https://i.ibb.co/fGZjDbm/doctor1.jpg' },
        { name: 'Dr. Emma Beckett', role: 'Dentist', description: 'Helping patients achieve good dental health & beautiful smile is a privilege & responsibility', img: 'https://i.ibb.co/fvbgjGN/doctor2.jpg' },
        { name: 'Dr. Farhana', role: '', description: 'Helping patients achieve good dental health & beautiful smile is a privilege & responsibility', img: 'https://i.ibb.co/nPG0NpG/doctor3.jpg' },
        { name: 'Dr. Tamanna', role: 'Dental Surgeon', description: 'Helping patients achieve good dental health & beautiful smile is a privilege & responsibility', img: 'https://i.ibb.co/kxj4t57/doctor4.jpg' }
    ]
    return (
        <div id='doctors' className='container  my-5'>
            <h2 className='section-title'>Meet Our Doctors</h2>

            <Row xs={1} md={4} className="g-4 shadow px-2 py-3">
                {
                    dentists.map(dentist => <Doctor key={dentist.name} dentist={dentist}></Doctor>)
                }
            </Row>


        </div>
    );
};

export default Doctors;