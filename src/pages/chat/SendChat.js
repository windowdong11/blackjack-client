import { gql, useMutation } from '@apollo/client'
import React, { useState } from 'react'
import styled from 'styled-components'

const StyledForm = styled.form`
    display: flex;
    justify-content: space-between;
`

const StyledInput = styled.input`
    width: 80%;
    height: 1em;
    padding: 0.2em;
    border: solid black 3px;

    font-size: medium;
    font-weight: bold;
`

const StyledButton = styled.button`
    background-color: black;
    color: pink;
    width: 15%;
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
            switch (error.graphQLErrors[0]?.extensions.code) {
                case 401:
                    alert('다시 로그인해주세요.')
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
            <StyledButton type="submit">전송</StyledButton>
        </StyledForm>
    )
}

