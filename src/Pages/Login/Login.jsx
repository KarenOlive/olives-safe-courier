import React, {useState} from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';
import './Login.css';
export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div>
                <Navbar/>

                    <h2>Login</h2>
                    <div className="form-card">
                    <form method="POST">
                        
                        <label>Email</label>
                        <input type="email" placeholder="Enter Email" required value={email} onChange={(e)=>{setEmail(e.target.value)}} />
                        <label>Password</label>
                        <input type="password" required value={password} onChange={(e)=>{setPassword(e.target.value)} }/>

                        <button type="submit">Login</button>

                    </form>
                    <p>Don't have an account? <Link to="/signup">Signup</Link></p>
                    </div>
                    
                <Footer/>
        </div>
    )
}
