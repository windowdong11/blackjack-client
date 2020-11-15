import React from 'react'
import styled from 'styled-components'
import ChatList from './ChatList'
import SendChat from './SendChat'

const ChatWrapper = styled.div`
    width: 50%;
    min-width: 200px;
    height: 80%;
    min-height: 300px;

    border: solid 3px black;
    border-radius: 10px;

    ul {
        list-style: none;
    }
`

const ChatListWrapper = styled.div`
    border-bottom: solid 3px black;
    padding: 10px;

    width: calc(100% - 20px);
    height: 300px;
    min-width: 180px;
    min-height: 280px;
    max-height: 300px;
    overflow: scroll;
    /* width */
    ::-webkit-scrollbar {
    width: 10px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
    background: transparent;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        border-radius:5px;
        background: black;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
    background: #555;
    }

`

const SendChatWrapper = styled.div`
    padding: 10px;
`

function Chat() {

    return (
        <ChatWrapper>
        <ChatListWrapper>
            <ChatList></ChatList>
        </ChatListWrapper>
        <SendChatWrapper>
            <SendChat></SendChat>
        </SendChatWrapper>
        </ChatWrapper>
    )
}

export default Chat