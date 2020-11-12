import React from 'react'
import { useAuth } from '../pages/auth/Auth'
import PrivateButton from './PrivateButton'

export default function LogoutButton({children}) {
    const auth = useAuth()
    return <PrivateButton onClick={()=>{
        auth.logout()
    }}>{children}</PrivateButton>
}