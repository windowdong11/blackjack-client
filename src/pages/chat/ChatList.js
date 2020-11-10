import { gql, useSubscription } from '@apollo/client'
import React, { useState } from 'react'

const LISTEN_CHAT = gql`
subscription newChat {
    newChat {
        name
        content
    }
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
        <div>
            <ul>
                {
                    chatList.map(chat => {
                        return <li key={chat.key}>{`${chat.name} : ${chat.content}`}</li>
                    })
                }
            </ul>
        </div>
    )
}