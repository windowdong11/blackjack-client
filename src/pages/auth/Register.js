import { gql, useMutation } from '@apollo/client'
import React, { useEffect, useState } from 'react'

const REGISTER = gql`
    mutation Register($name: String!, $id: String!, $pw: String!) {
        register(name: $name, id: $id, pw:$pw){
            id
            name
        }
    }
`

export default function Register() {
    const [name, setName] = useState('')
    const [id, setId] = useState('')
    const [pw, setPw] = useState('')
    const [register, registerResult] = useMutation(REGISTER)

    useEffect(() => {
        if (registerResult.data?.register) {
            window.location = '/login'
        }
    }, [registerResult])

    const onSubmit = () => {
        register({ variables: { name, id, pw } })
        setName("")
        setId("")
        setPw("")
    }

    return (
        <form onSubmit={onSubmit}>
            <h4>Register</h4>
            <div>

                <input
                    value={name}
                    onChange={e => setName(e.target.value)}
                    type='text'
                    placeholder='name'
                    required
                />
                <input
                    value={id}
                    onChange={e => setId(e.target.value)}
                    type='text'
                    placeholder='id'
                    required
                />
                <input
                    value={pw}
                    onChange={e => setPw(e.target.value)}
                    type='password'
                    placeholder='pw'
                    required
                />
                <br />
            </div>
            <button type="submit">회원가입</button>
        </form>
    )
}