import React, { useState } from "react";
import Axios from 'axios'
import { useParams, useHistory } from 'react-router-dom'
import { baseUrl } from "../../api/parcels";
import Navbar from '../../components/Navbar'




export default function AdminEditOrder() {
    const [location, setLocation] = useState("");
    const {parcelId} = useParams()
    const token = sessionStorage.getItem('token')
    const history = useHistory()


    const ParcelPresentLocation = {
        presentLocation: location,
    };

    function presentLocation(e) {
        e.preventDefault();
        
        Axios.put(
            `https://safe-courier-server-api.herokuapp.com/parcels/${parcelId}/presentLocation`,
          ParcelPresentLocation,
          config
        ).then(res=>{
            console.log(res)
        }).catch((err)=>console.log(err))

        setLocation('')
        history.goBack()
    }

    const OrderDataStatusOnroute = {
        status: "In-Transit",
    };

    const OrderDataStatusDelivered = {
        status: "Delivered",
    };

    const config = {
        headers: {
          'auth-token': token,
        },
        
        params:{
                'parcelId': parcelId
        }
        
    };

    //Admin 
    function statusHandlerInTransit(e) {
        e.preventDefault();
        Axios.put(
          baseUrl + `/${parcelId}/status`,
          OrderDataStatusOnroute,
          config
        ).then(res =>{
            console.log(res)
        }).catch((err)=> console.log(err))

        history.goBack()
    }

    function statusHandlerDelivered(e) {
        e.preventDefault();
        Axios.put(
          baseUrl + `/${parcelId}/status`,
          OrderDataStatusDelivered,
          config
        ).then(res =>{
            console.log(res)
        }).catch((err)=> console.log(err))

        history.goBack()

    }

    const cancelParcelOrder = ()=> {

   
        Axios.put(baseUrl+`/${parcelId}/cancel`, 
                    config
        ).then(res =>{
                console.log(res)
        }).catch((err)=> console.log(err))

            history.goBack()

    }

    return (
        <div>
            <Navbar/>
                <h4>Edit Parcel Order Status</h4>
                <div style={{display: "flex", justifyContent:"space-around", flexWrap: "wrap"}}>
                    
                    <button type="button" onClick={statusHandlerInTransit}>In-transit</button>
                    <button type="button" onClick={statusHandlerDelivered}>Delivered</button>
                    <button type="button" onClick={cancelParcelOrder} >Cancel Order</button>
                </div>
            <form style={{margin:"10px", padding:"20px"}}>
                
                    <input type="text" placeholder="Change Present Location" required 
                        value={location} onChange={(e)=>setLocation(e.target.value)} />

                    <button type="submit" onClick={presentLocation}>
                            Change location
                    </button>
               
            </form>
        </div>
    )
}
