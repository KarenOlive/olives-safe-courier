import React from 'react'
import { Parcels } from '../../context/ParcelContext'
import AdminOrderDetails from './AdminOrderDetails'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

import './AllOrders.css'

export default function AllOrders() {
    const {parcels} = Parcels()


    return (
        <div>
            <Navbar/>
            <h1>All Parcel Orders</h1>
            
            <div className="list-header">
                <h3>Username</h3>
                <h3>Parcel</h3>
                <h3>Status</h3>
                <h3>PresentLocation</h3>
                <h3>Destination</h3>

            </div>
            {parcels.length ? (
                <ul className="all-parcels">
                {[...parcels].map((parcel) =>( 
                            <AdminOrderDetails 
                                key={parcel._id}
                                parcel={parcel}
                                parcelId={parcel._id}
                                Username={parcel.Sender.Fullname}
                            />
                            ) 
                )}
                </ul>     
            ) : (
                <div className="empty">
                         Users haven't created any parcel orders
                </div> 
            )
        
        }
            <Footer/>
        </div>
    ) 
}
