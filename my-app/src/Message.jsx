import React from 'react'
import "./style/style.css"
import Button from './Components/Button'
const Message = ({ content, message, setMessage, mesID }) => {
    const deleteHandler = () => {
        console.log(mesID);
        setMessage(message.filter(mes => mesID !== mes.id))
    }
    return (
        <div className="content">
            <h4>{content}</h4>
            <Button $primary onClick={deleteHandler}>Delete</Button>
        </div>
    )
}

export default Message