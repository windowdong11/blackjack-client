import React, { useEffect } from 'react'
import { gql, useApolloClient, useMutation } from '@apollo/client'
import { useAuth } from './Auth'
import { useHistory } from 'react-router-dom'

const LOGOUT = gql`
mutation LogoutMutation {
    logout
}
`

export default function Logout() {
    const [logout, logoutResult] = useMutation(LOGOUT)
    const auth = useAuth()
    const history = useHistory()
    
    useEffect(() =>{
        if (logoutResult.data?.logout){
            auth.logout()
            history.replace('/')
        }
    }, [logoutResult])

    logout()
    console.log(logoutResult)

    if(logoutResult.loading)
        return <div>Loading...</div>
    if(logoutResult.error)
        return <p>Error</p>
    return <p>Redirecting..</p>
}