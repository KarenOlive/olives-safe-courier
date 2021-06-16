import React, {useState} from 'react'
import {Link} from 'react-router-dom';

import './Footer.css';

export default function Footer() {
    const [email, setEmail] = useState("");
    const copyrightYear = new Date().getFullYear()
    return (
        <div>
            <div className="footer-wrapper">
                <div className="footer-icons" style={{border:"2px solid blue"}}>
                    <h3>Connect</h3>
                    <Link><i className="fab fa-facebook-square"></i></Link>
                    <Link><i className="fab fa-twitter-square"></i></Link>
                    <Link><i className="fab fa-instagram"></i></Link>
                    <Link to="mailto:safecourier@gmail.com"><i className="fas fa-envelope-square"></i></Link>

                </div>
                <div className="footer-links" style={{border:"2px solid blue"}}>
                    <h3>Links</h3>
                    <Link>Home</Link>
                    <Link>Orders</Link>
                    <Link>Contact</Link>

                </div>

                <div className="footer-form" style={{border:"2px solid blue"}}>
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
