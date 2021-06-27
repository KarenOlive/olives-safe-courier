import React, { useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import Axios from 'axios'
import { baseUrl } from '../../api/parcels'
import Navbar from '../../components/Navbar'


export default function EditOrder() {
    const [destination, setDestination] = useState('')
    const {parcelId} = useParams()
    const token = sessionStorage.getItem('token')
    const history = useHistory()
    const config = {
        headers: {
          'auth-token': token,
        },
        
        params:{
                'parcelId': parcelId
        }
        
    };

    const newDestintion = {
        Destination : destination
    }

    const cancelOrder = ()=>{
        Axios.put(
            baseUrl+`/${parcelId}/cancel`,
            config
        ).then((res)=> {
            console.log(res)
        }).catch((err)=>console.log(err))

        history.goBack()
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        
        Axios.put(
            baseUrl+`/${parcelId}/destination`,
            newDestintion,
            config
        ).then(res=>{
            console.log(res)
        }).catch((err)=>console.log(err))

        setDestination('')
        history.goBack()
    }


    return (
        <div>
            <Navbar/>
            <h3>Edit your Order Details</h3>
            
            <button onClick={cancelOrder}>Cancel Order</button>

            <hr></hr>

            <form onSubmit={handleSubmit} style={{margin:"10px", padding:"20px"}}>
                <input type="text" placeholder="Change Parcel Destination" value={destination}  onChange={(e)=> setDestination(e.target.value)} required />
                     <button type="submit">Submit</button>
            </form>

        </div>
    )
}
