import React, {useContext, useState, useEffect} from 'react'
import Axios from 'axios'

const ParcelContext = React.createContext()

const token = sessionStorage.getItem('token')
const parcelsurl = `https://safe-courier-server-api.herokuapp.com/parcels`


export function Parcels(){
    return useContext(ParcelContext)
} 



export default function ParcelProvider(props) {
    const [parcels, setParcels] = useState([])
    
    //get all parcels - Admin only

    useEffect(()=>{
        Axios.get(parcelsurl, {
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
