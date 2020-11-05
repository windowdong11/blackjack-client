import React, { useState } from 'react'

function Chat() {
    const [id, setId] = useState('')
    const [text, setText] = useState('')
    const [key, setKey] = useState(0)
    const [chatList, setChatList] = useState([])

    const onAdd = data => {
        // TODO : chat{id, text}를 subscription을 통해 서버에서 받아오도록 변경
        setChatList([...chatList, { id, text, key}])
        setKey(key + 1)
    }
    
    return (
        <div>
            <p>ID</p>
            <input onChange={e => setId(e.target.value)} value={id}></input>
            <p>Text</p>
            <input onChange={e => setText(e.target.value)} value={text}></input>
            <button onClick={onAdd}>추가</button>
            <ul>
                {chatList.map(data => (
                    <li key={data.key}>{`${data.id} : ${data.text}`}</li>
                ))}
            </ul>
        </div>
    )
}

export default Chat