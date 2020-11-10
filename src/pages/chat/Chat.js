import React from 'react'
import ChatList from './ChatList'
import SendChat from './SendChat'

function Chat() {

    return (
        <div>
            <SendChat></SendChat>
            <ChatList></ChatList>
        </div>
    )
}

export default Chat