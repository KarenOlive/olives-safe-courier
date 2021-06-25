import React from 'react'
import { IsAuth } from '../../context/AuthContext'


export default function UserProfile() {
    const {logout} = IsAuth()
    return (
        <div>
            <button onClick={logout}>Logout</button>
        </div>
    )
}
