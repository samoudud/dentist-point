import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Blog = (props) => {
    const { img, title, name, description } = props.blog;
    return (
        <Col >
            <Card className='add text-white'>
                <img className='img-fluid' src={img} alt="" />
                <div className='p-3'>
                    <h4>{title}</h4>
                    <h6>by: {name}</h6>
                    <hr />
                    <p>{description.slice(0, 250)}</p>
                    <hr />
                    <button className='btn btn-primary bg-danger'>Read more..</button>
                </div>
            </Card>

        </Col>
    );
};

export default Blog;