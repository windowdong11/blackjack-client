import { gql, useLazyQuery } from '@apollo/client'
import React, { useEffect, useState } from 'react'

const LOGIN = gql`
    query Login($id: String!, $pw: String!) {
        login(id: $id, pw:$pw){
            token
        }
    }
`

export default function Login() {
    const [id, setId] = useState('')
    const [pw, setPw] = useState('')
    const [login, loginResult] = useLazyQuery(LOGIN)

    useEffect(() => {
        if(loginResult.data?.login.token){
            localStorage.setItem('token', loginResult.data.token)
        }
    }, [loginResult.data])
    const onLoginButton = () => {
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
        <div>
            <h4>{login ? 'Login' : 'Sign Up'}</h4>
            <div>
                <input 
                    value={id}
                    onChange={e => setId(e.target.value)}
                    type="text"
                    placeholder="Your email address"
                />
                <input
                    value={pw}
                    onChange={e => setPw(e.target.value)}
                    type="password"
                    placeholder="Password"
                />
            </div>
            <button onClick={onLoginButton}>Login</button>
        </div>
    )
}