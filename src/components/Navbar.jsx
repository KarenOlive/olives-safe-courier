import React from 'react'
import {Link} from 'react-router-dom';

import './Navbar.css';

export default function Navbar() {
    return (
        <div>
            <nav>
                <h2 className="nav-logo">Safe Courier</h2>
                <ul className="nav-links">
                  <li><Link to="/">Home</Link></li>  
                  <li><Link to="/orders">Orders</Link></li>  
                  <li><Link to="/contact">Contact</Link></li>  
                  {/* <li><Link to="/"><i className="far fa-user-circle"></i></Link></li>   */}

                </ul>

            </nav>
        </div>
    )
}
