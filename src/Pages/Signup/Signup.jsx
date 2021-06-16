import React from 'react'

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';
import './Signup.css';


export default function Signup() {
    return (
        <div>
            <Navbar/>
                <div>
                    <h2>Signup</h2>
                    <div className="form-card">
                    <form method="POST">
                        <label>Full Name</label>
                        <input type="text" placeholder="Enter full name" required />
                        <label>Email</label>
                        <input type="email" placeholder="Enter Email" required />
                        <label>Password</label>
                        <input type="password" required />

                        <button type="submit">Register</button>

                    </form>

                    <p>Already have an account? <Link to="/login">Login</Link></p>
                    </div>
                    
                </div>
            <Footer/>
        </div>
    )
}

