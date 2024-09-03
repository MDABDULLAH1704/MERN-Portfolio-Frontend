import React, { useState } from 'react'
import './ContactPage.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { handleSuccess, handleError } from '../utils/Utils';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ContactPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false); // loading state
    const navigate = useNavigate();

    // handleContact function
    const handleContact = async (e) => {
        e.preventDefault();
        setLoading(true);

        // Validation checks
        if (!name || !email || !message) {
            handleError('All fields are required!');
            setLoading(false);
            return;
        }

        try {
            const result = await axios.post(`https://mern-portfolio-zg94.onrender.com/contact`, { name, email, message });
            console.log(result);
            handleSuccess('Message Sent Successfully');
            setTimeout(() => {
                navigate('/');
            }, 3000);
        } catch (error) {
            console.log('Error', error);
            handleError('Failed to send message. Please try again.');
        }
    }


    return (
        <>
            <div className='contactPage'>
                <div className="contactPage-left">
                    <p>I'd love to hear from you! Whether you're looking to start a new project, collaborate on something exciting. Feel free to reach out. For project inquiries or collaborations, please provide a brief overview of your needs and I'll get back to you as soon as possible.</p>
                </div>

                <div className="contactPage-right">
                    <form onSubmit={handleContact}>
                        <div className='input'>
                            <input
                                type='text'
                                value={name}
                                name='name'
                                placeholder='Enter your name'
                                onChange={e => setName(e.target.value)}
                            />
                        </div>
                        <div className='input'>
                            <input
                                type='email'
                                value={email}
                                name='email'
                                placeholder='Enter your email'
                                onChange={e => setEmail(e.target.value)}
                            />
                        </div>
                        <div className='input'>
                            <textarea
                                type='text'
                                value={message}
                                name='message'
                                placeholder='Enter your message'
                                onChange={e => setMessage(e.target.value)}
                            />
                        </div>
                        <button type='submit'>
                            {loading ? 'Wait...' : 'Send Message'}
                        </button>
                    </form>
                </div>
            </div>
            <ToastContainer position="top-right" />
        </>
    )
}

export default ContactPage
