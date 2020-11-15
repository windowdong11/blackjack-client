import { gql, useSubscription } from '@apollo/client'
import React, { useState } from 'react'
import styled from 'styled-components'
import SendChat from './SendChat'

const LISTEN_CHAT = gql`
subscription newChat {
    newChat {
        name
        content
    }
}
`

const ChatLog = styled.div`
    max-width: 100%;
    max-height: 100%;

    overflow: scroll;

    ul {
        list-style: none;
    }
`


export default function ChatList(){
    const [chatList, setChatList] = useState([])
    const [key, setKey] = useState(0)
    const {loading, error, data} = useSubscription(LISTEN_CHAT, {
        onSubscriptionData: data => { 
            const {name, content} = data.subscriptionData.data.newChat
            setChatList([...chatList, {name, content, key}])
            setKey(key + 1)
        }
    })

    if (loading) {
        return <div></div>
    }
    if (error) {
        return <div>Error</div>
    }

    return (
            <ul>
                {
                    chatList.map(chat => {
                        return <li key={chat.key}>{`${chat.name} : ${chat.content}`}</li>
                    })
                }
            </ul>
    )
}