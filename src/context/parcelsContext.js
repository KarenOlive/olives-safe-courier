import React, { createContext, useState, useEffect } from 'react';

export const parcelsContext = createContext();
//change destination and cancel order buttons
export default function parcelsContextProvider(props) {
    const [parcel, setParcel] = useState(
        {Name: '', Contact: '', pickupLocation: '', destination: '', city: '', Order: ''}
    )

   

    return (
        <parcelsContext.Provider value={Order}>
            {props.children}
        </parcelsContext.Provider>
    )
}
