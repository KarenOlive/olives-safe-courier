import React, {useContext, useState, useEffect} from 'react'
import Axios from 'axios'
import {baseUrl} from '../api/parcels';

const ParcelContext = React.createContext()

const token = sessionStorage.getItem('token')
const parcelsurl = `https://safe-courier-rest-api.onrender.com/parcels`


export function Parcels(){
    return useContext(ParcelContext)
} 



export default function ParcelProvider(props) {
    const [parcels, setParcels] = useState([])
    
    //get all parcels - Admin only

    useEffect(()=>{
        Axios.get(baseUrl, {
            headers:{
                'auth-token': token
            }
            }).then(res =>{
                console.log(res.data.parcelOrders)
                setParcels(res.data.parcelOrders)
            }).catch((err)=> console.log(err))
    },[])      

    return (
        
            <ParcelContext.Provider value={{parcels}}>
                {props.children}
            </ParcelContext.Provider>

    )
}
