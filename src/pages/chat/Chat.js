import { gql, useMutation, useSubscription } from '@apollo/client'
import React, { useState } from 'react'

const CHAT = gql`
mutation chat($chatContent: String) {
    chat(content: $chatContent){
        name
    }
}
`

const LISTEN_CHAT = gql`
subscription newChat {
    newChat {
        name
        content
    }
}
`

function Chat() {
    const [text, setText] = useState('')
    const [key, setKey] = useState(0)
    const [chatList, setChatList] = useState([])

    const [sendChat] = useMutation(CHAT)

    const newChat = useSubscription(LISTEN_CHAT)

    const onSend = () => {
        sendChat({ variables: { chatContent: text } })
    }

    console.log(newChat)
    if (!newChat.loading && newChat.data.content) {
        setChatList([...chatList,
        {
            text: newChat.data.content,
            name : newChat.data.name,
            key
        }])
    }

    return (
        <div>
            <p>Text</p>
            <input onChange={e => setText(e.target.value)} value={text}></input>
            <button onClick={onSend}>전송</button>
            <ul>
                {chatList.map(data => (
                    <li key={data.key}>{`${data.name} : ${data.text}`}</li>
                ))}
            </ul>
        </div>
    )
}

export default Chat