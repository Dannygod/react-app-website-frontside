import React from 'react';
import Message from './Message';
const Content = ({ message, setMessage }) => {
    return (
        <div>
            {message.map((message) => {
                return <Message message={message} setMessage={setMessage} key={message.id} />
            })}
        </div>
    )
}

export default Content;