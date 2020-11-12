import React from 'react'
import { Link } from 'react-router-dom';
import { useAuth } from '../pages/auth/Auth';

export default function PrivateLink({ children, ...rest }) {
    const auth = useAuth()

    if (!auth.user){
        return null
    }

    return <Link {...rest}>{children}</Link>
}