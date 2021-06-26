import React from 'react'

import { Link } from 'react-router-dom'

export default function AdminOrderDetails({parcel, parcelId, Username}) {

    return (
        <>
            <li key={parcel._id} style={{display:"flex", justifyContent:"space-around", flexWrap:"wrap"}} >
                <p>{Username}</p>
                <p>{parcel.Order}</p>
                <p>{parcel.status}</p>
                <p>{parcel.presentLocation}</p>
                <p>{parcel.Destination}</p>
                <Link to={`/adminEditOrder/${parcelId}`}>Edit</Link>
               
            </li>
            <hr></hr>

        </>
    )
}
