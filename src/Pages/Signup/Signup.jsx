import React, {useState, useContext}from 'react'

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';
import { SignUpContext } from '../../context/SignupContext';
import './Signup.css';


export default function Signup() {
    const {newUser} = useContext(SignUpContext)

    const [fullname, setFullname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const handleSubmit =(e)=>{
        e.preventDefault()

        newUser()
    }

    // const newUser = {
    //   Fullname:  userData.Fullname,
    //   Email : userData.Email,
    //   Password: userData.Password
    // }

    return (
        <div>
            <Navbar/>
                <div>
                    <h2>Signup</h2>
                    <div className="form-card">
                    <form method="POST" onSubmit={handleSubmit}>
                        <label>Full Name</label>
                        <input type="text" placeholder="Enter full name" required value={fullname} onChange={(e)=>{setFullname(e.target.value)}}/>
                        <label>Email</label>
                        <input type="email" placeholder="Enter Email" required value={email} onChange={(e)=>{setEmail(e.target.value)}} />
                        <label>Password</label>
                        <input type="password" required value={password} onChange={(e)=>{setPassword(e.target.value)}} />

                        <button type="submit">Register</button>

                    </form>

                    <p>Already have an account? <Link to="/login">Login</Link></p>
                    </div>
                    
                </div>
            <Footer/>
        </div>
    )
}

