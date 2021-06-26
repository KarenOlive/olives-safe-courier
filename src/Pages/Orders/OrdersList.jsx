import React, {useEffect, useState} from 'react'
import Axios from 'axios'
import OrderDetails from './OrderDetails'


export default function OrdersList() {
   

    const [parcels, setParcels] = useState([])


    useEffect(()=>{
        const userID = sessionStorage.getItem('userId')
        const getUserparcel = `https://safe-courier-server-api.herokuapp.com/users/:userId/parcels`
        const token = sessionStorage.getItem('token')

        Axios.get(getUserparcel,
            {
                headers:{
                    'auth-token': token
                }
            },
            {
                params:{
                    'userId': userID
                }
            }).then(res =>{
                console.log(res.data)
                setParcels(res.data)
            }).catch((err)=> console.log(err))
    },[])

   //checking if the parcels array has any parcels in it if so, display them
       return parcels.length ? (
        <div className="posts-list">
            <ul>
                {[...parcels].map(parcel => {
                    return ( <OrderDetails parcel={parcel} key={parcel._id} parcelId={parcel._id} /> )
                })}
            </ul>
        </div>
    ) : (
            <div className="empty">
                You haven't created any parcel orders
            </div> 
        )
    
}
