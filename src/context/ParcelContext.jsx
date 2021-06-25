import React, {useContext} from 'react'
const ParcelContext = React.createContext()


export function Parcels(){
    return useContext(ParcelContext)
} 



export default function ParcelProvider() {
    
    
    return (
        
            <ParcelContext.Provider>

            </ParcelContext.Provider>

    )
}
