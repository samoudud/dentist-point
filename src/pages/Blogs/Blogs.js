import React from 'react';
import pic1 from '../../images/news.jpg';
import pic2 from '../../images/news-2.jpg';
import pic3 from '../../images/news-3.jpg';
import pic4 from '../../images/news-4.jpg';
import { Card, Col, Row } from 'react-bootstrap';

const Blogs = () => {
    const blogs = [
        {
            name: 'Dr. Shihabur', title: 'Helping Children Deal With Teeth', description: "Start brushing your child's teeth as soon as the first tooth comes through, usually at around six months of age.Clean your baby's teeth with a soft wet cloth, or a small soft toothbrush with water. Clean all surfaces of the teeth and gums twice a day: in the morning and before bed at night.", img: pic1
        },
        {
            name: 'Dr. Emma Beckett', title: 'Do You Know the ABCs of Dental Care?', description: "Clean your dentures over a bowl of water in case you drop them. Brush your dentures before soaking them, to help remove any bits of food. Soak the dentures in a specialist cleaner for a short time and then brush the dentures again. Brush them like you would your natural teeth.", img: pic2
        },
        {
            name: 'Dr. Farhana', title: '7 Ways to Get White and Clean Teeth', description: "Combine 2 teaspoons of hydrogen peroxide with 1 teaspoon of baking soda and gently brush your teeth with the mixture.Limit the use of this homemade paste to a few times per week, as overuse can erode your tooth enamel.You can buy hydrogen peroxide online", img: pic3
        },
        {
            name: 'Dr. Tamanna', title: 'Our Definitive Guide to Germs and Cavity',
            description: "But why would your tooth develop a hole? Blame plaque. That's a sticky, slimy substance made up mostly of the germs that cause tooth decay. The bacteria in your mouth make acids and when plaque clings to your teeth, the acids can eat away at the outermost layer of the tooth, called the enamel ", img: pic4
        },
        {
            name: 'Dr. Shihabur', title: 'Helping Children Deal With Teeth', description: "Start brushing your child's teeth as soon as the first tooth comes through, usually at around six months of age.Clean your baby's teeth with a soft wet cloth, or a small soft toothbrush with water. Clean all surfaces of the teeth and gums twice a day: in the morning and before bed at night.", img: pic1
        },
        {
            name: 'Dr. Emma Beckett', title: 'Do You Know the ABCs of Dental Care?', description: "Clean your dentures over a bowl of water in case you drop them. Brush your dentures before soaking them, to help remove any bits of food. Soak the dentures in a specialist cleaner for a short time and then brush the dentures again. Brush them like you would your natural teeth.", img: pic2
        }
    ]
    return (
        <div className='form-bg'>
            <div className="container pt-5">
                <h2 className='section-title'>Health Tips  And Blogs</h2>
                <Row xs={1} md={3} className="g-4 shadow px-2 py-3">
                    {
                        blogs.map(blog => {
                            return (
                                <Col >
                                    <Card className='add text-white'>
                                        <img className='img-fluid' src={blog.img} alt="" />
                                        <div className='p-3'>
                                            <h4>{blog.title}</h4>
                                            <h6>by: {blog.name}</h6>
                                            <p>{blog.description.slice(0, 250)}</p>
                                        </div>
                                    </Card>

                                </Col>
                            )
                        })
                    }
                </Row>
            </div>
        </div>
    );
};

export default Blogs;