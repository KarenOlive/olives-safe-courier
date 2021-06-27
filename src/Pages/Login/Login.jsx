import React, {useState} from 'react'
import { useHistory } from 'react-router-dom';
import Axios from 'axios'

import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';
import './Login.css';
import { IsAuth } from '../../context/AuthContext';




export default function Login() {
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    const history = useHistory()
    const { login } = IsAuth()


    const handleSubmit = (e)=>{
        e.preventDefault();

        const url = `https://safe-courier-server-api.herokuapp.com/auth/login`

        const userData = {
            Email,
            Password
        };

        Axios.post(url, userData)
        .then((res)=> {
            console.log(res)
            sessionStorage.setItem('token', res.data.token)
            login()
            if(res.data.message === "Log In successful"){
                history.push('/orders') 
            }
        }
        ).catch((err)=> console.log(err))


        setEmail('')
        setPassword('')

    }




    return (
        <div>
                <Navbar/>

                    <h2>Login</h2>
                    <div className="form-card">
                    <form method="POST" onSubmit={handleSubmit}>
                        
                        <label>Email</label>
                        <input type="email" placeholder="Enter Email" required value={Email} onChange={(e)=>{setEmail(e.target.value)}} />
                        <label>Password</label>
                        <input type="password" required value={Password} onChange={(e)=>{setPassword(e.target.value)} }/>

                        <button type="submit">Login</button>

                    </form>
                    <p>Don't have an account?   <Link to="/signup">Signup</Link></p>
                    </div>
                    
                <Footer/>
        </div>
    )
}
