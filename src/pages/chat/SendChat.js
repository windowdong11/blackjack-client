import { gql, useMutation } from '@apollo/client'
import React, { useState } from 'react'

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
        <form onSubmit={onSend}>
            <p>Text</p>
            <input onChange={e => setText(e.target.value)} value={text} required></input>
            <button type="submit">전송</button>
        </form>
    )
}

