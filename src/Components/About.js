import React from 'react';
import './About.css';

const services = [
    { id: 1, name: 'Event Planning', description: 'We plan unforgettable events.' },
    { id: 2, name: 'Wedding Design', description: 'We create stunning wedding venues.' },
    { id: 3, name: 'Birthday Parties', description: 'Making birthday celebrations unique.' },
];

function About() {
    return (
        <div className="about-container">
            <h1 className="about-header">About Us</h1>
            <p className="about-text">
                Welcome to our company! We are passionate about delivering the best services to our clients.

                <p>At [Your Company Name], we are driven by the passion to create and innovate. Our mission is to provide high-quality services and solutions that make a difference. From the initial idea to the final product, we are dedicated to delivering excellence in every project we undertake.</p>
                <p>We believe in building lasting relationships with our clients by understanding their needs, sharing our expertise, and ensuring their satisfaction at every step. Our team is made up of talented professionals who are not only experts in their fields but also deeply committed to making every project a success.</p>
                Whether you're looking to design an unforgettable event, create a stunning website, or bring your creative vision to life, we are here to help you every step of the way. Together, we can create something extraordinary.</p>

            <h2>Our Services</h2>
            <ul>
                {services.map((service) => (
                    <li key={service.id} className="service-item">
                        <h3>{service.name}</h3>
                        <p>{service.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default About;
