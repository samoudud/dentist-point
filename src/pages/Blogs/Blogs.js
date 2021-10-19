import React from 'react';
import { Row } from 'react-bootstrap';
import Blog from '../Blog/Blog';

const Blogs = () => {
    const blogs = [
        {
            id: 1, name: 'Dr. Shihabur', title: 'Helping Children Deal With Teeth', description: "Start brushing your child's teeth as soon as the first tooth comes through, usually at around six months of age.Clean your baby's teeth with a soft wet cloth, or a small soft toothbrush with water. Clean all surfaces of the teeth and gums twice a day: in the morning and before bed at night.", img: 'https://i.ibb.co/2yFsMSL/news.jpg'
        },
        {
            id: 2, name: 'Dr. Emma Beckett', title: 'Do You Know the ABCs of Dental Care?', description: "Clean your dentures over a bowl of water in case you drop them. Brush your dentures before soaking them, to help remove any bits of food. Soak the dentures in a specialist cleaner for a short time and then brush the dentures again. Brush them like you would your natural teeth.", img: 'https://i.ibb.co/w6qKhFs/news-2.jpg'
        },
        {
            id: 3, name: 'Dr. Farhana', title: '7 Ways to Get White and Clean Teeth', description: "Combine 2 teaspoons of hydrogen peroxide with 1 teaspoon of baking soda and gently brush your teeth with the mixture.Limit the use of this homemade paste to a few times per week, as overuse can erode your tooth enamel.You can buy hydrogen peroxide online", img: 'https://i.ibb.co/GHzhgJM/news-3.jpg'
        },
        {
            id: 4, name: 'Dr. Tamanna', title: 'Our Definitive Guide to Germs and Cavity',
            description: "But why would your tooth develop a hole? Blame plaque. That's a sticky, slimy substance made up mostly of the germs that cause tooth decay. The bacteria in your mouth make acids and when plaque clings to your teeth, the acids can eat away at the outermost layer of the tooth, called the enamel ", img: 'https://i.ibb.co/ftF28D2/news-4.jpg'
        },
        {
            id: 5, name: 'Dr. Shihabur', title: 'Helping Children Deal With Teeth', description: "Start brushing your child's teeth as soon as the first tooth comes through, usually at around six months of age.Clean your baby's teeth with a soft wet cloth, or a small soft toothbrush with water. Clean all surfaces of the teeth and gums twice a day: in the morning and before bed at night.", img: 'https://i.ibb.co/2yFsMSL/news.jpg'
        },
        {
            id: 6, name: 'Dr. Emma Beckett', title: 'Do You Know the ABCs of Dental Care?', description: "Clean your dentures over a bowl of water in case you drop them. Brush your dentures before soaking them, to help remove any bits of food. Soak the dentures in a specialist cleaner for a short time and then brush the dentures again. Brush them like you would your natural teeth.", img: 'https://i.ibb.co/w6qKhFs/news-2.jpg'
        }
    ]
    return (
        <div className='form-bg'>
            <div className="container pt-5">
                <h2 className='section-title'>Health Tips  And Blogs</h2>
                <Row xs={1} md={3} className="g-4 shadow px-2 py-3">
                    {
                        blogs.map(blog => <Blog key={blog.id} blog={blog}></Blog>)
                    }
                </Row>
            </div>
        </div>
    );
};

export default Blogs;