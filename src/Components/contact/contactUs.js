import React from 'react';
import { useNavigate } from 'react-router-dom';

const ContactUs = () => {

    const navigate = useNavigate()

    const handleNavigation = () => {
        navigate("/about")
        // navigate(-1)
    }
    return (
        <div>
            Contact us
            <button onClick={() => handleNavigation()} className='btn btn-primary'>Go to About</button>
        </div>
    );
}

export default ContactUs;
