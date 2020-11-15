import { gql, useMutation } from '@apollo/client'
import React, { useState } from 'react'
import styled from 'styled-components'
import { useAuth } from '../auth/Auth'

const StyledForm = styled.form`
    display: flex;
    justify-content: space-between;
`

const StyledInput = styled.input`
    width: 80%;
    height: 1em;
    padding: 0.2em;
    border: solid black 3px;
    border-radius: 1em;

    font-size: medium;
    font-weight: bold;

    :focus {
        outline: none;
    }
`

const StyledButton = styled.button`
    background-color: black;
    color: pink;
    width: 15%;
    font-weight: bold;
    border-radius: 1em;
    opacity: 0.7;
    :hover {
        opacity: 1;
    }
    :focus {
        outline: none;
    }
`


const CHAT = gql`
mutation chat($chatContent: String) {
    chat(content: $chatContent){
        name
    }
}
`

export default function SendChat() {
    const [text, setText] = useState('')
    const auth = useAuth()

    const [sendChat] = useMutation(CHAT, {
        onError: error => {
            console.log("--------ERROR-------------")
            console.log(error)
            console.log(error.extraInfo)
            console.log(error.message)
            console.log(error.name)
            console.log(error.stack)
            console.log(error.graphQLErrors)
            console.log(error.networkError)
            console.log(error.graphQLErrors[0]?.extensions.code)
            switch (error.graphQLErrors[0]?.extensions.code) {
                case 401:
                    alert('다시 로그인해주세요.')
                    auth.logout()
                    window.location = '/login'
                    break;
                default:
                    break;
            }
        }
    })

    const onSend = e => {
        e.preventDefault()
        sendChat({ variables: { chatContent: text } })
    }

    return (
        <StyledForm onSubmit={onSend}>
            <StyledInput onChange={e => setText(e.target.value)} value={text} required></StyledInput>
            <StyledButton type="submit">Send</StyledButton>
        </StyledForm>
    )
}

