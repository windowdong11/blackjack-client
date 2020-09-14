import React, { useState } from 'react'
import { useMutation } from '@apollo/client'
import AuthButton from '../../components/Auth/AuthButton'
import AuthWrapper from '../../components/Auth/AuthWrapper'
import InputwithLabel from '../../components/InputwithLabel'
import { REGISTER } from '../../httprequests/mutation'

export default function SignUp(props) {
    const [id, setId] = useState('')
    const [pw, setPw] = useState('')
    
    
    const [register, { data }] = useMutation(REGISTER)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(id)
        console.log(pw)
        console.log(data)
        register({variables: { id: id, pw: pw }}).catch(error => console.log(error));
        console.log(data)
    }

    return (
        <AuthWrapper Title="Sign Up">
            <form onSubmit={handleSubmit}>
                <InputwithLabel name="id" label="ID"
                    onChange={e => setId(e.target.value)} value={id} />
                <InputwithLabel name="pw" label="PW"
                    onChange={e => setPw(e.target.value)} value={pw} />
                <AuthButton type="submit">Sign Up</AuthButton>
            </form>
        </AuthWrapper>
    )
}