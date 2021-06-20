import React from 'react'
import {Link} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';

import image1 from '../../images/bg-3.jpg';
import Navbar from '../../components/Navbar';
import CarouselText from './CarouselText';
import Footer from '../../components/Footer';

export default function Home() {
    return (
        <div>
            <Navbar/>

            <div className="top-header">
                <p>The world’s most trusted and reliable courier company. Sign up to get started</p>

                <button type="button"><Link to="/signup" style={{textDecoration: "none", color:"#eee"}}>GET STARTED</Link></button>
            </div>

            <div className="first-section">
                <img src={image1} alt="icon"/>
                <p>Over 3000+ orders delivered across the country.</p>
            </div>
            <div id="testimonials" className="testimonials">
            <center><h3>TESTIMONIALS</h3></center>

                <CarouselText/>

            </div>
            
            <Footer/>
        </div>
    )
}
