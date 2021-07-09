import React, {useState, useEffect} from 'react'
import Axios from 'axios'

import AdminOrderDetails from './AdminOrderDetails'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { useStateValue } from '../../context/contextapi/StateProvider'
import {actionTypes} from '../../context/contextapi/reducer'

import './AllOrders.css'

export default function AllOrders() {
    const [parcels, setParcels] = useState([])
    const [{update}, dispatch] = useStateValue()

    

    useEffect(()=>{
        const token = sessionStorage.getItem('token')
        const parcelsurl = `https://safe-courier-server-api.herokuapp.com/parcels`

        Axios.get(parcelsurl, {
            headers:{
                'auth-token': token
            }
            }).then(res =>{
                console.log(res.data.parcelOrders)
                setParcels(res.data.parcelOrders)
            }).catch((err)=> console.log(err))

            return () => {
                dispatch({
                    type: actionTypes.SET_UPDATE,
                    update: false
                })
            }
                        // eslint-disable-next-line
    },[update]) 

   

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
