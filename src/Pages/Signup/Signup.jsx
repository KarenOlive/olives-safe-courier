import React, {useState}from 'react'
import Axios from 'axios'

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';
import './Signup.css';



export default function Signup() {
    const [Fullname, setFullname] = useState('')
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')

            

    const handleSubmit =(e)=>{

        e.preventDefault();

        const url = `https://safe-courier-server-api.herokuapp.com/auth/signup`

        const newUser = {
            Fullname,
            Email,
            Password
        };

        Axios.post(url, newUser)
        .then((res)=> {
            console.log(res)
        }
        ).catch((err)=> console.log(err))


        setFullname('')
        setEmail('')
        setPassword('')
    }

    return (
        <div>
            <Navbar/>
                <div>
                    <h2>Signup</h2>
                    <div className="form-card">
                    <form method="POST" onSubmit={handleSubmit}>
                        <label>Full Name</label>
                        <input type="text" placeholder="Enter full name" required value={Fullname} onChange={(e)=>{setFullname(e.target.value)}}/>
                        <label>Email</label>
                        <input type="email" placeholder="Enter Email" required value={Email} onChange={(e)=>{setEmail(e.target.value)}} />
                        <label>Password</label>
                        <input type="password" required value={Password} onChange={(e)=>{setPassword(e.target.value)}} />

                      <button type="submit">Register</button>

                    </form>

                    <p>Already have an account? <Link to="/login">Login</Link></p>
                    </div>
                    
                </div>
            <Footer/>
        </div>
    )
}

