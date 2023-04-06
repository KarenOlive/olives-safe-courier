import React from 'react'
import './Contact.css';

import Navbar from '../../components/Navbar';
import  Footer  from '../../components/Footer';


export default function Contact() {
    return (
        <div>
            <Navbar/>
            <div className="contact-header">
                <h3>REACH OUT</h3>
                <p>We would love to hear from you.</p>
            </div>
            
            <h4 style={{paddingTop:"30px"}}>CONTACT US</h4>
            <h3>REQUEST A CALLBACK</h3>
            <div className="contact">
                
                <form>
                        <input type="text" placeholder="Your full name" required />
                        <input type="email" placeholder="Your Email" required />
                        <input type="text" placeholder="Your Phone number" required />
                        <input type="text" placeholder="Subject" required />
                        <textarea cols="35" rows="5" placeholder="Message"></textarea>
                        <button type="submit">Submit</button>

                </form>
                <div className="contact-info" >
                    <h3>Address</h3>
                    <address>
                    203 Fake St. Mountain View, San Francisco, California, USA
                    </address>

                   <h3>Phone</h3> 
                   <p>+1 232 3235 324</p> 

                   <h3>Email Address</h3>
                   <p>safecourier@test.com</p>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
