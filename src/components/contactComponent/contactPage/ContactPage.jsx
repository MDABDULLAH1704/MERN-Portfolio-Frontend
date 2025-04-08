import React, { useState } from 'react'
import './ContactPage.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { handleSuccess, handleError } from '../../utils/Utils';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ContactPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false); // loading state
    const navigate = useNavigate();

    // handleContact function
    const handleContact = async (e) => {
        e.preventDefault();
        setLoading(true);

        // Validation checks
        if (!name || !email || !subject || !message) {
            handleError('All fields are required!');
            setLoading(false);
            return;
        }

        try {
            const result = await axios.post(`https://mern-portfolio-zg94.onrender.com/contact`, { name, email, subject, message });
            // const result = await axios.post(`http://localhost:3000/contact`, { name, email, subject, message });
            console.log(result);
            handleSuccess('Message Sent Successfully');
            setTimeout(() => {
                navigate('/');
            }, 3000);
        } catch (error) {
            console.log('Error', error);
            handleError('Failed to send message. Please try again.');
        } finally {
            setLoading(false); // Ensure loading state is reset
        }
    }

    return (
        <>
            <div className='contactPage'>
                <div className="contactPage-left">
                    <p>Feel free to reach out for project inquiries or collaborations! Just give me a quick overview of what you need, and I’ll get back to you ASAP. Or you can email me directly too.</p>
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
                            <input
                                type='text'
                                value={subject}
                                name='subject'
                                placeholder='Enter subject'
                                onChange={e => setSubject(e.target.value)}
                            />
                        </div>
                        <div className='input'>
                            <textarea
                                value={message}
                                name='message'
                                placeholder='Enter message'
                                onChange={e => setMessage(e.target.value)}
                            />
                        </div>
                        <button type='submit' >
                            {loading ? 'Sending...' : 'Send Message'}
                        </button>
                    </form>
                </div>
            </div>
            <ToastContainer position="top-right" />
        </>
    )
}

export default ContactPage
