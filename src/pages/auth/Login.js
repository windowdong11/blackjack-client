import { gql, useLazyQuery } from '@apollo/client'
import React, { useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { useAuth } from './Auth'

const LOGIN = gql`
    query Login($id: String!, $pw: String!) {
        login(id: $id, pw:$pw){
            token
        }
    }
`

export default function Login() {
    console.log("login")
    const [id, setId] = useState('')
    const [pw, setPw] = useState('')
    const [login, loginResult] = useLazyQuery(LOGIN)
    const auth = useAuth()
    const history = useHistory()
    const location = useLocation()
    const { from } = location.state || { from: { pathname: "/" } }

    useEffect(() => {
        if(loginResult.data?.login.token){
            localStorage.setItem('token', loginResult.data.login.token)
            auth.login()
            history.replace(from)
        }
    }, [loginResult.data])

    const onSubmit = e => {
        e.preventDefault()
        login({variables: { id, pw }})
        setId("")
        setPw("")
    }
    
    if (loginResult.loading) {
        return <div>Loading</div>;
    }

    if (loginResult.error){
        alert(loginResult.error.message)
        loginResult.error = null
    }

    return (
        <form onSubmit={onSubmit}>
            <h4>Login</h4>
            <div>
                <input 
                    value={id}
                    onChange={e => setId(e.target.value)}
                    type="text"
                    placeholder="Your email address"
                    required
                />
                <input
                    value={pw}
                    onChange={e => setPw(e.target.value)}
                    type="password"
                    placeholder="Password"
                    required
                />
            </div>
            <button type="submit">Login</button>
        </form>
    )
}