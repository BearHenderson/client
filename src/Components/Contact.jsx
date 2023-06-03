import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

const Contact = () => {
    const navigate = useNavigate();
    return (
    <div className='container'>
        <div className='row justify-content-center'>
        <div className='col-lg-6'>
            <div className='playfair-font text-center'>
                <br/>
                <Navbar />
            <h1>Contact Us</h1>
            <h2>Email: <a href='mailto:excusememag@gmail.com'>excusememag@gmail.com</a></h2>
            <h2>Instagram: <a href='https://www.instagram.com/excusememag/'>@excusememag</a></h2>
            <h2>Twitter: <a href='https://twitter.com/magexcuse'>@magexcuse</a></h2>
            <h2>Facebook: <a href='https://www.facebook.com/excusememag/'>@excusememag</a></h2>
            <div className='row justify-content-center'>
            <img src={require("../assets/images/Wow.jpg")} alt='wow'/>
            <br/>
            <div className='col'>
            <button type='button' className='btn btn-warning' onClick={() => navigate('/')}>Home</button>
        </div>
        </div>
        <br/>
        <h6>Website design: <a href='mailto:bearhendersoncd@gmail.com/'>BearHendersonCD@gmail.com</a></h6>
    </div>
    </div>
    </div>
    </div>
);
};

export default Contact;
