import React from 'react'
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer'
import ParcelOrderForm from '../../components/ParcelOrderForm';
import { getParcels } from '../../api/parcels';
import './Orders.css';

export default function Orders() {
    
    // const [parcel, setParcel] = useState()


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
            <div>
                <h3>Your Orders</h3>
                <p></p>
                <button onClick={getParcels}>View Parcel Orders</button>

            </div>
            <Footer/>
        </div>
    )
}