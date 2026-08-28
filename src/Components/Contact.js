import React, { useState } from 'react';
import './Contact.css';

const ReservationForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        date: '',
        time: '',
        service: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Reservation made for ${formData.name} on ${formData.date} at ${formData.time}`);
        // Reset form
        setFormData({ name: '', email: '', date: '', time: '', service: '' });
    };

    return (
        <div className="reservation-form-container">
            <h2>Reserve Your Spot</h2>
            <form onSubmit={handleSubmit} className="reservation-form">
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        required
                    />
                </label>

                <label>
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        required
                    />
                </label>

                <label>
                    Date:
                    <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                    />
                </label>

                <label>
                    Time:
                    <input
                        type="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        required
                    />
                </label>

                <label>
                    Service:
                    <select name="service" value={formData.service} onChange={handleChange} required>
                        <option value="">Select a service</option>
                        <option value="wedding">Wedding</option>
                        <option value="birthday">Birthday Party</option>
                        <option value="corporate">Corporate Event</option>
                    </select>
                </label>

                <button type="submit">Submit</button>
            </form>
            <div className="contact-info">
                <h3>Contact Us</h3>
                <ul>
                    <li>Phone: +93 *** *** ***</li>
                    <li>Email: najmarajabi1@gmail.com</li>
                    <li>
                        Facebook: <a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer">Our Facebook Page</a>
                    </li>
                    <li>
                        Instagram: <a href="https://www.instagram.com/yourpage" target="_blank" rel="noopener noreferrer">@naj**ma</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};




export default ReservationForm;
