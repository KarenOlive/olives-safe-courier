import React, { useState } from "react";
import Axios from 'axios'
import { useParams } from 'react-router-dom'
import { baseUrl } from "../../api/parcels";
const token = sessionStorage.getItem('token')



export default function AdminEditOrder() {
    const [location, setLocation] = useState("");
    const {parcelId} = useParams()


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
    }

    const cancelParcelOrder = ()=> {

   
        Axios.put(baseUrl+`/${parcelId}/cancel`,
            {
                headers:{
                    'auth-token': token
                }
            },
            {
                params:{
                    'parcelId': parcelId
                 }
            }).then(res =>{
                console.log(res)
            }).catch((err)=> console.log(err))
    }

    return (
        <div>
            <form>
                <div>
                    <h4>Edit Parcel Order Status</h4>
                    <button type="button" onClick={{statusHandlerInTransit}}>In-transit</button>
                    <button type="button" onClick={{statusHandlerDelivered}}>Delivered</button>
                    <button type="button" onClick={{cancelParcelOrder}} >Cancel Order</button>
                </div>
                
                <div>
                    <input type="text" placeholder="Change Present Location" required 
                        value={location} onChange={(e)=>setLocation(e.target.value)} />

                    <button type="submit" onClick={presentLocation}>
                            Change location
                    </button>
                </div>
               
            </form>
        </div>
    )
}
