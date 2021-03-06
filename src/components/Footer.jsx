import React, {useState} from 'react'
import {Link} from 'react-router-dom';

import './Footer.css';

export default function Footer() {
    const [email, setEmail] = useState("");
    const copyrightYear = new Date().getFullYear()
    return (
        <div>
            <div className="footer-wrapper">
                <div className="footer-icons" >
                    <h3>Connect</h3>
                    <Link to="https://www.facebook.com"><i className="fab fa-facebook-square"></i></Link>
                    <Link to="https://www.twitter.com"><i className="fab fa-twitter-square"></i></Link>
                    <Link to="https://www.instagram.com"><i className="fab fa-instagram"></i></Link>
                    <Link to="mailto:safecourier@gmail.com?subject = Feedback">
                        <i className="fas fa-envelope-square"></i>
                    </Link>

                </div>
                <div className="footer-links" >
                    <h3>Links</h3>
                    <Link to="/">Home</Link>
                    <Link to="/orders">Orders</Link>
                    <Link to="/contact">Contact</Link>

                </div>

                <div className="footer-form">
                    <h3>Subscribe to our Newsletter</h3>
                    <form style={{ marginTop:"20px"}}>
                        <label>Email</label>
                        <input type="email" value={email}
                        onChange={(e) => setEmail(e.target.value)} required/>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
            <footer>
                <p>Copyright &copy; {copyrightYear} All Rights Reserved</p>
            </footer>
        </div>
    )
}
