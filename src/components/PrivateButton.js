import React from 'react'
import { useAuth } from '../pages/auth/Auth'

export default function({children, ...rest}) {
    const auth = useAuth()
    if (!auth.user){
        return null
    }

    return <button {...rest}>{children}</button>
}