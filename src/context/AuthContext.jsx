import React, {useState, useContext} from 'react'

const AuthContext = React.createContext()

export function IsAuth(){
    return useContext(AuthContext)
} 


export default function AuthProvider(props) {
    const [Auth, setAuth] = useState(false)
    const login = ()=> setAuth(true)

    function logout(){
        setAuth(false)
        sessionStorage.clear()
    }

    return (
        
            <AuthContext.Provider value={{Auth, login, logout}}>
                {props.children}
            </AuthContext.Provider>

            
    )
}
