import React from 'react'
import { Link } from 'react-router-dom'


export default function OrderDetails({parcel, parcelId}) {

    return (
        <>
            <li key={parcel._id} style={{display:"flex", justifyContent:"space-between", flexWrap:"wrap", flexBasis:"20%", alignItems:"center"}}>
                <p>{parcel.Order}</p>
                <p>{parcel.Destination}</p>
                <p>{parcel.status}</p>
                <p>{parcel.presentLocation}</p>
                <Link to={`/editOrder/${parcelId}`}>Edit</Link>

            </li>
            <hr></hr>
        </>
    )
}
