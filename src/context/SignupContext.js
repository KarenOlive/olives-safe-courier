import React, { useState, createContext } from 'react'

export const SignUpContext = createContext()

export default function SignupContextProvider(props) {
    const [userData, setUserData] = useState({
        Fullname : '',
        Email : '',
        Password :''
    })

    const newUser = (Fullname, Email, Password)=>{
        setUserData({
            Fullname:  Fullname,
            Email : Email,
            Password: Password
        })
    }
    return (
        <div></div>
        // <SignupContext.Provider>

        // </SignupContext.Provider>
        // // <SignupContext.Provider value={userData, newUser}>
        // //     {props.children}
        // // </SignupContext.Provider>
    )
}
