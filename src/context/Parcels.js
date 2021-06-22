import React, { createContext } from 'react'

const parcelOrder = {RecipientsName: '', Contact: '', PickupLocation: '', Destination: '', City: '', Order: ''}
//creating context
export const ParcelContext = createContext(parcelOrder) 

//parent component
export default function Parcels(props) {
    return (
       <ParcelContext.Provider value={{Order, Destination}}>
           {props.children}
       </ParcelContext.Provider>
    )
}
