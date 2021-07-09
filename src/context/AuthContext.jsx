import React, {useState, useContext, useEffect} from 'react'
import Axios from 'axios'

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

    useEffect(()=>{

        const auth = `https://safe-courier-server-api.herokuapp.com/auth`
        const token = sessionStorage.getItem('token')

        Axios.get(auth, {
            headers:{
            'auth-token': token
        }}).then(res =>{
            console.log(res)
            sessionStorage.setItem('userId', res.data.userId)
            sessionStorage.setItem('Username', res.data.Fullname)
            sessionStorage.setItem('email', res.data.Email)
            
        }).catch((err)=> console.log(err))
    },[])
    
    return (
        
            <AuthContext.Provider value={{Auth, login, logout}}>
                {props.children}
            </AuthContext.Provider>

            
    )
}
