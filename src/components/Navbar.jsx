import React from 'react'
import {Link} from 'react-router-dom';
import { Nav, NavDropdown } from 'react-bootstrap';
import { IsAuth } from '../context/AuthContext'

import './Navbar.css';

export default function Navbar() {
    const Username = sessionStorage.getItem('Username')
    const {Auth, logout} = IsAuth()

              
    


    return (
        <div>
            <nav>
                <h2 className="nav-logo">Safe Courier</h2>
                <ul className="nav-links">
                  <li><Link to="/">Home</Link></li>  
                  <li><Link to="/orders">Orders</Link></li>  
                  <li><Link to="/admin">Admin</Link></li>
                  <li><Link to="/contact">Contact</Link></li>  
                  {Auth ? 
                    <li id="nav-dropdown">
                        <Nav>
                            <NavDropdown title= {<i className="far fa-user-circle"></i>}>
                                <NavDropdown.ItemText>{Username}</NavDropdown.ItemText>
                                <NavDropdown.Divider></NavDropdown.Divider>
                                <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </li>
                    
                    : <li><Link to="/login">Login</Link></li>
                    }
                </ul>
                
            </nav>
           
        </div>
    )
}
