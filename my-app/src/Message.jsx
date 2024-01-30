import React from 'react'
import "./style/style.css"
const Message = ({ message, setMessage }) => {
    const deleteHandler = () => {
        setMessage(message.filter(mes => mes.id !== message.id))
    }
    return (
        <div className="content">
            <h4>{message.content}</h4>
            <button onClick={deleteHandler}>Delete</button>
        </div>
    )
}

export default Message