import React from 'react'
import "./style/style.css"
const Message = ({content, message, setMessage, mesID }) => {
    const deleteHandler = () => {
        console.log(mesID);
        setMessage(message.filter(mes => mesID !== mes.id))
    }
    return (
        <div className="content">
            <h4>{content}</h4>
            <button onClick={deleteHandler}>Delete</button>
        </div>
    )
}

export default Message