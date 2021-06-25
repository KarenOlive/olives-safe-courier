import React from 'react'
import { Route, useHistory } from 'react-router-dom'

export default function ProtectedRoute({ component: Component, isAuth: Auth, ...rest }) {
    const history = useHistory()
    return (
        
        <Route
            {...rest}
            render={()=>{

                    if(Auth){
                        return <Component/>
                    }
                    else{
                        return history.push('/')
                    }

            }}
           
           
           
        />
        
    )
}
