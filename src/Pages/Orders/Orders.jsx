import React from 'react'
import { withRouter } from 'react-router-dom';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer'
import ParcelOrderForm from '../../components/ParcelOrderForm';
import './Orders.css';
import OrdersList from './OrdersList';

function Orders() {
       
    return (
        <div>
            <Navbar/>
            <div className="order-header">
                <h2>Over 3000+ parcels delivered across the country.</h2>

            </div>
            <h3>FOR DELIVERY, PLEASE FILL OUT THE FORM BELOW</h3>
            <div className="order-wrapper">
                <ParcelOrderForm/>
            
            <div className="weight-quotes">
                <h3>WEIGHT QUOTES</h3>
                <h4>Shipping Fee Per Weight</h4>
                <p>1 kg or less - $10</p>
                <p>5kg or less - $20</p>
                <p>10kg+ - $25</p>
                <p>Liquids and fragiles - $30</p>
            </div>
            </div>
            
            <h3>Your Orders</h3>

            <div>
            <div className="listheader">
                <h5>Parcel</h5>
                <h5>Destination</h5>
                <h5>Status</h5>
                <h5>PresentLocation</h5>

            </div>
            <hr></hr>
                <OrdersList/>

            </div>
            <Footer/>
        </div>
    )
}


export default withRouter(Orders);