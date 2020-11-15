import { gql, useSubscription } from '@apollo/client'
import React, { useState } from 'react'
import styled from 'styled-components'
import SendChat from './SendChat'

import default_user_icon from '../../images/user-icon.svg'

const LISTEN_CHAT = gql`
subscription newChat {
    newChat {
        name
        content
    }
}
`

const ChatObject = styled.li`
    background-color: gainsboro;

    border-radius: 12px;

    display: flex;
    margin: 5px;
    padding: 3px 10px 10px 3px;
`

const ChatContent = styled.div`
    p {
        font-size: medium;
        padding: 0;
        margin: 0;
        border: 0;

        max-width: 100%;
        white-space: pre-line;
        word-break: break-all;
        /* text-align: ${props => props.my ? "right" : "left"}; */
    }
    .name {
        font-weight: bolder;
    }
    .content {
    }

    display: flex;
    flex-direction: column;
`

const RoundImg = styled.img`
    height: 42px;
    width: 42px;
    border-radius: 30%;
    margin-right: 14px;
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
                        return (
                            <ChatObject key={chat.key}>
                            <RoundImg src={default_user_icon}></RoundImg>
                            <ChatContent>
                                <p className="name">{chat.name}</p>
                                <p className="content">{chat.content}</p>
                            </ChatContent>
                            </ChatObject>)
                    })
                }
            </ul>
    )
}